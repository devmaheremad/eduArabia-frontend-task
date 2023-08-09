import {
	Chip,
	Container,
	Grid,
	Stack,
	Typography,
	useTheme,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { ImgBox, LinkImgBox } from "../../custom";
import { Link } from "react-router-dom";

const footerMenu1 = [
	{
		title: "من نحن",
		href: "/about",
	},
	{
		title: "تواصل معنا",
		href: "/contact",
	},
	{
		title: "المدربين المحترفين",
		href: "/professional-trainers",
	},
	{
		title: "الدورات التدريبية",
		href: "/training-courses",
	},
];
const footerMenu2 = [
	{
		title: "انضم الينا",
		href: "/join-us",
	},
	{
		title: "الشركاء",
		href: "/partners",
	},
	{
		title: "الأسئلة الشائعة",
		href: "/faq",
	},
	{
		title: "تذاكر الدعم",
		href: "/support-tickets",
	},
];

const Footer = () => {
	const theme = useTheme();
	const { t } = useTranslation();
	return (
		<>
			<Stack mt={"85px"} bgcolor={theme.palette.footerBg.main}>
				<Container maxWidth="xl" sx={{ pt: "60px", pb: "90px" }}>
					<Grid container>
						<Grid item xs={12} md={12} lg={5}>
							<Stack p={"16px"}>
								<Typography
									fontWeight={500}
									fontSize={30}
									mb={"25px"}
									color={"secondary"}
								>
									{t("AboutMedicineX")}
								</Typography>
								<Typography color={"white"}>
									{t("AboutMedicineXDescription")}
								</Typography>
							</Stack>
						</Grid>
						<Grid item xs={12} sm={6} lg={5}>
							<Stack p={"16px"}>
								<Typography
									fontWeight={500}
									fontSize={30}
									mb={"25px"}
									color={"secondary"}
								>
									{t("quickAccess")}
								</Typography>
								<Grid container>
									<Grid item xs={12} sm={6}>
										{footerMenu1.map((item, index) => (
											<Stack
												key={index}
												direction={"row"}
												gap={"15px"}
												alignItems={"center"}
												mb={"10px"}
											>
												<Chip
													color="secondary"
													sx={{
														width: "5px",
														height: "5px",
													}}
												/>
												<Link
													style={{
														textDecoration: "none",
														color: "#fff",
														display: "block",
													}}
													to={item.href}
												>
													{item.title}
												</Link>
											</Stack>
										))}
									</Grid>
									<Grid item xs={12} sm={6}>
										{footerMenu2.map((item, index) => (
											<Stack
												key={index}
												direction={"row"}
												gap={"15px"}
												alignItems={"center"}
												mb={"10px"}
											>
												<Chip
													color="secondary"
													sx={{
														width: "5px",
														height: "5px",
													}}
												/>
												<Link
													style={{
														textDecoration: "none",
														color: "#fff",
														display: "block",
													}}
													to={item.href}
												>
													{item.title}
												</Link>
											</Stack>
										))}
									</Grid>
								</Grid>
							</Stack>
						</Grid>
						<Grid item xs={12} sm={6} lg={2}>
							<Stack p={"16px"}>
								<Typography
									fontWeight={500}
									fontSize={30}
									mb={"10px"}
									color={"secondary"}
								>
									{t("paymentVia")}
								</Typography>
								<Stack direction={"row"} gap={"20px"}>
									<ImgBox
										src={"/assets/images/maestro.png"}
										maxWidth={55}
										maxHeight={22}
										alt="visa.png"
									/>
									<ImgBox
										src={"/assets/images/visa.png"}
										maxWidth={55}
										maxHeight={22}
										alt="visa.png"
									/>
								</Stack>
								<Typography fontWeight={500} fontSize={30} color={"secondary"}>
									{t("FollowUs")}
								</Typography>
								<Stack direction={"row"} gap={"17px"} alignItems={"center"}>
									<LinkImgBox
										src={"/assets/images/facebook.png"}
										alt={"facebook"}
										href={"/"}
										maxHeight={8}
										maxWidth={16}
									/>
									<LinkImgBox
										src={"/assets/images/twitter.png"}
										alt={"twitter"}
										href={"/"}
										maxHeight={14}
										maxWidth={12}
									/>
									<LinkImgBox
										src={"/assets/images/instgram.png"}
										alt={"instgram"}
										href={"/"}
										maxHeight={15}
										maxWidth={14}
									/>
									<LinkImgBox
										src={"/assets/images/youtube.png"}
										alt={"youtube"}
										href={"/"}
										maxHeight={12}
										maxWidth={14}
									/>
								</Stack>
							</Stack>
						</Grid>
					</Grid>
				</Container>
			</Stack>
			<Stack bgcolor={theme.palette.rightsBg.main}>
				<Container maxWidth="xl">
					<Typography color={"white"} textAlign={"center"} py={"18px"}>
						{t("rightsReserved")}
					</Typography>
				</Container>
			</Stack>
		</>
	);
};

export default Footer;
