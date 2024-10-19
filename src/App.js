import { createContext, useRef } from "react";
import { Outlet, RouterProvider, createBrowserRouter, } from "react-router-dom";
import "./App.css";
import { Home, Footer, TopNav, ScrollToTop } from "./page";
import { Helmet } from "react-helmet";

export const ScrollContext = createContext(null);
function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <AppLayout />,
			children: [
				{
					path: "",
					element: <Home />,
				},

			],
		},
	]);
	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Human Resource </title>
			</Helmet>
			<RouterProvider router={router} />
		</>
	);
}

const AppLayout = () => {
	const homeRef = useRef(null);
	const aboutRef = useRef(null);
	const servicesRef = useRef(null);
	const testimonysRef = useRef(null);

	const scrollToSection = (sectionRef) => {
		if (sectionRef.current) {
			sectionRef.current.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<ScrollContext.Provider value={{ homeRef, aboutRef, servicesRef, testimonysRef, scrollToSection }}>
			<TopNav />
			<Outlet />
			<Footer />
			<ScrollToTop />
		</ScrollContext.Provider>
	);
};

export default App;
