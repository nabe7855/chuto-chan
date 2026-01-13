
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b-4 border-pink-200">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-serif font-bold text-pink-600 tracking-widest flex items-center justify-center md:justify-start">
            <span className="text-5xl mr-2">極楽浄土</span>
            <span className="text-sm font-sans font-normal text-pink-400 block md:inline mt-2 md:mt-0">宇都宮・デリヘル</span>
          </h1>
        </div>
        
        <div className="flex flex-col items-center md:items-end">
          <div className="text-pink-600 font-bold text-2xl mb-1">
            TEL.028-XXX-XXXX
          </div>
          <div className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-medium">
            営業時間 10:00 - 翌 2:30 終了
          </div>
          <p className="text-xs text-pink-400 mt-1">(受付時間 9:30 - 24:30 迄)</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
