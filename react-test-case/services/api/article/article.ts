import queryString from "query-string";
import { OptionsQuerySearch, OptionsQueryTopHeadlines } from "./article.type";
import { apiInstance } from "../apiIntance";
import { BaseResponseWithPagination, IArticleModel } from "@/services/models";

const topHeadlines = (query: OptionsQueryTopHeadlines) => {
	const queryStr = queryString.stringify(query);

	return apiInstance.get<BaseResponseWithPagination<IArticleModel[]>>(
		`/top-headlines?${queryStr}`
	);
};

const search = (query: OptionsQuerySearch) => {
	const queryStr = queryString.stringify(query);

	return apiInstance.get<BaseResponseWithPagination<IArticleModel[]>>(
		`/everything?${queryStr}`
	);
};

export const apiArticle = { topHeadlines, search };
