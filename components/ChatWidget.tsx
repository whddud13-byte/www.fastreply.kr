'use client';
import { useState } from "react";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed bottom-4 right-4">
      {open ? (
        <div className="w-80 h-96 bg-white border rounded-2xl shadow-lg p-4">
          <div className="flex justify-between items-center mb-2">
            <strong>FastReply 상담봇</strong>
            <button onClick={() => setOpen(false)}>X</button>
          </div>
          <div className="text-sm text-gray-600">AI가 자동으로 상담을 도와드립니다.</div>
        </div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="rounded-full bg-black text-white px-4 py-2 shadow"
        >
          채팅 시작
        </button>
      )}
    </div>
  );
}
