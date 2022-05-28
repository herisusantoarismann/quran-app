import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage } from "./components/MainPage";
import { ImamContainer } from "./components/Content/Imam/ImamContainer";
import { SurahContainer } from "./components/Content/Surah/SurahContainer";
import { AyahContainer } from "./components/Content/Ayah/AyahContainer";

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
