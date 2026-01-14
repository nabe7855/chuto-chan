import React from "react";
import { Staff } from "../types";

interface StaffCardProps {
  staff: Staff;
  onClick?: () => void;
}

const StaffCard: React.FC<StaffCardProps> = ({ staff, onClick }) => {
  const isOff = staff.status === "off-duty";
  const isInSession = staff.status === "in-session";

  return (
    <div
      onClick={onClick}
      className={`bg-white rounded-lg shadow-md overflow-hidden border border-pink-100 transition-transform hover:scale-[1.02] relative cursor-pointer ${
        isOff ? "opacity-60 grayscale" : ""
      }`}
    >
      <div className="relative">
        <img
          src={staff.imageUrl}
          alt={staff.name}
          className="w-full aspect-[3/4] object-cover"
        />

        {/* Status Overlays */}
        {isInSession && (
          <div className="absolute inset-0 bg-pink-900/40 flex items-center justify-center">
            <span className="bg-pink-600 text-white px-4 py-1 font-bold rounded-full text-lg shadow-lg animate-pulse">
              案内中
            </span>
          </div>
        )}

        <div className="absolute top-2 right-2 flex flex-col gap-1">
          {staff.isNew && (
            <span className="bg-yellow-400 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">
              NEW
            </span>
          )}
          {staff.status === "waiting" && (
            <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">
              {staff.waitingTime}
            </span>
          )}
          {staff.status === "available" && (
            <span className="bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">
              即案内OK
            </span>
          )}
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
          <div className="flex gap-1">
            {staff.tags.map((tag) => (
              <span
                key={tag}
                className="bg-pink-600 text-white text-[10px] px-2 py-0.5 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="p-3">
        <div className="text-center mb-2">
          <h3 className="text-pink-600 font-bold text-lg leading-tight">
            {staff.name} ({staff.age})
          </h3>
          <p className="text-xs text-gray-500">
            {staff.height}cm {staff.bust}, W{staff.waist}, H{staff.hip}
          </p>
        </div>

        <div className="space-y-1">
          {staff.prices.slice(0, 3).map((p) => (
            <div
              key={p.duration}
              className="flex justify-between items-center text-sm border-b border-pink-50 pb-1"
            >
              <span className="bg-pink-100 text-pink-700 px-2 rounded-sm font-medium">
                {p.duration}分
              </span>
              <span className="text-red-500 font-bold">
                {p.price.toLocaleString()}円
              </span>
            </div>
          ))}
        </div>

        <button
          disabled={isOff}
          className={`w-full mt-3 py-2 rounded font-bold text-sm transition-colors shadow-sm ${
            isOff
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-pink-500 text-white hover:bg-pink-600"
          }`}
        >
          {isOff ? "本日はお休み" : "詳細を見る / 予約"}
        </button>
      </div>
    </div>
  );
};

export default StaffCard;
