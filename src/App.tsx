import { BrowserRouter, Routes, Route } from "react-router-dom";
import SiteBuilderHome from "./pages/SiteBuilderHome";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<SiteBuilderHome />} />
        <Route path={"/new"} element={<SiteBuilderHome />} />
      </Routes>
    </BrowserRouter>
  );
}
