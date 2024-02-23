import { useQuery } from "react-query";
import { OptionsQueryTopHeadlines, apiArticle } from "..";

export const useTopHeadlines = (query: OptionsQueryTopHeadlines) => {
	return useQuery({
		queryKey: "top-headlines",
		queryFn: () => apiArticle.topHeadlines(query),
		select: (response) => response.data,
	});
};
