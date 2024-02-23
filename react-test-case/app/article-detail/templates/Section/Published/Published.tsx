"use client";
import { IArticleDetailProps } from "@/app/article-detail/ArticleDetai.interface";
import { Space, Typography } from "antd";

export const Published = (_props: IArticleDetailProps) => {
	const { data } = _props;
	return (
		<Space style={{ paddingBlock: "24px" }}>
			<Typography.Paragraph className="textBody">
				2 hours ago
			</Typography.Paragraph>
			<Typography.Paragraph className="textBody">
				By {data?.author ?? "-"}
			</Typography.Paragraph>
		</Space>
	);
};
