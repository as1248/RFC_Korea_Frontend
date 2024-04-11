import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./routes/Main";
import Search from "./routes/Search";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Main/>}/>
        <Route path="/:num" exact element={<Search/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;