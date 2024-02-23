/* eslint-disable @next/next/no-img-element */
"use client";
import { Flex, Typography } from "antd";
import styles from "./Trending.module.css";
import { useMediaQuery } from "react-responsive";
import { useRecoilValue } from "recoil";
import { articleSelector } from "@/recoil";

export const Trending = () => {
	const isMobile = useMediaQuery({ maxWidth: 767 });
	const { detail } = useRecoilValue(articleSelector);
	return (
		<Flex align="center" vertical={isMobile}>
			<div className={styles.imageCover}>
				<img
					className={styles.image}
					src={detail?.urlToImage}
					alt={detail?.title}
				/>
			</div>

			<section className={styles.content}>
				<Typography.Title level={3}>{detail?.title ?? "-"}</Typography.Title>

				<Typography.Text>{detail?.content ?? "-"}</Typography.Text>

				<Flex align="center" gap={12} style={{ marginTop: 24 }}>
					<Typography.Paragraph>2 hours ago</Typography.Paragraph>
					<Typography.Paragraph>
						By {detail?.author ?? "-"}
					</Typography.Paragraph>
				</Flex>
			</section>
		</Flex>
	);
};
