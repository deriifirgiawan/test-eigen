import { ISourceModel } from "../source";

export interface IArticleModel {
	source: ISourceModel;
	author: string;
	title: string;
	description: string;
	urlToImage: string;
	publishedAt: string;
	content: string;
}
