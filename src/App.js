import {
  GlobalStyle,
  Login,
  Registration,
  Habits,
  TodayHabit,
  History,
} from "./06.Shared/exports";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
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
  );
}
