import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./features/AppLayout";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/about" element={<HomePage />}></Route>
          <Route path="/play" element={<HomePage />}></Route>
          <Route path="/notes" element={<HomePage />}></Route>
          <Route path="/s" element={<HomePage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
