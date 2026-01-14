import { Calendar, Heart, MessageCircle, X } from "lucide-react";
import React from "react";
import { BLOG_ENTRIES } from "../constants";
import { Staff } from "../types";

interface StaffDetailModalProps {
  staff: Staff;
  onClose: () => void;
}

const StaffDetailModal: React.FC<StaffDetailModalProps> = ({
  staff,
  onClose,
}) => {
  const latestDiary = BLOG_ENTRIES.find(
    (entry) => entry.staffName === staff.name
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-300">
      <div
        className="relative bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl flex flex-col md:flex-row animate-in zoom-in duration-300 slide-in-from-bottom-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/80 backdrop-blur rounded-full text-pink-600 hover:bg-pink-100 transition-colors shadow-lg"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Left Side: Photo & Quick Info */}
        <div className="md:w-1/2 relative bg-pink-50">
          <img
            src={staff.imageUrl}
            alt={staff.name}
            className="w-full h-full min-h-[400px] object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
            <h2 className="text-3xl font-serif font-bold mb-1">
              {staff.name} ({staff.age})
            </h2>
            <div className="flex gap-2 mb-2">
              {staff.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-pink-600/80 text-[10px] px-2 py-0.5 rounded-full backdrop-blur-sm border border-pink-400/30"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-sm font-medium opacity-90">
              {staff.height}cm / {staff.bust} / W{staff.waist} / H{staff.hip}
            </p>
          </div>
        </div>

        {/* Right Side: Details & Blog */}
        <div className="md:w-1/2 p-6 flex flex-col gap-6">
          {/* Personal Message */}
          <section>
            <div className="flex items-center gap-2 mb-3 text-pink-700 font-bold border-b border-pink-100 pb-2">
              <Heart className="w-4 h-4 fill-pink-500 text-pink-500" />
              <span>メッセージ</span>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed italic">
              「{staff.message}」
            </p>
          </section>

          {/* Recent Diary */}
          <section className="flex-1">
            <div className="flex items-center gap-2 mb-3 text-pink-700 font-bold border-b border-pink-100 pb-2">
              <MessageCircle className="w-4 h-4" />
              <span>最新のつぶやき</span>
            </div>
            {latestDiary ? (
              <div className="bg-pink-50/50 p-4 rounded-xl border border-pink-100 relative group overflow-hidden">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-pink-800 text-sm">
                    {latestDiary.title}
                  </h4>
                  <span className="text-[10px] text-pink-400 whitespace-nowrap">
                    {latestDiary.date}
                  </span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed line-clamp-4">
                  {latestDiary.content}
                </p>
                <div className="mt-3 flex justify-end">
                  <button className="text-[10px] text-pink-600 font-bold hover:underline">
                    もっと読む &rarr;
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center py-8 text-gray-400 text-xs italic">
                まだ投稿がありません
              </div>
            )}
          </section>

          {/* Schedule Summary */}
          <section>
            <div className="flex items-center gap-2 mb-3 text-pink-700 font-bold border-b border-pink-100 pb-2">
              <Calendar className="w-4 h-4" />
              <span>出勤予定</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {staff.weeklySchedule.slice(0, 3).map((s) => (
                <div
                  key={s.day}
                  className="bg-white px-2 py-1 rounded border border-pink-50 text-[10px] shadow-sm"
                >
                  <span className="font-bold text-pink-600 mr-1">{s.day}</span>
                  <span className="text-gray-500">{s.time}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Action Button */}
          <button className="w-full py-4 bg-gradient-to-r from-pink-500 to-rose-600 text-white font-bold rounded-xl shadow-lg hover:shadow-pink-200/50 transition-all active:scale-95">
            今すぐ指名予約する
          </button>
        </div>
      </div>
    </div>
  );
};

export default StaffDetailModal;
