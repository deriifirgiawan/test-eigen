"use client";
import { Flex, Typography } from "antd";
import styles from "./Header.module.css";

interface Props {
	title: string;
}
export const Header = (_props: Props) => {
	const { title } = _props;
	return (
		<Flex className={styles.container} align="center" justify="space-between">
			<Typography.Text className={styles.title}>{title}</Typography.Text>
		</Flex>
	);
};
