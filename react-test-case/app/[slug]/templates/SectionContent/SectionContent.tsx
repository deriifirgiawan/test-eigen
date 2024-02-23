"use client";
import { CardArticle, CardLocation, NavbarLinkData } from "@/components";
import { Row, Col } from "antd";
import { useSectionContent } from "./hooks";
import { useCallback } from "react";
import { IArticleModel } from "@/services";

interface Props {
	slug: NavbarLinkData;
}

export const SectionContent = (_props: Props) => {
	const { slug } = _props;
	const slugStr = slug.split("/")[1];
	const { renderData, onDetailArticle, isLoading } = useSectionContent(
		slug,
		slugStr
	);

	const renderContent = useCallback(() => {
		if (!isLoading) {
			return (
				<Row gutter={[8, 8]}>
					{renderData().data?.map((value, index) => (
						<Col xs={32} sm={12} md={12} lg={12} xl={12} key={index}>
							<CardArticle
								data={value}
								onClick={() => onDetailArticle(value.source.id, value)}
							/>
						</Col>
					))}
				</Row>
			);
		}
		return (
			<Row gutter={[8, 8]}>
				{Array.from({ length: 10 })?.map((value, index) => (
					<Col xs={32} sm={12} md={12} lg={12} xl={12} key={index}>
						<CardArticle data={value as IArticleModel} isLoading />
					</Col>
				))}
			</Row>
		);
	}, [isLoading, onDetailArticle, renderData]);
	return (
		<Row gutter={[16, 16]} style={{ marginBlock: "32px" }}>
			<Col xs={24} sm={18} md={18} lg={18} xl={18}>
				{renderContent()}
			</Col>

			<Col xs={24} sm={6} md={6} lg={6} xl={6}>
				<CardLocation />
			</Col>
		</Row>
	);
};
