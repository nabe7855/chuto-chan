
import React from 'react';

const SystemSection: React.FC = () => {
  return (
    <section id="system" className="bg-white p-8 rounded-xl shadow-md border border-pink-100">
      <h2 className="text-3xl font-serif font-bold text-pink-700 mb-8 flex items-center gap-3">
        <span className="bg-pink-500 text-white p-1 rounded">📋</span>
        ご利用システム
      </h2>
      
      <div className="space-y-10">
        <div>
          <h3 className="text-xl font-bold text-pink-600 mb-4 border-b border-pink-100 pb-2">基本コース料金</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { time: '60分', price: '12,000円', label: 'ショート' },
              { time: '90分', price: '16,000円', label: 'スタンダード' },
              { time: '120分', price: '20,000円', label: 'ロング' }
            ].map(item => (
              <div key={item.time} className="bg-pink-50 p-6 rounded-lg text-center border border-pink-200">
                <span className="text-xs text-pink-400 font-bold block mb-1">{item.label}</span>
                <div className="text-2xl font-bold text-gray-800">{item.time}</div>
                <div className="text-3xl font-serif font-bold text-red-500 mt-2">{item.price}</div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-4 italic">※別途、交通費（1,000円〜）がかかる場合がございます。</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-bold text-pink-600 mb-3">オプション料金</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex justify-between border-b border-pink-50 py-2">
                <span>本指名料</span>
                <span className="font-bold text-pink-600">2,000円</span>
              </li>
              <li className="flex justify-between border-b border-pink-50 py-2">
                <span>場内指名料</span>
                <span className="font-bold text-pink-600">1,000円</span>
              </li>
              <li className="flex justify-between border-b border-pink-50 py-2">
                <span>写真指名料</span>
                <span className="font-bold text-pink-600">1,000円</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-pink-600 mb-3">ご利用にあたって</h3>
            <ul className="space-y-2 text-xs text-gray-500 list-disc pl-4">
              <li>18歳未満の方、高校生の方のご利用はお断りしております。</li>
              <li>過度な飲酒をされている方のご利用はお断りいたします。</li>
              <li>暴力団関係者、同業者の方のご利用は固くお断りいたします。</li>
              <li>無断キャンセルは次回以降のご予約をお断りする場合がございます。</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemSection;
