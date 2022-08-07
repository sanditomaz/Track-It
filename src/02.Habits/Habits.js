import Header from "../00.Header/Header";
import StyledHabits from "../Styles/StyledHabits";
import Footer from "../05.Footer/Footer";
import AddHabits from "./AddHabits";
import DisplayHabits from "./DisplayHabits";
import { ListarHabitos } from "../06.Shared/API";
import { useState, useContext, useEffect } from "react";
import UserContext from "../06.Shared/UserContext";

export default function Habits() {
  const [userListedHabit, setUserListedHabit] = useState([]);
  const [typeHabit, setTypeHabit] = useState(false);
  const { user } = useContext(UserContext);
  const config = { headers: { Authorization: `Bearer ${user.token}` } };

  useEffect(() => {
    const promise = ListarHabitos(config);
    promise.then((res) => {
      setUserListedHabit(res.data);
    });
  }, []);

  return (
    <>
      <Header />
      <StyledHabits>
        {userListedHabit.length === 0 ? (
          <nav>
            <section>
              <h1>Meus hábitos</h1>
              <div onClick={() => setTypeHabit(true)}>+</div>
            </section>
            {typeHabit ? <AddHabits setTypeHabit={setTypeHabit} /> : ""}
            <h2>
              Você não tem nenhum hábito cadastrado ainda. Adicione um hábito
              para começar a trackear!
            </h2>
          </nav>
        ) : (
          <DisplayHabits userListedHabit={userListedHabit} />
        )}
      </StyledHabits>
      {/* <AddHabits /> */}

      <Footer />
    </>
  );
}
