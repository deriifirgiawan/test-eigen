import { Menu, MenuProps } from "antd";
import styles from "./Navbar.module.css";

export const NavbarMenu = (_props: MenuProps) => {
	return (
		<Menu className={styles.menu} inlineIndent={-1} theme="light" {..._props} />
	);
};
