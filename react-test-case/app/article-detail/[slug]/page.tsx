"use client";
import { useRecoilValue } from "recoil";
import { Banner, Header, Section } from "../templates";
import styles from "./page.module.css";
import { articleSelector } from "@/recoil";

export default function ArticleDetail({
	params,
}: {
	params: { slug: string };
}) {
	const { detail } = useRecoilValue(articleSelector);
	return (
		<section>
			<Header>
				<section className={styles.container}>
					<Banner data={detail} />
					<Section.Published data={detail} />
					<Section.Content data={detail} />
					<Section.Action />
				</section>
			</Header>
		</section>
	);
}
