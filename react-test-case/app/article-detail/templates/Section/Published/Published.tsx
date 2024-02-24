"use client";
import { IArticleDetailProps } from "@/app/article-detail/ArticleDetai.interface";
import { formatDate } from "@/utils";
import { Space, Typography } from "antd";

export const Published = (_props: IArticleDetailProps) => {
	const { data } = _props;
	return (
		<Space style={{ paddingBlock: "24px" }}>
			<Typography.Paragraph className="textBody">
				{formatDate(
					data?.publishedAt ?? new Date().toLocaleDateString(),
					"DD MMM YYYY"
				)}
			</Typography.Paragraph>
			<Typography.Paragraph className="textBody">
				By {data?.author ?? "Unknown"}
			</Typography.Paragraph>
		</Space>
	);
};
