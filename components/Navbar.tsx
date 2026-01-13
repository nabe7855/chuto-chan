
import React from 'react';

const Navbar: React.FC = () => {
  const navItems = [
    { label: 'トップ', icon: '🏠', href: '#' },
    { label: 'システム', icon: '📋', href: '#system' },
    { label: '在籍キャスト', icon: '👥', href: '#staff' },
    { label: '出勤予定', icon: '📅', href: '#schedule' },
    { label: '日記', icon: '📝', href: '#' },
    { label: '求人情報', icon: '💼', href: '#' },
  ];

  return (
    <nav className="bg-pink-500 shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center md:justify-between">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="flex-1 min-w-[100px] text-center py-4 px-2 text-white font-bold hover:bg-pink-600 transition-colors border-r border-pink-400 last:border-r-0 flex flex-col items-center"
          >
            <span className="text-xl mb-1">{item.icon}</span>
            <span className="text-sm">{item.label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
