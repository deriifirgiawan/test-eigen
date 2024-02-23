import { QueryClient } from "react-query";

const queryClient = new QueryClient();
export const AppConfig = {
	queryClient,
	api_base_url: process.env.NEXT_PUBLIC_API_BASEURL,
	api_key: process.env.NEXT_PUBLIC_API_KEY,
};
