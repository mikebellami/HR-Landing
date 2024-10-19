import React, { useContext, useEffect, useState } from "react";
import { RiCloseLine, RiMenu4Line } from "react-icons/ri";
import { ScrollContext } from "src/App";

const TopNav = () => {

	const { homeRef, aboutRef, servicesRef, testimonysRef, scrollToSection } = useContext(ScrollContext);

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
						<p className="text-primary text-[2.5rem] font-bold">Human <span className="text-secondary">Resource</span></p>

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
										<li className="font-medium text-secondary text-[1.6rem] leading-5" onClick={() => scrollToSection(homeRef)}>
											Home
										</li>

										<li className="font-medium text-secondary text-[1.6rem] leading-5" onClick={() => scrollToSection(aboutRef)}>
											About Us
										</li>

										<li className="font-medium text-secondary text-[1.6rem] leading-5" onClick={() => scrollToSection(servicesRef)}>
											Services
										</li>

										<li className="font-medium text-secondary text-[1.6rem] leading-5" onClick={() => scrollToSection(testimonysRef)}>
											Testimonials
										</li>

										<li className="font-medium text-secondary text-[1.6rem] leading-5">
											Contact Us
										</li>


									</ul>
								</div>
								<div className="web-nav">
									<button
										className=" p-[1rem] text-[1.4rem] lg:text-[1.6rem] lg:py-[1rem] lg:px-[3rem] shadow-btnShadow rounded-[5px] bg-primary text-white md:block"
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
								<li className="font-medium text-secondary text-[1.6rem] leading-5" onClick={() => scrollToSection(homeRef)}>
									Home
								</li>
								<li className="font-medium text-secondary text-[1.6rem] leading-5" onClick={() => scrollToSection(homeRef)}>
									About Us
								</li>

								<li className="font-medium text-secondary text-[1.6rem] leading-5" onClick={() => scrollToSection(homeRef)}>
									Services
								</li>

								<li className="font-medium text-secondary text-[1.6rem] leading-5" onClick={() => scrollToSection(testimonysRef)}>
									Testimontials
								</li>

								<li className="font-medium text-secondary text-[1.6rem] leading-5">
									Contact Us
								</li>


								<li
									className="font-medium text-primary text-[1.6rem] leading-5 "

								>
									Get Started
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
