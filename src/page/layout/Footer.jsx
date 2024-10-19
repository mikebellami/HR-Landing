import React from "react";
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";

const Footer = () => {
	return (
		<>
			<div className="max-w-[1400px] mx-auto px-10">
				<div className="flex flex-col md:flex-row gap-10 md:justify-between md:items-center">
					<div className="text-secondary text-[3.2rem] font-semibold md:max-w-[60%] lg:max-w-[50%]">
						Join Leading Organizations Embracing Innovative HR Solutions Today!
					</div>

					<button
						className="max-w-[60%] md:max-w-[60%] md:w-auto py-[10px] px-[30px] rounded-[5px] bg-primary text-white"
					>
						Discover More
					</button>
				</div>
				<div className="flex flex-col md:flex-row gap-[20px] md:justify-between md:items-center my-[50px]">
					<div className="md:w-[50%]">
						<p className="text-primary text-[2.5rem] font-bold">Human <span className="text-secondary">Resource</span></p>

						<p className="text-gray text-[1.5rem] font-normal  leading-[2.2rem]">
							© Copyright {new Date().getFullYear()} Human Resource All Rights Reserved
						</p>
					</div>
					<div className="text-primary cursor-pointer text-[2.5rem] font-normal  leading-[2.2rem] flex md:justify-center gap-[1rem]">
						<FaLinkedin />
						<FaSquareTwitter />
						<FaFacebookSquare />
						<FaInstagramSquare />
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
