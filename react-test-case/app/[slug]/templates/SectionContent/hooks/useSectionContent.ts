import { NavbarLinkData } from "@/components";
import { articleDetailAtom } from "@/recoil";
import { IArticleModel, useSearch, useTopHeadlines } from "@/services";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { useRecoilState } from "recoil";

export const useSectionContent = (slug: NavbarLinkData, query: string) => {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(true);
	const topHeadlines = useTopHeadlines({ country: "us" });
	const search = useSearch({ q: query });
	const [_, setArticle] = useRecoilState(articleDetailAtom);

	useEffect(() => {
		setIsLoading(topHeadlines.isLoading || search.isLoading);
	}, [search.isLoading, topHeadlines.isLoading]);

	useEffect(() => {
		if (slug === NavbarLinkData.TOP_HEADLINES) {
			setArticle(topHeadlines.data?.articles[0]);
		} else {
			setArticle(search.data?.articles[0]);
		}
	}, [search.data?.articles, setArticle, slug, topHeadlines.data?.articles]);

	const renderData = useCallback(() => {
		if (slug === NavbarLinkData.TOP_HEADLINES) {
			return {
				data: topHeadlines.data?.articles,
				isLoading: topHeadlines.isLoading,
			};
		} else {
			return {
				data: search.data?.articles,
				isLoading: search.isLoading,
			};
		}
	}, [
		search.data?.articles,
		search.isLoading,
		slug,
		topHeadlines.data?.articles,
		topHeadlines.isLoading,
	]);

	const onDetailArticle = (id: string | undefined, article: IArticleModel) => {
		setArticle(article);
		router.push(`/article-detail/${id}`);
	};

	return {
		isLoading,
		renderData,
		setIsLoading,
		onDetailArticle,
	};
};
