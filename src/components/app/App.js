import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Dashboard from "../../pages/dashboard/Dashboard";
import NotFoundPage from "../../pages/notFound";
import RegisterPage from "../../pages/registerPage";
import LoginPage from "../../pages/loginPage";
import {
  getAccessToken,
  getIsLoading,
  getIsLoggedIn,
} from "../../redux/auth/authSelectors";
import PrivateRoute from "../routes/PrivateRoute";
import PublicRoute from "../routes/PublicRoute";
import Header from "../header";
import { useEffect } from "react";
import tasksOperations from "../../redux/tasks/tasksOperations";
// import {UserMenu} from "../UserMenu";

function App() {
  const isLoading = useSelector(getIsLoading);
  const isLoggedIn = useSelector(getIsLoggedIn);
  const dispatch = useDispatch();

  const token = useSelector(getAccessToken);

  useEffect(() => {
    if (token) {
      dispatch(tasksOperations.getTasks());
    }
  }, [dispatch, token]);

  return (
    <>
      {isLoggedIn && <Header />}
      {isLoading ? (
        <h2 className="loading">Loading ...</h2>
      ) : (
        <main className="main">
          {/*<UserMenu/>*/}
          <Routes>
            <Route
              path="/"
              element={
                <PrivateRoute redirectTo="/login" component={<Dashboard />} />
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute
                  redirectTo="/dashboard"
                  component={<LoginPage />}
                />
              }
            />
            <Route
              path="/registration"
              element={
                <PublicRoute
                  redirectTo="/dashboard"
                  component={<RegisterPage />}
                />
              }
            />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute redirectTo="/login" component={<Dashboard />} />
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      )}
      <ToastContainer />
    </>
  );
}

export default App;
