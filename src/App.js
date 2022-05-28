import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { List } from "./components/List";
import { ListBox } from "./components/ListBox";
import { ImamContainer } from "./components/Content/Imam/ImamContainer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<ListBox />} />
          <Route path="/:surah" element={<List />} />
          <Route path="/imam" element={<ImamContainer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
