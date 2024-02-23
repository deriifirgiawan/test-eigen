import { ReactNode } from "react";

interface IHeader {
	children: ReactNode;
}
export const Header = (_props: IHeader) => {
	const { children } = _props;
	return (
		<section
			style={{
				width: "100%",
				height: 410,
				backgroundColor: "#0E1E32",
				zIndex: 0,
				position: "absolute",
			}}
		>
			{children}
		</section>
	);
};
