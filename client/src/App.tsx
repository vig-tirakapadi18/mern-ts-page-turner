import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Hero from "./components/Hero";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";

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
      <Route
        path="/sign-up"
        element={
          <Layout>
            <SignUp />
          </Layout>
        }
      />
      <Route
        path="/sign-in"
        element={
          <Layout>
            <SignIn />
          </Layout>
        }
      />
      <Route path="/search" element={<div>Search</div>} />
      <Route path="*" element={<div>404: Page not found!</div>} />
    </Routes>
  );
}

export default App;
