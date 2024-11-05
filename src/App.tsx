import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewCanvas from "./pages/NewCanvas";
import NewPage from "./pages/NewPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<NewCanvas />} />
        <Route path={"/new"} element={<NewPage />} />
      </Routes>
    </BrowserRouter>
  );
}
