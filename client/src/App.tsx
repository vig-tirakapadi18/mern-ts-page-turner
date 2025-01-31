import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Hero from "./components/Hero";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Hero />
          </Layout>
        }
      />
      <Route path="/search" element={<div>Search</div>} />
      <Route path="*" element={<div>404: Page not found!</div>} />
    </Routes>
  );
}

export default App;
