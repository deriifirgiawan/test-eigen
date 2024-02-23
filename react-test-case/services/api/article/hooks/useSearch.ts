import { useQuery } from "react-query";
import { OptionsQuerySearch, apiArticle } from "..";

export const useSearch = (query: OptionsQuerySearch) => {
	return useQuery({
		queryKey: "search-article",
		queryFn: () => apiArticle.search(query),
		select: (response) => response.data,
	});
};
