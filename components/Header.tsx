import React from 'react';
import { Language, Theme } from '../types';
import { Sun, Moon, Mountain } from 'lucide-react';

interface HeaderProps {
  theme: Theme;
  setTheme: (t: Theme) => void;
  language: Language;
  setLanguage: (l: Language) => void;
}

const Header: React.FC<HeaderProps> = ({ theme, setTheme, language, setLanguage }) => {
  return (
    <header className="sticky top-0 z-50 w-full bg-[var(--hakone-bg)]/95 backdrop-blur-md border-b border-[var(--hakone-border)] transition-all duration-500">
      <div className="max-w-4xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Hakone Branding - Torii Gate Inspired */}
        <div className="flex items-center gap-4">
          {/* Torii Gate Logo */}
          <div className="relative flex flex-col items-center">
            {/* Top bar of torii */}
            <div className="w-12 h-1.5 bg-[var(--hakone-torii)] rounded-sm" />
            {/* Second bar */}
            <div className="w-10 h-1 bg-[var(--hakone-torii)] mt-0.5 rounded-sm" />
            {/* Pillars */}
            <div className="flex justify-between w-10 mt-0.5">
              <div className="w-1.5 h-5 bg-[var(--hakone-torii)] rounded-sm" />
              <div className="w-1.5 h-5 bg-[var(--hakone-torii)] rounded-sm" />
            </div>
            {/* Kanji inside */}
            <span className="absolute top-3 text-[10px] font-serif-jp font-bold text-[var(--hakone-torii)]">
              箱
            </span>
          </div>

          {/* Title */}
          <div className="flex flex-col">
            <h1 className="text-xl font-bold font-serif-jp tracking-wider text-[var(--hakone-ink)]">
              <span className="text-[var(--hakone-forest)]">箱根</span>
              <span className="font-light text-[var(--hakone-ink-light)] ml-1">Hakone</span>
            </h1>
            <span className="text-[9px] tracking-[0.25em] text-[var(--hakone-ink-light)] uppercase font-medium flex items-center gap-1">
              <Mountain size={10} className="text-[var(--hakone-forest)]" />
              Travel Planner
            </span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-5">
          {/* Language Toggle */}
          <button
            onClick={() => setLanguage(language === 'en' ? 'zh-TW' : 'en')}
            className="relative px-3 py-1.5 text-sm font-medium tracking-wide text-[var(--hakone-ink-light)] hover:text-[var(--hakone-forest)] transition-colors group"
            aria-label="Toggle Language"
          >
            <span className="font-serif-jp">
              {language === 'en' ? '中文' : 'ENG'}
            </span>
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[var(--hakone-forest)] transition-all duration-300 group-hover:w-full" />
          </button>

          {/* Divider */}
          <div className="w-px h-5 bg-[var(--hakone-border)]" />

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-full text-[var(--hakone-ink-light)] hover:text-[var(--hakone-gold)] hover:bg-[var(--hakone-mist)] transition-all duration-300"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? (
              <Moon size={18} strokeWidth={1.5} className="transition-transform hover:rotate-12" />
            ) : (
              <Sun size={18} strokeWidth={1.5} className="transition-transform hover:rotate-45" />
            )}
          </button>
        </div>
      </div>

      {/* Subtle decorative line - like mist */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--hakone-forest)]/20 to-transparent" />
    </header>
  );
};

export default Header;
