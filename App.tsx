import React, { useState, useEffect } from 'react';
import { Language, Theme, TripPlan, Coordinates, Activity, TransitInfo, TransportMode, Hotel } from './types';
import { TRANSLATIONS, STATIC_TRIP_PLAN_EN, STATIC_TRIP_PLAN_ZH } from './constants';
import Header from './components/Header';
import MapComponent from './components/MapComponent';
import { MapPin, X, ArrowLeft, Clock, MapPinned, Lightbulb, ArrowDown, Footprints, ExternalLink, Train, Bus, Car, Plane, ChevronRight, Utensils, BedDouble, Star, Phone, Globe, Instagram, Wifi, ParkingCircle, Sparkles, Bath, UtensilsCrossed, ImageIcon, CheckCircle2, FileText, CreditCard, IdCard } from 'lucide-react';

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('dark');
  const [language, setLanguage] = useState<Language>('zh-TW'); 
  const [activeTab, setActiveTab] = useState<number>(0); 
  const [mapModal, setMapModal] = useState<{ isOpen: boolean; markers: any[]; center?: Coordinates }>({
    isOpen: false,
    markers: [],
  });
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);
  const [selectedTransit, setSelectedTransit] = useState<TransitInfo | null>(null);
  const [selectedHotel, setSelectedHotel] = useState<Hotel | null>(null);
  
  const t = TRANSLATIONS[language];
  const tripPlan: TripPlan = language === 'zh-TW' ? STATIC_TRIP_PLAN_ZH : STATIC_TRIP_PLAN_EN;

  const daysCount = tripPlan.days.length;
  const foodTabIndex = daysCount;
  const infoTabIndex = daysCount + 1;
  const carRentalTabIndex = daysCount + 2;

  // Apply theme
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const openMap = (markers: any[], center?: Coordinates, e?: React.MouseEvent) => {
    e?.stopPropagation(); // Prevent triggering parent click if inside a card
    setMapModal({ isOpen: true, markers, center });
  };

  const closeMap = () => {
    setMapModal(prev => ({ ...prev, isOpen: false }));
  };
  
  const closeDetails = () => {
    setSelectedActivity(null);
  }

  const closeTransit = () => {
    setSelectedTransit(null);
  }

  const closeHotel = () => {
    setSelectedHotel(null);
  }

  // Helper to find matching hotel for any activity at a hotel location
  const findMatchingHotel = (activity: Activity): Hotel | null => {
    const actLocation = activity.locationName.toLowerCase();

    // Match Yumoto Fujiya Hotel
    if (actLocation.includes('yumoto') || actLocation.includes('fujiya') || actLocation.includes('湯本富士屋')) {
      return tripPlan.hotels.find(h =>
        h.name.toLowerCase().includes('yumoto') ||
        h.name.includes('湯本富士屋')
      ) || null;
    }

    // Match Kinoyu Setsugetsuka
    if (actLocation.includes('setsugetsuka') || actLocation.includes('雪月花') || actLocation.includes('季之湯') || actLocation.includes('季の湯')) {
      return tripPlan.hotels.find(h =>
        h.name.toLowerCase().includes('setsugetsuka') ||
        h.name.includes('雪月花')
      ) || null;
    }

    // Match Minn Ueno
    if (actLocation.includes('minn')) {
      return tripPlan.hotels.find(h =>
        h.name.toLowerCase().includes('minn')
      ) || null;
    }

    return null;
  }

  // Helper to check if activity is a hotel check-in and get the corresponding hotel
  const getHotelForActivity = (activity: Activity): Hotel | null => {
    const isHotelCheckin = activity.activity === 'Hotel Check-in' || activity.activity === '酒店入住';
    if (!isHotelCheckin) return null;
    return findMatchingHotel(activity);
  }

  // Helper to get activity image URL - prefer hotel image for hotel-related activities
  const getActivityImageUrl = (activity: Activity): string | undefined => {
    const matchingHotel = findMatchingHotel(activity);
    if (matchingHotel?.imageUrl) {
      return matchingHotel.imageUrl;
    }
    return activity.imageUrl;
  }

  // Handle activity click - open hotel modal for check-ins, otherwise activity modal
  const handleActivityClick = (activity: Activity) => {
    const hotel = getHotelForActivity(activity);
    if (hotel) {
      setSelectedHotel(hotel);
    } else {
      setSelectedActivity(activity);
    }
  }

  // Helper to get thumbnail URL for Wikimedia images
  const getThumbnailUrl = (url: string) => {
    if (!url) return '';
    // Convert Special:FilePath URLs to Special:Redirect format for better compatibility
    if (url.includes('commons.wikimedia.org/wiki/Special:FilePath/')) {
        const filename = url.split('Special:FilePath/')[1];
        if (filename) {
            return `https://commons.wikimedia.org/wiki/Special:Redirect/file/${filename}?width=400`;
        }
    }
    // Handle direct upload.wikimedia.org URLs - add thumb sizing
    if (url.includes('upload.wikimedia.org/wikipedia/commons/') && !url.includes('/thumb/')) {
        // Already a direct URL, return as-is
        return url;
    }
    return url;
  };

  // Helper for transport icons
  const getTransportIcon = (mode: TransportMode, size: number = 20) => {
      switch (mode) {
          case 'train':
          case 'subway':
              return <Train size={size} />;
          case 'bus':
              return <Bus size={size} />;
          case 'taxi':
              return <Car size={size} />;
          case 'flight':
              return <Plane size={size} />;
          case 'walk':
          default:
              return <Footprints size={size} />;
      }
  };

  const activeDay = activeTab < daysCount ? tripPlan.days[activeTab] : null;
  // Determine which image to show: Use activity's own imageUrl for consistency
  const currentHeroImage = selectedActivity?.imageUrl;

  return (
    <div className="min-h-screen transition-colors duration-500 font-sans flex flex-col bg-[var(--hakone-bg)] text-[var(--hakone-ink)]">
      
      <Header theme={theme} setTheme={setTheme} language={language} setLanguage={setLanguage} />

      {/* Tab Navigation - Hakone Forest Style */}
      <nav className="sticky top-20 z-40 bg-[var(--hakone-bg)]/95 backdrop-blur-md border-b border-[var(--hakone-border)] select-none">
        <div className="max-w-4xl mx-auto flex overflow-x-auto snap-x">
            {tripPlan.days.map((day, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`
                  snap-start flex-none
                  w-[28vw] md:w-[22vw] lg:flex-1 lg:w-auto
                  group relative py-4 transition-all outline-none cursor-pointer
                  ${activeTab === index
                    ? 'text-[var(--hakone-forest)]'
                    : 'text-[var(--hakone-ink-light)] hover:text-[var(--hakone-ink)]'
                  }`}
              >
                <div className="flex flex-col items-center gap-1">
                   <span className={`text-[10px] uppercase tracking-[0.2em] font-medium transition-colors ${activeTab === index ? 'text-[var(--hakone-forest)]' : ''}`}>
                     {t.days} 0{index + 1}
                   </span>
                   <span className="font-serif-jp text-sm whitespace-nowrap">{day.date.split('(')[0]}</span>
                </div>
                {/* Active Indicator - Forest green top border */}
                {activeTab === index && (
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[var(--hakone-forest)] to-[var(--hakone-pine)]" />
                )}
                {/* Vertical Divider */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-6 bg-[var(--hakone-border)]" />
              </button>
            ))}

            {/* Dining Tab */}
            <button
                onClick={() => setActiveTab(foodTabIndex)}
                className={`
                  snap-start flex-none
                  w-[28vw] md:w-[22vw] lg:flex-1 lg:w-auto
                  relative py-4 transition-all outline-none cursor-pointer
                  ${activeTab === foodTabIndex
                    ? 'text-[var(--hakone-forest)]'
                    : 'text-[var(--hakone-ink-light)] hover:text-[var(--hakone-ink)]'
                  }`}
            >
               <div className="flex flex-col items-center gap-1">
                   <span className={`text-[10px] uppercase tracking-[0.2em] font-medium transition-colors ${activeTab === foodTabIndex ? 'text-[var(--hakone-forest)]' : ''}`}>
                     Dining
                   </span>
                   <span className="font-serif-jp text-sm whitespace-nowrap">{language === 'zh-TW' ? '美食' : 'Food'}</span>
                </div>
                 {activeTab === foodTabIndex && (
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[var(--hakone-forest)] to-[var(--hakone-pine)]" />
                )}
                {/* Vertical Divider */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-6 bg-[var(--hakone-border)]" />
            </button>

            {/* Stay/Info Tab */}
            <button
                onClick={() => setActiveTab(infoTabIndex)}
                className={`
                  snap-start flex-none
                  w-[28vw] md:w-[22vw] lg:flex-1 lg:w-auto
                  relative py-4 transition-all outline-none cursor-pointer
                  ${activeTab === infoTabIndex
                    ? 'text-[var(--hakone-forest)]'
                    : 'text-[var(--hakone-ink-light)] hover:text-[var(--hakone-ink)]'
                  }`}
            >
               <div className="flex flex-col items-center gap-1">
                   <span className={`text-[10px] uppercase tracking-[0.2em] font-medium transition-colors ${activeTab === infoTabIndex ? 'text-[var(--hakone-forest)]' : ''}`}>
                     Info
                   </span>
                   <span className="font-serif-jp text-sm whitespace-nowrap">{language === 'zh-TW' ? '資訊' : 'Info'}</span>
                </div>
                 {activeTab === infoTabIndex && (
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[var(--hakone-forest)] to-[var(--hakone-pine)]" />
                )}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-6 bg-[var(--hakone-border)]" />
            </button>

            {/* Car Rental Tab */}
            <button
                onClick={() => setActiveTab(carRentalTabIndex)}
                className={`
                  snap-start flex-none
                  w-[28vw] md:w-[22vw] lg:flex-1 lg:w-auto
                  relative py-4 transition-all outline-none cursor-pointer
                  ${activeTab === carRentalTabIndex
                    ? 'text-[var(--hakone-forest)]'
                    : 'text-[var(--hakone-ink-light)] hover:text-[var(--hakone-ink)]'
                  }`}
            >
               <div className="flex flex-col items-center gap-1">
                   <span className={`text-[10px] uppercase tracking-[0.2em] font-medium transition-colors ${activeTab === carRentalTabIndex ? 'text-[var(--hakone-forest)]' : ''}`}>
                     Rental
                   </span>
                   <span className="font-serif-jp text-sm whitespace-nowrap">{language === 'zh-TW' ? '租車' : 'Car'}</span>
                </div>
                 {activeTab === carRentalTabIndex && (
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[var(--hakone-forest)] to-[var(--hakone-pine)]" />
                )}
            </button>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-6 w-full flex-grow">
        <div className="animate-[fadeIn_0.5s_ease-out]">
          
          {/* DAILY ITINERARY VIEW */}
          {activeTab < daysCount && activeDay && (
            <div className="space-y-10">
              {/* Day Header - Hakone Mountain Style */}
              <header className="relative bg-[var(--hakone-bg-alt)] py-8 px-6 md:px-10 mb-8 mx-[-24px] md:mx-0 md:rounded-lg overflow-hidden border-l-4 border-[var(--hakone-forest)] hakone-mountain-bg">
                 {/* Decorative Background Number */}
                 <div className="absolute -right-4 -bottom-10 text-[140px] font-bold text-[var(--hakone-forest)]/5 select-none font-serif-jp leading-none pointer-events-none">
                    0{activeTab + 1}
                 </div>

                 {/* Steam effect decoration */}
                 <div className="absolute top-4 right-10 w-8 h-16 bg-gradient-to-t from-transparent to-[var(--hakone-steam)] rounded-full blur-sm hakone-steam opacity-40" />
                 <div className="absolute top-8 right-20 w-6 h-12 bg-gradient-to-t from-transparent to-[var(--hakone-steam)] rounded-full blur-sm hakone-steam opacity-30" style={{ animationDelay: '2s' }} />

                 <div className="relative z-10 flex flex-col items-start">
                    <div className="flex items-center gap-3 mb-3">
                         <span className="inline-block px-3 py-1.5 bg-[var(--hakone-forest)] text-white text-[10px] font-bold tracking-widest uppercase rounded-sm">
                           {t.days} 0{activeTab + 1}
                         </span>
                         <span className="text-xs font-bold tracking-widest uppercase text-[var(--hakone-ink-light)]">
                           {activeDay.date}
                         </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-serif-jp font-bold text-[var(--hakone-ink)] leading-tight">
                       {activeDay.summary}
                    </h2>
                 </div>
              </header>

              {/* Timeline Items */}
              <div className="space-y-0 border-l border-[var(--hakone-border)] ml-4 md:ml-0">
                {activeDay.activities.map((act, actIdx) => (
                  <div key={actIdx} className="relative pl-8 md:pl-12 pb-2 last:pb-0">

                     {/* Timeline Dot - Pine needle style */}
                     <div className="absolute -left-[5px] top-1.5 w-[11px] h-[11px] bg-[var(--hakone-bg)] border border-[var(--hakone-border)] rounded-full flex items-center justify-center">
                        <div className={`w-[5px] h-[5px] rounded-full ${actIdx === 0 ? 'bg-[var(--hakone-forest)]' : 'bg-[var(--hakone-border)]'}`}></div>
                     </div>

                     <div className="group flex flex-col gap-4 mb-12">

                        {/* Thumbnail Image - 16:9 Widescreen Cinematic */}
                        {(() => {
                            const activityImage = act.imageUrl;
                            return (
                              <div
                                  onClick={() => handleActivityClick(act)}
                                  className="relative w-full aspect-video bg-[var(--hakone-mist)] cursor-pointer select-none rounded-xl overflow-hidden hakone-card"
                               >
                                  {activityImage ? (
                                      <>
                                          <img
                                              src={getThumbnailUrl(activityImage)}
                                              alt={act.locationName}
                                              loading="lazy"
                                              draggable="false"
                                              className="w-full h-full object-cover"
                                          />
                                          {/* Gradient overlay for text readability */}
                                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />
                                          {/* Time badge */}
                                          <div className="absolute top-3 left-3 px-2.5 py-1 bg-[var(--hakone-forest)]/90 backdrop-blur-sm text-white text-xs font-mono font-bold tracking-wider rounded">
                                              {act.time}
                                          </div>
                                          {/* Arrow button */}
                                          <div className="absolute bottom-3 right-3 w-8 h-8 bg-[var(--hakone-forest)] rounded-full flex items-center justify-center shadow-lg z-10 text-white">
                                              <ChevronRight size={18} className="ml-0.5" />
                                          </div>
                                          {/* Activity title overlay */}
                                          <div className="absolute bottom-3 left-3 right-14">
                                              <h3 className="text-white text-lg font-bold font-serif-jp leading-tight drop-shadow-md">
                                                  {act.activity}
                                              </h3>
                                              <div className="flex items-center gap-1.5 text-white/80 text-xs mt-1">
                                                  <MapPin size={12} className="flex-shrink-0" />
                                                  <span className="truncate">{act.locationName}</span>
                                              </div>
                                          </div>
                                      </>
                                  ) : (
                                      <div className="w-full h-full flex flex-col items-center justify-center text-[var(--hakone-ink-light)] relative bg-gradient-to-br from-[var(--hakone-mist)] to-[var(--hakone-bg-alt)]">
                                          <MapPin size={32} strokeWidth={1} className="opacity-40" />
                                          <span className="text-sm mt-2 opacity-60">{act.activity}</span>
                                          {/* Time badge */}
                                          <div className="absolute top-3 left-3 px-2.5 py-1 bg-[var(--hakone-forest)] text-white text-xs font-mono font-bold tracking-wider rounded">
                                              {act.time}
                                          </div>
                                          <div className="absolute bottom-3 right-3 w-8 h-8 bg-[var(--hakone-forest)] rounded-full flex items-center justify-center shadow-md">
                                              <ChevronRight size={18} className="text-white ml-0.5" />
                                          </div>
                                      </div>
                                  )}
                              </div>
                            );
                        })()}

                        {/* Description below image */}
                        <p className="text-sm leading-relaxed text-[var(--hakone-ink-light)] line-clamp-2">
                          {act.description}
                        </p>
                     </div>

                     {/* Transit Connector - Lake Ashi style */}
                     {act.transitToNext && (
                         <div
                            onClick={() => setSelectedTransit(act.transitToNext || null)}
                            className="mb-12 cursor-pointer select-none"
                         >
                             <div className="relative border border-dashed border-[var(--hakone-lake)]/40 bg-[var(--hakone-lake)]/10 p-3 flex items-center gap-4 group rounded-lg">
                                 {/* Icon */}
                                 <div className="w-8 h-8 rounded-full bg-[var(--hakone-card)] border border-[var(--hakone-border)] flex items-center justify-center text-[var(--hakone-forest)]">
                                     {getTransportIcon(act.transitToNext.options[0].mode, 14)}
                                 </div>

                                 <div className="flex-1">
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs font-bold uppercase tracking-wider text-[var(--hakone-ink)]">
                                            Next: {act.transitToNext.destination}
                                        </span>
                                        <div className="flex items-center text-[var(--hakone-forest)]">
                                            <span className="text-[10px] font-bold mr-1">{t.transitDetails}</span>
                                            <ArrowDown size={12} className="-rotate-90" />
                                        </div>
                                    </div>
                                    <p className="text-sm font-medium mt-0.5 text-[var(--hakone-ink)]">
                                        {act.transitToNext.summary}
                                    </p>
                                 </div>
                             </div>
                         </div>
                     )}

                  </div>
                ))}
              </div>
            </div>
          )}

          {/* FOOD / DINING TAB - Hakone Ryokan Style */}
          {activeTab === foodTabIndex && (
              <section className="animate-[fadeIn_0.5s_ease-out]">
                <div className="flex items-center gap-4 mb-8 border-b border-[var(--hakone-border)] pb-4">
                   <div className="w-12 h-12 bg-gradient-to-br from-[var(--hakone-forest)] to-[var(--hakone-pine)] flex items-center justify-center text-white rounded-lg">
                      <Utensils size={22} />
                   </div>
                   <div>
                       <h3 className="text-2xl font-bold font-serif-jp text-[var(--hakone-ink)]">{t.restaurants}</h3>
                       <p className="text-sm text-[var(--hakone-ink-light)]">Curated dining experiences</p>
                   </div>
                </div>

                <div className="space-y-6">
                  {tripPlan.restaurants.map((rest, i) => (
                    <div key={i} className="group hakone-card rounded-lg overflow-hidden flex flex-col md:flex-row">

                      {/* Image Section */}
                      <div className="w-full md:w-1/3 h-48 md:h-auto relative bg-[var(--hakone-mist)] overflow-hidden">
                        {rest.imageUrl ? (
                           <img
                              src={getThumbnailUrl(rest.imageUrl)}
                              alt={rest.name}
                              loading="lazy"
                              className="w-full h-full object-cover"
                              draggable="false"
                           />
                        ) : (
                           <div className="w-full h-full flex items-center justify-center text-[var(--hakone-ink-light)]">
                             <Utensils size={32} strokeWidth={1} />
                           </div>
                        )}
                        {/* Cuisine Tag */}
                        <div className="absolute top-3 left-3 px-3 py-1.5 bg-[var(--hakone-forest)]/90 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider rounded">
                           {rest.cuisine}
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="flex-1 p-6 flex flex-col justify-between bg-[var(--hakone-card)]">
                         <div>
                            <div className="flex justify-between items-start mb-2">
                               <h4 className="font-bold text-xl text-[var(--hakone-forest)]">{rest.name}</h4>
                               {rest.priceRange && (
                                   <span className="font-mono text-sm font-bold text-[var(--hakone-ink-light)]">{rest.priceRange}</span>
                               )}
                            </div>

                            {/* Tabelog Rating - Torii Red */}
                            {rest.tabelogRating && (
                                <div className="flex items-center gap-2 mb-3">
                                   <div className="flex items-center gap-1 text-[var(--hakone-torii)]">
                                      <Star size={16} fill="currentColor" strokeWidth={0} />
                                      <span className="font-bold text-lg leading-none">{rest.tabelogRating.toFixed(2)}</span>
                                   </div>
                                   <span className="text-xs text-[var(--hakone-ink-light)] font-medium">Tabelog Score</span>
                                </div>
                            )}

                            <p className="text-sm text-[var(--hakone-ink-light)] mb-4 leading-relaxed">{rest.description}</p>
                         </div>

                         {/* Actions */}
                         <div className="flex items-center gap-3 mt-2">
                            <button
                               onClick={() => openMap([{ position: rest.coordinates, title: rest.name, description: rest.description }])}
                               className="flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider border border-[var(--hakone-border)] rounded-lg hover:border-[var(--hakone-forest)] hover:text-[var(--hakone-forest)] transition-colors"
                            >
                               <MapPinned size={14} /> {t.viewMap}
                            </button>

                            {rest.tabelogUrl && (
                                <a
                                   href={rest.tabelogUrl}
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className="flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider bg-[var(--hakone-torii)] text-white rounded-lg hover:opacity-90 transition-opacity"
                                >
                                   Tabelog <ExternalLink size={12} />
                                </a>
                            )}
                         </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
          )}

          {/* STAY & INFO TAB - Hakone Onsen Info Style */}
          {activeTab === infoTabIndex && (
            <div className="grid grid-cols-1 gap-8 animate-[fadeIn_0.5s_ease-out]">
              {/* Transport Tips Section */}
              <section className="bg-[var(--hakone-bg-alt)] p-8 border border-[var(--hakone-border)] rounded-lg hakone-torii-border relative overflow-hidden">
                {/* Decorative steam elements */}
                <div className="absolute top-6 right-8 w-6 h-12 bg-gradient-to-t from-transparent to-[var(--hakone-steam)] rounded-full blur-sm hakone-steam opacity-30" />
                <div className="absolute top-10 right-16 w-4 h-8 bg-gradient-to-t from-transparent to-[var(--hakone-steam)] rounded-full blur-sm hakone-steam opacity-20" style={{ animationDelay: '3s' }} />

                <div className="flex items-center gap-3 mb-6 relative z-10">
                   <Lightbulb className="text-[var(--hakone-gold)]" size={24} />
                   <h3 className="text-xl font-bold font-serif-jp text-[var(--hakone-ink)]">{t.tips}</h3>
                </div>
                 <ul className="space-y-4 relative z-10">
                    {tripPlan.transportTips.map((tip, i) => (
                        <li key={i} className="text-sm md:text-base text-[var(--hakone-ink-light)] flex items-start gap-4">
                            <span className="block w-2 h-2 mt-2 bg-[var(--hakone-forest)] rounded-full flex-shrink-0" />
                            <span className="leading-relaxed">{tip}</span>
                        </li>
                    ))}
                 </ul>
              </section>
            </div>
          )}

          {/* CAR RENTAL TAB - Trip.com Documents */}
          {activeTab === carRentalTabIndex && (
            <div className="space-y-6 animate-[fadeIn_0.5s_ease-out]">
              {/* Header */}
              <div className="flex items-center gap-4 mb-8 border-b border-[var(--hakone-border)] pb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--hakone-lake)] to-[var(--hakone-forest)] flex items-center justify-center text-white rounded-lg">
                  <Car size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-serif-jp text-[var(--hakone-ink)]">
                    {language === 'zh-TW' ? '租車取車文件' : 'Car Rental Documents'}
                  </h3>
                  <p className="text-sm text-[var(--hakone-ink-light)]">
                    {language === 'zh-TW' ? 'Trip.com 官方指引' : 'Official Trip.com Guidelines'}
                  </p>
                </div>
              </div>

              {/* Required Documents */}
              <section className="hakone-card rounded-lg p-6">
                <h4 className="flex items-center gap-2 text-lg font-bold mb-4 text-[var(--hakone-ink)]">
                  <FileText size={20} className="text-[var(--hakone-forest)]" />
                  {language === 'zh-TW' ? '必備文件' : 'Required Documents'}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 p-4 bg-[var(--hakone-bg-alt)] rounded-lg">
                    <div className="w-10 h-10 bg-[var(--hakone-forest)]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <FileText size={18} className="text-[var(--hakone-forest)]" />
                    </div>
                    <div>
                      <span className="font-bold text-[var(--hakone-ink)]">
                        {language === 'zh-TW' ? '租車確認單' : 'Rental Confirmation'}
                      </span>
                      <p className="text-sm text-[var(--hakone-ink-light)] mt-1">
                        {language === 'zh-TW' ? '預訂確認憑證副本' : 'Copy of your booking voucher'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-[var(--hakone-bg-alt)] rounded-lg">
                    <div className="w-10 h-10 bg-[var(--hakone-forest)]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <IdCard size={18} className="text-[var(--hakone-forest)]" />
                    </div>
                    <div>
                      <span className="font-bold text-[var(--hakone-ink)]">
                        {language === 'zh-TW' ? '有效駕駛執照' : 'Valid Driver\'s License'}
                      </span>
                      <p className="text-sm text-[var(--hakone-ink-light)] mt-1">
                        {language === 'zh-TW' ? '駕駛人士的有效年期駕駛執照（至少一年有效期）' : 'Valid driving license with at least one year validity'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-[var(--hakone-bg-alt)] rounded-lg">
                    <div className="w-10 h-10 bg-[var(--hakone-forest)]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <CreditCard size={18} className="text-[var(--hakone-forest)]" />
                    </div>
                    <div>
                      <span className="font-bold text-[var(--hakone-ink)]">
                        {language === 'zh-TW' ? '信用卡' : 'Credit Card'}
                      </span>
                      <p className="text-sm text-[var(--hakone-ink-light)] mt-1">
                        {language === 'zh-TW' ? '主駕駛人的信用卡（需有足夠信用額度作押金）' : 'Main driver\'s credit card with sufficient limit for deposit'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-[var(--hakone-bg-alt)] rounded-lg">
                    <div className="w-10 h-10 bg-[var(--hakone-forest)]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Globe size={18} className="text-[var(--hakone-forest)]" />
                    </div>
                    <div>
                      <span className="font-bold text-[var(--hakone-ink)]">
                        {language === 'zh-TW' ? '身份證明文件' : 'Photo ID'}
                      </span>
                      <p className="text-sm text-[var(--hakone-ink-light)] mt-1">
                        {language === 'zh-TW' ? '護照或國際認可身份證明文件' : 'Passport or internationally recognized ID'}
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Japan Specific Requirements */}
              <section className="hakone-card rounded-lg p-6 border-l-4 border-[var(--hakone-torii)]">
                <h4 className="flex items-center gap-2 text-lg font-bold mb-4 text-[var(--hakone-torii)]">
                  <span className="text-xl">🇯🇵</span>
                  {language === 'zh-TW' ? '日本租車特別要求' : 'Japan Rental Requirements'}
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-sm text-[var(--hakone-ink)]">
                    <CheckCircle2 size={16} className="text-[var(--hakone-forest)] mt-0.5 flex-shrink-0" />
                    <span>{language === 'zh-TW' ? '國際駕駛執照 (IDP) + 香港駕駛執照正本' : 'International Driving Permit (IDP) + Original Hong Kong License'}</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-[var(--hakone-ink)]">
                    <CheckCircle2 size={16} className="text-[var(--hakone-forest)] mt-0.5 flex-shrink-0" />
                    <span>{language === 'zh-TW' ? '部分供應商要求官方日文翻譯本' : 'Some suppliers require official Japanese translation'}</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-[var(--hakone-ink)]">
                    <CheckCircle2 size={16} className="text-[var(--hakone-forest)] mt-0.5 flex-shrink-0" />
                    <span>{language === 'zh-TW' ? '護照（用於身份驗證）' : 'Passport (for identity verification)'}</span>
                  </li>
                </ul>
              </section>

              {/* Deposit Info */}
              <section className="hakone-card rounded-lg p-6">
                <h4 className="flex items-center gap-2 text-lg font-bold mb-4 text-[var(--hakone-ink)]">
                  <CreditCard size={20} className="text-[var(--hakone-gold)]" />
                  {language === 'zh-TW' ? '押金資訊' : 'Deposit Information'}
                </h4>
                <div className="bg-[var(--hakone-gold)]/10 border border-[var(--hakone-gold)]/30 rounded-lg p-4">
                  <p className="text-sm text-[var(--hakone-ink)] leading-relaxed">
                    {language === 'zh-TW'
                      ? '取車時需提供押金。金額因租車公司而異，將在租車期間凍結於您的信用卡上。押金通常在還車後 28-45 個工作天內退還。'
                      : 'A security deposit is required at pickup. The amount varies by rental company and is frozen on your credit card during the rental period. Deposits typically refund within 28-45 business days after return.'}
                  </p>
                </div>
              </section>

              {/* Cancellation Policy */}
              <section className="hakone-card rounded-lg p-6">
                <h4 className="flex items-center gap-2 text-lg font-bold mb-4 text-[var(--hakone-ink)]">
                  <Lightbulb size={20} className="text-[var(--hakone-lake)]" />
                  {language === 'zh-TW' ? '取消政策' : 'Cancellation Policy'}
                </h4>
                <p className="text-sm text-[var(--hakone-ink-light)] leading-relaxed">
                  {language === 'zh-TW'
                    ? '大部分情況下，取消訂單不會收取額外費用。部分供應商提供有限的免費取消時段。退款通常在 7-30 個工作天內處理。'
                    : 'Most cancellations incur no additional fees. Some suppliers offer limited free cancellation windows. Refunds process within 7-30 business days.'}
                </p>
              </section>

              {/* Trip.com Link */}
              <div className="flex justify-center pt-4">
                <a
                  href="https://hk.trip.com/carhire/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-[var(--hakone-forest)] text-white font-bold uppercase tracking-wider rounded-lg hover:bg-[var(--hakone-pine)] transition-colors"
                >
                  <Car size={18} />
                  {language === 'zh-TW' ? '前往 Trip.com 租車' : 'Visit Trip.com Car Rental'}
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Map Modal - Hakone Lake View Style */}
      {mapModal.isOpen && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]">
          <div className="relative w-full max-w-5xl h-[85vh] bg-[var(--hakone-bg)] shadow-2xl flex flex-col border border-[var(--hakone-border)] rounded-lg overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-[var(--hakone-bg)] border-b border-[var(--hakone-border)] z-10">
                <h3 className="font-bold text-lg font-serif-jp tracking-widest uppercase text-[var(--hakone-ink)]">{t.viewMap}</h3>
                <div className="flex items-center gap-4">
                   <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapModal.markers.length > 0 ? mapModal.markers[0].title : 'Hakone')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider border border-[var(--hakone-forest)] text-[var(--hakone-forest)] hover:bg-[var(--hakone-forest)] hover:text-white transition-colors rounded-lg"
                   >
                      <span>Google Map</span>
                      <ExternalLink size={12} />
                   </a>

                   <button
                      onClick={closeMap}
                      className="p-2 hover:bg-[var(--hakone-mist)] transition-colors rounded-full"
                    >
                      <X size={20} />
                   </button>
                </div>
            </div>
            {/* Map Container */}
            <div className="flex-grow relative bg-[var(--hakone-mist)]">
               <MapComponent
                  markers={mapModal.markers}
                  center={mapModal.center}
                  theme={theme}
               />
            </div>
          </div>
        </div>
      )}

      {/* Activity Details Modal - Hakone Nature Style */}
      {selectedActivity && (
        <div className="fixed inset-0 z-50 flex flex-col bg-[var(--hakone-bg)] animate-[slideUp_0.3s_ease-out] overflow-y-auto">

             {/* Hero Image Section */}
             <div className="relative h-[40vh] w-full flex-shrink-0 bg-[var(--hakone-forest)]">
                 {currentHeroImage ? (
                     <img
                        src={currentHeroImage}
                        alt={selectedActivity.locationName}
                        className="w-full h-full object-cover opacity-90"
                        draggable="false"
                     />
                 ) : (
                     <div className="w-full h-full flex items-center justify-center text-white/20">
                         <span className="text-6xl font-serif-jp">箱根</span>
                     </div>
                 )}
                 <button
                    onClick={closeDetails}
                    className="absolute top-6 left-6 z-10 p-3 bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-colors rounded-full"
                 >
                    <ArrowLeft size={24} />
                 </button>
                 <div className="absolute inset-0 bg-gradient-to-t from-[var(--hakone-bg)] to-transparent pointer-events-none" />

                 <div className="absolute bottom-6 left-6 right-6">
                     <span className="inline-block px-3 py-1.5 bg-[var(--hakone-forest)] text-white text-xs font-bold tracking-widest uppercase mb-3 rounded">
                         {selectedActivity.category}
                     </span>
                     <h1 className="text-3xl md:text-5xl font-bold font-serif-jp text-[var(--hakone-ink)] leading-tight">
                         {selectedActivity.locationName}
                     </h1>
                 </div>
             </div>

             {/* Content Section */}
             <div className="flex-grow max-w-3xl mx-auto w-full px-6 py-10 space-y-10 pb-20">

                 {/* Main Description */}
                 <div className="prose max-w-none">
                     <p className="text-lg md:text-xl leading-relaxed text-[var(--hakone-ink)] font-medium">
                         {selectedActivity.extendedDescription || selectedActivity.description}
                     </p>
                 </div>

                 {/* Practical Info Grid */}
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-[var(--hakone-border)]">
                     <div className="space-y-1">
                         <div className="flex items-center gap-2 text-[var(--hakone-forest)] font-bold text-xs uppercase tracking-widest mb-1">
                             <Clock size={14} /> {t.hours}
                         </div>
                         <p className="text-[var(--hakone-ink-light)]">
                             {selectedActivity.openingHours || "N/A"}
                         </p>
                     </div>
                     <div className="space-y-1">
                         <div className="flex items-center gap-2 text-[var(--hakone-forest)] font-bold text-xs uppercase tracking-widest mb-1">
                             <MapPin size={14} /> {t.address}
                         </div>
                         <p className="text-[var(--hakone-ink-light)]">
                             {selectedActivity.address || "N/A"}
                         </p>
                     </div>
                 </div>

                 {/* Tips Section */}
                 {selectedActivity.tips && (
                     <div className="bg-[var(--hakone-bg-alt)] p-6 border-l-4 border-[var(--hakone-gold)] rounded-r-lg">
                         <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-[var(--hakone-ink)]">
                             <Lightbulb size={18} className="text-[var(--hakone-gold)]" />
                             {t.tips}
                         </h3>
                         <ul className="space-y-2">
                             {selectedActivity.tips.map((tip, idx) => (
                                 <li key={idx} className="flex items-start gap-3 text-sm text-[var(--hakone-ink-light)]">
                                     <span className="block w-1.5 h-1.5 mt-1.5 bg-[var(--hakone-forest)] rounded-full flex-shrink-0" />
                                     {tip}
                                 </li>
                             ))}
                         </ul>
                     </div>
                 )}

                 {/* Map Preview */}
                 <div className="h-64 w-full bg-[var(--hakone-mist)] relative group rounded-lg overflow-hidden border border-[var(--hakone-border)]">
                     <div className="w-full h-full cursor-pointer"
                          onClick={() => openMap([{ position: selectedActivity.coordinates, title: selectedActivity.locationName, description: selectedActivity.description }])}>
                         <MapComponent
                             markers={[{ position: selectedActivity.coordinates, title: selectedActivity.locationName }]}
                             theme={theme}
                             zoom={15}
                         />
                     </div>
                     {/* Map Buttons */}
                     <div className="absolute bottom-4 right-4 flex items-center gap-2">
                         <a
                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(selectedActivity.locationName)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="bg-[var(--hakone-card)] px-3 py-2 text-xs font-bold uppercase tracking-wider shadow-lg flex items-center gap-2 hover:bg-[var(--hakone-forest)] hover:text-white transition-colors rounded-lg border border-[var(--hakone-border)]"
                         >
                            <MapPin size={12} /> Google Map
                         </a>
                         <div
                            className="bg-[var(--hakone-card)] px-3 py-2 text-xs font-bold uppercase tracking-wider shadow-lg flex items-center gap-2 cursor-pointer hover:bg-[var(--hakone-forest)] hover:text-white transition-colors rounded-lg border border-[var(--hakone-border)]"
                            onClick={() => openMap([{ position: selectedActivity.coordinates, title: selectedActivity.locationName, description: selectedActivity.description }])}
                         >
                            <ExternalLink size={12} /> {t.viewMap}
                         </div>
                     </div>
                 </div>

             </div>
        </div>
      )}

      {/* Transit Details Modal - Hakone Transport Style */}
      {selectedTransit && (
        <div className="fixed inset-0 z-[60] flex items-end md:items-center justify-center bg-black/50 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]" onClick={closeTransit}>
             <div className="w-full md:max-w-md bg-[var(--hakone-bg)] md:rounded-lg shadow-2xl overflow-hidden flex flex-col max-h-[80vh]" onClick={e => e.stopPropagation()}>
                 <div className="p-4 border-b border-[var(--hakone-border)] flex items-center justify-between bg-[var(--hakone-bg-alt)]">
                     <h3 className="font-bold text-lg text-[var(--hakone-ink)]">{t.transitDetails}</h3>
                     <button onClick={closeTransit} className="p-1 hover:bg-[var(--hakone-mist)] rounded-full transition-colors">
                         <X size={20} />
                     </button>
                 </div>

                 <div className="p-6 overflow-y-auto">
                     <div className="mb-6">
                         <div className="text-xs font-bold uppercase tracking-wider text-[var(--hakone-ink-light)] mb-1">Destination</div>
                         <div className="text-2xl font-serif-jp font-bold text-[var(--hakone-forest)]">{selectedTransit.destination}</div>
                     </div>

                     <div className="space-y-4">
                         <div className="text-xs font-bold uppercase tracking-wider text-[var(--hakone-ink-light)] border-b border-[var(--hakone-border)] pb-2">{t.transitOptions}</div>

                         {selectedTransit.options.map((opt, i) => (
                             <div key={i} className="flex flex-col gap-3 p-4 hakone-card rounded-lg group">
                                 <div className="flex gap-4">
                                    <div className="mt-1">
                                        <div className="w-10 h-10 rounded-full bg-[var(--hakone-forest)]/10 flex items-center justify-center text-[var(--hakone-forest)]">
                                            {getTransportIcon(opt.mode, 20)}
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start mb-1">
                                            <span className="font-bold text-base text-[var(--hakone-ink)]">{opt.name}</span>
                                            {opt.cost && <span className="text-sm font-mono bg-[var(--hakone-mist)] px-2 py-0.5 rounded">{opt.cost}</span>}
                                        </div>
                                        <div className="text-xs font-bold text-[var(--hakone-ink-light)] mb-2 flex items-center gap-1">
                                            <Clock size={10} /> {opt.duration}
                                        </div>
                                        <p className="text-sm text-[var(--hakone-ink-light)] leading-snug">
                                            {opt.instructions}
                                        </p>
                                    </div>
                                 </div>

                                 {(opt.imageUrl || opt.officialUrl) && (
                                     <div className="mt-2 pl-[3.5rem] space-y-3">
                                        {opt.imageUrl && (
                                            <div className="w-full h-32 rounded-lg overflow-hidden bg-[var(--hakone-mist)] relative">
                                                <img
                                                    src={getThumbnailUrl(opt.imageUrl)}
                                                    alt={opt.name}
                                                    loading="lazy"
                                                    className="w-full h-full object-cover"
                                                    draggable="false"
                                                />
                                            </div>
                                        )}
                                        {opt.officialUrl && (
                                            <a
                                                href={opt.officialUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--hakone-forest)] hover:underline"
                                            >
                                                Official Website <ExternalLink size={10} />
                                            </a>
                                        )}
                                     </div>
                                 )}
                             </div>
                         ))}
                     </div>
                 </div>
             </div>
        </div>
      )}

      {/* Hotel Details Modal - Hakone Ryokan Style */}
      {selectedHotel && (
        <div className="fixed inset-0 z-50 flex flex-col bg-[var(--hakone-bg)] animate-[slideUp_0.3s_ease-out] overflow-y-auto">

             {/* Hero Image Section */}
             <div className="relative h-[35vh] w-full flex-shrink-0 bg-[var(--hakone-forest)]">
                 {selectedHotel.imageUrl ? (
                     <img
                        src={selectedHotel.imageUrl}
                        alt={selectedHotel.name}
                        className="w-full h-full object-cover opacity-90"
                        draggable="false"
                     />
                 ) : (
                     <div className="w-full h-full flex items-center justify-center text-white/20">
                         <span className="text-6xl font-serif-jp">温泉</span>
                     </div>
                 )}
                 <button
                    onClick={closeHotel}
                    className="absolute top-6 left-6 z-10 p-3 bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-colors rounded-full"
                 >
                    <ArrowLeft size={24} />
                 </button>
                 <div className="absolute inset-0 bg-gradient-to-t from-[var(--hakone-bg)] to-transparent pointer-events-none" />

                 <div className="absolute bottom-6 left-6 right-6">
                     <span className="inline-block px-3 py-1.5 bg-[var(--hakone-gold)] text-white text-xs font-bold tracking-widest uppercase mb-3 rounded">
                         {selectedHotel.priceRange} • {selectedHotel.rating}★
                     </span>
                     <h1 className="text-3xl md:text-4xl font-bold font-serif-jp text-[var(--hakone-ink)] leading-tight">
                         {selectedHotel.name}
                     </h1>
                     {selectedHotel.nameJapanese && (
                       <p className="text-lg text-[var(--hakone-ink-light)] mt-1">{selectedHotel.nameJapanese}</p>
                     )}
                 </div>
             </div>

             {/* Content */}
             <div className="flex-grow p-6 md:p-10 max-w-4xl mx-auto w-full space-y-8">

                 {/* Quick Actions */}
                 <div className="flex flex-wrap gap-3">
                     {selectedHotel.officialWebsite && (
                       <a href={selectedHotel.officialWebsite} target="_blank" rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-[var(--hakone-forest)] text-white text-sm font-bold uppercase tracking-wider hover:bg-[var(--hakone-pine)] transition-colors rounded-lg">
                         <Globe size={16} /> Official Website
                       </a>
                     )}
                     {selectedHotel.bookingUrl && (
                       <a href={selectedHotel.bookingUrl} target="_blank" rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 border border-[var(--hakone-forest)] text-[var(--hakone-forest)] text-sm font-bold uppercase tracking-wider hover:bg-[var(--hakone-forest)] hover:text-white transition-colors rounded-lg">
                         <BedDouble size={16} /> Book Now
                       </a>
                     )}
                     {selectedHotel.instagramUrl && (
                       <a href={selectedHotel.instagramUrl} target="_blank" rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 border border-[var(--hakone-border)] text-[var(--hakone-ink-light)] text-sm font-bold uppercase tracking-wider hover:border-pink-500 hover:text-pink-500 transition-colors rounded-lg">
                         <Instagram size={16} /> Instagram
                       </a>
                     )}
                 </div>

                 {/* Description */}
                 <p className="text-lg leading-relaxed text-[var(--hakone-ink)]">
                     {selectedHotel.description}
                 </p>

                 {/* Basic Info */}
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 bg-[var(--hakone-bg-alt)] border border-[var(--hakone-border)] rounded-lg">
                     {selectedHotel.address && (
                       <div className="flex items-start gap-3">
                         <MapPin size={18} className="text-[var(--hakone-torii)] mt-0.5 flex-shrink-0" />
                         <div>
                           <span className="text-xs font-bold uppercase tracking-wider text-[var(--hakone-ink-light)]">{t.address}</span>
                           <p className="text-sm text-[var(--hakone-ink)]">{selectedHotel.address}</p>
                         </div>
                       </div>
                     )}
                     {selectedHotel.phone && (
                       <div className="flex items-start gap-3">
                         <Phone size={18} className="text-[var(--hakone-forest)] mt-0.5 flex-shrink-0" />
                         <div>
                           <span className="text-xs font-bold uppercase tracking-wider text-[var(--hakone-ink-light)]">Phone</span>
                           <p className="text-sm text-[var(--hakone-ink)]">{selectedHotel.phone}</p>
                         </div>
                       </div>
                     )}
                     {selectedHotel.checkIn && (
                       <div className="flex items-start gap-3">
                         <Clock size={18} className="text-[var(--hakone-forest)] mt-0.5 flex-shrink-0" />
                         <div>
                           <span className="text-xs font-bold uppercase tracking-wider text-[var(--hakone-ink-light)]">Check-in</span>
                           <p className="text-sm text-[var(--hakone-ink)]">{selectedHotel.checkIn}</p>
                         </div>
                       </div>
                     )}
                     {selectedHotel.checkOut && (
                       <div className="flex items-start gap-3">
                         <Clock size={18} className="text-[var(--hakone-forest)] mt-0.5 flex-shrink-0" />
                         <div>
                           <span className="text-xs font-bold uppercase tracking-wider text-[var(--hakone-ink-light)]">Check-out</span>
                           <p className="text-sm text-[var(--hakone-ink)]">{selectedHotel.checkOut}</p>
                         </div>
                       </div>
                     )}
                 </div>

                 {/* Highlights */}
                 {selectedHotel.highlights && selectedHotel.highlights.length > 0 && (
                   <div>
                     <h3 className="flex items-center gap-2 text-lg font-bold mb-4 text-[var(--hakone-ink)]">
                       <Sparkles size={20} className="text-[var(--hakone-gold)]" />
                       Highlights
                     </h3>
                     <ul className="space-y-2">
                       {selectedHotel.highlights.map((highlight, idx) => (
                         <li key={idx} className="flex items-start gap-3 text-sm text-[var(--hakone-ink-light)]">
                           <CheckCircle2 size={16} className="text-[var(--hakone-forest)] mt-0.5 flex-shrink-0" />
                           {highlight}
                         </li>
                       ))}
                     </ul>
                   </div>
                 )}

                 {/* Onsen Info (for ryokan) - Hakone themed */}
                 {selectedHotel.onsenInfo && (
                   <div className="p-5 bg-[var(--hakone-lake)]/10 border border-[var(--hakone-lake)]/30 rounded-lg relative overflow-hidden">
                     {/* Steam decorations */}
                     <div className="absolute top-2 right-6 w-4 h-10 bg-gradient-to-t from-transparent to-white/20 rounded-full blur-sm hakone-steam opacity-50" />
                     <div className="absolute top-4 right-12 w-3 h-8 bg-gradient-to-t from-transparent to-white/15 rounded-full blur-sm hakone-steam opacity-40" style={{ animationDelay: '2s' }} />

                     <h3 className="flex items-center gap-2 text-lg font-bold mb-3 text-[var(--hakone-lake)]">
                       <Bath size={20} />
                       Onsen (温泉)
                     </h3>
                     <p className="text-sm text-[var(--hakone-ink)] mb-3">{selectedHotel.onsenInfo.description}</p>
                     <div className="flex flex-wrap gap-2 mb-3">
                       {selectedHotel.onsenInfo.types.map((type, idx) => (
                         <span key={idx} className="text-xs px-3 py-1 bg-[var(--hakone-lake)]/20 text-[var(--hakone-lake)] rounded-full">
                           {type}
                         </span>
                       ))}
                     </div>
                     <div className="grid grid-cols-2 gap-4 text-sm">
                       {selectedHotel.onsenInfo.hours && (
                         <div>
                           <span className="text-xs font-bold uppercase tracking-wider text-[var(--hakone-lake)]">{t.hours}</span>
                           <p className="text-[var(--hakone-ink)]">{selectedHotel.onsenInfo.hours}</p>
                         </div>
                       )}
                       {selectedHotel.onsenInfo.privateBathPrice && (
                         <div>
                           <span className="text-xs font-bold uppercase tracking-wider text-[var(--hakone-lake)]">Private Bath</span>
                           <p className="text-[var(--hakone-ink)]">{selectedHotel.onsenInfo.privateBathPrice}</p>
                         </div>
                       )}
                     </div>
                   </div>
                 )}

                 {/* Facilities */}
                 {selectedHotel.facilities && selectedHotel.facilities.length > 0 && (
                   <div>
                     <h3 className="flex items-center gap-2 text-lg font-bold mb-4 text-[var(--hakone-ink)]">
                       <Wifi size={20} className="text-[var(--hakone-forest)]" />
                       Facilities & Amenities
                     </h3>
                     <div className="flex flex-wrap gap-2">
                       {selectedHotel.facilities.map((facility, idx) => (
                         <span key={idx} className="text-xs px-3 py-1.5 bg-[var(--hakone-mist)] text-[var(--hakone-ink)] rounded-full border border-[var(--hakone-border)]">
                           {facility}
                         </span>
                       ))}
                     </div>
                   </div>
                 )}

                 {/* Room Types */}
                 {selectedHotel.roomTypes && selectedHotel.roomTypes.length > 0 && (
                   <div>
                     <h3 className="flex items-center gap-2 text-lg font-bold mb-4 text-[var(--hakone-ink)]">
                       <BedDouble size={20} className="text-[var(--hakone-forest)]" />
                       Room Types
                     </h3>
                     <ul className="space-y-2">
                       {selectedHotel.roomTypes.map((room, idx) => (
                         <li key={idx} className="flex items-center gap-3 text-sm text-[var(--hakone-ink)] p-3 bg-[var(--hakone-bg-alt)] border-l-3 border-[var(--hakone-torii)] rounded-r-lg">
                           {room}
                         </li>
                       ))}
                     </ul>
                   </div>
                 )}

                 {/* On-site Restaurants */}
                 {selectedHotel.restaurants && selectedHotel.restaurants.length > 0 && (
                   <div>
                     <h3 className="flex items-center gap-2 text-lg font-bold mb-4 text-[var(--hakone-ink)]">
                       <UtensilsCrossed size={20} className="text-[var(--hakone-forest)]" />
                       On-site Dining
                     </h3>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                       {selectedHotel.restaurants.map((rest, idx) => (
                         <div key={idx} className="p-4 hakone-card rounded-lg">
                           <div className="flex justify-between items-start mb-1">
                             <span className="font-bold text-sm text-[var(--hakone-ink)]">{rest.name}</span>
                             <span className="text-xs px-2 py-0.5 bg-[var(--hakone-forest)] text-white rounded">
                               {rest.cuisine}
                             </span>
                           </div>
                           <p className="text-xs text-[var(--hakone-ink-light)]">{rest.description}</p>
                         </div>
                       ))}
                     </div>
                   </div>
                 )}

                 {/* Photo Gallery */}
                 {selectedHotel.images && selectedHotel.images.length > 0 && (
                   <div>
                     <h3 className="flex items-center gap-2 text-lg font-bold mb-4 text-[var(--hakone-ink)]">
                       <ImageIcon size={20} className="text-[var(--hakone-forest)]" />
                       Photos
                     </h3>
                     <div className="grid grid-cols-3 gap-2">
                       {selectedHotel.images.map((img, idx) => (
                         <div key={idx} className="aspect-video overflow-hidden bg-[var(--hakone-mist)] rounded-lg">
                           <img src={img} alt={`${selectedHotel.name} ${idx + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                         </div>
                       ))}
                     </div>
                   </div>
                 )}

                 {/* Map Preview */}
                 <div className="h-64 w-full bg-[var(--hakone-mist)] relative group rounded-lg overflow-hidden border border-[var(--hakone-border)]">
                     <div className="w-full h-full cursor-pointer"
                          onClick={() => openMap([{ position: selectedHotel.coordinates, title: selectedHotel.name, description: selectedHotel.description }])}>
                         <MapComponent
                             markers={[{ position: selectedHotel.coordinates, title: selectedHotel.name }]}
                             theme={theme}
                             zoom={15}
                         />
                     </div>
                     <div className="absolute bottom-4 right-4 flex items-center gap-2">
                         <a
                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(selectedHotel.name)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="bg-[var(--hakone-card)] px-3 py-2 text-xs font-bold uppercase tracking-wider shadow-lg flex items-center gap-2 hover:bg-[var(--hakone-forest)] hover:text-white transition-colors rounded-lg border border-[var(--hakone-border)]"
                         >
                            <MapPin size={12} /> Google Map
                         </a>
                         <div
                            className="bg-[var(--hakone-card)] px-3 py-2 text-xs font-bold uppercase tracking-wider shadow-lg flex items-center gap-2 cursor-pointer hover:bg-[var(--hakone-forest)] hover:text-white transition-colors rounded-lg border border-[var(--hakone-border)]"
                            onClick={() => openMap([{ position: selectedHotel.coordinates, title: selectedHotel.name, description: selectedHotel.description }])}
                         >
                            <ExternalLink size={12} /> {t.viewMap}
                         </div>
                     </div>
                 </div>

             </div>
        </div>
      )}

    </div>
  );
};

export default App;