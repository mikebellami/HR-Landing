import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { Home, Footer, TopNav, Contact } from "./page";
import { Helmet } from "react-helmet";

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
				{
					path: "/contact",
					element: <Contact />,
				},
			],
		},
	]);
	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>ClassCube | Smart, Effective, and Digital Learning</title>
			</Helmet>
			<RouterProvider router={router} />
		</>
	);
}

const AppLayout = () => {
	return (
		<>
			<TopNav />
			<Outlet />
			<Footer />
		</>
	);
};

export default App;
