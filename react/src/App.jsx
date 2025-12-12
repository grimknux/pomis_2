import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import TitleHandler from "./TitleHandler";
//import FormPage from "./pages/FormPage";

export default function App() {
  return (
    <BrowserRouter>
      <TitleHandler />
		<Routes>
			<Route path="/" element={<LoginPage />} />
			<Route path="/dashboard" element={<Dashboard />} />
		</Routes>
    </BrowserRouter>
  );
}
