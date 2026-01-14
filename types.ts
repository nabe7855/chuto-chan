export interface Staff {
  id: string;
  name: string;
  age: number;
  height: number;
  bust: string;
  waist: number;
  hip: number;
  tags: string[];
  imageUrl: string;
  isNew?: boolean;
  status: "available" | "waiting" | "in-session" | "off-duty";
  waitingTime?: string;
  prices: {
    duration: number;
    price: number;
  }[];
  weeklySchedule: {
    day: string;
    time: string;
  }[];
  message?: string;
}

export interface News {
  id: string;
  date: string;
  title: string;
  content: string;
}

export interface BlogEntry {
  id: string;
  staffName: string;
  title: string;
  date: string;
  imageUrl: string;
  content: string;
}
