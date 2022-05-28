import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  MainPage,
  SurahContainer,
  AyahContainer,
  ImamContainer,
} from "./components";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route index element={<SurahContainer />} />
          <Route path="/:surah" element={<AyahContainer />} />
          <Route path="/imam" element={<ImamContainer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
