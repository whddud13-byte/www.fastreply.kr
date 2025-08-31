import "../styles/globals.css";'

export const metadata = {
  title: 'FastReply',
  description: 'AI 고객상담 자동화 솔루션',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
