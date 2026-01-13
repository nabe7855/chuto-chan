
import React from 'react';
import { Staff } from '../types';

interface ScheduleGridProps {
  staffList: Staff[];
}

const ScheduleGrid: React.FC<ScheduleGridProps> = ({ staffList }) => {
  const days = ['月', '火', '水', '木', '金', '土', '日'];
  const dayEn = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  return (
    <section id="schedule" className="bg-white p-8 rounded-xl shadow-md border border-pink-100">
      <h2 className="text-3xl font-serif font-bold text-pink-700 mb-8 flex items-center gap-3">
        <span className="bg-pink-500 text-white p-1 rounded">📅</span>
        出勤予定表
      </h2>
      
      <div className="overflow-x-auto">
        <table className="w-full min-w-[800px] border-collapse">
          <thead>
            <tr>
              <th className="p-4 bg-pink-50 border border-pink-100 text-pink-600 font-bold w-32">キャスト</th>
              {days.map((day, i) => (
                <th key={day} className={`p-4 border border-pink-100 font-bold ${day === '日' ? 'text-red-500' : day === '土' ? 'text-blue-500' : 'text-gray-600'}`}>
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {staffList.map((staff) => (
              <tr key={staff.id}>
                <td className="p-4 border border-pink-100 text-center">
                  <div className="flex flex-col items-center">
                    <img src={staff.imageUrl} alt="" className="w-12 h-12 rounded-full object-cover mb-1 border border-pink-200" />
                    <span className="text-sm font-bold text-pink-500">{staff.name.split(' ')[0]}</span>
                  </div>
                </td>
                {dayEn.map((d) => {
                  const schedule = staff.weeklySchedule.find(s => s.day === d);
                  const isOff = schedule?.time === '休み';
                  return (
                    <td key={d} className={`p-4 border border-pink-100 text-center text-xs ${isOff ? 'bg-gray-50 text-gray-300' : 'text-gray-600'}`}>
                      {schedule?.time || '-'}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ScheduleGrid;
