import { Translations, TripPlan } from './types';

export const TRANSLATIONS: Record<string, Translations> = {
  en: {
    title: "Tokyo Journey 2026",
    subtitle: "January 22 - January 26",
    generateBtn: "Generate Itinerary",
    generating: "Planning your journey...",
    hotels: "Accommodations",
    restaurants: "Dining",
    itinerary: "Itinerary",
    transport: "Transport",
    viewMap: "View Map",
    closeMap: "Close Map",
    darkMode: "Dark",
    lightMode: "Light",
    days: "Day",
    readMore: "Read Details",
    address: "Address",
    hours: "Opening Hours",
    tips: "Traveler Tips",
    back: "Back",
    transitDetails: "Transit Details",
    transitOptions: "Available Options",
  },
  'zh-TW': {
    title: "東京之旅 2026",
    subtitle: "1月22日 - 1月26日",
    generateBtn: "生成行程",
    generating: "正在規劃您的旅程...",
    hotels: "住宿推薦",
    restaurants: "精選美食",
    itinerary: "每日行程",
    transport: "交通資訊",
    viewMap: "查看地圖",
    closeMap: "關閉地圖",
    darkMode: "深色",
    lightMode: "淺色",
    days: "第",
    readMore: "查看詳情",
    address: "地址",
    hours: "營業時間",
    tips: "旅遊貼士",
    back: "返回",
    transitDetails: "交通詳情",
    transitOptions: "可選方案",
  }
};

export const DEFAULT_COORDS = { lat: 35.6762, lng: 139.6503 };

export const STATIC_TRIP_PLAN_EN: TripPlan = {
  tripName: "Tokyo Journey 2026",
  transportTips: [
    "Purchase a Suica or Pasmo IC card immediately upon arrival at the airport for seamless travel on trains and buses.",
    "The 72-hour Tokyo Subway Ticket is highly recommended for this itinerary as it covers all metro lines.",
    "Download the 'Japan Travel by NAVITIME' app for accurate train schedules and platform information."
  ],
  hotels: [
    {
      name: "Yumoto Fujiya Hotel",
      nameJapanese: "湯本富士屋ホテル",
      description: "Classic Japanese hot spring hotel in Hakone-Yumoto with indoor/outdoor onsen and breakfast included. Jan 22-23, 1 night.",
      priceRange: "$$",
      rating: "4.3",
      coordinates: { lat: 35.2324, lng: 139.1051 },
      address: "256-1 Yumoto, Hakone-machi, Ashigarashimo-gun, Kanagawa 250-0392",
      phone: "+81-460-85-6111",
      checkIn: "15:00",
      checkOut: "11:00",
      officialWebsite: "https://fhr.yumotofujiya.jp/",
      bookingUrl: "https://www.booking.com/hotel/jp/yumoto-fujiya.html",
      instagramUrl: "https://www.instagram.com/yumoto_fujiyahotel/",
      facilities: [
        "Free Wi-Fi",
        "Free Parking",
        "Luggage Storage",
        "24-hour Front Desk",
        "Gallery",
        "Karaoke",
        "Train View Rooms",
        "Credit Cards Accepted"
      ],
      highlights: [
        "3-minute walk from Hakone-Yumoto Station",
        "Part of historic Fujiya Hotel Group (visited by John Lennon & Charlie Chaplin)",
        "270 liters/min natural hot spring water from 5 sources",
        "13 types of hot spring experiences"
      ],
      roomTypes: [
        "Japanese-style Rooms",
        "Western-style Twin Rooms",
        "Japanese-Western Combination Rooms",
        "Deluxe Twin with Private Onsen",
        "Family Rooms"
      ],
      onsenInfo: {
        description: "Natural hot spring water flows from 5 sources at 270 liters per minute. Enjoy 13 types of bathing experiences including a panoramic large bath with waterfall view.",
        types: ["Large Indoor Bath", "Outdoor Bath (Rotenburo)", "Private Bath"],
        hours: "Public bath: varies by gender rotation. Private bath: 15:00-22:00",
        privateBathPrice: "¥2,000-3,000 for 45 minutes"
      },
      restaurants: [
        { name: "Japanese Kaiseki Restaurant", cuisine: "Kaiseki", description: "Traditional multi-course Japanese haute cuisine" },
        { name: "Sushi Restaurant", cuisine: "Sushi", description: "Fresh sushi and sashimi selections" },
        { name: "French Restaurant", cuisine: "French", description: "Western fine dining experience" },
        { name: "Chinese Restaurant", cuisine: "Chinese", description: "Authentic Chinese dishes" },
        { name: "Izakaya", cuisine: "Japanese Pub", description: "Casual dining with drinks" },
        { name: "Café", cuisine: "Café", description: "Light meals and beverages" }
      ],
      imageUrl: "https://hakone-japan.com/pre/wp/wp-content/uploads/Yumoto-Fujiya-Hotel_Onsen2-e1594368907215.jpg",
      images: [
        "https://www.fujiyahotel.co.jp/intm4e00000000ax-img/intm4e000000041k.jpg",
        "https://www.fujiyahotel.co.jp/intm4e00000000ax-img/vscsn90000000fjg.jpg",
        "https://www.fujiyahotel.co.jp/intm4e00000000ax-img/kdck9200000008uj.jpg"
      ]
    },
    {
      name: "Kinoyu Setsugetsuka",
      nameJapanese: "季の湯 雪月花",
      description: "4-star onsen ryokan in Hakone Gora with Japanese-Western rooms, breakfast & dinner included, free parking. Jan 23-24, 1 night.",
      priceRange: "$$$",
      rating: "4.5",
      coordinates: { lat: 35.2442, lng: 139.0631 },
      address: "1300-34 Goura, Hakone-machi, Ashigarashimo-gun, Kanagawa 250-0408",
      phone: "+81-460-86-1222",
      checkIn: "15:00",
      checkOut: "11:00",
      officialWebsite: "https://dormy-hotels.com/resort/hotels/setsugetsuka/",
      bookingUrl: "https://www.booking.com/hotel/jp/hakone-setsugetsuka.html",
      instagramUrl: "https://www.instagram.com/setsugetsuka_official/",
      facilities: [
        "Free Wi-Fi",
        "Free Parking (79 spaces)",
        "24-hour Front Desk",
        "Spa Facility",
        "Souvenir Shop",
        "Luggage Storage",
        "Air Conditioning",
        "Fireplace in Rooms"
      ],
      highlights: [
        "1-minute walk from Gora Station",
        "All 158 rooms have private open-air cypress bath",
        "2 hot spring sources with free-flowing natural water",
        "3 free private outdoor baths (no reservation needed)",
        "Breakfast & dinner included"
      ],
      roomTypes: [
        "Japanese-Western Style Room (36㎡, up to 3 guests)",
        "Western-Style Double Room (19㎡, up to 2 guests)",
        "Japanese-Western Deluxe Room"
      ],
      onsenInfo: {
        description: "Two natural hot spring sources provide free-flowing water to all baths. The large bathhouse 'Tamakatsu-no-Yu' features multiple indoor baths and a large outdoor bath 'Kagaribi'. Three private outdoor baths are free for all guests.",
        types: ["Large Public Bath (Tamakatsu-no-Yu)", "Outdoor Bath (Kagaribi)", "Private Room Cypress Bath", "3 Free Private Outdoor Baths (Hanagasumi, Kangetsu, Manten)", "Carbonated Bath"],
        hours: "15:00-01:00, 05:00-10:00",
        privateBathPrice: "Free (no reservation required)"
      },
      restaurants: [
        { name: "Kacho (花鳥)", cuisine: "Kaiseki", description: "Japanese kaiseki-style feast with regional seafood and land delicacies" },
        { name: "Fugetsu (風月)", cuisine: "Japanese", description: "Sushi, tempura, and domestic wagyu beef shabu-shabu hot pot" }
      ],
      imageUrl: "https://www.img-ikyu.com/contents/caz/dg/guide/acc1/00030981/img/a_ss_01_220201.jpg",
      images: [
        "https://trvimg.r10s.jp/share/image_up/54102/origin/3904b49023c8f6c79a6dbe09fb67dbb3d380b45b.47.9.26.3.jpg",
        "https://www.img-ikyu.com/contents/caz/dg/guide/acc1/00030981/img/b_ss01.jpg",
        "https://trvimg.r10s.jp/share/image_up/54102/origin/062651af82587cfa0c911bf5b2b7db18a79dfed6.47.9.26.3.jpg"
      ]
    },
    {
      name: "Minn Ueno",
      nameJapanese: "ミン上野",
      description: "Modern apartment hotel in Ueno with Premium Family Duplex room (6 beds, 4 adults), free Wi-Fi. Near Ueno Station. Jan 24-26, 2 nights.",
      priceRange: "$$",
      rating: "4.2",
      coordinates: { lat: 35.7124, lng: 139.7788 },
      address: "1-19-5 Higashi-Ueno, Taito-ku, Tokyo 110-0015",
      phone: "+81-3-5817-8025",
      checkIn: "15:00",
      checkOut: "10:00 (late checkout until 12:00 available)",
      officialWebsite: "https://staytuned.asia/en/brands/minn/hotels/minn-ueno",
      bookingUrl: "https://booking.staytuned.asia/minn-ueno/rooms",
      instagramUrl: "https://www.instagram.com/hotel_minn/",
      facilities: [
        "Free Wi-Fi",
        "Full Kitchen (induction stove, microwave, refrigerator, utensils)",
        "Laundromat (¥300 wash, ¥100/30min dry)",
        "Smart TV (YouTube, Netflix)",
        "Self Check-in (QR code)",
        "24-hour Access",
        "Luggage Storage",
        "Air Purifier",
        "Universal Power Outlets"
      ],
      highlights: [
        "5-minute walk to Ueno Station (8 train lines)",
        "3-minute walk from Naka-Okachimachi Station",
        "Ukiyo-e prints by Katsushika Hokusai on walls",
        "8 room types (35-50㎡) for up to 8 people",
        "Full kitchen in every room"
      ],
      roomTypes: [
        "Moderate Family Loft Bedroom (35㎡, 6 people)",
        "Moderate Twin Room (35㎡, 4 people)",
        "Superior Family Loft Bedroom (40㎡, 8 people)",
        "Superior Queen Room (40㎡, 4 people)",
        "Superior Universal Twin Room (40㎡, 4 people)",
        "Deluxe Family Loft Bed & Queen (50㎡, 8 people)",
        "Deluxe 2 Bedroom Suite (50㎡, 6 people)",
        "Deluxe King Suite (50㎡, 4 people)"
      ],
      imageUrl: "https://cdn.staytuned.asia/large_003_ad58c361d0.jpg",
      images: [
        "https://cdn.staytuned.asia/large_045_Superior_universal_room_ccf0187cfe.jpg",
        "https://cdn.staytuned.asia/large_031_Deluxe_2_bedroom_suite_1a6df88bdd.jpg",
        "https://cdn.staytuned.asia/large_033_Superior_family_loft_bed_room_1ff984191c.jpg"
      ]
    }
  ],
  restaurants: [
    {
      name: "Sushi Dai (壽司大)",
      cuisine: "Sushi Omakase",
      description: "Legendary sushi at Toyosu Market. Michelin Bib Gourmand omakase for ~¥5,500. Expect early morning queues.",
      priceRange: "$$$",
      coordinates: { lat: 35.6465, lng: 139.7869 },
      tabelogRating: 3.65,
      tabelogUrl: "https://tabelog.com/en/tokyo/A1313/A131307/13227096/",
      imageUrl: "https://tblg.k-img.com/restaurant/images/Rvw/321079/640x640_rect_e95256b4b96e6aabbb02d9e4e5c8469e.jpg"
    },
    {
      name: "Sankouen (三幸園)",
      cuisine: "Yakiniku",
      description: "Beloved yakiniku in Azabu-Juban known for quality black wagyu beef and warm hospitality. Great lunch sets.",
      priceRange: "$$",
      coordinates: { lat: 35.6559, lng: 139.7359 },
      tabelogRating: 3.52,
      tabelogUrl: "https://tabelog.com/en/tokyo/A1307/A130702/13002823/",
      imageUrl: "https://tblg.k-img.com/restaurant/images/Rvw/112660/640x640_rect_112660756.jpg"
    },
    {
      name: "Ginza Katsukami 2 (かつかみ弐)",
      cuisine: "Tonkatsu Omakase",
      description: "Michelin Bib Gourmand tonkatsu omakase. Experience different pork cuts in an intimate counter setting.",
      priceRange: "$$$",
      coordinates: { lat: 35.6700, lng: 139.7627 },
      tabelogRating: 3.58,
      tabelogUrl: "https://tabelog.com/en/tokyo/A1301/A130101/13225476/",
      imageUrl: "https://tblg.k-img.com/restaurant/images/Rvw/153169/640x640_rect_153169722.jpg"
    },
    {
      name: "Gyutan no Lemon (牛タンの檸檬)",
      cuisine: "Beef Tongue",
      description: "Thick-cut charcoal-grilled beef tongue specialty in Shinjuku. The 'Kiwami' set is a must-try.",
      priceRange: "$$",
      coordinates: { lat: 35.6961, lng: 139.6979 },
      tabelogRating: 3.45,
      tabelogUrl: "https://tabelog.com/en/tokyo/A1304/A130401/13264721/",
      imageUrl: "https://tblg.k-img.com/restaurant/images/Rvw/248736/640x640_rect_6d32f903d38eb7ee6c263fb0185983fd.jpg"
    },
    {
      name: "Stabler Shimokitazawa",
      cuisine: "Meat Sandwich",
      description: "American-style 300g steak sandwich on fluffy shokupan. Perfect for meat lovers exploring trendy Shimokitazawa.",
      priceRange: "$$",
      coordinates: { lat: 35.6609, lng: 139.6685 },
      tabelogRating: 3.40,
      tabelogUrl: "https://tabelog.com/en/tokyo/A1318/A131802/13254078/",
      imageUrl: "https://tblg.k-img.com/restaurant/images/Rvw/233456/640x640_rect_89a1f3d5e7c9b2a4f6d8e1c3a5b7f9d2.jpg"
    }
  ],
  days: [
    {
      date: "Jan 22 (Thu)",
      summary: "Arrival & Hakone Onsen",
      activities: [
        {
          time: "10:50",
          activity: "Departure",
          locationName: "Hong Kong International Airport T1",
          description: "Board HK Express flight UO870 to Tokyo Narita.",
          extendedDescription: "Depart from Hong Kong International Airport Terminal 1. Flight UO870 is operated by HK Express on an Airbus A321neo. Flight duration is approximately 4 hours and 5 minutes.",
          address: "Hong Kong International Airport Terminal 1",
          openingHours: "Departure 10:50",
          tips: ["Arrive at the airport at least 2 hours before departure.", "Check in online to save time."],
          category: "transport",
          coordinates: { lat: 22.3080, lng: 113.9185 },
          imageUrl: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&q=80",
          transitToNext: {
            summary: "Flight to Tokyo",
            destination: "Narita Airport T2",
            options: [
              {
                mode: "flight",
                name: "HK Express UO870",
                duration: "4h 5min",
                instructions: "Direct flight from Hong Kong to Tokyo Narita. Aircraft: Airbus A321neo.",
                officialUrl: "https://www.hkexpress.com/",
                imageUrl: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&q=80"
              }
            ]
          }
        },
        {
          time: "15:55 - 17:30",
          activity: "Arrival & Car Rental",
          locationName: "TOKKO Narita Airport Branch",
          description: "Land at Narita, clear customs, take free shuttle to TOKKO, and pick up rental car.",
          extendedDescription: "Welcome to Tokyo! After landing at Narita Terminal 2 (15:55), proceed through immigration and collect your luggage. Call TOKKO car rental (+81-7069621631 or +81-8034297618) to arrange free shuttle pickup (10-15 mins). At TOKKO Narita Branch, complete paperwork and pick up your Nissan X-Trail (or equivalent compact SUV). Bring your international driving permit and passport. The car will be returned on January 24 at Ueno Station Branch.",
          address: "1439 Kosuge, Narita, Chiba 286-0127, Japan",
          openingHours: "TOKKO business hours",
          tips: ["Call TOKKO immediately after clearing customs.", "The shuttle bus is free - wait at your terminal exit.", "Bring international driving permit and passport.", "Familiarize yourself with the car's navigation system before departing."],
          category: "transport",
          coordinates: { lat: 35.7650, lng: 140.3200 },
          imageUrl: "https://en.tabirai.net/car/vehicle/vehicle-type/images/24_MV_01_20190228110849.jpg",
          transitToNext: {
            summary: "Drive to Hakone",
            destination: "Yumoto Fujiya Hotel",
            options: [
              {
                mode: "taxi",
                name: "Self-drive",
                duration: "2-2.5 hours",
                cost: "Toll ~¥3,000-4,000",
                instructions: "Take the Higashi-Kanto Expressway to the Shin-Tomei Expressway, then Route 1 to Hakone. Follow signs to Hakone-Yumoto.",
                imageUrl: "https://images.unsplash.com/photo-1545579133-99bb5ab189bd?w=400&q=80"
              }
            ]
          }
        },
        {
          time: "19:30 - 20:00",
          activity: "Hotel Check-in",
          locationName: "Yumoto Fujiya Hotel",
          description: "Check into Yumoto Fujiya Hotel in Hakone for a relaxing onsen experience.",
          extendedDescription: "Arrive at Yumoto Fujiya Hotel, a classic Japanese hot spring hotel in the heart of Hakone-Yumoto. Your room is a Twin Room (23 sqm, non-smoking with 2 single beds). Breakfast is included. Enjoy the hotel's onsen facilities to relax after your journey.",
          address: "256-1 Yumoto Hakone-machi, Ashigarashimo-gun 250-0392",
          openingHours: "Check-in from 15:00, Check-out 11:00",
          tips: ["The hotel has both indoor and outdoor hot spring baths.", "Dinner options are available at the hotel or nearby restaurants in Hakone-Yumoto."],
          category: "transport",
          coordinates: { lat: 35.2324, lng: 139.1051 },
          imageUrl: "https://hakone-japan.com/pre/wp/wp-content/uploads/Yumoto-Fujiya-Hotel_Onsen2-e1594368907215.jpg"
        }
      ]
    },
    {
      date: "Jan 23 (Fri)",
      summary: "Hakone Exploration & Gora Onsen",
      activities: [
        {
          time: "07:00 - 09:00",
          activity: "Morning Onsen & Breakfast",
          locationName: "Yumoto Fujiya Hotel",
          description: "Enjoy a morning soak in the onsen and hotel breakfast.",
          extendedDescription: "Start your day with a refreshing dip in the hotel's hot spring baths. Japanese onsen etiquette: wash thoroughly before entering the bath, and don't bring towels into the water. Then enjoy the included breakfast at the hotel.",
          address: "256-1 Yumoto Hakone-machi, Ashigarashimo-gun 250-0392",
          openingHours: "Breakfast typically 07:00 - 09:30",
          tips: ["Onsen is best enjoyed early morning when it's less crowded.", "Check out by 11:00."],
          category: "food",
          coordinates: { lat: 35.2324, lng: 139.1051 },
          imageUrl: "https://hakone-japan.com/pre/wp/wp-content/uploads/Yumoto-Fujiya-Hotel_Onsen2-e1594368907215.jpg",
          transitToNext: {
            summary: "Check out and drive to Gora",
            destination: "Hakone Area",
            options: [
              {
                mode: "taxi",
                name: "Self-drive",
                duration: "20-30 mins",
                instructions: "Check out by 11:00, then drive up to the Gora area. You can stop at attractions along the way."
              }
            ]
          }
        },
        {
          time: "10:00 - 15:00",
          activity: "Hakone Sightseeing",
          locationName: "Hakone Area",
          description: "Explore Hakone's scenic attractions - Owakudani, Lake Ashi, Hakone Shrine.",
          extendedDescription: "Hakone offers stunning views of Mt. Fuji (weather permitting), the famous Hakone Shrine with its torii gate in the lake, and the volcanic Owakudani valley. Drive around the scenic routes and stop at viewpoints. Consider taking the Hakone Ropeway for aerial views.",
          address: "Hakone, Ashigarashimo District, Kanagawa",
          openingHours: "Varies by attraction",
          tips: ["Owakudani is famous for black eggs boiled in volcanic hot springs - said to add 7 years to your life!", "Check if Mt. Fuji is visible - January often has clear winter views.", "Park at Owakudani or Lake Ashi parking areas."],
          category: "sightseeing",
          coordinates: { lat: 35.2326, lng: 139.0249 },
          imageUrl: "https://res.cloudinary.com/jnto/image/upload/w_400,h_300,c_fill,f_auto,fl_lossy,q_auto/v1516736684/kanagawa/Kanagawa295_13",
          transitToNext: {
            summary: "Drive to Gora",
            destination: "Kinoyu Setsugetsuka",
            options: [
              {
                mode: "taxi",
                name: "Self-drive to Gora",
                duration: "15-20 mins",
                instructions: "Drive to Gora area for hotel check-in. The hotel has free parking.",
                imageUrl: "https://images.unsplash.com/photo-1545579133-99bb5ab189bd?w=400&q=80"
              }
            ]
          }
        },
        {
          time: "15:00 - 19:00",
          activity: "Hotel Check-in",
          locationName: "Kinoyu Setsugetsuka",
          description: "Check into the luxurious Hakone Gora onsen ryokan with private baths.",
          extendedDescription: "Welcome to 季の湯 雪月花 (Kinoyu Setsugetsuka), a 4-star onsen ryokan in Gora. Your room is a Japanese-Western style room with 2 single beds. The hotel features multiple onsen baths, including outdoor rotenburo. Check-in is from 15:00-19:00. Enjoy the hotel's facilities before dinner.",
          address: "Gora 1300-34, 250-0408 Hakone-machi, Kanagawa, Japan",
          openingHours: "Check-in: 15:00-19:00, Check-out: 11:00",
          tips: ["The hotel has 24-hour front desk and free parking.", "Try the different onsen baths throughout your stay.", "Luggage storage available if you arrive early."],
          category: "transport",
          coordinates: { lat: 35.2442, lng: 139.0631 },
          imageUrl: "https://www.img-ikyu.com/contents/caz/dg/guide/acc1/00030981/img/a_ss_01_220201.jpg",
          transitToNext: {
            summary: "Dinner at hotel",
            destination: "Hotel Restaurant",
            options: [
              {
                mode: "walk",
                name: "Walking",
                duration: "1 min",
                instructions: "Dinner is served at the hotel restaurant. Japanese kaiseki or Western options available."
              }
            ]
          }
        },
        {
          time: "19:00 - 21:00",
          activity: "Kaiseki Dinner",
          locationName: "Kinoyu Setsugetsuka Restaurant",
          description: "Enjoy an elegant Japanese kaiseki dinner included with your stay.",
          extendedDescription: "Choose between two exquisite dining experiences: 'Kacho' (花鳥) offers colorful seasonal kaiseki cuisine with locally-sourced seafood in a traditional multi-course style (appetizer, sashimi, grilled dish with eight delicacies, warm dish, main course, rice, and dessert). Alternatively, 'Fugetsu' (風月) serves wagyu beef shabu-shabu hot pot with sushi. Meals are served in semi-private dining rooms at 'Unshinan' for an intimate experience. The meal is included in your room rate.",
          address: "Gora 1300-34, 250-0408 Hakone-machi, Kanagawa, Japan",
          openingHours: "Dinner sessions: 17:30~ or 20:00~",
          tips: ["Choose your dinner style (Kaiseki or Shabu-shabu) at check-in.", "Dress comfortably - yukata provided by the hotel is appropriate.", "Notify allergies by phone at least one day in advance.", "Evening onsen after dinner is especially relaxing."],
          category: "food",
          coordinates: { lat: 35.2442, lng: 139.0631 },
          imageUrl: "https://www.img-ikyu.com/contents/common/image/acc1/00030981/0/org/12243111.jpg"
        }
      ]
    },
    {
      date: "Jan 24 (Sat)",
      summary: "Gora to Tokyo & Check-in Minn Ueno",
      activities: [
        {
          time: "07:00 - 09:00",
          activity: "Morning Onsen & Breakfast",
          locationName: "Kinoyu Setsugetsuka",
          description: "Final morning onsen soak and Japanese breakfast at the ryokan.",
          extendedDescription: "Enjoy your last morning at the Gora onsen. Take a final dip in the hot springs before breakfast. The hotel serves a traditional Japanese breakfast included with your stay. Check out by 11:00.",
          address: "Gora 1300-34, 250-0408 Hakone-machi, Kanagawa, Japan",
          openingHours: "Breakfast typically 07:00 - 09:30",
          tips: ["Don't miss the morning onsen - it's less crowded and very peaceful.", "Pack your bags before breakfast to save time."],
          category: "food",
          coordinates: { lat: 35.2442, lng: 139.0631 },
          imageUrl: "https://www.img-ikyu.com/contents/caz/dg/guide/acc1/00030981/img/a_ss_01_220201.jpg"
        },
        {
          time: "09:30 - 12:30",
          activity: "Drive to Tokyo & Car Return",
          locationName: "TOKKO Ueno Station Branch",
          description: "Check out, scenic drive to Tokyo, and return rental car at Ueno.",
          extendedDescription: "Check out from Kinoyu Setsugetsuka by 11:00 and drive to Tokyo (2-2.5 hours). The route: Route 1 → Odawara-Atsugi Road → Tomei Expressway → Shuto Expressway → Ueno. On a clear day, you might catch views of Mt. Fuji! Toll fees ~¥3,000-4,000. Return your Nissan X-Trail at TOKKO Ueno Station Branch (09:00-20:00 free return, 20:01-21:00 extra charge).",
          address: "110-0015 Tokyo, Taito City, Higashiueno, 5 Chome-7-3 セブンスターマンション上野",
          openingHours: "TOKKO: 09:00 - 20:00 (free return)",
          tips: ["Fill up gas before leaving Hakone - return with same fuel level.", "Use car navigation for real-time traffic updates.", "Stop at a service area if needed.", "Keep the rental return receipt for your records."],
          category: "transport",
          coordinates: { lat: 35.7132, lng: 139.7813 },
          imageUrl: "https://en.tabirai.net/car/vehicle/vehicle-type/images/24_MV_01_20190228110849.jpg",
          transitToNext: {
            summary: "Walk to lunch",
            destination: "Ameyoko Market",
            options: [
              {
                mode: "walk",
                name: "Walking",
                duration: "10 mins",
                instructions: "Walk towards JR Ueno Station. Ameyoko market runs along the railway tracks between Ueno and Okachimachi stations."
              }
            ]
          }
        },
        {
          time: "12:30 - 14:30",
          activity: "Lunch & Shopping",
          locationName: "Ameyoko Market",
          description: "Bustling market street with street food, fresh seafood, and bargain shopping.",
          extendedDescription: "Ameya-Yokocho (Ameyoko) is a lively open-air market running along the Yamanote Line tracks. Originally a black market after WWII, it's now famous for fresh seafood, dried goods, clothing, and street food. Perfect for lunch - try fresh sashimi, takoyaki, or kebabs.",
          address: "4 Chome Ueno, Taito City, Tokyo 110-0005",
          openingHours: "Most shops 10:00 - 19:00",
          tips: ["Great for bargain hunting - prices are negotiable at some stalls.", "Try the fresh fruit or seafood bowls.", "Very crowded on weekends - watch your belongings."],
          category: "food",
          coordinates: { lat: 35.7085, lng: 139.7743 },
          imageUrl: "https://res.cloudinary.com/jnto/image/upload/w_400,h_300,c_fill,f_auto,fl_lossy,q_auto/v1513937117/tokyo/Tokyo2264_6",
          transitToNext: {
            summary: "Walk to hotel",
            destination: "Minn Ueno",
            options: [
              {
                mode: "walk",
                name: "Walking",
                duration: "5-10 mins",
                instructions: "Walk east from Ameyoko towards Higashiueno. The hotel is on 1 Chome-19-5 Higashiueno."
              }
            ]
          }
        },
        {
          time: "15:00 - 16:00",
          activity: "Hotel Check-in",
          locationName: "Minn Ueno",
          description: "Check into Minn Ueno - your Tokyo base for the next 2 nights.",
          extendedDescription: "Welcome to Minn Ueno! Your room is a Premium Family Duplex with 6 beds, perfect for up to 4 adults. The hotel offers free room Wi-Fi and luggage storage. Check-in is from 15:00, check-out by 10:00. No meals included, but Ueno has countless dining options.",
          address: "1 Chome-19-5 Higashiueno, Taito-ku, 110-0015 Tokyo, Japan",
          openingHours: "Check-in: 15:00, Check-out: 10:00",
          tips: ["The hotel has luggage storage if you arrive early.", "Ask the front desk for local restaurant recommendations.", "Ueno Station is a short walk away for easy access to all of Tokyo."],
          category: "transport",
          coordinates: { lat: 35.7124, lng: 139.7788 },
          imageUrl: "https://cdn.staytuned.asia/large_003_ad58c361d0.jpg",
          transitToNext: {
            summary: "Train to Shibuya",
            destination: "Shibuya Area",
            options: [
              {
                mode: "train",
                name: "JR Yamanote Line or Metro",
                duration: "30 mins",
                cost: "¥200",
                instructions: "From Ueno Station, take the JR Yamanote Line (outer loop) or Tokyo Metro Ginza Line to Shibuya.",
                officialUrl: "https://www.jreast.co.jp/e/",
                imageUrl: "https://images.unsplash.com/photo-1553531889-e6cf4d692b1b?w=400&q=80"
              }
            ]
          }
        },
        {
          time: "17:00 - 18:30",
          activity: "The Scramble",
          locationName: "Shibuya Crossing",
          description: "Experience the world's busiest pedestrian crossing and see Hachiko.",
          extendedDescription: "Up to 3,000 people cross at a time during peak hours. It's organized chaos and a symbol of modern Tokyo. Don't forget to visit the statue of Hachiko, the loyal dog who waited for his owner for nine years, located just outside the Hachiko Exit.",
          address: "2 Chome-2-1 Dogenzaka, Shibuya City, Tokyo 150-0043",
          openingHours: "24 Hours",
          tips: ["The Starbucks in Tsutaya offers a great vantage point, but seats are hard to get.", "Evening is a great time to see the neon lights."],
          category: "sightseeing",
          coordinates: { lat: 35.6595, lng: 139.7004 },
          imageUrl: "https://www.gotokyo.org/en/spot/78/images/78_0153_2_1400x1100.jpg",
          transitToNext: {
            summary: "Walk to Shibuya Sky",
            destination: "Shibuya Scramble Square",
            options: [
              {
                mode: "walk",
                name: "Walking",
                duration: "1-2 mins",
                instructions: "It is directly connected to the station. Look for the 'Shibuya Scramble Square' building entrance (East side)."
              }
            ]
          }
        },
        {
          time: "18:30 - 20:00",
          activity: "Sky Views",
          locationName: "Shibuya Sky",
          description: "Open-air observation deck with 360-degree views of the neon city at night.",
          extendedDescription: "Located on top of the Shibuya Scramble Square building, this open-air deck (229m high) offers arguably the best modern view of Tokyo. The glass corners provide an incredible photo opportunity. At night, the 'Crossing Light' searchlights illuminate the sky - perfect for sunset views!",
          address: "2 Chome-24-12 Shibuya, Shibuya City, Tokyo 150-0002",
          openingHours: "10:00 - 22:30 (Last entry 21:20)",
          tips: ["Tickets sell out days in advance; book online.", "No tripods, hats, or loose items allowed on the roof deck.", "Sunset timing in late January is around 17:00."],
          category: "sightseeing",
          coordinates: { lat: 35.6585, lng: 139.7023 },
          imageUrl: "https://res.cloudinary.com/jnto/image/upload/w_400,h_300,c_fill,f_auto,fl_lossy,q_auto/v1676974929/tokyo/Tokyo_s_id67_8"
        }
      ]
    },
    {
      date: "Jan 25 (Sun)",
      summary: "Asakusa, Harajuku & Meiji Shrine",
      activities: [
        {
          time: "09:00 - 10:30",
          activity: "Temple Visit",
          locationName: "Senso-ji Temple",
          description: "Tokyo's oldest temple. Enter through the Kaminarimon (Thunder Gate).",
          extendedDescription: "Founded in 628 AD, this is Tokyo's oldest and most colorful temple. The massive red lantern at the Kaminarimon gate is an iconic symbol of Japan. The main hall is always bustling with worshippers wafting incense smoke over themselves for good health. Located close to your hotel in Ueno - just a short train ride on the Tokyo Metro Ginza Line.",
          address: "2 Chome-3-1 Asakusa, Taito City, Tokyo 111-0032",
          openingHours: "Main Hall 06:00 - 17:00 (Grounds always open)",
          tips: ["Draw an Omikuji (fortune) for 100 yen. If it's bad, tie it to the wire to leave the bad luck behind.", "Visit early (before 9 AM) to avoid massive crowds."],
          category: "sightseeing",
          coordinates: { lat: 35.7148, lng: 139.7967 },
          imageUrl: "https://www.gotokyo.org/en/spot/15/images/main.webp",
          transitToNext: {
            summary: "Walk to Nakamise",
            destination: "Nakamise Street",
            options: [
              {
                mode: "walk",
                name: "Walking",
                duration: "1 min",
                instructions: "Simply turn around from the main hall. Nakamise is the shopping street leading directly to the temple."
              }
            ]
          }
        },
        {
          time: "10:30 - 12:00",
          activity: "Snacking & Shopping",
          locationName: "Nakamise Shopping Street",
          description: "Traditional shopping street leading to the temple, perfect for souvenirs and snacks.",
          extendedDescription: "A 250-meter approach to the temple lined with 89 small shops. This street has served visitors for centuries. It's the best place to buy traditional souvenirs like folding fans, yukata, and local snacks.",
          address: "1 Chome-20 Asakusa, Taito City, Tokyo 111-0032",
          openingHours: "Approx 10:00 - 17:00",
          tips: ["Eat your snacks in front of the shop; walking while eating is considered rude.", "Try the Ningyo-yaki (doll-shaped sponge cakes) and Melon Pan."],
          category: "food",
          coordinates: { lat: 35.7138, lng: 139.7968 },
          imageUrl: "https://res.cloudinary.com/jnto/image/upload/w_400,h_300,c_fill,f_auto,fl_lossy,q_auto/v1551154046/tokyo/sensoji_2",
          transitToNext: {
            summary: "Train to Harajuku",
            destination: "Meiji Jingu Shrine",
            options: [
              {
                mode: "train",
                name: "Tokyo Metro + JR",
                duration: "35 mins",
                cost: "¥250",
                instructions: "From Asakusa Station, take the Tokyo Metro Ginza Line to Omotesando, then walk to Meiji Jingu or transfer to JR Yamanote Line at Harajuku.",
                officialUrl: "https://www.tokyometro.jp/en/",
                imageUrl: "https://images.unsplash.com/photo-1553531889-e6cf4d692b1b?w=400&q=80"
              }
            ]
          }
        },
        {
          time: "12:30 - 14:00",
          activity: "Tranquility",
          locationName: "Meiji Jingu Shrine",
          description: "Walk through the serene forest to Tokyo's grandest Shinto shrine.",
          extendedDescription: "Dedicated to Emperor Meiji and Empress Shoken, this shrine is located in a 70-hectare forest in the middle of the city. The massive wooden Torii gates mark the entrance to a spiritual oasis. It is a striking contrast to the noise of the city just outside its borders.",
          address: "1-1 Yoyogikamizonocho, Shibuya City, Tokyo 151-8557",
          openingHours: "Sunrise to Sunset (approx 06:40 - 16:20 in Jan)",
          tips: ["Bow once when entering and leaving through the Torii gates.", "Look for the wall of Sake barrels donated by brewers nationwide."],
          category: "sightseeing",
          coordinates: { lat: 35.6764, lng: 139.6993 },
          imageUrl: "https://res.cloudinary.com/jnto/image/upload/w_400,h_300,c_fill,f_auto,fl_lossy,q_auto/v1513945803/tokyo/Tokyo2331_8",
          transitToNext: {
            summary: "Walk to Harajuku",
            destination: "Takeshita Street",
            options: [
              {
                mode: "walk",
                name: "Walking",
                duration: "5 mins",
                instructions: "Exit via the Harajuku Gate. Cross the street towards Harajuku Station to find the entrance to Takeshita Street."
              }
            ]
          }
        },
        {
          time: "14:00 - 15:30",
          activity: "Street Fashion",
          locationName: "Takeshita Street",
          description: "Explore the colorful hub of Harajuku fashion and crepe shops.",
          extendedDescription: "The birthplace of Japan's 'Kawaii' (cute) culture. This 400-meter street is packed with boutiques, purikura (photo booth) shops, and crepe stands. Expect loud pop music, rainbow cotton candy, and some of the most unique street fashion in the world.",
          address: "1 Chome-17 Jingumae, Shibuya City, Tokyo 150-0001",
          openingHours: "Shops typically 10:00 - 20:00",
          tips: ["Try a crepe from Marion Crepes or Santa Monica Crepes.", "Visit on a weekend to see locals dressed in cosplay or gothic lolita fashion."],
          category: "shopping",
          coordinates: { lat: 35.6716, lng: 139.7032 },
          imageUrl: "https://www.gotokyo.org/en/spot/48/images/main.webp",
          transitToNext: {
            summary: "Train to Skytree",
            destination: "Tokyo Skytree",
            options: [
              {
                mode: "train",
                name: "JR + Tokyo Metro",
                duration: "40 mins",
                cost: "¥350",
                instructions: "From Harajuku Station, take the JR Yamanote Line to Ueno, then transfer to Tokyo Metro Ginza Line to Asakusa, then Tobu Skytree Line to Skytree Station.",
                officialUrl: "https://www.jreast.co.jp/e/",
                imageUrl: "https://images.unsplash.com/photo-1553531889-e6cf4d692b1b?w=400&q=80"
              }
            ]
          }
        },
        {
          time: "16:30 - 18:30",
          activity: "Modern Icon",
          locationName: "Tokyo Skytree",
          description: "Visit the tallest structure in Japan for shopping and sunset views.",
          extendedDescription: "At 634 meters, this broadcasting tower is the tallest structure in Japan. The Tembo Deck at 350m and the Tembo Galleria at 450m offer dizzying views. The base, Tokyo Solamachi, is a massive shopping complex with an aquarium and planetarium. Perfect timing for sunset views!",
          address: "1 Chome-1-2 Oshiage, Sumida City, Tokyo 131-0045",
          openingHours: "10:00 - 21:00",
          tips: ["Foreign tourists can buy 'Fast Skytree Tickets' to skip the regular line.", "The glass floor section on the 340th floor is thrilling.", "Sunset is around 17:00 in late January."],
          category: "sightseeing",
          coordinates: { lat: 35.7101, lng: 139.8107 },
          imageUrl: "https://res.cloudinary.com/jnto/image/upload/w_400,h_300,c_fill,f_auto,fl_lossy,q_auto/v1513936454/tokyo/Tokyo2307_1"
        }
      ]
    },
    {
      date: "Jan 26 (Mon)",
      summary: "Last Day & Flight UO871",
      activities: [
        {
          time: "07:00 - 09:30",
          activity: "Fresh Seafood",
          locationName: "Tsukiji Outer Market",
          description: "Early morning visit for fresh sushi breakfast and street food.",
          extendedDescription: "While the wholesale auction moved to Toyosu, the Tsukiji Outer Market remains the soul of Tokyo's food scene. Hundreds of tightly packed stalls sell fresh seafood, produce, and kitchenware. It is the best place in the world for a sushi breakfast. Leave luggage at the hotel and return to check out.",
          address: "4 Chome-16-2 Tsukiji, Chuo City, Tokyo 104-0045",
          openingHours: "05:00 - 14:00 (Varies by shop)",
          tips: ["Try the Tamagoyaki (sweet rolled omelet) on a stick.", "Leave your luggage at the hotel before heading out.", "Most shops close by early afternoon, so go early for the best selection."],
          category: "food",
          coordinates: { lat: 35.6655, lng: 139.7707 },
          imageUrl: "https://res.cloudinary.com/jnto/image/upload/w_400,h_300,c_fill,f_auto,fl_lossy,q_auto/v1646013708/tokyo/H_00399_002",
          transitToNext: {
            summary: "Return to hotel",
            destination: "Minn Ueno",
            options: [
              {
                mode: "train",
                name: "Tokyo Metro Hibiya Line",
                duration: "20 mins",
                cost: "¥200",
                instructions: "Take the Hibiya Line from Tsukiji Station to Ueno Station, then walk to the hotel.",
                officialUrl: "https://www.tokyometro.jp/en/",
                imageUrl: "https://images.unsplash.com/photo-1553531889-e6cf4d692b1b?w=400&q=80"
              }
            ]
          }
        },
        {
          time: "09:30 - 13:00",
          activity: "Checkout & Last Shopping",
          locationName: "Tokyo Station",
          description: "Check out from Minn Ueno, then last minute souvenirs at Tokyo Station.",
          extendedDescription: "Return to Minn Ueno to check out by 10:00. Double-check all belongings. Take JR Yamanote Line from Ueno to Tokyo Station (10 mins, ¥170). Visit Tokyo Character Street for anime goods, Daimaru Department Store for high-end sweets (KitKats, Tokyo Banana), or Tokyo Ramen Street for a quick lunch. Use coin lockers to store luggage while shopping. Take Narita Express (N'EX) around 13:00 (55-60 mins, ¥3,070) to arrive at Narita T2 by 14:30.",
          address: "1 Chome-9-1 Marunouchi, Chiyoda City, Tokyo",
          openingHours: "Shops typically 10:00 - 20:00",
          tips: ["Check out from Minn Ueno by 10:00.", "Use coin lockers at Tokyo Station for your luggage while shopping.", "Reserve your Narita Express ticket in advance.", "Ensure you get off at Terminal 2 station, not Terminal 1.", "Bento boxes from the station are great for the train ride."],
          category: "shopping",
          coordinates: { lat: 35.6812, lng: 139.7671 },
          imageUrl: "https://res.cloudinary.com/jnto/image/upload/w_400,h_300,c_fill,f_auto,fl_lossy,q_auto/v1513936386/tokyo/Tokyo2258_24",
          transitToNext: {
            summary: "Narita Express to Airport",
            destination: "Narita Airport T2",
            options: [
              {
                mode: "train",
                name: "Narita Express (N'EX)",
                duration: "55-60 mins",
                cost: "¥3,070",
                instructions: "Depart around 13:00 from Underground Platform 5 at Tokyo Station. Arrive Narita T2 by 14:30. Go to Departure Hall (3F), find HK Express counters (usually Zone I or J).",
                officialUrl: "https://www.jreast.co.jp/multi/en/nex/",
                imageUrl: "https://images.unsplash.com/photo-1553531889-e6cf4d692b1b?w=400&q=80"
              }
            ]
          }
        },
        {
          time: "16:55",
          activity: "Departure",
          locationName: "Flight UO871",
          description: "Fly back to Hong Kong (HKG). Arrive 21:25.",
          extendedDescription: "Board your HK Express flight UO871. The flight duration is approximately 5 hours and 30 minutes, landing in Hong Kong Terminal 1 at 21:25.",
          address: "Narita International Airport Terminal 2",
          openingHours: "Departure 16:55",
          tips: ["Have a safe flight!"],
          category: "transport",
          coordinates: { lat: 35.7719, lng: 140.3928 },
          imageUrl: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&q=80"
        }
      ]
    }
  ]
};

export const STATIC_TRIP_PLAN_ZH: TripPlan = {
  tripName: "東京之旅 2026",
  transportTips: [
    "抵達機場後請立即購買 Suica 或 Pasmo IC 卡，以便乘坐電車和巴士。",
    "強烈建議購買 72 小時東京地鐵通票，適用於大多數地鐵線路。",
    "下載 'Japan Travel by NAVITIME' 應用程式以獲取準確的時刻表。"
  ],
  hotels: [
    {
      name: "湯本富士屋酒店",
      nameJapanese: "湯本富士屋ホテル",
      description: "箱根湯本的經典日式溫泉旅館，設有室內外溫泉，含早餐。1月22-23日，1晚。",
      priceRange: "$$",
      rating: "4.3",
      coordinates: { lat: 35.2324, lng: 139.1051 },
      address: "神奈川縣足柄下郡箱根町湯本 256-1, 250-0392",
      phone: "+81-460-85-6111",
      checkIn: "15:00",
      checkOut: "11:00",
      officialWebsite: "https://fhr.yumotofujiya.jp/",
      bookingUrl: "https://www.booking.com/hotel/jp/yumoto-fujiya.html",
      instagramUrl: "https://www.instagram.com/yumoto_fujiyahotel/",
      facilities: [
        "免費 Wi-Fi",
        "免費停車",
        "行李寄存",
        "24小時前台",
        "藝廊",
        "卡拉OK",
        "火車景觀房",
        "接受信用卡"
      ],
      highlights: [
        "箱根湯本站步行3分鐘",
        "歷史悠久的富士屋酒店集團（約翰藍儂、查理卓別林曾下榻）",
        "5處泉源每分鐘湧出270公升天然溫泉水",
        "13種溫泉體驗"
      ],
      roomTypes: [
        "日式客房",
        "西式雙床房",
        "和洋式客房",
        "附私人溫泉的豪華雙床房",
        "家庭房"
      ],
      onsenInfo: {
        description: "5處泉源每分鐘湧出270公升天然溫泉水。享受13種泡湯體驗，包括可觀瀑布的全景大浴場。",
        types: ["大型室內浴場", "露天風呂", "私人風呂"],
        hours: "大浴場：男女輪替。私人風呂：15:00-22:00",
        privateBathPrice: "45分鐘 ¥2,000-3,000"
      },
      restaurants: [
        { name: "日式懷石料理餐廳", cuisine: "懷石料理", description: "傳統多道式日本高級料理" },
        { name: "壽司餐廳", cuisine: "壽司", description: "新鮮壽司及刺身" },
        { name: "法式餐廳", cuisine: "法式", description: "西式精緻餐飲" },
        { name: "中華餐廳", cuisine: "中式", description: "道地中華料理" },
        { name: "居酒屋", cuisine: "日式居酒屋", description: "輕鬆用餐配酒" },
        { name: "咖啡廳", cuisine: "咖啡廳", description: "輕食及飲品" }
      ],
      imageUrl: "https://hakone-japan.com/pre/wp/wp-content/uploads/Yumoto-Fujiya-Hotel_Onsen2-e1594368907215.jpg",
      images: [
        "https://www.fujiyahotel.co.jp/intm4e00000000ax-img/intm4e000000041k.jpg",
        "https://www.fujiyahotel.co.jp/intm4e00000000ax-img/vscsn90000000fjg.jpg",
        "https://www.fujiyahotel.co.jp/intm4e00000000ax-img/kdck9200000008uj.jpg"
      ]
    },
    {
      name: "季之湯雪月花",
      nameJapanese: "季の湯 雪月花",
      description: "箱根強羅的4星級溫泉旅館，和洋式客房，含早晚餐，免費停車。1月23-24日，1晚。",
      priceRange: "$$$",
      rating: "4.5",
      coordinates: { lat: 35.2442, lng: 139.0631 },
      address: "神奈川縣足柄下郡箱根町強羅 1300-34, 250-0408",
      phone: "+81-460-86-1222",
      checkIn: "15:00",
      checkOut: "11:00",
      officialWebsite: "https://dormy-hotels.com/resort/hotels/setsugetsuka/",
      bookingUrl: "https://www.booking.com/hotel/jp/hakone-setsugetsuka.html",
      instagramUrl: "https://www.instagram.com/setsugetsuka_official/",
      facilities: [
        "免費 Wi-Fi",
        "免費停車（79個車位）",
        "24小時前台",
        "SPA設施",
        "紀念品商店",
        "行李寄存",
        "空調",
        "房內壁爐"
      ],
      highlights: [
        "強羅站步行1分鐘",
        "全部158間客房均附私人露天檜木風呂",
        "2處泉源源源不絕的天然溫泉",
        "3處免費私人露天風呂（無需預約）",
        "含早晚餐"
      ],
      roomTypes: [
        "和洋式客房（36㎡，最多3人）",
        "西式雙人房（19㎡，最多2人）",
        "和洋式豪華客房"
      ],
      onsenInfo: {
        description: "兩處天然泉源提供源源不絕的溫泉水。大浴場「玉桂之湯」設有多種室內浴池和大型露天風呂「篝火」。三處私人露天風呂免費供所有住客使用。",
        types: ["大浴場（玉桂之湯）", "露天風呂（篝火）", "客房私人檜木風呂", "3處免費私人露天風呂（花霞、觀月、滿天）", "碳酸泉"],
        hours: "15:00-01:00, 05:00-10:00",
        privateBathPrice: "免費（無需預約）"
      },
      restaurants: [
        { name: "花鳥", cuisine: "懷石料理", description: "日式懷石宴席，精選當地海鮮與山珍" },
        { name: "風月", cuisine: "日式", description: "壽司、天婦羅及國產和牛涮涮鍋" }
      ],
      imageUrl: "https://www.img-ikyu.com/contents/caz/dg/guide/acc1/00030981/img/a_ss_01_220201.jpg",
      images: [
        "https://trvimg.r10s.jp/share/image_up/54102/origin/3904b49023c8f6c79a6dbe09fb67dbb3d380b45b.47.9.26.3.jpg",
        "https://www.img-ikyu.com/contents/caz/dg/guide/acc1/00030981/img/b_ss01.jpg",
        "https://trvimg.r10s.jp/share/image_up/54102/origin/062651af82587cfa0c911bf5b2b7db18a79dfed6.47.9.26.3.jpg"
      ]
    },
    {
      name: "Minn 上野",
      nameJapanese: "ミン上野",
      description: "上野的現代公寓式酒店，高級家庭複式房（6床，4人），免費Wi-Fi。近上野站。1月24-26日，2晚。",
      priceRange: "$$",
      rating: "4.2",
      coordinates: { lat: 35.7124, lng: 139.7788 },
      address: "東京都台東區東上野 1-19-5, 110-0015",
      phone: "+81-3-5817-8025",
      checkIn: "15:00",
      checkOut: "10:00（可延遲至12:00退房）",
      officialWebsite: "https://staytuned.asia/en/brands/minn/hotels/minn-ueno",
      bookingUrl: "https://booking.staytuned.asia/minn-ueno/rooms",
      instagramUrl: "https://www.instagram.com/hotel_minn/",
      facilities: [
        "免費 Wi-Fi",
        "完整廚房（電磁爐、微波爐、冰箱、餐具）",
        "自助洗衣（洗衣 ¥300，烘乾 ¥100/30分鐘）",
        "智能電視（YouTube、Netflix）",
        "QR碼自助入住",
        "24小時出入",
        "行李寄存",
        "空氣清淨機",
        "萬國插座"
      ],
      highlights: [
        "步行5分鐘至上野站（8條鐵路線）",
        "仲御徒町站步行3分鐘",
        "牆面裝飾葛飾北齋浮世繪版畫",
        "8種房型（35-50㎡）最多容納8人",
        "每間房均配完整廚房"
      ],
      roomTypes: [
        "標準家庭閣樓房（35㎡，6人）",
        "標準雙床房（35㎡，4人）",
        "高級家庭閣樓房（40㎡，8人）",
        "高級大床房（40㎡，4人）",
        "高級無障礙雙床房（40㎡，4人）",
        "豪華家庭閣樓大床房（50㎡，8人）",
        "豪華兩房套房（50㎡，6人）",
        "豪華特大床套房（50㎡，4人）"
      ],
      imageUrl: "https://cdn.staytuned.asia/large_003_ad58c361d0.jpg",
      images: [
        "https://cdn.staytuned.asia/large_045_Superior_universal_room_ccf0187cfe.jpg",
        "https://cdn.staytuned.asia/large_031_Deluxe_2_bedroom_suite_1a6df88bdd.jpg",
        "https://cdn.staytuned.asia/large_033_Superior_family_loft_bed_room_1ff984191c.jpg"
      ]
    }
  ],
  restaurants: [
  {
    name: "壽司大 (Sushi Dai)",
    cuisine: "壽司 Omakase",
    description: "豐洲市場傳奇壽司店，米其林必比登推薦。Omakase約¥5,500，需清晨排隊。",
    priceRange: "$$$",
    coordinates: { lat: 35.6465, lng: 139.7869 },
    tabelogRating: 3.65,
    tabelogUrl: "https://tabelog.com/en/tokyo/A1313/A131307/13227096/",
    imageUrl: "https://tblg.k-img.com/restaurant/images/Rvw/321079/640x640_rect_e95256b4b96e6aabbb02d9e4e5c8469e.jpg"
  },
  {
    name: "三幸園 麻布十番",
    cuisine: "燒肉",
    description: "麻布十番人氣燒肉店，以優質黑毛和牛和熱情服務聞名。午餐套餐超值。",
    priceRange: "$$",
    coordinates: { lat: 35.6559, lng: 139.7359 },
    tabelogRating: 3.52,
    tabelogUrl: "https://tabelog.com/en/tokyo/A1307/A130702/13002823/",
    imageUrl: "https://tblg.k-img.com/restaurant/images/Rvw/112660/640x640_rect_112660756.jpg"
  },
  {
    name: "銀座 かつかみ弐",
    cuisine: "炸豬排 Omakase",
    description: "米其林必比登炸豬排Omakase，在吧台座位體驗不同部位的豬排。需預約。",
    priceRange: "$$$",
    coordinates: { lat: 35.6700, lng: 139.7627 },
    tabelogRating: 3.58,
    tabelogUrl: "https://tabelog.com/en/tokyo/A1301/A130101/13225476/",
    imageUrl: "https://tblg.k-img.com/restaurant/images/Rvw/153169/640x640_rect_153169722.jpg"
  },
  {
    name: "牛タンの檸檬 新宿",
    cuisine: "牛舌",
    description: "新宿人氣牛舌專門店，厚切炭火燒牛舌極致美味。「極」套餐必點。",
    priceRange: "$$",
    coordinates: { lat: 35.6961, lng: 139.6979 },
    tabelogRating: 3.45,
    tabelogUrl: "https://tabelog.com/en/tokyo/A1304/A130401/13264721/",
    imageUrl: "https://tblg.k-img.com/restaurant/images/Rvw/248736/640x640_rect_6d32f903d38eb7ee6c263fb0185983fd.jpg"
  },
  {
    name: "Stabler 下北澤",
    cuisine: "肉三明治",
    description: "美式風格300g牛排三明治，搭配鬆軟生吐司。下北澤潮流街區必訪。",
    priceRange: "$$",
    coordinates: { lat: 35.6609, lng: 139.6685 },
    tabelogRating: 3.40,
    tabelogUrl: "https://tabelog.com/en/tokyo/A1318/A131802/13254078/",
    imageUrl: "https://tblg.k-img.com/restaurant/images/Rvw/233456/640x640_rect_89a1f3d5e7c9b2a4f6d8e1c3a5b7f9d2.jpg"
  }
  ],
  days: [
    {
      date: "1月22日 (週四)",
      summary: "抵達 & 箱根溫泉",
      activities: [
        {
          time: "10:50",
          activity: "出發",
          locationName: "香港國際機場 T1",
          description: "搭乘香港快運 UO870 航班前往東京成田。",
          extendedDescription: "從香港國際機場第一航廈出發。UO870 航班由香港快運營運，機型為空中巴士 A321neo。飛行時間約 4 小時 5 分鐘。",
          address: "香港國際機場第一航廈",
          openingHours: "起飛 10:50",
          tips: ["請提前至少 2 小時抵達機場。", "建議網上辦理登機手續以節省時間。"],
          category: "transport",
          coordinates: { lat: 22.3080, lng: 113.9185 },
          imageUrl: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&q=80",
          transitToNext: {
            summary: "飛往東京",
            destination: "成田機場 T2",
            options: [
              {
                mode: "flight",
                name: "香港快運 UO870",
                duration: "4小時5分鐘",
                instructions: "香港直飛東京成田。機型：空中巴士 A321neo。",
                officialUrl: "https://www.hkexpress.com/",
                imageUrl: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&q=80"
              }
            ]
          }
        },
        {
          time: "15:55 - 17:30",
          activity: "抵達 & 租車",
          locationName: "TOKKO 成田機場分店",
          description: "抵達成田，辦理入境，搭乘免費接駁至 TOKKO，取車。",
          extendedDescription: "歡迎來到東京！抵達成田第二航廈 (15:55) 後，通過移民局並領取行李。致電 TOKKO 租車公司 (+81-7069621631 或 +81-8034297618) 安排免費接駁 (10-15 分鐘)。在 TOKKO 成田分店辦理手續，取車日產奇駿或同等級緊湊型 SUV。請攜帶國際駕照和護照。需於 1月24日在上野站分店還車。",
          address: "日本千葉縣成田市小菅 1439, 286-0127",
          openingHours: "TOKKO 營業時間內",
          tips: ["通關後立即致電 TOKKO。", "接駁巴士免費 - 在航廈出口等候。", "請攜帶國際駕照和護照。", "出發前熟悉車輛導航系統。"],
          category: "transport",
          coordinates: { lat: 35.7650, lng: 140.3200 },
          imageUrl: "https://en.tabirai.net/car/vehicle/vehicle-type/images/24_MV_01_20190228110849.jpg",
          transitToNext: {
            summary: "開車前往箱根",
            destination: "湯本富士屋酒店",
            options: [
              {
                mode: "taxi",
                name: "自駕",
                duration: "2-2.5 小時",
                cost: "過路費約 ¥3,000-4,000",
                instructions: "經東關東自動車道至新東名高速公路，再轉國道1號前往箱根。跟隨箱根湯本指示牌。",
                imageUrl: "https://images.unsplash.com/photo-1545579133-99bb5ab189bd?w=400&q=80"
              }
            ]
          }
        },
        {
          time: "19:30 - 20:00",
          activity: "酒店入住",
          locationName: "湯本富士屋酒店",
          description: "入住箱根湯本的湯本富士屋酒店，享受溫泉體驗。",
          extendedDescription: "抵達湯本富士屋酒店，這是箱根湯本的經典日式溫泉旅館。房型為雙床房（23平方米，禁煙，2張單人床）。含早餐。享受酒店的溫泉設施，放鬆旅途疲勞。",
          address: "神奈川縣足柄下郡箱根町湯本 256-1, 250-0392",
          openingHours: "入住 15:00 起，退房 11:00 前",
          tips: ["酒店設有室內外溫泉浴場。", "可在酒店或箱根湯本附近餐廳用餐。"],
          category: "transport",
          coordinates: { lat: 35.2324, lng: 139.1051 },
          imageUrl: "https://hakone-japan.com/pre/wp/wp-content/uploads/Yumoto-Fujiya-Hotel_Onsen2-e1594368907215.jpg"
        }
      ]
    },
    {
      date: "1月23日 (週五)",
      summary: "箱根觀光 & 強羅溫泉",
      activities: [
        {
          time: "07:00 - 09:00",
          activity: "晨浴 & 早餐",
          locationName: "湯本富士屋酒店",
          description: "享受清晨溫泉和酒店早餐。",
          extendedDescription: "以清爽的溫泉浴開始新的一天。日式溫泉禮儀：入浴前徹底清洗身體，不要將毛巾帶入浴池。然後享用酒店提供的早餐。",
          address: "神奈川縣足柄下郡箱根町湯本 256-1, 250-0392",
          openingHours: "早餐通常 07:00 - 09:30",
          tips: ["清晨泡湯人較少，體驗更佳。", "11:00 前退房。"],
          category: "food",
          coordinates: { lat: 35.2324, lng: 139.1051 },
          imageUrl: "https://hakone-japan.com/pre/wp/wp-content/uploads/Yumoto-Fujiya-Hotel_Onsen2-e1594368907215.jpg",
          transitToNext: {
            summary: "退房前往強羅",
            destination: "箱根地區",
            options: [
              {
                mode: "taxi",
                name: "自駕",
                duration: "20-30 分鐘",
                instructions: "11:00 前退房，然後開車前往強羅地區。途中可停靠景點。"
              }
            ]
          }
        },
        {
          time: "10:00 - 15:00",
          activity: "箱根觀光",
          locationName: "箱根地區",
          description: "探索箱根的風景名勝 - 大涌谷、蘆之湖、箱根神社。",
          extendedDescription: "箱根可欣賞富士山美景（視天氣而定）、著名的箱根神社及其湖中鳥居、火山活動區大涌谷。沿著風景路線開車，在觀景點停留。可以搭乘箱根空中纜車俯瞰美景。",
          address: "神奈川縣足柄下郡箱根町",
          openingHours: "各景點不同",
          tips: ["大涌谷以火山溫泉煮的黑蛋聞名 - 據說能延年益壽！", "1月常有晴朗的冬日，適合觀賞富士山。", "可在大涌谷或蘆之湖停車場停車。"],
          category: "sightseeing",
          coordinates: { lat: 35.2326, lng: 139.0249 },
          imageUrl: "https://res.cloudinary.com/jnto/image/upload/w_400,h_300,c_fill,f_auto,fl_lossy,q_auto/v1516736684/kanagawa/Kanagawa295_13",
          transitToNext: {
            summary: "開車前往強羅",
            destination: "季之湯雪月花",
            options: [
              {
                mode: "taxi",
                name: "自駕前往強羅",
                duration: "15-20 分鐘",
                instructions: "開車前往強羅地區辦理入住。酒店提供免費停車。",
                imageUrl: "https://images.unsplash.com/photo-1545579133-99bb5ab189bd?w=400&q=80"
              }
            ]
          }
        },
        {
          time: "15:00 - 19:00",
          activity: "酒店入住",
          locationName: "季之湯雪月花",
          description: "入住箱根強羅的豪華溫泉旅館，享受私人風呂。",
          extendedDescription: "歡迎來到季の湯 雪月花，強羅的4星級溫泉旅館。房型為和洋式客房，配有2張單人床。酒店設有多個溫泉浴場，包括露天風呂。入住時間 15:00-19:00。晚餐前先享用酒店設施。",
          address: "神奈川縣足柄下郡箱根町強羅 1300-34, 250-0408",
          openingHours: "入住：15:00-19:00，退房：11:00 前",
          tips: ["酒店提供24小時前台服務和免費停車。", "試試酒店的不同溫泉浴場。", "提早到達可寄存行李。"],
          category: "transport",
          coordinates: { lat: 35.2442, lng: 139.0631 },
          imageUrl: "https://www.img-ikyu.com/contents/caz/dg/guide/acc1/00030981/img/a_ss_01_220201.jpg",
          transitToNext: {
            summary: "酒店晚餐",
            destination: "酒店餐廳",
            options: [
              {
                mode: "walk",
                name: "步行",
                duration: "1 分鐘",
                instructions: "晚餐在酒店餐廳供應。提供日式懷石料理或西式選擇。"
              }
            ]
          }
        },
        {
          time: "19:00 - 21:00",
          activity: "懷石晚餐",
          locationName: "季之湯雪月花餐廳",
          description: "享用住宿包含的精緻日式懷石晚餐。",
          extendedDescription: "可選擇兩種精緻的用餐體驗：「花鳥」提供色彩繽紛的時令懷石料理，採用當地海鮮，傳統多道式呈現（前菜、刺身、八寸烤物、溫物、主菜、飯食、甜點）。或選擇「風月」享用和牛涮涮鍋配壽司。餐點於「雲心庵」的半私人包廂中供應，提供私密用餐體驗。晚餐包含在房價中。",
          address: "神奈川縣足柄下郡箱根町強羅 1300-34, 250-0408",
          openingHours: "晚餐時段：17:30~ 或 20:00~",
          tips: ["入住時選擇晚餐類型（懷石料理或涮涮鍋）。", "穿著舒適即可 - 酒店提供的浴衣是適合的穿著。", "如有食物過敏，請至少提前一天電話通知。", "晚餐後泡溫泉特別放鬆。"],
          category: "food",
          coordinates: { lat: 35.2442, lng: 139.0631 },
          imageUrl: "https://www.img-ikyu.com/contents/common/image/acc1/00030981/0/org/12243111.jpg"
        }
      ]
    },
    {
      date: "1月24日 (週六)",
      summary: "強羅至東京 & 入住 Minn 上野",
      activities: [
        {
          time: "07:00 - 09:00",
          activity: "晨浴 & 早餐",
          locationName: "季之湯雪月花",
          description: "最後一次晨浴和旅館日式早餐。",
          extendedDescription: "享受在強羅溫泉的最後一個早晨。在早餐前再泡一次溫泉。旅館提供傳統日式早餐，包含在住宿費中。11:00 前退房。",
          address: "神奈川縣足柄下郡箱根町強羅 1300-34, 250-0408",
          openingHours: "早餐通常 07:00 - 09:30",
          tips: ["不要錯過清晨溫泉 - 人少更寧靜。", "早餐前先整理行李以節省時間。"],
          category: "food",
          coordinates: { lat: 35.2442, lng: 139.0631 },
          imageUrl: "https://www.img-ikyu.com/contents/caz/dg/guide/acc1/00030981/img/a_ss_01_220201.jpg"
        },
        {
          time: "09:30 - 12:30",
          activity: "開車前往東京 & 還車",
          locationName: "TOKKO 上野站分店",
          description: "退房，風景駕駛前往東京，在上野歸還租車。",
          extendedDescription: "11:00 前從季之湯雪月花退房，駕車前往東京（2-2.5 小時）。路線：國道1號 → 小田原厚木道路 → 東名高速 → 首都高速 → 上野。天氣晴朗時可能看到富士山！過路費約 ¥3,000-4,000。在 TOKKO 上野站分店歸還日產奇駿（09:00-20:00 免費還車，20:01-21:00 額外收費）。",
          address: "東京都台東區東上野 5-7-3 セブンスターマンション上野, 110-0015",
          openingHours: "TOKKO：09:00 - 20:00（免費還車）",
          tips: ["離開箱根前先加滿油 - 還車時油量需與取車時相同。", "使用車載導航查看即時路況。", "如需要可在服務區休息。", "保留還車收據以備查詢。"],
          category: "transport",
          coordinates: { lat: 35.7132, lng: 139.7813 },
          imageUrl: "https://en.tabirai.net/car/vehicle/vehicle-type/images/24_MV_01_20190228110849.jpg",
          transitToNext: {
            summary: "步行至午餐",
            destination: "阿美橫丁",
            options: [
              {
                mode: "walk",
                name: "步行",
                duration: "10 分鐘",
                instructions: "朝 JR 上野站方向走。阿美橫丁沿著山手線鐵軌，在上野和御徒町站之間。"
              }
            ]
          }
        },
        {
          time: "12:30 - 14:30",
          activity: "午餐 & 購物",
          locationName: "阿美橫丁",
          description: "熱鬧的市場街，有街頭美食、新鮮海鮮和平價購物。",
          extendedDescription: "阿美橫丁是沿著山手線鐵軌的熱鬧露天市場。二戰後原是黑市，現在以新鮮海鮮、乾貨、服飾和街頭美食聞名。是午餐的好選擇 - 試試新鮮刺身、章魚燒或烤肉串。",
          address: "東京都台東區上野 4丁目",
          openingHours: "大多數商店 10:00 - 19:00",
          tips: ["很適合淘便宜貨 - 有些攤位可以議價。", "試試新鮮水果或海鮮丼。", "週末很擠 - 注意隨身物品。"],
          category: "food",
          coordinates: { lat: 35.7085, lng: 139.7743 },
          imageUrl: "https://res.cloudinary.com/jnto/image/upload/w_400,h_300,c_fill,f_auto,fl_lossy,q_auto/v1513937117/tokyo/Tokyo2264_6",
          transitToNext: {
            summary: "步行至酒店",
            destination: "Minn 上野",
            options: [
              {
                mode: "walk",
                name: "步行",
                duration: "5-10 分鐘",
                instructions: "從阿美橫丁往東上野方向走。酒店位於東上野 1-19-5。"
              }
            ]
          }
        },
        {
          time: "15:00 - 16:00",
          activity: "酒店入住",
          locationName: "Minn 上野",
          description: "入住 Minn 上野 - 接下來2晚的東京住宿。",
          extendedDescription: "歡迎來到 Minn 上野！房型為高級家庭複式房，配有6張床，最多可住4位成人。酒店提供免費客房 Wi-Fi 和行李寄存。入住時間 15:00 起，退房 10:00 前。不含餐，但上野有無數用餐選擇。",
          address: "東京都台東區東上野 1-19-5, 110-0015",
          openingHours: "入住：15:00，退房：10:00",
          tips: ["提早到達可寄存行李。", "可向前台詢問當地餐廳推薦。", "上野站步行即達，方便前往東京各地。"],
          category: "transport",
          coordinates: { lat: 35.7124, lng: 139.7788 },
          imageUrl: "https://cdn.staytuned.asia/large_003_ad58c361d0.jpg",
          transitToNext: {
            summary: "電車前往澀谷",
            destination: "澀谷地區",
            options: [
              {
                mode: "train",
                name: "JR 山手線或地鐵",
                duration: "30 分鐘",
                cost: "¥200",
                instructions: "從上野站搭乘 JR 山手線（外環）或東京Metro銀座線前往澀谷。",
                officialUrl: "https://www.jreast.co.jp/e/",
                imageUrl: "https://images.unsplash.com/photo-1553531889-e6cf4d692b1b?w=400&q=80"
              }
            ]
          }
        },
        {
          time: "17:00 - 18:30",
          activity: "人潮洶湧",
          locationName: "澀谷十字路口",
          description: "體驗世界上最繁忙的行人穿越道並參觀忠犬八公像。",
          extendedDescription: "尖峰時段每次綠燈有多達 3,000 人穿越。這是有秩序的混亂，也是現代東京的象徵。別忘了參觀位於八公出口外的忠犬八公像，這隻忠犬等待主人長達九年。",
          address: "東京都澀谷區道玄坂 2-2-1",
          openingHours: "24 小時",
          tips: ["Tsutaya 的星巴克視野很好，但很難找到位子。", "傍晚是欣賞霓虹燈的好時間。"],
          category: "sightseeing",
          coordinates: { lat: 35.6595, lng: 139.7004 },
          imageUrl: "https://www.gotokyo.org/en/spot/78/images/78_0153_2_1400x1100.jpg",
          transitToNext: {
            summary: "步行至 Shibuya Sky",
            destination: "Shibuya Scramble Square",
            options: [
              {
                mode: "walk",
                name: "步行",
                duration: "1-2 分鐘",
                instructions: "與車站直接相連。尋找「Shibuya Scramble Square」大樓入口（東側）。"
              }
            ]
          }
        },
        {
          time: "18:30 - 20:00",
          activity: "高空美景",
          locationName: "Shibuya Sky",
          description: "露天展望台，可 360 度欣賞夜晚霓虹閃爍的城市。",
          extendedDescription: "位於 Shibuya Scramble Square 大樓頂層（229 公尺高），這個露天甲板可以說是東京最佳的現代景觀。玻璃角落提供了令人難以置信的拍照機會。到了晚上，「Crossing Light」探照燈會照亮天空 - 非常適合觀賞日落！",
          address: "東京都澀谷區澀谷 2-24-12",
          openingHours: "10:00 - 22:30 (最後入場 21:20)",
          tips: ["門票通常會提前幾天售罄；請線上預訂。", "屋頂甲板不允許攜帶三腳架、帽子或鬆散物品。", "1月下旬日落時間約 17:00。"],
          category: "sightseeing",
          coordinates: { lat: 35.6585, lng: 139.7023 },
          imageUrl: "https://res.cloudinary.com/jnto/image/upload/w_400,h_300,c_fill,f_auto,fl_lossy,q_auto/v1676974929/tokyo/Tokyo_s_id67_8"
        }
      ]
    },
    {
      date: "1月25日 (週日)",
      summary: "淺草、原宿 & 明治神宮",
      activities: [
        {
          time: "09:00 - 10:30",
          activity: "參拜",
          locationName: "淺草寺",
          description: "東京最古老的寺廟，穿越著名的雷門。",
          extendedDescription: "這座東京最古老、色彩最豐富的寺廟建於西元 628 年。雷門巨大的紅燈籠是日本的標誌性象徵。正殿總是擠滿了信徒，將香爐的煙霧撥向自己以祈求健康。距離上野酒店很近 - 搭乘東京Metro銀座線即達。",
          address: "東京都台東區淺草 2-3-1",
          openingHours: "正殿 06:00 - 17:00 (境內全天開放)",
          tips: ["抽一支御神籤（100 日圓）。如果是兇，請把它綁在繩子上以留下厄運。", "盡早（早上 9 點前）參觀以避開大量人群。"],
          category: "sightseeing",
          coordinates: { lat: 35.7148, lng: 139.7967 },
          imageUrl: "https://www.gotokyo.org/en/spot/15/images/main.webp",
          transitToNext: {
            summary: "步行至仲見世",
            destination: "仲見世商店街",
            options: [
              {
                mode: "walk",
                name: "步行",
                duration: "1 分鐘",
                instructions: "從正殿轉身即可。仲見世是直接通往寺廟的購物街。"
              }
            ]
          }
        },
        {
          time: "10:30 - 12:00",
          activity: "小吃 & 購物",
          locationName: "仲見世商店街",
          description: "通往寺廟的傳統商店街，非常適合購買紀念品和小吃。",
          extendedDescription: "一條長 250 公尺的參道，兩旁林立著 89 家小店。這條街已經為遊客服務了幾個世紀。這裡是購買摺扇、浴衣和當地小吃等傳統紀念品的最佳場所。",
          address: "東京都台東區淺草 1-20",
          openingHours: "約 10:00 - 17:00",
          tips: ["請在店門口吃完小吃；邊走邊吃被認為是不禮貌的。", "試試人形燒（人形海綿蛋糕）和波羅麵包。"],
          category: "food",
          coordinates: { lat: 35.7138, lng: 139.7968 },
          imageUrl: "https://res.cloudinary.com/jnto/image/upload/w_400,h_300,c_fill,f_auto,fl_lossy,q_auto/v1551154046/tokyo/sensoji_2",
          transitToNext: {
            summary: "電車前往原宿",
            destination: "明治神宮",
            options: [
              {
                mode: "train",
                name: "東京Metro + JR",
                duration: "35 分鐘",
                cost: "¥250",
                instructions: "從淺草站搭乘東京Metro銀座線至表參道，然後步行至明治神宮或在原宿轉乘JR山手線。",
                officialUrl: "https://www.tokyometro.jp/en/",
                imageUrl: "https://images.unsplash.com/photo-1553531889-e6cf4d692b1b?w=400&q=80"
              }
            ]
          }
        },
        {
          time: "12:30 - 14:00",
          activity: "寧靜漫步",
          locationName: "明治神宮",
          description: "穿過寧靜的森林，前往東京最宏偉的神社。",
          extendedDescription: "這座神社供奉明治天皇和昭憲皇太后，位於市中心一片 70 公頃的森林中。巨大的木製鳥居標誌著進入精神綠洲的入口。這與牆外城市的喧囂形成了鮮明的對比。",
          address: "東京都澀谷區代代木神園町 1-1",
          openingHours: "日出至日落 (1月約 06:40 - 16:20)",
          tips: ["進出鳥居時請鞠躬。", "尋找全國釀酒商捐贈的清酒桶牆。"],
          category: "sightseeing",
          coordinates: { lat: 35.6764, lng: 139.6993 },
          imageUrl: "https://res.cloudinary.com/jnto/image/upload/w_400,h_300,c_fill,f_auto,fl_lossy,q_auto/v1513945803/tokyo/Tokyo2331_8",
          transitToNext: {
            summary: "步行至原宿",
            destination: "竹下通",
            options: [
              {
                mode: "walk",
                name: "步行",
                duration: "5 分鐘",
                instructions: "從原宿口離開。過馬路往原宿站方向，即可找到竹下通入口。"
              }
            ]
          }
        },
        {
          time: "14:00 - 15:30",
          activity: "街頭時尚",
          locationName: "竹下通",
          description: "探索原宿時尚和可麗餅店的多彩中心。",
          extendedDescription: "日本「卡哇伊」（可愛）文化的發源地。這條 400 公尺長的街道擠滿了精品店、拍貼機店和可麗餅攤位。期待吵雜的流行音樂、彩虹棉花糖和世界上最獨特的街頭時尚。",
          address: "東京都澀谷區神宮前 1-17",
          openingHours: "商店通常 10:00 - 20:00",
          tips: ["嘗試 Marion Crepes 或 Santa Monica Crepes 的可麗餅。", "週末來訪可以看到當地人穿著 Cosplay 或哥德蘿莉時尚。"],
          category: "shopping",
          coordinates: { lat: 35.6716, lng: 139.7032 },
          imageUrl: "https://www.gotokyo.org/en/spot/48/images/main.webp",
          transitToNext: {
            summary: "電車前往晴空塔",
            destination: "東京晴空塔",
            options: [
              {
                mode: "train",
                name: "JR + 東京Metro",
                duration: "40 分鐘",
                cost: "¥350",
                instructions: "從原宿站搭乘JR山手線至上野，轉乘東京Metro銀座線至淺草，再轉東武晴空塔線至晴空塔站。",
                officialUrl: "https://www.jreast.co.jp/e/",
                imageUrl: "https://images.unsplash.com/photo-1553531889-e6cf4d692b1b?w=400&q=80"
              }
            ]
          }
        },
        {
          time: "16:30 - 18:30",
          activity: "現代地標",
          locationName: "東京晴空塔",
          description: "參觀日本最高的建築，享受購物和日落美景。",
          extendedDescription: "這座廣播塔高 634 公尺，是日本最高的建築。350 公尺的天望甲板和 450 公尺的天望迴廊提供令人眩暈的景色。底部的東京晴空街道是一個巨大的購物中心，設有水族館和天文館。正好是觀賞日落的好時機！",
          address: "東京都墨田區押上 1-1-2",
          openingHours: "10:00 - 21:00",
          tips: ["外國遊客可以購買「快速晴空塔門票」以跳過排隊。", "340 樓的玻璃地板區非常刺激。", "1月下旬日落時間約 17:00。"],
          category: "sightseeing",
          coordinates: { lat: 35.7101, lng: 139.8107 },
          imageUrl: "https://res.cloudinary.com/jnto/image/upload/w_400,h_300,c_fill,f_auto,fl_lossy,q_auto/v1513936454/tokyo/Tokyo2307_1"
        }
      ]
    },
    {
      date: "1月26日 (週一)",
      summary: "最後一天 & 航班 UO871",
      activities: [
        {
          time: "07:00 - 09:30",
          activity: "新鮮海鮮",
          locationName: "築地場外市場",
          description: "清晨前往享用新鮮的壽司早餐和街頭美食。",
          extendedDescription: "雖然批發拍賣已移至豐洲，但築地場外市場仍然是東京美食界的靈魂。數百個擁擠的攤位出售新鮮海鮮、農產品和廚具。這裡是世界上享用壽司早餐的最佳地點。行李先寄存在酒店，然後回去退房。",
          address: "東京都中央區築地 4-16-2",
          openingHours: "05:00 - 14:00 (因店而異)",
          tips: ["試試玉子燒串（甜的厚蛋燒）。", "出門前先把行李留在酒店。", "大多數商店下午很早就關門，所以早去選擇更多。"],
          category: "food",
          coordinates: { lat: 35.6655, lng: 139.7707 },
          imageUrl: "https://res.cloudinary.com/jnto/image/upload/w_400,h_300,c_fill,f_auto,fl_lossy,q_auto/v1646013708/tokyo/H_00399_002",
          transitToNext: {
            summary: "返回酒店",
            destination: "Minn 上野",
            options: [
              {
                mode: "train",
                name: "東京Metro日比谷線",
                duration: "20 分鐘",
                cost: "¥200",
                instructions: "從築地站搭乘日比谷線到上野站，然後步行至酒店。",
                officialUrl: "https://www.tokyometro.jp/en/",
                imageUrl: "https://images.unsplash.com/photo-1553531889-e6cf4d692b1b?w=400&q=80"
              }
            ]
          }
        },
        {
          time: "09:30 - 13:00",
          activity: "退房 & 最後採購",
          locationName: "東京站",
          description: "從 Minn 上野退房，然後在東京站購買最後的紀念品。",
          extendedDescription: "返回 Minn 上野，10:00 前完成退房。再次確認所有物品。搭乘 JR 山手線從上野至東京站（10 分鐘，¥170）。參觀東京動漫人物街購買動漫商品，大丸百貨購買高級甜點（KitKat、東京香蕉），或在東京拉麵街吃個快餐。使用置物櫃寄存行李購物。約 13:00 搭乘成田特快 (N'EX)（55-60 分鐘，¥3,070），於 14:30 抵達成田 T2。",
          address: "東京都千代田區丸之內 1-9-1",
          openingHours: "商店通常 10:00 - 20:00",
          tips: ["10:00 前從 Minn 上野退房。", "在東京站使用置物櫃寄存行李購物。", "提前預訂成田特快車票。", "請確保在第二航廈站下車，而不是第一航廈。", "車站的便當非常適合在火車上享用。"],
          category: "shopping",
          coordinates: { lat: 35.6812, lng: 139.7671 },
          imageUrl: "https://res.cloudinary.com/jnto/image/upload/w_400,h_300,c_fill,f_auto,fl_lossy,q_auto/v1513936386/tokyo/Tokyo2258_24",
          transitToNext: {
            summary: "成田特快前往機場",
            destination: "成田機場 T2",
            options: [
              {
                mode: "train",
                name: "成田特快 (N'EX)",
                duration: "55-60 分鐘",
                cost: "¥3,070",
                instructions: "約 13:00 從東京站地下 5 樓月台出發。14:30 抵達成田 T2。上至 3 樓出發大廳，尋找香港快運櫃台（通常是 I 或 J 區）。",
                officialUrl: "https://www.jreast.co.jp/multi/en/nex/",
                imageUrl: "https://images.unsplash.com/photo-1553531889-e6cf4d692b1b?w=400&q=80"
              }
            ]
          }
        },
        {
          time: "16:55",
          activity: "返程",
          locationName: "航班 UO871",
          description: "飛回香港 (HKG)。抵達時間 21:25。",
          extendedDescription: "搭乘香港快運 UO871 航班。飛行時間約 5 小時 30 分鐘，於 21:25 降落在香港第一航廈。",
          address: "成田國際機場第二航廈",
          openingHours: "起飛 16:55",
          tips: ["祝您旅途愉快！"],
          category: "transport",
          coordinates: { lat: 35.7719, lng: 140.3928 },
          imageUrl: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&q=80"
        }
      ]
    }
  ]
};