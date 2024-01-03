import { BrowserRouter, Routes, Route } from "react-router-dom";
import Fighters from "./pages/Fighters";
import NewUpdate from "./pages/NewUpdate";

export default function FightersRouter(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Fighters/>} />
        <Route path="/newupdate/:fighter_id" element={<NewUpdate/>} />
      </Routes>
    </BrowserRouter>
  );
}