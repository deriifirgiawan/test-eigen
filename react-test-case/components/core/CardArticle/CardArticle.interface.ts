import { IArticleModel } from "@/services";

export interface ICardArticle {
	onClick?: () => void;
	data: IArticleModel;
	isLoading?: boolean;
}
