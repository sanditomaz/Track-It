import { Header, Footer, AddHabits, DisplayHabits } from "../06.Shared/exports";
import { StyledHabits, LoadingImg } from "../06.Shared/stylesExports";
import { ListarHabitos } from "../06.Shared/API";
import { useState, useContext, useEffect } from "react";
import UserContext from "../06.Shared/UserContext";

export default function Habits() {
  const [userListedHabit, setUserListedHabit] = useState(null);
  const [typeHabit, setTypeHabit] = useState(false);
  const [update, setUpdate] = useState(false);
  const { user } = useContext(UserContext);
  const config = { headers: { Authorization: `Bearer ${user.token}` } };

  useEffect(() => {
    const promise = ListarHabitos(config);
    promise.then((res) => {
      setUserListedHabit(res.data);
      setTypeHabit(false);
      setUpdate(false);
    });
  }, []);
  console.log(userListedHabit);
  if (userListedHabit === null || userListedHabit > 0) {
    return (
      <>
        <Header />
        <LoadingImg>
          <img src="https://bit.ly/3zAxhsA" alt="Loading" />
        </LoadingImg>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <StyledHabits>
        {userListedHabit.length === 0 ? (
          <nav>
            <section>
              <h1>Meus hábitos</h1>
              <div
                onClick={() => {
                  setTypeHabit(true);
                  setUpdate(true);
                }}
              >
                +
              </div>
            </section>
            {typeHabit ? <AddHabits setTypeHabit={setTypeHabit} /> : ""}
            <h2>
              Você não tem nenhum hábito cadastrado ainda. Adicione um hábito
              para começar a trackear!
            </h2>
          </nav>
        ) : (
          <DisplayHabits
            userListedHabit={userListedHabit}
            update={update}
            setUpdate={setUpdate}
          />
        )}
      </StyledHabits>

      <Footer />
    </>
  );
}
