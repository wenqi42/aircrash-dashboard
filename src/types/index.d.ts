import text from '../locale/zh-cn/text.json'

declare global {
  interface Window {
    dayjs: typeof import("dayjs");
    langPackages: langPackages;
    t: (key: keyof textJsonType) => string;
  }
}



// 使用 keyof 替代 Object.keys
export type textJsonType = typeof text


