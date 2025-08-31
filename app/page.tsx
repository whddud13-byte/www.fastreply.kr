"use client";

import { motion } from "framer-motion";
import { MessageCircle, Clock, CalendarCheck, Workflow } from "lucide-react";

export default function Page() {
  return (
    <main className="bg-gradient-to-b from-blue-700 to-blue-500 text-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto text-center py-24 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold mb-6"
        >
          24시간, 3초 응답 고객상담
          <br />
          <span className="text-blue-200">FastReply</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg md:text-xl text-blue-100 mb-8"
        >
          채팅·이메일·SNS 문의를 자동 처리하고, 복잡한 건 담당자에게 연결합니다.
        </motion.p>
        <motion.a
          href="#pricing"
          whileHover={{ scale: 1.05 }}
          className="px-10 py-3 bg-white text-blue-600 font-semibold rounded-xl shadow-lg hover:bg-gray-100"
        >
          무료 체험
        </motion.a>
      </section>

      {/* Features */}
      <section className="bg-white text-gray-800 py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-center px-6">
          {[
            { icon: <MessageCircle />, title: "즉시 응답", desc: "고객 문의 즉시 AI 자동 응답" },
            { icon: <Clock />, title: "24시간 상담", desc: "야간·주말에도 상담 가능" },
            { icon: <CalendarCheck />, title: "손쉬운 예약", desc: "예약 등록 & 확인 자동 처리" },
            { icon: <Workflow />, title: "자동 업무 이관", desc: "정책에 따라 담당자에게 전달" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg"
            >
              <div className="text-blue-500 w-12 h-12 mx-auto mb-4">{item.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing + Chat Demo */}
      <section id="pricing" className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Pricing */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
              <h4 className="font-bold text-xl mb-2">기본</h4>
              <p className="text-2xl font-extrabold mb-4">
                ₩29,000 <span className="text-sm">/월</span>
              </p>
              <ul className="text-gray-500 text-sm space-y-2 mb-6">
                <li>최대 50건 응답</li>
                <li>이메일 지원</li>
              </ul>
              <button className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700">
                바로 시작하기
              </button>
            </div>
            <div className="bg-blue-600 rounded-2xl shadow-lg p-6 text-center text-white">
              <h4 className="font-bold text-xl mb-2">프리미엄</h4>
              <p className="text-2xl font-extrabold mb-4">
                ₩79,000 <span className="text-sm">/월</span>
              </p>
              <ul className="text-blue-100 text-sm space-y-2 mb-6">
                <li>무제한 응답</li>
                <li>전담 매니저 상담</li>
              </ul>
              <button className="px-6 py-2 bg-white text-blue-600 rounded-xl hover:bg-gray-100">
                바로 시작하기
              </button>
            </div>
          </motion.div>

          {/* Chat Demo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg p-6"
          >
            <h4 className="font-bold text-lg mb-4">자동 응답 미리보기</h4>
            <div className="space-y-3">
              <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-xl w-fit ml-auto">
                재고가 있나요?
              </div>
              <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-xl w-fit">
                네, 현재 재고 보유 중입니다.
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Logos */}
      <section className="bg-white py-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto flex justify-center gap-12 opacity-70"
        >
          <span className="text-lg font-bold">Skyscanner</span>
          <span className="text-lg font-bold">Trive</span>
          <span className="text-lg font-bold">Takrool</span>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-6 text-center text-gray-400 text-sm">
        © 2025 FastReply. 국내 결제: 카카오/토스 | 해외 결제: Stripe/PayPal
      </footer>
    </main>
  );
}
