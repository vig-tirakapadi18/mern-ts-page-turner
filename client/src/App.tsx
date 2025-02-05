import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Hero from "./components/Hero";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import PageNotFound from "./pages/PageNotFound";

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
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
