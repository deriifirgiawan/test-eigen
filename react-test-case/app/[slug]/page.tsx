"use client";
import { Header, SectionContent, Trending } from "./templates";
import { NavbarLinkData } from "@/components";

export default function TopHeadlines({ params }: { params: { slug: string } }) {
	return (
		<div className="container">
			<Trending />
			<div style={{ marginTop: 32 }}>
				<Header title={params.slug} />
				<SectionContent slug={`/${params.slug}` as NavbarLinkData} />
			</div>
		</div>
	);
}
