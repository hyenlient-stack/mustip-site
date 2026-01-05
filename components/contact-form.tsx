"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// 유효성 검사 스키마
const Schema = z.object({
  name: z.string().min(2, "이름을 2자 이상 입력하세요."),
  email: z.string().email("올바른 이메일을 입력하세요."),
  message: z.string().min(10, "문의 내용을 10자 이상 입력하세요."),
});

type FormValues = z.infer<typeof Schema>;

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<FormValues>({ resolver: zodResolver(Schema) });

  const onSubmit = async (data: FormValues) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        alert("메일 전송 실패. 잠시 후 다시 시도해 주세요.");
      } else {
        alert("문의가 정상적으로 접수되었습니다.");
        reset(); // 제출 후 폼 비우기
      }
    } catch (e) {
      console.error(e);
      alert("서버 오류가 발생했습니다.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* 이름 */}
      <div>
        <label className="block text-sm mb-1">이름</label>
        <input
          className="w-full rounded-xl border px-3 py-2"
          {...register("name")}
        />
        {errors.name && (
          <p className="text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>

      {/* 이메일 */}
      <div>
        <label className="block text-sm mb-1">이메일</label>
        <input
          className="w-full rounded-xl border px-3 py-2"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      {/* 문의 내용 */}
      <div>
        <label className="block text-sm mb-1">문의 내용</label>
        <textarea
          rows={6}
          className="w-full rounded-xl border px-3 py-2"
          {...register("message")}
        />
        {errors.message && (
          <p className="text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>

      {/* 버튼 */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-full bg-blue-600 px-6 py-3 text-white"
      >
        {isSubmitting
          ? "전송 중…"
          : isSubmitSuccessful
          ? "전송 완료"
          : "보내기"}
      </button>

      <p className="text-xs text-slate-500">
        개인정보는 문의 응대 외 용도로 사용하지 않습니다.
      </p>
    </form>
  );
}
