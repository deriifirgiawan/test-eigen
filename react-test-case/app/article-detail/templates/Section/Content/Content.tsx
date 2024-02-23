import { IArticleDetailProps } from "@/app/article-detail/ArticleDetai.interface";
import { Typography } from "antd";

export const Content = (_props: IArticleDetailProps) => {
	const { data } = _props;
	return (
		<article>
			<Typography.Paragraph>{data?.description ?? "-"}</Typography.Paragraph>
		</article>
	);
};
