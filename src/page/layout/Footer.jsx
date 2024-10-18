import React from "react";
import { Link } from "react-router-dom";
import logo from "src/assets/images/logo.png";

const Footer = () => {
	return (
		<>
			<div className="max-w-[1400px] mx-auto px-10">
				<div className="flex flex-col md:flex-row gap-10 md:justify-between md:items-center">
					<div className="text-secondary text-[3.2rem] font-semibold md:max-w-[60%] lg:max-w-[50%]">
						Join Other Schools & Businesses Using ClassCube Today!
					</div>

					<button
						className="max-w-[60%] md:max-w-[60%] md:w-auto py-[10px] px-[30px] rounded-[5px] bg-primary text-white"
						onClick={() => window.open("https://signup.schoolrevs.com/register?merchant=classcube", "_blank")}
					>
						Get Started
					</button>
				</div>
				<div className="flex flex-col md:flex-row gap-[20px] md:justify-between md:items-center my-[50px]">
					<div className="flex justify-between md:w-[50%]">
						<img src={logo} alt="ClassCube logo" className="w-[15rem] object-contain" />
					</div>
					<div className="text-gray text-[1.5rem] font-normal  leading-[2.2rem]">
						© Copyright {new Date().getFullYear()} Revocube. All Rights Reserved{" "}
						<Link to="https://ClassCube.online/privacy" className="text-primary cursor-pointer">
							Privacy and Policy
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
