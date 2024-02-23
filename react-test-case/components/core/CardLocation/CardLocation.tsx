"use client";
import { Button, Card, Input, Space, Typography } from "antd";
import styles from "./CardLocation.module.css";

export const CardLocation = () => {
	return (
		<Space direction="vertical" style={{ width: "100%" }}>
			<Typography.Title level={5}>Location News</Typography.Title>
			<Card>
				<Space direction="vertical" className={styles.cardLocation}>
					<Typography.Paragraph>
						Get Location specific News
					</Typography.Paragraph>
					<Input />
					<Button type="primary">SUBMIT</Button>
				</Space>
			</Card>
		</Space>
	);
};
