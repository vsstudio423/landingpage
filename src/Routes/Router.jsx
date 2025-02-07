import { BrowserRouter, Route, Routes } from "react-router";
import App from "../App";

const RouterApp= () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				{/* <Route path="/about" element={<About />} /> */}
				{/* <Route path="*" element={<NotFound />} /> */}
			</Routes>
		</BrowserRouter>
	);
};

export default RouterApp;