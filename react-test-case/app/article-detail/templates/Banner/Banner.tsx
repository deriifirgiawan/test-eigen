/* eslint-disable @next/next/no-img-element */
import { Typography } from "antd";
import styles from "../../[slug]/page.module.css";
import { IArticleDetailProps } from "../../ArticleDetai.interface";

export const Banner = (_props: IArticleDetailProps) => {
	const { data } = _props;
	const $styleImage = { height: 423, backgroundColor: "red", width: "100%" };
	return (
		<section>
			<Typography.Title level={1} className={styles.textTitle}>
				{data?.title ?? "-"}
			</Typography.Title>
			<div style={$styleImage}>
				<img src={data?.urlToImage} alt={data?.title} style={$styleImage} />
			</div>
		</section>
	);
};
