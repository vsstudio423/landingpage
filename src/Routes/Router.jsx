import { BrowserRouter, HashRouter, Route, Routes } from "react-router";
import App from "../App";
import ProjectDetail from "../pages/ProjectDetail/ProjectDetail";

const RouterApp= () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="proyecto/:proyecto" element={<ProjectDetail />} />
				{/* <Route path="/about" element={<About />} /> */}
				{/* <Route path="*" element={<NotFound />} /> */}
			</Routes>
		</BrowserRouter>
	);
};

export default RouterApp;