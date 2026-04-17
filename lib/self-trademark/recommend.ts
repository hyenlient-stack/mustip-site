import type { GoodsCandidate } from "./types";
import { goodsMap } from "./goods-map";

/**
 * 선택된 세부 항목 ID들을 기반으로 지정상품 후보를 추천합니다.
 * 중복 제거 후 essential → optional → expansion 순으로 정렬합니다.
 */
export function recommendGoods(selectedSubItemIds: string[]): GoodsCandidate[] {
  const seenIds = new Set<string>();
  const seenNames = new Set<string>();
  const result: GoodsCandidate[] = [];

  for (const subId of selectedSubItemIds) {
    const candidates = goodsMap[subId];
    if (!candidates) continue;
    for (const c of candidates) {
      // 동일 ID 또는 동일 류+이름 중복 제거
      const nameKey = `${c.niceClass}::${c.name}`;
      if (!seenIds.has(c.id) && !seenNames.has(nameKey)) {
        seenIds.add(c.id);
        seenNames.add(nameKey);
        result.push(c);
      }
    }
  }

  const order = { essential: 0, optional: 1, expansion: 2 };
  result.sort((a, b) => order[a.type] - order[b.type]);

  return result;
}

/** 선택된 지정상품에서 고유 류 수를 계산합니다. */
export function countNiceClasses(goods: GoodsCandidate[]): number {
  const classes = new Set(goods.map((g) => g.niceClass));
  return classes.size;
}
