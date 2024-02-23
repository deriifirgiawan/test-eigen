import { Icon } from "@/components/core/Icon";
import { Flex } from "antd";

export const Action = () => {
	return (
		<Flex gap={12} style={{ paddingBottom: "72px" }}>
			<div className="iconButtonMedium">
				<Icon name="ShareIos" />
			</div>
			<div className="iconButtonMedium">
				<Icon name="Bookmark" />
			</div>
		</Flex>
	);
};
