import React from "react";
import { EnvelopeIcon, LocationIcon, PhoneIcon } from "src/assets/svg";
import { ErrorMessage, Formik } from "formik";
import Swal from "sweetalert2";
import * as yup from "yup";

const Contact = () => {
	const validationSchema = yup.object().shape({
		email: yup.string().email("Please provide a valid email").required("Please provide a valid email"),
		firstName: yup.string().required("Please provide First Name").min(3, "First Name must be 3 characters long"),
		surname: yup.string().required("Please provide Surname").min(3, "Surname must be 3 characters long"),
		subject: yup.string().required("Please provide Subject"),
		message: yup.string().required("Please provide a message").min(20, "Message must be 20 characters long"),
	});

	const initialValues = {
		email: "",
		firstName: "",
		surname: "",
		subject: "",
		message: "",
	};

	return (
		<>
			<div className="max-w-[1400px] mx-auto my-[3rem] p-10">
				<h1 className="text-[4.8rem] text-secondary font-medium leading-[6.2rem] tracking-tighter ">
					Get in Touch With us <br /> with Any Questions
				</h1>
				<p className="my-[1.3rem] text-gray text-[1.6rem] font-medium leading-[2.4rem] tracking-tight">
					We take our commitment to our users seriously. Have a <br />
					question or suggestion? Feel free to send us a message!
				</p>

				<div className="grid gap-[20px] lg:grid-cols-3 my-[5rem]">
					<div className="border-[1.3px] border-[#c6d0e5] rounded-[8px] p-10 ">
						<div className="flex gap-8 items-center">
							<EnvelopeIcon />
							<div>
								<p className="text-[1.8rem] text-secondary font-medium leading-[2.1rem] tracking-tight">info@classcube.com</p>
								<p className="my-[0.4rem] text-gray ">Help email support</p>
							</div>
						</div>
					</div>
					<div className="border-[1.3px] border-[#c6d0e5] rounded-[8px] p-10 ">
						<div className="flex gap-8 items-center">
							<PhoneIcon />
							<div>
								<p className="text-[1.8rem] text-secondary font-medium leading-[2.1rem] tracking-tight">+234-705-394-4592</p>
								<p className="my-[0.4rem] text-gray ">Help phone support</p>
							</div>
						</div>
					</div>
					<div className="border-[1.3px] border-[#c6d0e5] rounded-[8px] p-10 ">
						<div className="flex gap-8 items-center">
							<LocationIcon />
							<div>
								<p className="text-[1.8rem] text-secondary font-medium leading-[2.1rem] tracking-tight">40b Oduduwa Way, Ikeja GRA</p>
								<p className="my-[0.4rem] text-gray ">Office Address</p>
							</div>
						</div>
					</div>
				</div>

				<div className="my-[8rem] md:w-8/12">
					<Formik
						initialValues={initialValues}
						validationSchema={validationSchema}
						onSubmit={(values, { resetForm }) => {
							const postData = {
								body: {
									firstname: values.firstName,
									surname: values.surname,
									email: "info@classcube.com",
									contactEmail: values.email,
									subject: "ClassCube | Enquiry form ",
									message: values.message,
								},
							};

							fetch("https://mailer.classcube.online/api/mailer/send?type=classcube", {
								method: "POST",
								headers: {
									"Content-Type": "application/json",
								},
								body: JSON.stringify(postData), // Use postData here
							})
								.then((response) => response.json())
								.then((data) => {
									Swal.fire({
										position: "top-end",
										icon: "success",
										title: "Submitted Successfully",
										timer: 1500,
									});
									resetForm();
								})
								.catch((error) => {
									console.error("Error:", error);
								});
						}}
					>
						{({ values, handleChange, handleBlur, handleSubmit }) => (
							<form onSubmit={handleSubmit}>
								<div className="mb-[2rem] grid gap-[20px] lg:grid-cols-2">
									<div className="mb-[2rem]">
										<input
											type="text"
											name="firstName"
											onChange={handleChange}
											value={values.firstName}
											onBlur={handleBlur}
											placeholder="First Name"
											className="bg-lightGray border-[0.5px] border-primary text-[#5E6C85] rounded-[5px] px-[2rem] py-[1.5rem] w-full text-[1.6rem]"
										/>
										<ErrorMessage name="firstName" component="div" className="text-red-500 text-[1.2rem] my-3" />
									</div>
									<div className="mb-[2rem]">
										<input
											type="text"
											name="surname"
											onChange={handleChange}
											value={values.surname}
											onBlur={handleBlur}
											placeholder="Surname"
											className="bg-lightGray border-[0.5px] border-primary text-[#5E6C85] rounded-[5px] px-[2rem] py-[1.5rem] w-full text-[1.6rem]"
										/>
										<ErrorMessage name="surname" component="div" className="text-red-500 text-[1.2rem] my-3" />
									</div>
								</div>

								<div className="mb-[2rem] grid gap-[20px] lg:grid-cols-2">
									<div className="mb-[2rem]">
										<input
											type="email"
											name="email"
											onChange={handleChange}
											value={values.email}
											onBlur={handleBlur}
											placeholder="Email "
											className="bg-lightGray text-[#5E6C85] border-[0.5px] border-primary rounded-[5px] px-[2rem] py-[1.5rem] w-full text-[1.6rem]"
										/>
										<ErrorMessage name="email" component="div" className="text-red-500 text-[1.2rem] my-3" />
									</div>

									<div className="mb-[2rem]">
										<input
											type="text"
											name="subject"
											onChange={handleChange}
											value={values.subject}
											onBlur={handleBlur}
											placeholder="Subject"
											className="bg-lightGray text-[#5E6C85] border-[0.5px] border-primary rounded-[5px] px-[2rem] py-[1.5rem] w-full text-[1.6rem]"
										/>
										<ErrorMessage name="subject" component="div" className="text-red-500 text-[1.2rem] my-3" />
									</div>
								</div>

								<div className="mb-[4rem]">
									<textarea
										placeholder="Message"
										onChange={handleChange}
										value={values.message}
										onBlur={handleBlur}
										name="message"
										className="bg-lightGray h-[15rem] text-[#5E6C85] border-[0.5px] border-primary rounded-[5px] px-[2rem] py-[1.5rem] w-full text-[1.6rem]"
									/>
									<ErrorMessage name="message" component="div" className="text-red-500 text-[1.2rem] my-3" />
								</div>

								<button
									type="submit"
									className="shadow-btnShadow w-full bg-primary rounded-[5px] p-[1.3rem] text-white text-[1.6rem] leading-[2.4rem] font-medium"
								>
									Submit
								</button>
							</form>
						)}
					</Formik>
				</div>
			</div>
		</>
	);
};

export default Contact;
