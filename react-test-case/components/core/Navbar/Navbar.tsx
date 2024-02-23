"use client";
import { Drawer, Flex, Typography } from "antd";
import styles from "./Navbar.module.css";
import { Icon } from "../Icon";
import { useNavbar } from "./hooks";
import { useMediaQuery } from "react-responsive";
import { NavbarMenu } from "./Navbar.menu";

export const Navbar = () => {
	const { current, items, drawerVisible, setDrawerVisible } = useNavbar();
	const { Title } = Typography;
	const isMobile = useMediaQuery({ maxWidth: 767 });

	return (
		<nav className={styles.navbar}>
			<Flex gap={4} className={styles.logo}>
				<Icon name="Globe" color="#C31815" width={24} height={24} />
				<Title style={{ color: "#C31815" }} level={5}>
					Hello News
				</Title>
			</Flex>
			{!isMobile && (
				<NavbarMenu
					className={styles.menu}
					inlineIndent={-1}
					mode="horizontal"
					theme="light"
					items={items}
					selectedKeys={[current]}
					defaultActiveFirst
					defaultSelectedKeys={[current]}
				/>
			)}

			{!isMobile && (
				<Flex gap={12} className={styles.rightMenu}>
					<div className="iconButtonMedium">
						<Icon name="Search" />
					</div>
					<div className="iconButtonMedium">
						<Icon name="Bookmark" />
					</div>
				</Flex>
			)}

			{isMobile && (
				<div onClick={() => setDrawerVisible(true)}>
					<Icon name="Menu" />
				</div>
			)}

			<Drawer
				placement="right"
				closable
				open={drawerVisible}
				onClose={() => setDrawerVisible(false)}
			>
				<NavbarMenu
					className={styles.menu}
					inlineIndent={-1}
					mode="inline"
					theme="light"
					items={items}
					selectedKeys={[current]}
					defaultActiveFirst
					defaultSelectedKeys={[current]}
				/>
			</Drawer>
		</nav>
	);
};
