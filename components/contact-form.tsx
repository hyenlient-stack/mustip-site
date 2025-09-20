"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

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
  } = useForm<FormValues>({ resolver: zodResolver(Schema) });

  const onSubmit = async (data: FormValues) => {
    // 5단계에서 /api/contact로 전송 연결 예정
    console.log("submit (preview):", data);
    alert("임시 제출 완료(미전송). 5단계에서 메일 발송 연결합니다.");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm mb-1">이름</label>
        <input className="w-full rounded-xl border px-3 py-2" {...register("name")} />
        {errors.name && <p className="text-sm text-red-600">{errors.name.message}</p>}
      </div>
      <div>
        <label className="block text-sm mb-1">이메일</label>
        <input className="w-full rounded-xl border px-3 py-2" {...register("email")} />
        {errors.email && <p className="text-sm text-red-600">{errors.email.message}</p>}
      </div>
      <div>
        <label className="block text-sm mb-1">문의 내용</label>
        <textarea rows={6} className="w-full rounded-xl border px-3 py-2" {...register("message")} />
        {errors.message && <p className="text-sm text-red-600">{errors.message.message}</p>}
      </div>
      <button disabled={isSubmitting} className="rounded-full bg-blue-600 px-6 py-3 text-white">
        {isSubmitting ? "전송 중…" : isSubmitSuccessful ? "임시 제출 완료" : "보내기"}
      </button>
      <p className="text-xs text-slate-500">개인정보는 문의 응대 외 용도로 사용하지 않습니다.</p>
    </form>
  );
}
