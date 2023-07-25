import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import CalendarScreen from "src/pages/Calendar";
import Login from "src/pages/Login";
import Main from "src/pages/Main";
import { tokenSelector } from "src/redux/reducers/authReducer";
import { useAppSelector } from "src/redux/utils/types";

const Navigations = () => {
  const token = useAppSelector(tokenSelector);

  const navigate = useNavigate();

  useEffect(() => {
    if (token) navigate("/login");
  }, [token]);

  return (
    <div className="App">
      <Routes>
        <Route element={<Main />} path={"/"} />
        <Route element={<Login />} path={"/login"} />
        <Route element={<CalendarScreen />} path={"/calendar"} />
      </Routes>
    </div>
  );
};

export default Navigations;
