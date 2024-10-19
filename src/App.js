import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { Home, Footer, TopNav } from "./page";
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
	return (
		<>
			<TopNav />
			<Outlet />
			<Footer />
		</>
	);
};

export default App;
