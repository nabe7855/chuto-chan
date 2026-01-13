
import { Staff, News, BlogEntry } from './types';

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export const STAFF_LIST: Staff[] = [
  {
    id: '1',
    name: '酒井 さかい',
    age: 22,
    height: 155,
    bust: 'B85(D)',
    waist: 58,
    hip: 84,
    tags: ['新人', '美肌'],
    imageUrl: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&h=600&q=80',
    status: 'available',
    prices: [
      { duration: 60, price: 12000 },
      { duration: 90, price: 15000 },
      { duration: 120, price: 18000 }
    ],
    weeklySchedule: DAYS.map(d => ({ day: d, time: d === 'Sun' ? '休み' : '10:00-19:00' }))
  },
  {
    id: '2',
    name: '汐谷 しおたに',
    age: 24,
    height: 161,
    bust: 'B88(E)',
    waist: 57,
    hip: 84,
    tags: ['清楚', 'モデル系'],
    imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&h=600&q=80',
    status: 'waiting',
    waitingTime: '20分待ち',
    isNew: true,
    prices: [
      { duration: 60, price: 13000 },
      { duration: 90, price: 16000 },
      { duration: 120, price: 20000 }
    ],
    weeklySchedule: DAYS.map(d => ({ day: d, time: '11:00-20:00' }))
  },
  {
    id: '3',
    name: '神崎 かんざき',
    age: 20,
    height: 158,
    bust: 'B79(C)',
    waist: 54,
    hip: 80,
    tags: ['女子大生', '初入店'],
    imageUrl: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=400&h=600&q=80',
    status: 'in-session',
    prices: [
      { duration: 60, price: 13000 },
      { duration: 90, price: 16000 },
      { duration: 120, price: 20000 }
    ],
    weeklySchedule: DAYS.map(d => ({ day: d, time: d === 'Tue' || d === 'Thu' ? '休み' : '18:00-24:00' }))
  },
  {
    id: '4',
    name: '西山 にしやま',
    age: 28,
    height: 156,
    bust: 'B83(B)',
    waist: 57,
    hip: 83,
    tags: ['若妻', '癒やし'],
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&h=600&q=80',
    status: 'available',
    prices: [
      { duration: 60, price: 11000 },
      { duration: 90, price: 14000 },
      { duration: 120, price: 17000 }
    ],
    weeklySchedule: DAYS.map(d => ({ day: d, time: '10:00-17:00' }))
  },
  {
    id: '5',
    name: '北条 ほうじょう',
    age: 25,
    height: 159,
    bust: 'B92(G)',
    waist: 60,
    hip: 88,
    tags: ['新人', 'グラマー'],
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&h=600&q=80',
    status: 'off-duty',
    prices: [
      { duration: 60, price: 12000 },
      { duration: 90, price: 15000 },
      { duration: 120, price: 18000 }
    ],
    weeklySchedule: DAYS.map(d => ({ day: d, time: '12:00-21:00' }))
  },
  {
    id: '6',
    name: '中野 なかの',
    age: 29,
    height: 162,
    bust: 'B82(C)',
    waist: 56,
    hip: 82,
    tags: ['美人お姉さん', '経験豊富'],
    imageUrl: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=400&h=600&q=80',
    status: 'available',
    prices: [
      { duration: 60, price: 13000 },
      { duration: 90, price: 16000 },
      { duration: 120, price: 20000 }
    ],
    weeklySchedule: DAYS.map(d => ({ day: d, time: '15:00-02:00' }))
  }
];

export const NEWS_LIST: News[] = [
  {
    id: '1',
    date: '2025.01.13',
    title: '【重要】営業時間変更のお知らせ',
    content: '本日から営業時間が24時までとなります。'
  },
  {
    id: '2',
    date: '2025.01.12',
    title: '20代の新人キャスト2名入店！',
    content: '若さと美しさを兼ね備えた新人キャストが仲間入りしました。'
  }
];

export const BLOG_ENTRIES: BlogEntry[] = [
  {
    id: '1',
    staffName: '酒井 さかい',
    title: '学校の帰り道...',
    date: '1月13日 08:40',
    imageUrl: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=200&h=200&q=80'
  },
  {
    id: '2',
    staffName: '神崎 かんざき',
    title: 'テストが終わりました！',
    date: '1月13日 08:27',
    imageUrl: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=200&h=200&q=80'
  }
];
