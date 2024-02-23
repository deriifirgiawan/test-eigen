import { AppConfig } from "@/configs";
import Axios, { AxiosInstance } from "axios";

export const apiInstance: AxiosInstance = Axios.create({
	baseURL: AppConfig.api_base_url,
	headers: {
		"Content-Type": "application/json",
	},
	params: {
		apiKey: AppConfig.api_key,
	},
});
