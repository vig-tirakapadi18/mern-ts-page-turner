import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Hero from "./components/Hero";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import PageNotFound from "./pages/PageNotFound";
import CreateNewBook from "./pages/Book/CreateNewBook";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import MyBooks from "./pages/Book/MyBooks";

const App = (): React.JSX.Element => {
  const isLoggedIn = useSelector<RootState, boolean>(
    (state) => state.auth.isLoggedIn
  );

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
      {isLoggedIn && (
        <Route
          path="/new-book"
          element={
            <Layout>
              <CreateNewBook />
            </Layout>
          }
        />
      )}
      {isLoggedIn && (
        <Route
          path="/my-books"
          element={
            <Layout>
              <MyBooks />
            </Layout>
          }
        />
      )}
      <Route path="/search" element={<div>Search</div>} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default App;
