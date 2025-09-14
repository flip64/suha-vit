import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // مسیر خروجی بیلد
    sourcemap: false, // فقط توی dev سورس‌مپ روشن باشه
    chunkSizeWarningLimit: 1000, // افزایش محدودیت هشدار سایز

    rollupOptions: {
      output: {
        manualChunks: {
          // کتابخانه‌های اصلی ری‌اکت جدا میشن
          react: ['react', 'react-dom'],
          // Bootstrap یا UI libs جدا میشن
          ui: ['bootstrap'],
          // آیکون‌ها جدا میشن
          icons: ['@tabler/icons-react'],
        },
      },
    },
  },
  server: {
    port: 3000, // پورت dev server
    open: true, // مرورگر بعد از اجرای dev اتومات باز میشه
  },
});
