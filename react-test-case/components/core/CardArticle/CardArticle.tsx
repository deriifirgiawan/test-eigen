/* eslint-disable @next/next/no-img-element */
"use client";
import { Card, Flex, Skeleton, Space, Typography } from "antd";
import styles from "./CardArticle.module.css";
import { Icon } from "../Icon";
import { ICardArticle } from "./CardArticle.interface";
import { formatDate, trimText } from "@/utils";
import SkeletonImage from "antd/es/skeleton/Image";

export const CardArticle = (_props: ICardArticle) => {
	const { onClick, data, isLoading } = _props;

	if (isLoading) return <CardSkeleton />;

	return (
		<Card
			className={styles.card}
			onClick={onClick}
			actions={[
				<div className="iconButtonMedium" key="share">
					<Icon name="ShareIos" />
				</div>,
				<div className="iconButtonMedium" key="save">
					<Icon name="Bookmark" />
				</div>,
			]}
		>
			<div>
				<div style={{ width: "100%", height: 210, backgroundColor: "#DDDBDD" }}>
					{data.urlToImage && (
						<img
							src={data.urlToImage}
							alt={data.content}
							style={{ width: "100%", height: 210 }}
						/>
					)}
				</div>
				<Space className={styles.cardContent} direction="vertical">
					<Typography.Text className={styles.textTitle}>
						{trimText(data?.title, 74)}
					</Typography.Text>

					<Typography.Paragraph className={styles.textParagraph}>
						{trimText(data?.description, 96)}
					</Typography.Paragraph>
					<Flex gap={8}>
						<Typography.Paragraph className="textBody">
							{formatDate(data.publishedAt, "DD MMM YYYY")}
						</Typography.Paragraph>
						<Typography.Paragraph className="textBody">
							By {data.author ?? "unknown"}
						</Typography.Paragraph>
					</Flex>
				</Space>
			</div>
		</Card>
	);
};

const CardSkeleton = () => (
	<Card
		className={styles.card}
		actions={[
			<div className="iconButtonMedium" key="share">
				<Icon name="ShareIos" />
			</div>,
			<div className="iconButtonMedium" key="save">
				<Icon name="Bookmark" />
			</div>,
		]}
	>
		<SkeletonImage
			active
			style={{ height: 210, width: "100%", borderRadius: 0 }}
		/>

		<div className={styles.cardContent}>
			<Skeleton />
		</div>
	</Card>
);
