import { Flex, MenuProps } from "antd";
import { useState } from "react";
import { NavbarLinkData } from "../Navbar.data";
import styles from "../Navbar.module.css";
import Link from "next/link";

export const useNavbar = () => {
	const [current, setCurrent] = useState("/top-headlines");
	const [drawerVisible, setDrawerVisible] = useState(false);

	const onChangeCurrentPathName = (value: string) => {
		setCurrent(value);
		setTimeout(() => {
			setDrawerVisible(false);
		}, 200);
	};

	const items: MenuProps["items"] = [
		{
			label: (
				<Flex align="center" gap={4}>
					{current === NavbarLinkData.TOP_HEADLINES && (
						<div className={styles.textLinkActiveRounded} />
					)}
					<Link
						onClick={() =>
							onChangeCurrentPathName(NavbarLinkData.TOP_HEADLINES)
						}
						className={
							current === NavbarLinkData.TOP_HEADLINES
								? styles.textLinkActive
								: styles.textLink
						}
						href={NavbarLinkData.TOP_HEADLINES}
					>
						Top Headlines
					</Link>
				</Flex>
			),
			type: "group",
			key: NavbarLinkData.TOP_HEADLINES,
			className: styles.menuItem,
		},
		{
			label: (
				<Flex align="center" gap={4}>
					{current === NavbarLinkData.TECHNOLOGY && (
						<div className={styles.textLinkActiveRounded} />
					)}
					<Link
						onClick={() => onChangeCurrentPathName(NavbarLinkData.TECHNOLOGY)}
						className={
							current === NavbarLinkData.TECHNOLOGY
								? styles.textLinkActive
								: styles.textLink
						}
						href={NavbarLinkData.TECHNOLOGY}
					>
						Technology
					</Link>
				</Flex>
			),
			type: "group",
			key: NavbarLinkData.TECHNOLOGY,
			className: styles.menuItem,
		},
		{
			label: (
				<Flex align="center" gap={4}>
					{current === NavbarLinkData.POLITICS && (
						<div className={styles.textLinkActiveRounded} />
					)}
					<Link
						onClick={() => onChangeCurrentPathName(NavbarLinkData.POLITICS)}
						className={
							current === NavbarLinkData.POLITICS
								? styles.textLinkActive
								: styles.textLink
						}
						href={NavbarLinkData.POLITICS}
					>
						Politics
					</Link>
				</Flex>
			),
			type: "group",
			key: NavbarLinkData.POLITICS,
			className: styles.menuItem,
		},
		{
			label: (
				<Flex align="center" gap={4}>
					{current === NavbarLinkData.BUSINESS && (
						<div className={styles.textLinkActiveRounded} />
					)}
					<Link
						onClick={() => onChangeCurrentPathName(NavbarLinkData.BUSINESS)}
						className={
							current === NavbarLinkData.BUSINESS
								? styles.textLinkActive
								: styles.textLink
						}
						href={NavbarLinkData.BUSINESS}
					>
						Business
					</Link>
				</Flex>
			),
			type: "group",
			key: NavbarLinkData.BUSINESS,
			className: styles.menuItem,
		},
		{
			label: (
				<Flex align="center" gap={4}>
					{current === NavbarLinkData.SPORTS && (
						<div className={styles.textLinkActiveRounded} />
					)}
					<Link
						onClick={() => onChangeCurrentPathName(NavbarLinkData.SPORTS)}
						className={
							current === NavbarLinkData.SPORTS
								? styles.textLinkActive
								: styles.textLink
						}
						href={NavbarLinkData.SPORTS}
					>
						Sports
					</Link>
				</Flex>
			),
			key: NavbarLinkData.SPORTS,
			type: "group",
			className: styles.menuItem,
		},
		{
			label: (
				<Flex align="center" gap={4}>
					{current === NavbarLinkData.TRAVEL && (
						<div className={styles.textLinkActiveRounded} />
					)}
					<Link
						onClick={() => onChangeCurrentPathName(NavbarLinkData.TRAVEL)}
						className={
							current === NavbarLinkData.TRAVEL
								? styles.textLinkActive
								: styles.textLink
						}
						href={NavbarLinkData.TRAVEL}
					>
						Travel
					</Link>
				</Flex>
			),
			key: NavbarLinkData.TRAVEL,
			type: "group",
			className: styles.menuItem,
		},
	];

	return {
		drawerVisible,
		items,
		current,
		setDrawerVisible,
		onChangeCurrentPathName,
	};
};
