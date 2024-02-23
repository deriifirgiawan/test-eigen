"use client";

import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import { ReactNode } from "react";
import { QueryClientProvider } from "react-query";
import { MainLayout } from "../layout/MainLayout";
import { theme } from "@/theme";
import { AppConfig } from "@/configs";
import { RecoilRoot } from "recoil";

interface Props {
	children: ReactNode;
}
export const AppProvider = (_props: Props) => {
	const { children } = _props;
	return (
		<AntdRegistry>
			<ConfigProvider theme={theme}>
				<QueryClientProvider client={AppConfig.queryClient}>
					<RecoilRoot>
						<MainLayout>{children}</MainLayout>
					</RecoilRoot>
				</QueryClientProvider>
			</ConfigProvider>
		</AntdRegistry>
	);
};
