import { BlogEntry, News, Staff } from "./types";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export const STAFF_LIST: Staff[] = [
  {
    id: "1",
    name: "モモ",
    age: 22,
    height: 155,
    bust: "B85(D)",
    waist: 58,
    hip: 84,
    tags: ["新人", "美肌"],
    imageUrl: "/キャスト１.png",
    status: "available",
    prices: [
      { duration: 60, price: 12000 },
      { duration: 90, price: 15000 },
      { duration: 120, price: 18000 },
    ],
    weeklySchedule: DAYS.map((d) => ({
      day: d,
      time: d === "Sun" ? "休み" : "10:00-19:00",
    })),
    message: "一生懸命頑張ります！癒やしの時間を提供します✨",
  },
  {
    id: "2",
    name: "カエデ",
    age: 24,
    height: 161,
    bust: "B88(E)",
    waist: 57,
    hip: 84,
    tags: ["清楚", "モデル系"],
    imageUrl: "/キャスト２.png",
    status: "waiting",
    waitingTime: "20分待ち",
    isNew: true,
    prices: [
      { duration: 60, price: 13000 },
      { duration: 90, price: 16000 },
      { duration: 120, price: 20000 },
    ],
    weeklySchedule: DAYS.map((d) => ({ day: d, time: "11:00-20:00" })),
    message: "ゆっくりお話ししましょう。リラックスしに来てくださいね。",
  },
  {
    id: "3",
    name: "ネネ",
    age: 20,
    height: 158,
    bust: "B79(C)",
    waist: 54,
    hip: 80,
    tags: ["女子大生", "初入店"],
    imageUrl: "/キャスト３.png",
    status: "in-session",
    prices: [
      { duration: 60, price: 13000 },
      { duration: 90, price: 16000 },
      { duration: 120, price: 20000 },
    ],
    weeklySchedule: DAYS.map((d) => ({
      day: d,
      time: d === "Tue" || d === "Thu" ? "休み" : "18:00-24:00",
    })),
    message: "ドキドキの初入店です。温かく迎えてくださると嬉しいです！",
  },
  {
    id: "4",
    name: "カオリ",
    age: 28,
    height: 156,
    bust: "B83(B)",
    waist: 57,
    hip: 83,
    tags: ["若妻", "癒やし"],
    imageUrl: "/キャスト４.png",
    status: "available",
    prices: [
      { duration: 60, price: 11000 },
      { duration: 90, price: 14000 },
      { duration: 120, price: 17000 },
    ],
    weeklySchedule: DAYS.map((d) => ({ day: d, time: "10:00-17:00" })),
    message: "日常の疲れを忘れさせてあげます。心を込めて施術します。",
  },
  {
    id: "5",
    name: "ノノ",
    age: 25,
    height: 159,
    bust: "B92(G)",
    waist: 60,
    hip: 88,
    tags: ["新人", "グラマー"],
    imageUrl: "/キャスト５.png",
    status: "off-duty",
    prices: [
      { duration: 60, price: 12000 },
      { duration: 90, price: 15000 },
      { duration: 120, price: 18000 },
    ],
    weeklySchedule: DAYS.map((d) => ({ day: d, time: "12:00-21:00" })),
    message: "たくさんお話しして、心も体もリフレッシュしましょう♪",
  },
  {
    id: "6",
    name: "ミルク",
    age: 29,
    height: 162,
    bust: "B82(C)",
    waist: 56,
    hip: 82,
    tags: ["美人お姉さん", "経験豊富"],
    imageUrl: "/キャスト６.png",
    status: "available",
    prices: [
      { duration: 60, price: 13000 },
      { duration: 90, price: 16000 },
      { duration: 120, price: 20000 },
    ],
    weeklySchedule: DAYS.map((d) => ({ day: d, time: "15:00-02:00" })),
    message: "大人の癒やしをご提供します。質の高いサービスをお約束します。",
  },
];

export const NEWS_LIST: News[] = [
  {
    id: "1",
    date: "2025.01.13",
    title: "【重要】営業時間変更のお知らせ",
    content: "本日から営業時間が24時までとなります。",
  },
  {
    id: "2",
    date: "2025.01.12",
    title: "20代の新人キャスト2名入店！",
    content: "若さと美しさを兼ね備えた新人キャストが仲間入りしました。",
  },
];

export const BLOG_ENTRIES: BlogEntry[] = [
  {
    id: "1",
    staffName: "モモ",
    title: "学校の帰り道...",
    date: "1月13日 08:40",
    imageUrl: "/キャスト１.png",
    content:
      "今日は学校の帰りに、とっても綺麗な夕焼けを見ました！明日も頑張れそうです✨ 皆さんはどんな一日でしたか？",
  },
  {
    id: "2",
    staffName: "カエデ",
    title: "テストが終わりました！",
    date: "1月13日 08:27",
    imageUrl: "/キャスト２.png",
    content:
      "やっとテストが終わりました〜！開放感がすごいです💨 これから思いっきり楽しみたいと思います！",
  },
];
