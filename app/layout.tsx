import "../styles/globals.css";

export const metadata = {
  title: "FastReply",
  description: "AI 고객상담 자동화 솔루션",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      {/* 여기에 className 추가 */}
      <body className="bg-gradient-to-b from-blue-700 to-blue-500 text-white">
        {children}
      </body>
    </html>
  );
}
