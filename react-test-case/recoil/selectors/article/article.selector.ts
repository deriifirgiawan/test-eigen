import { articleDetailAtom } from "@/recoil";
import { selector } from "recoil";

export const articleSelector = selector({
	key: "article-detail-selector",
	get: ({ get }) => ({
		detail: get(articleDetailAtom),
	}),
});
