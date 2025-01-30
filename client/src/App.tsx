import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/search" element={<div>Search</div>} />
      <Route path="*" element={<div>404: Page not found!</div>} />
    </Routes>
  );
}

export default App;
