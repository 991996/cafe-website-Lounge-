/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"], // عدّل حسب مكان ملفاتك
  theme: {
    extend: {
      // أحجام الخطوط المرنة باستخدام clamp()
      fontSize: {
        xs: "clamp(12px, 1.5vw, 14px)",
        sm: "clamp(14px, 1.8vw, 16px)",
        base: "clamp(16px, 2vw, 18px)",
        lg: "clamp(18px, 2.5vw, 20px)",
        xl: "clamp(20px, 3vw, 24px)",
        "2xl": "clamp(24px, 3.5vw, 28px)",
        "3xl": "clamp(28px, 4vw, 32px)",
        "4xl": "clamp(32px, 5vw, 36px)",
        "5xl": "clamp(36px, 6vw, 42px)",
      },
      // إعادة تعريف breakpoints
      screens: {
        sm: "500px", // كان 640px
        md: "800px", // كان 768px
        lg: "900px", // كان 1024px
        xl: "1000px", // كان 1280px
        "2xl": "1300px", // كما هو
      },
    },
  },
  plugins: [],
};
