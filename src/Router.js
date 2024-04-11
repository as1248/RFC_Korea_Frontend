import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./routes/Main";
import Search from "./routes/Search";
import NotFound from "./routes/NotFound";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Main/>}/>
        <Route path="/:num" exact element={<Search/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;