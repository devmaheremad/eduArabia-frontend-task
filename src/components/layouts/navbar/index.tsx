import React, { useEffect } from "react";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { ArrowDownIcon, MenuIcon, NotificationsIcon } from "../../icons";
import { Badge, Stack } from "@mui/material";
import { AppBarStyled, IconButtonMenuStyled } from "../styles";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import theme from "../../../theme";
import { ImgBox, LinkImgBox } from "../../custom";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../../Redux";

function Navbar() {
	const { t, i18n } = useTranslation();

	const settings = ["الملف الشخصي", "الاعدادات", "الدعم"];

	const pages = [
		{
			id: 1,
			name: t("exhibitions"),
			link: "/",
		},
		{
			id: 2,
			name: t("questionnaires"),
			link: "/questionnaires",
		},
	];

	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
		null
	);
	const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
		null
	);
	const [anchorElNotifications, setAnchorElNotifications] =
		React.useState<null | HTMLElement>(null);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	const handleOpenNotificationsMenu = (
		event: React.MouseEvent<HTMLElement>
	) => {
		setAnchorElNotifications(event.currentTarget);
	};

	const handleCloseNotificationsMenu = () => {
		setAnchorElNotifications(null);
	};

	const lang = useSelector((state: any) => state.lang);
	const dispatch = useDispatch();
	useEffect(() => {
		const myLang = localStorage.getItem("lang");
		dispatch(actions.changeLang(myLang));
		i18n.changeLanguage(myLang === "ltr" ? "en" : "ar");
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	const handelLang = () => {
		// LangugeServices.setLang(LangugeServices.getLang() === 'en' ? 'ar' : 'en')
		localStorage.setItem("lang", lang === "rtl" ? "ltr" : "rtl");
		localStorage.setItem("i18nextLng", lang === "rtl" ? "ltr" : "rtl");
		dispatch(actions.changeLang(lang === "rtl" ? "ltr" : "rtl"));
		i18n.changeLanguage(lang === "rtl" ? "en" : "ar");
	};
	return (
		<AppBarStyled position="static">
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Stack
						direction={"row"}
						flexWrap={"wrap"}
						flexGrow={1}
						justifyContent={"space-between"}
						alignItems={"center"}
					>
						<Stack direction={"row"} alignItems={"center"} gap={"10px"}>
							<IconButtonMenuStyled
								disableRipple
								aria-label="icon for menu"
								aria-controls="menu-appbar-links"
								aria-haspopup="true"
								onClick={handleOpenNavMenu}
							>
								<MenuIcon />
							</IconButtonMenuStyled>
							<Stack display={{ xs: "block", md: "none" }}>
								<LinkImgBox
									src={"/assets/images/main-logo-xs.png"}
									alt={"main-logo-xs"}
									href={"/"}
									maxHeight={80}
									maxWidth={77}
								/>
							</Stack>
							<Stack display={{ xs: "none", md: "block" }}>
								<LinkImgBox
									src={"/assets/images/main-logo.png"}
									alt={"main-logo"}
									href={"/"}
									maxWidth={480}
									maxHeight={77}
								/>
							</Stack>
							<Menu
								id="menu-appbar-links"
								anchorEl={anchorElNav}
								anchorOrigin={{
									vertical: "bottom",
									horizontal: "left",
								}}
								keepMounted
								transformOrigin={{
									vertical: "top",
									horizontal: "left",
								}}
								open={Boolean(anchorElNav)}
								onClose={handleCloseNavMenu}
								sx={{ mt: "10px", "& .MuiList-root": { padding: "0px" } }}
							>
								{pages.map((page) => (
									<MenuItem
										key={page.id}
										onClick={handleCloseNavMenu}
										sx={{ padding: 0 }}
									>
										<Link
											to={page.link}
											style={{
												textDecoration: "none",
												flexGrow: 1,
												padding: "10px 20px",
											}}
										>
											<Typography
												color={"black"}
												fontSize={18}
												fontWeight={500}
												textAlign="center"
											>
												{page.name}
											</Typography>
										</Link>
									</MenuItem>
								))}
							</Menu>
						</Stack>
						<Stack
							sx={{ flexGrow: 0 }}
							alignItems={"center"}
							direction={"row"}
							gap={{ xs: "10px", md: "22px" }}
							flexWrap={"wrap"}
						>
							<Stack>
								<Tooltip title="See Notifications">
									<IconButton
										onClick={handleOpenNotificationsMenu}
										sx={{ p: 0 }}
									>
										<Badge
											badgeContent={5}
											color="primary"
											sx={{
												"& .MuiBadge-badge": {
													backgroundColor: theme.palette.primary.main,
												},
											}}
										>
											<NotificationsIcon />
										</Badge>
									</IconButton>
								</Tooltip>
								<Menu
									sx={{ mt: "35px", "& .MuiList-root": { padding: "0px" } }}
									id="menu-appbar-links"
									anchorEl={anchorElNotifications}
									anchorOrigin={{
										vertical: "top",
										horizontal: "right",
									}}
									keepMounted
									transformOrigin={{
										vertical: "top",
										horizontal: "right",
									}}
									open={Boolean(anchorElNotifications)}
									onClose={handleCloseNotificationsMenu}
								>
									<Typography sx={{ p: "10px" }} fontWeight={500}>
										Notifications will show here
									</Typography>
								</Menu>
							</Stack>
							<Stack>
								<IconButton
									sx={{
										width: "40px",
										background: { xs: "var(--background-btn)" },
										borderRadius: "18px",
									}}
									onClick={handelLang}
								>
									{lang !== "rtl" ? (
										<ImgBox
											src="https://s3.eu-west-2.amazonaws.com/qmasters/flags/png/saudi-arabia/flag-400.png"
											alt="ar-flag"
										/>
									) : (
										<ImgBox
											src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Great_Britain_%281707%E2%80%931800%29.svg/1200px-Flag_of_Great_Britain_%281707%E2%80%931800%29.svg.png"
											alt="en-flag"
										/>
									)}
								</IconButton>
							</Stack>
							<Stack>
								<Tooltip title="Open settings">
									<IconButton
										disableRipple
										onClick={handleOpenUserMenu}
										sx={{ p: 0 }}
									>
										<Stack
											direction={"row"}
											alignItems={"center"}
											spacing={"10px"}
										>
											<Avatar
												sx={{ width: "58px", height: "58px" }}
												alt="user-avatar"
												src="/assets/images/user-avatar.png"
											/>
											<Stack
												direction={"row"}
												display={{ xs: "none", md: "flex" }}
											>
												<Stack alignItems={"start"}>
													<Typography
														fontSize={12}
														sx={{ color: theme.palette.mutedText.main }}
													>
														{t("welcome")}
													</Typography>
													<Typography fontWeight={700} color={"secondary"}>
														أحمد محمد
													</Typography>
												</Stack>
											</Stack>
											<ArrowDownIcon />
										</Stack>
									</IconButton>
								</Tooltip>
								<Menu
									sx={{ mt: "60px", "& .MuiList-root": { padding: "0px" } }}
									id="menu-appbar-links"
									anchorEl={anchorElUser}
									anchorOrigin={{
										vertical: "top",
										horizontal: "right",
									}}
									keepMounted
									transformOrigin={{
										vertical: "top",
										horizontal: "right",
									}}
									open={Boolean(anchorElUser)}
									onClose={handleCloseUserMenu}
								>
									{settings.map((setting) => (
										<MenuItem key={setting} onClick={handleCloseUserMenu}>
											<Typography
												color={"black"}
												fontSize={18}
												fontWeight={500}
												textAlign="center"
											>
												{setting}
											</Typography>
										</MenuItem>
									))}
								</Menu>
							</Stack>
						</Stack>
					</Stack>
				</Toolbar>
			</Container>
		</AppBarStyled>
	);
}

export default Navbar;
