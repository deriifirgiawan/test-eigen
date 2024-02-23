import { IArticleModel } from "@/services";
import { atom } from "recoil";

export const articleDetailAtom = atom({
	key: "articleDetailAtom",
	default: {} as IArticleModel | undefined,
});
