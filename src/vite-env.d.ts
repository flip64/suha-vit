/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BASE_URL: string; // <- این خط برای BASEURL
  // می‌تونی متغیرهای env دیگه هم اینجا اضافه کنی
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
