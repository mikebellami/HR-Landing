import React, { useContext } from "react";
import { ScrollContext } from "../App";
import { aboutUs, services, testimonials } from "../assets/constant";
import { ImQuotesLeft } from "react-icons/im";
import Banner from "src/assets/images/banner.jpg";

const Home = () => {
	const { homeRef, aboutRef, servicesRef, testimonysRef } = useContext(ScrollContext);

	return (
		<>
			{/* Hero section */}
			<section ref={homeRef} >
				<HeroSection />
			</section>

			<section ref={aboutRef} >
				<About />
			</section>


			{/* Sevices */}
			<section ref={servicesRef} >
				<Services />
			</section>

			{/* Testimony */}
			<section ref={testimonysRef} >
				<Testimony />
			</section>

		</>
	);
};

export const HeroSection = () => {
	return (
		<div className="relative">
			<div className="dot"></div>

			<div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row justify-start items-center p-10 ">
				<div className="mb-[5rem] md:w-[90%] lg:lg:w-[50%]">
					<h1 className="text-left text-secondary text-[4.8rem] font-semibold leading-[6.2rem] tracking-[0.1rem]">
						Building Stronger Teams, Together
					</h1>
					<p className="lg:w-[80%] text-[1.8rem] text-gray my-[1.4rem] leading-[2.8rem]">
						Empowering organizations with innovative HR strategies and dedicated professionals.
					</p>
					<div className="flex gap-10">
						<button
							className="my-[2rem] py-[10px] px-[30px] rounded-[5px] bg-primary text-white shadow-btnShadow"
						>
							Get Started
						</button>
					</div>
				</div>

				<img src={Banner} alt="banner" className="max-w-[670px] max-md:w-full" />
			</div>
		</div>
	);
};


export const About = () => {
	return (
		<>
			<div className="max-w-[1400px] mx-auto my-[3rem] md:my-[8rem]  p-10 ">
				<h3 className="text-left text-secondary text-[3.6rem] font-medium  leading-[4.8rem] tracking-[0.1rem] md:w-[80%] lg:w-[50%]">
					About Us
				</h3>
				<p className="md:w-[80%] text-[1.8rem] text-gray my-[1.4rem] leading-[2.8rem]">
					We are dedicated to empowering organizations by providing world-class HR solutions that address every stage of the employee lifecycle. With a strong focus on innovation, efficiency, and people-centric approaches, we help businesses thrive by aligning their workforce strategy with their broader business goals.
				</p>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-[3rem] my-[4rem]">
					{aboutUs?.map((data, index) => (
						<div key={index}>
							<div className="flex flex-col gap-[0.8rem] bg-lightGray py-[2.2rem] px-[3.5rem] rounded-[2rem]">

								<p className="mb-[1rem] text-secondary font-semibold text-[2.7rem]">
									{data?.title}
								</p>
								<p className="my-[1rem] text-gray text-[1.6rem] font-normal leading-[2.7rem]">
									{data?.content}
								</p>

							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export const Services = () => {
	return (
		<>
			<div id="services" className="bg-[#F7F9FB] my-[10rem] p-10">
				<div className="max-w-[1400px] mx-auto my-[3rem] md:my-[8rem] p-10">
					<div className="mb-[5rem] mx-auto md:w-[70%]">
						<h3 className="text-center text-secondary text-[4rem] font-semibold  leading-[4.8rem] tracking-[0rem]">Our Services</h3>
						<p className=" text-center text-gray text-[1.6rem] my-5 mx-auto lg:w-[70%]">
							Discover the comprehensive range of solutions designed to meet the diverse needs of your business. From hiring to employee management, we’re here to help you grow and succeed.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-[5rem] my-[6rem]">
						{services?.map((feature, index) => (
							<div key={index}>
								<div className="bg-white border border-[#bbcbe6] rounded-[10px] py-20 pl-12 pr-20 flex flex-col gap-4 md:h-[47rem] lg:h-[34rem]">
									<div className="flex justify-center items-center border border-primary rounded-full w-20 h-20 bg-lightGray">
										{feature.icon}
									</div>
									<h4 className="text-secondary text-[1.8rem] leading-[2.3rem] font-medium">{feature.title}</h4>
									<p className="text-gray text-[1.6rem] leading-[3rem] flex-grow">
										{feature.content}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};


export const Testimony = () => {
	return (
		<>
			<div className="max-w-[1400px] mx-auto my-[5rem] flex flex-col justify-center items-center p-10 ">
				<div className="mb-[5rem] mx-auto md:w-[70%] lg:w-[50%]">
					<h3 className="text-center text-secondary text-[4rem] font-semibold leading-[4.8rem] tracking-[0rem]">
						Feedback from Our <br />Valued Clients
					</h3>

				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[5rem] my-[3rem]">
					{testimonials?.map((data, index) => (
						<div key={index}>
							<div className="flex flex-col gap-[0.8rem] bg-lightGray py-[2.2rem] px-[3.5rem] rounded-[2rem] h-[30rem]">
								<ImQuotesLeft className="text-primary text-[2rem]" />

								<p className="my-[1rem] text-gray text-[1.6rem] font-normal leading-[2.7rem]">
									{data?.content}
								</p>

								<p className="mb-[1rem] text-secondary font-semibold text-[1.4rem]">
									{data?.name}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Home;
