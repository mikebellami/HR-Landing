import React from "react";
import { ClassCubeSchoolFaqs, forSchoolFeatures } from "../assets/constant";
import { FiveIcon, FourIcon, OneIcon, QuotesIcon, ThreeIcon, TwoIcon } from "src/assets/svg";
import { CustomAccordion } from "src/component";
import { BannerTwo, Curriculum, Interactive, TrackImage } from "src/assets";

const Home = () => {
	return (
		<>
			{/* Hero section */}
			<HeroSection />

			<SectionTwo />

			{/* features */}
			<Features />

			{/* Steps */}
			<Steps />

			{/* FAQ */}
			<Faqs />
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
						Smart, Effective, and Digital Learning for Schools.
					</h1>
					<p className="lg:w-[80%] text-[1.8rem] text-gray my-[1.4rem] leading-[2.8rem]">
						Empower your school with interactive online classes featuring a wide range of multimedia resources, live classes, and
						computer-based assessment for remote and summer learning.
					</p>
					<div className="flex gap-10">
						<button
							className="my-[2rem] py-[10px] px-[30px] rounded-[5px] bg-primary text-white shadow-btnShadow"
							onClick={() => window.open("https://signup.schoolrevs.com/register?merchant=classcube", "_blank")}
						>
							Get Started
						</button>

						{/* <button
							className="my-[2rem] py-[10px] px-[30px] rounded-[5px] border border-primary bg-white text-primary shadow-btnShadow"
							onClick={() => window.open("https://schoolrevs.com/demo?merchant=classcube", "_blank")}
						>
							Book a Demo
						</button> */}
					</div>
				</div>

				<img src={BannerTwo} alt="banner" className="max-w-[670px] max-md:w-full" />
			</div>
		</div>
	);
};

export const Features = () => {
	return (
		<>
			<div className="max-w-[1400px] mx-auto my-[5rem] flex flex-col justify-center items-center p-10 ">
				<div className="mb-[5rem] mx-auto md:w-[70%] lg:w-[50%]">
					<h3 className="text-center text-secondary text-[4rem] font-semibold  leading-[4.8rem] tracking-[0rem]">Why ClassCube Basic?</h3>
					<p className=" text-center text-gray text-[1.6rem] my-5 mx-auto lg:w-[70%]">
						Explore the multitude of benefits designed to enhance your School’s educational experience. Discover why ClassCube is your
						ideal choice for modern education
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[5rem] my-[3rem]">
					{forSchoolFeatures.map((feature, index) => (
						<div key={index}>
							<div className="flex items-start justify-start gap-4 ">
								{feature.icon}
								<div className="">
									<h4 className=" text-secondary text-[2rem] font-semibold leading-[2.7rem]">{feature.title}</h4>
									<p className=" text-gray text-[1.6rem] my-2 font-medium leading-[2.7rem]">{feature.content}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};
export const Steps = () => {
	return (
		<>
			<div className="bg-[#F7F9FB] my-[10rem] p-10">
				<div className="max-w-[1400px] mx-auto my-[3rem] md:my-[8rem]  p-10 ">
					<h3 className="text-left text-secondary text-[3.6rem] font-semibold  leading-[4.8rem] tracking-[0rem] md:w-[80%] lg:w-[35%]">
						You can Get Started in 5 Easy Steps
					</h3>
					<div className="grid grid-cols-1 md:grid-cols-2  gap-[5rem] my-[6rem]">
						<div className="bg-white border border-[#bbcbe6] rounded-[10px] py-20 pl-12 pr-20 flex flex-col gap-4 ">
							<OneIcon />
							<h4 className="text-secondary text-[1.8rem] leading-[2.3rem] font-medium">Sign Up</h4>
							<p className="text-gray text-[1.6rem]">
								Click on the <b className="text-secondary">"Get Started"</b> button to begin the registration process then fill in the
								sign-up form with your school's details, including name, location, and contact information.
							</p>
						</div>
						<div className="bg-white border border-[#bbcbe6] rounded-[10px]   py-20 pl-12 pr-20 flex flex-col gap-4 ">
							<TwoIcon />
							<h4 className="text-secondary text-[1.8rem] leading-[2.3rem] font-medium"> Onboard your School</h4>
							<p className="text-gray text-[1.6rem]">
								Once your account is created, you’ll have access to the dashboard. Upload your student and staff data easily. We
								provide a sample Excel file that you can download and use as a template for your data. Follow the instructions to
								upload your data securely
							</p>
						</div>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[5rem] my-[3rem]">
						<div className="bg-white border border-[#bbcbe6] rounded-[10px] py-20 px-12 flex flex-col gap-4 ">
							<ThreeIcon />
							<h4 className="text-secondary text-[1.8rem] leading-[2.3rem] font-medium">Update Classes</h4>
							<p className="text-gray text-[1.6rem]">
								Tailor existing classes on ClassCube to match your school's structure. Click on "Edit Class" and provide the necessary
								details such as class name, grade level, and any additional information to align it with your school's structure.
							</p>
						</div>
						<div className="bg-white border border-[#bbcbe6] rounded-[10px] py-20 px-12 flex flex-col gap-4 ">
							<FourIcon />
							<h4 className="text-secondary text-[1.8rem] leading-[2.3rem] font-medium">Create Content</h4>
							<p className="text-gray text-[1.6rem]">
								Select the class or classes for which the content is intended. You can create content in diverse multimedia forms,
								including text, videos, audio, images, and more
							</p>
						</div>
						<div className="bg-white border border-[#bbcbe6] rounded-[10px] py-20 px-12 flex flex-col gap-4 ">
							<FiveIcon />
							<h4 className="text-secondary text-[1.8rem] leading-[2.3rem] font-medium">Publish Content</h4>
							<p className="text-gray text-[1.6rem]">
								After crafting your content, review and ensure it aligns with your educational goals. Click the "Publish" button to
								make your content accessible to your students
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export const SectionTwo = () => {
	return (
		<>
			<div className="max-w-[1400px] mx-auto my-[3rem] md:my-[8rem]  p-10 ">
				<div className="md:w-[80%] lg:w-[40%]">
					<h3 className="text-left text-secondary text-[3.6rem] font-semibold  leading-[4.8rem] tracking-[0rem]">
						Education Beyond the Walls of the Classroom
					</h3>
					<p className=" text-[1.8rem] text-gray my-[1.4rem] leading-[2.8rem]">
						An innovative online learning management system designed to bring the classroom experience to your screens
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-[3rem] my-[4rem]">
					<div>
						<img src={Curriculum} alt="curriculum" className="lg:w-[700px]" />
						<div className="mt-[2rem] mb-[3rem]">
							<h4 className="text-secondary text-[1.8rem] font-semibold leading-[3.7rem] tracking-tight">Structured Curriculum </h4>
							<p className="text-[1.6rem] text-gray">
								Teachers can effortlessly input their lesson notes, attach supplementary materials like videos, for in-depth study,
								and to help drive their lesson plans
							</p>
						</div>
					</div>
					<div>
						<img src={Interactive} alt="interactive" className="lg:w-[700px]" />
						<div className="mt-[2rem] mb-[3rem]  ">
							<h4 className="text-secondary text-[1.8rem] font-semibold leading-[3.7rem] tracking-tight">Interactive Content </h4>
							<p className="text-[1.6rem] text-gray">
								Tackle complex subjects with ease using our tools to display intricate mathematical or chemical equations within
								lesson notes.
							</p>
						</div>
					</div>
				</div>
				<div className="my-[5rem] border border-[#AFD5FF] bg-[#f5faff] rounded-[10px] md:rounded-[20px]  overflow-hidden flex flex-col lg:flex-row justify-between items-center gap-[20px]">
					<div className=" p-[2rem] md:p-[4rem]">
						<h4 className="text-secondary text-[1.8rem] font-semibold leading-[3.7rem] tracking-tight">
							{" "}
							Track & Evaluate Student Progress{" "}
						</h4>
						<p className="text-[1.6rem] text-gray">
							Gain real-time insights into student performance with our comprehensive data tools, allowing educators to tailor their
							teaching to individual needs.
						</p>
					</div>
					<img src={TrackImage} alt="track" className="w-[900px]" />
				</div>
			</div>
		</>
	);
};

export const Testimony = () => {
	return (
		<>
			<div className="max-w-[1400px] mx-auto my-[3rem] md:my-[8rem]  p-10 ">
				<h3 className="text-left text-secondary text-[3.6rem] font-medium  leading-[4.8rem] tracking-[0.1rem] md:w-[80%] lg:w-[50%]">
					Modern Schools and Businesses already use ClassCube
				</h3>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] my-[4rem]">
					{Array(6)
						.fill("")
						.map((_, index) => (
							<div key={index}>
								<div className="flex flex-col gap-[0.8rem] bg-lightGray py-[2.2rem] px-[3.5rem] rounded-[2rem]">
									<QuotesIcon />
									<p className="my-[1rem] text-gray text-[1.6rem] font-normal leading-[2.7rem]">
										No need to pay manually, we provide automatic invoice payment service! Set a payment schedule and you're done,
										it's that easy!
									</p>
									<p className="my-[1rem] text-secondary font-semibold text-[1.5rem]">
										Mr Adeyemi
										<br />
										<span className="text-[1.3rem] text-[#5E6C85]">St Gregory’s College</span>
									</p>
								</div>
							</div>
						))}
				</div>
			</div>
		</>
	);
};

export const Faqs = () => {
	return (
		<>
			<div className="max-w-[1400px] mx-auto my-[2rem] md:my-[5rem] flex flex-col justify-center items-center p-10 ">
				<div className="mb-[5rem] mx-auto md:w-[70%] lg:w-[50%]">
					<h3 className="text-center text-secondary text-[3.6rem] font-semibold  leading-[4.8rem] tracking-[0rem]">
						You Have Questions? We Have Answers
					</h3>
				</div>

				<div className="my-[3rem] w-full lg:w-10/12">
					<CustomAccordion items={ClassCubeSchoolFaqs} />
				</div>
			</div>
		</>
	);
};

export default Home;
