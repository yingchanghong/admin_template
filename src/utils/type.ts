export interface UserInfo {
  mobile: string;
}

export const Locale = [
  { label: '英文', value: 'en' },
  { label: '中文', value: 'cn' },
];

export interface RouteInfo {
  path: string;
  fullPath: string;
  name: string;
  meta?: any;
  query: any;
}
