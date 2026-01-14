"use client";

import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import ScheduleGrid from "@/components/ScheduleGrid";
import Sidebar from "@/components/Sidebar";
import StaffCard from "@/components/StaffCard";
import StaffDetailModal from "@/components/StaffDetailModal";
import SystemSection from "@/components/SystemSection";
import { NEWS_LIST, STAFF_LIST } from "@/constants";
import { Staff } from "@/types";
import React, { useState } from "react";

const App: React.FC = () => {
  const [selectedStaff, setSelectedStaff] = useState<Staff | null>(null);
  const workingToday = STAFF_LIST.filter((s) => s.status !== "off-duty");
  const onHolidayToday = STAFF_LIST.filter((s) => s.status === "off-duty");

  return (
    <div className="min-h-screen pb-12">
      <Header />
      <Navbar />

      {/* Ticker */}
      <div className="bg-pink-600 text-white py-2 overflow-hidden whitespace-nowrap border-b border-pink-400">
        <div className="marquee-content font-bold text-sm">
          🌟 新規キャスト入店キャンペーン実施中！指名料無料！ 🌟
          2025年も極上の癒やしを... 🌟 東京エリアNo.1の満足度を目指します！ 🌟
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-4 mt-8 space-y-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Column */}
          <div className="flex-1 space-y-12">
            {/* Real-time Attendance Status */}
            <section id="status">
              <div className="flex items-center gap-2 mb-6">
                <span className="bg-red-500 text-white px-2 py-1 text-xs font-bold rounded animate-pulse">
                  LIVE
                </span>
                <h2 className="text-xl font-serif font-bold text-pink-700">
                  在籍キャスト出勤状況
                </h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 overflow-x-auto pb-4">
                {workingToday.map((staff) => (
                  <div
                    key={staff.id}
                    className="min-w-[150px] relative group cursor-pointer"
                    onClick={() => setSelectedStaff(staff)}
                  >
                    <div className="relative rounded-lg overflow-hidden shadow-md border-2 border-pink-100">
                      <img
                        src={staff.imageUrl}
                        alt=""
                        className="w-full aspect-square object-cover"
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-black/60 p-2 text-center">
                        <p className="text-xs text-white font-bold mb-1">
                          {staff.name.split(" ")[0]}
                        </p>
                        <span
                          className={`text-[10px] px-2 py-0.5 rounded-full font-bold shadow-sm ${
                            staff.status === "available"
                              ? "bg-green-500 text-white"
                              : staff.status === "waiting"
                              ? "bg-red-500 text-white"
                              : "bg-pink-400 text-white"
                          }`}
                        >
                          {staff.status === "available"
                            ? "本日案内OK"
                            : staff.status === "waiting"
                            ? staff.waitingTime
                            : "案内中"}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* System Information */}
            <SystemSection />

            {/* News Section */}
            <section
              id="news"
              className="bg-white p-6 rounded-xl shadow-sm border border-pink-100"
            >
              <h2 className="text-xl font-serif font-bold text-pink-700 mb-4 pb-2 border-b border-pink-100">
                新着情報 & お知らせ
              </h2>
              <div className="space-y-4 h-48 overflow-y-auto pr-2 custom-scrollbar">
                {NEWS_LIST.map((news) => (
                  <div
                    key={news.id}
                    className="border-b border-pink-50 pb-3 last:border-0"
                  >
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-xs text-pink-400 font-mono">
                        {news.date}
                      </span>
                      <span className="bg-pink-100 text-pink-600 text-[10px] px-1.5 rounded font-bold">
                        INFO
                      </span>
                    </div>
                    <h3 className="text-sm font-bold text-gray-800">
                      {news.title}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">{news.content}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Staff Grid */}
            <section id="staff">
              <h2 className="text-2xl font-serif font-bold text-white bg-pink-500 px-6 py-3 rounded-t-xl text-center shadow">
                本日の出勤予定
              </h2>
              <div className="bg-pink-50 p-6 rounded-b-xl border-x border-b border-pink-200">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {workingToday.map((staff) => (
                    <StaffCard
                      key={staff.id}
                      staff={staff}
                      onClick={() => setSelectedStaff(staff)}
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* Schedule Table */}
            <ScheduleGrid staffList={STAFF_LIST} />

            {/* Today's Holiday */}
            {onHolidayToday.length > 0 && (
              <section className="bg-white/50 p-6 rounded-xl border-2 border-dashed border-pink-200">
                <h3 className="text-sm font-bold text-pink-400 text-center mb-6 uppercase tracking-widest">
                  本日のお休み
                </h3>
                <div className="flex flex-wrap justify-center gap-6 opacity-60">
                  {onHolidayToday.map((staff) => (
                    <div
                      key={staff.id}
                      className="text-center group cursor-pointer"
                      onClick={() => setSelectedStaff(staff)}
                    >
                      <img
                        src={staff.imageUrl}
                        alt=""
                        className="w-20 h-20 rounded-full object-cover grayscale mb-2 border-2 border-gray-200"
                      />
                      <p className="text-xs font-bold text-gray-500">
                        {staff.name.split(" ")[0]}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar Column */}
          <div className="w-full lg:w-72 space-y-8">
            <Sidebar />

            {/* Recruit Banner */}
            <div className="bg-gradient-to-br from-pink-500 to-rose-600 p-6 rounded-xl text-white text-center shadow-lg transform transition-transform hover:rotate-1">
              <h3 className="text-xl font-bold mb-2">キャスト大募集！</h3>
              <p className="text-xs mb-4 opacity-90">
                未経験者歓迎・高収入
                <br />
                あなたの個性を活かしませんか？
              </p>
              <button className="bg-white text-pink-600 font-bold py-2 px-6 rounded-full text-sm hover:bg-pink-50">
                詳細はこちら
              </button>
            </div>

            {/* Promotion Box */}
            <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
              <h4 className="text-yellow-700 font-bold text-sm mb-2">
                ✨ 特別イベント
              </h4>
              <p className="text-xs text-yellow-600 leading-relaxed">
                雨の日限定！
                <br />
                60分以上のコースで
                <br />
                <strong>1,000円割引</strong>サービス中！
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-20 bg-pink-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          <div>
            <h2 className="text-3xl font-serif font-bold mb-4">極楽浄土</h2>
            <p className="text-xs text-pink-300 leading-relaxed">
              当店は宇都宮エリアで最高級の癒やしを提供するデリバリー型リラクゼーションサービスです。
              熟練の技術と真心で、極上のひとときをお約束いたします。
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-bold border-b border-pink-800 pb-2 mb-2">
              Content
            </h3>
            <a
              href="#system"
              className="text-sm text-pink-200 hover:text-white"
            >
              ご利用料金
            </a>
            <a href="#staff" className="text-sm text-pink-200 hover:text-white">
              在籍キャスト
            </a>
            <a
              href="#schedule"
              className="text-sm text-pink-200 hover:text-white"
            >
              出勤カレンダー
            </a>
            <a href="#" className="text-sm text-pink-200 hover:text-white">
              キャスト募集
            </a>
          </div>
          <div>
            <h3 className="font-bold border-b border-pink-800 pb-2 mb-2">
              Location
            </h3>
            <p className="text-sm text-pink-200">東京都XXXX</p>
            <p className="text-sm text-pink-200 mt-2">TEL: 028-XXX-XXXX</p>
            <div className="mt-6 p-2 bg-white/10 rounded text-[10px] text-pink-100 italic">
              ※当店は性的なサービスを目的とした店舗ではありません。
            </div>
          </div>
        </div>
        <div className="text-center mt-12 text-[10px] text-pink-500 tracking-widest uppercase">
          &copy; 2025 GOKURAKU JODO ALL RIGHTS RESERVED.
        </div>
      </footer>

      {/* Staff Detail Modal */}
      {selectedStaff && (
        <StaffDetailModal
          staff={selectedStaff}
          onClose={() => setSelectedStaff(null)}
        />
      )}
    </div>
  );
};

export default App;
