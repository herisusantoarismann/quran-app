import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { List } from "./components/List";
import { ListBox } from "./components/ListBox";
import { ListImam } from "./components/ListImam";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<ListBox />} />
          <Route path="/:surah" element={<List />} />
          <Route path="/imam" element={<ListImam />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
