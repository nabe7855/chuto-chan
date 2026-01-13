
import React from 'react';
import { BLOG_ENTRIES } from '../constants';

const Sidebar: React.FC = () => {
  return (
    <aside className="space-y-6">
      <div className="bg-white p-4 rounded-lg shadow border border-pink-100">
        <h2 className="text-pink-600 font-bold border-l-4 border-pink-500 pl-2 mb-4">キャスト日記</h2>
        <div className="space-y-4">
          {BLOG_ENTRIES.map((entry) => (
            <div key={entry.id} className="flex gap-3 group cursor-pointer">
              <img src={entry.imageUrl} alt="" className="w-16 h-16 rounded object-cover flex-shrink-0" />
              <div className="min-w-0">
                <p className="text-xs text-gray-400">{entry.date}</p>
                <p className="text-sm font-bold text-pink-500 truncate group-hover:text-pink-600">{entry.staffName}</p>
                <p className="text-xs text-gray-600 line-clamp-2">{entry.title}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="w-full mt-4 text-xs text-pink-400 hover:text-pink-500 font-medium text-center">
          もっと見る →
        </button>
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow border border-pink-100">
        <h2 className="text-pink-600 font-bold border-l-4 border-pink-500 pl-2 mb-4">マイページ</h2>
        <div className="space-y-2">
          <input type="text" placeholder="ID" className="w-full text-sm p-2 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-pink-300" />
          <input type="password" placeholder="Password" className="w-full text-sm p-2 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-pink-300" />
          <button className="w-full bg-pink-400 text-white py-2 rounded text-sm font-bold shadow-sm hover:bg-pink-500">ログイン</button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
