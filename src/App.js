import {
  GlobalStyle,
  Login,
  Registration,
  Habits,
  TodayHabit,
  History,
} from "./06.Shared/exports";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "./06.Shared/UserContext";
import { useState } from "react";

export default function App() {
  const [user, setUser] = useState(null);
  const [progress, setProgress] = useState(0);

  return (
    <UserContext.Provider value={{ user, setUser, progress, setProgress }}>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Registration />} />
          <Route path="/habitos" element={<Habits />} />
          <Route path="/hoje" element={<TodayHabit />} />
          <Route path="/historico" element={<History />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
