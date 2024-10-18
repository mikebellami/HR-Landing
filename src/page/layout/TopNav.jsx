import React, { useEffect, useState } from "react";
import { RiCloseLine, RiMenu4Line } from "react-icons/ri";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import logo from "src/assets/images/logo.png";
import { CustomPopup } from "src/component";
import schoolcube from "src/assets/images/schoolcube.svg";
import schoolteller from "src/assets/images/schoolteller.svg";
import examcentre from "src/assets/images/examcentre.svg";
import { ClassCubeIcon } from "src/assets/svg";
import { Link } from "react-router-dom";

const TopNav = () => {
	const [isSticky, setIsSticky] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 850);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setIsSticky(true);
			} else {
				setIsSticky(false);
			}
		};

		const handleResize = () => {
			setIsMobileView(window.innerWidth < 850);
		};

		window.addEventListener("scroll", handleScroll);
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("scroll", handleScroll);
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<>
			<div className={`${isSticky ? "sticky top-0 z-[100] bg-white shadow-lg" : ""}`}>
				<div className="max-w-[1400px] mx-auto p-10 ">
					<div className={`top-nav-bar ${isSticky ? "sticky top-10" : ""}`}>
						<img src={logo} alt="ClassCube logo" className="w-[15rem] object-contain" />

						{isMobileView ? (
							<>
								<div className="cursor-pointer text-secondary" onClick={toggleMobileMenu}>
									{isMobileMenuOpen ? <RiCloseLine size={20} /> : <RiMenu4Line size={20} />}
								</div>
							</>
						) : (
							<>
								<div className="web-nav">
									<ul className="nav-link cursor-pointer">
										<li className="font-medium text-secondary text-[1.6rem] leading-5">
											<Link to="/">Home</Link>
										</li>
										<CustomPopup
											trigger={
												<button
													type="button"
													className="font-medium text-secondary text-[1.6rem] leading-5 flex gap-3 items-center"
												>
													Packages
													<MdOutlineKeyboardArrowDown />
												</button>
											}
											arrow={false}
											closeOnDocumentClick
											position={["bottom"]}
											width={"fit-content"}
											on={["hover", "focus"]}
											childrenArray={[
												{
													text: (
														<div className="flex items-start text-[1.6rem] gap-5 text-secondary font-medium cursor-pointer hover:text-primary">
															<ClassCubeIcon className="my-2" />
															<div>
																ClassCube Pro
																<p className="text-[#5E6C85] my-2 text-[1.4rem] font-normal">
																	All the courses you need in one place
																</p>
															</div>
														</div>
													),
													onClick: () => {
														window.open("https://pro.classcube.online", "_blank");
													},
												},
												{
													text: (
														<div className="flex items-start text-[1.6rem] gap-5 text-secondary font-medium cursor-pointer hover:text-primary">
															<ClassCubeIcon className="my-2" />
															<div>
																ClassCube Enterprise
																<p className="text-[#5E6C85] my-2 text-[1.4rem] font-normal">
																	Own your space, unleash your potential
																</p>
															</div>
														</div>
													),
													onClick: () => {
														window.open("https://enterprise.classcube.online", "_blank");
													},
												},
											]}
										/>

										<li className="font-medium text-secondary text-[1.6rem] leading-5">
											<Link to="https://ClassCube.online/contact">Contact Us</Link>
										</li>

										<CustomPopup
											trigger={
												<button
													type="button"
													className="font-medium text-secondary text-[1.6rem] leading-5 flex gap-3 items-center"
												>
													SchoolRevs Suite
													<MdOutlineKeyboardArrowDown />
												</button>
											}
											arrow={false}
											closeOnDocumentClick
											position={["bottom"]}
											width={"fit-content"}
											on={["hover", "focus"]}
											childrenArray={[
												{
													text: (
														<div className="flex items-center text-[1.6rem] gap-5 text-secondary font-medium cursor-pointer hover:text-[#0083ff]">
															{" "}
															<img src={schoolcube} alt="schoolcube logo" width={35} /> Schoolcube.net
														</div>
													),
													onClick: () => {
														window.open("https://schoolcube.net", "_blank");
													},
												},
												{
													text: (
														<div className="flex items-center text-[1.6rem] gap-5 text-secondary font-medium cursor-pointer hover:text-[#c92032]">
															{" "}
															<img src={examcentre} alt="schoolcube logo" width={35} /> Examcentre.ng
														</div>
													),
													onClick: () => {
														window.open("https://examcentre.ng", "_blank");
													},
												},
												{
													text: (
														<div className="flex items-center text-[1.6rem] gap-5 text-secondary font-medium cursor-pointer hover:text-[#743790]">
															{" "}
															<img src={schoolteller} alt="schoolcube logo" width={35} /> Schoolteller.ng
														</div>
													),
													onClick: () => {
														window.open("https://schoolteller.ng", "_blank");
													},
												},
											]}
										/>
									</ul>
								</div>
								<div className="web-nav">
									<button
										className=" p-[1rem] text-[1.4rem] lg:text-[1.6rem] lg:py-[1rem] lg:px-[3rem] shadow-btnShadow rounded-[5px] bg-primary text-white md:block"
										onClick={() => window.open("https://signup.schoolrevs.com/register?merchant=classcube", "_blank")}
									>
										Get Started
									</button>
								</div>
							</>
						)}
					</div>

					{isMobileMenuOpen && (
						<>
							<ul className="cursor-pointer mobile">
								<li className="font-medium text-secondary text-[1.6rem] leading-5">
									<Link to="/">Home</Link>
								</li>
								<CustomPopup
									trigger={
										<button type="button" className="font-medium text-secondary text-[1.6rem] leading-5 flex gap-3 items-center">
											Products
											<MdOutlineKeyboardArrowDown />
										</button>
									}
									arrow={false}
									closeOnDocumentClick
									position={["bottom"]}
									width={"fit-content"}
									on={["hover", "focus"]}
									childrenArray={[
										{
											text: (
												<div className="flex items-start text-[1.6rem] gap-5 text-secondary font-medium cursor-pointer hover:text-primary">
													<ClassCubeIcon className="my-2" />
													<div>
														ClassCube Pro
														<p className="text-[#5E6C85] my-2 text-[1.4rem] font-normal">
															All the courses you need in one place
														</p>
													</div>
												</div>
											),
											onClick: () => {
												window.open("https://pro.classcube.online", "_blank");
											},
										},
										{
											text: (
												<div className="flex items-start text-[1.6rem] gap-5 text-secondary font-medium cursor-pointer hover:text-primary">
													<ClassCubeIcon className="my-2" />
													<div>
														ClassCube Enterprise
														<p className="text-[#5E6C85] my-2 text-[1.4rem] font-normal">
															Own your space, unleash your potential
														</p>
													</div>
												</div>
											),
											onClick: () => {
												window.open("https://enterprise.classcube.online", "_blank");
											},
										},
									]}
								/>

								<li className="font-medium text-secondary text-[1.6rem] leading-5">
									<Link to="/contact">Contact Us</Link>
								</li>

								<CustomPopup
									trigger={
										<button type="button" className="font-medium text-secondary text-[1.6rem] leading-5 flex gap-3 items-center">
											Schoolrevs Suite
											<MdOutlineKeyboardArrowDown />
										</button>
									}
									arrow={false}
									closeOnDocumentClick
									position={["bottom"]}
									width={"fit-content"}
									on={["hover", "focus"]}
									childrenArray={[
										{
											text: (
												<div className="flex items-center text-[1.6rem] gap-5 text-secondary font-medium cursor-pointer hover:text-[#0083ff]">
													{" "}
													<img src={schoolcube} alt="schoolcube logo" width={35} /> Schoolcube.net
												</div>
											),
											onClick: () => {
												window.open("https://schoolcube.net", "_blank");
											},
										},
										{
											text: (
												<div className="flex items-center text-[1.6rem] gap-5 text-secondary font-medium cursor-pointer hover:text-[#c92032]">
													{" "}
													<img src={examcentre} alt="schoolcube logo" width={35} /> Examcentre.ng
												</div>
											),
											onClick: () => {
												window.open("https://examcentre.ng", "_blank");
											},
										},
										{
											text: (
												<div className="flex items-center text-[1.6rem] gap-5 text-secondary font-medium cursor-pointer hover:text-[#743790]">
													{" "}
													<img src={schoolteller} alt="schoolcube logo" width={35} /> Schoolteller.ng
												</div>
											),
											onClick: () => {
												window.open("https://schoolteller.ng", "_blank");
											},
										},
									]}
								/>
								<li
									className="font-medium text-primary text-[1.6rem] leading-5 "
									onClick={() => {
										window.open("https://signup.schoolrevs.com/register?merchant=classcube", "_blank");
									}}
								>
									Get Started
								</li>

								<li
									className="font-medium text-primary text-[1.6rem] leading-5"
									onClick={() => {
										window.open("https://schoolrevs.com/demo?merchant=classcube", "_blank");
									}}
								>
									Book a Demo
								</li>
							</ul>
						</>
					)}
				</div>
			</div>
		</>
	);
};

export default TopNav;
