import { SxProps } from "@mui/material";

type LinkImgBoxProps = {
	src: string;
	alt: string;
	href: string;
	maxWidth?: number;
	maxHeight?: number;
};
type ImgBoxProps = {
	src: string;
	alt: string;
	maxWidth?: number;
	maxHeight?: number;
};
type BreadcrumbsParentProps = {
	title: string;
	href?: string;
	sx?: SxProps;
};
type MainCardProps = {
	children: React.ReactNode;
	sx?: SxProps;
};

type HeadBtnsTableProps = {
	variant?: "contained" | "outlined" | "text";
	svgIcon: JSX.Element;
	onClick?: () => void;
	sx?: SxProps;
	color?: "primary" | "secondary" | "error" | "info" | "success" | "warning";
};

type MainBtnProps = {
	variant?: "contained" | "outlined" | "text";
	onClick?: () => void;
	sx?: SxProps;
	color?: "primary" | "secondary" | "error" | "info" | "success" | "warning";
	text: string;
	width?: number;
	height?: number;
	borderRadius?: number;
};
