import { ReactNode } from "react";
import { Navbar } from "../core";

interface Props {
	children: ReactNode;
}

export const MainLayout = (_props: Props) => {
	const { children } = _props;
	return (
		<main>
			<Navbar />
			{children}
		</main>
	);
};
