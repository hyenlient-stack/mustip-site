import type { ApplicationData } from "./types";

/**
 * 신청 데이터를 제출합니다.
 * 현재는 console.log 로 데이터를 확인하며,
 * 향후 API 연결 시 이 함수 내부만 교체하면 됩니다.
 */
export async function submitApplication(
  data: ApplicationData
): Promise<{ success: boolean; message: string }> {
  console.log("=== 상표출원 신청 데이터 ===", JSON.stringify(data, null, 2));

  // TODO: 실제 API 연동
  return {
    success: true,
    message: "신청서가 정상적으로 접수되었습니다.",
  };
}
