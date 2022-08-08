import {
  StyledTodayHabits,
  Habit,
  LoadingImg,
} from "../06.Shared/stylesExports";
import { Header, Footer } from "../06.Shared/exports";
import WhiteCheck from "../img/whitecheck.png";
import {
  BuscarHabitos,
  MarcarHabitoComoFeito,
  DesmarcarHabitoComoFeito,
} from "../06.Shared/API";
import { useState, useContext, useEffect } from "react";
import UserContext from "../06.Shared/UserContext";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";

export default function TodayHabits() {
  const [todaysHabit, setTodaysHabit] = useState(null);
  const { user } = useContext(UserContext);
  const config = { headers: { Authorization: `Bearer ${user.token}` } };
  const { progress, setProgress } = useContext(UserContext);
  console.log(progress);

  const day = dayjs().locale("pt-br").format("dddd, DD/MM");

  useEffect(() => {
    const promise = BuscarHabitos(config);

    promise.then((res) => {
      {
        setTodaysHabit(res.data);
      }
    });
    promise.catch((err) => alert("Sem hábitos para exibir!"));
  }, []);

  if (todaysHabit === null) {
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
      <StyledTodayHabits>
        <nav>
          <section>
            <h1>{day}</h1>
            {todaysHabit === 0 ? (
              <h2>Nenhum hábito concluído ainda</h2>
            ) : (
              <h3> {progress}% dos hábitos concluídos</h3>
            )}
          </section>
          {todaysHabit.map((item, index) => (
            <DisplayTodayHabits
              name={item.name}
              habitId={item.id}
              checked={item.done}
              currentSequence={item.currentSequence}
              highestSequence={item.highestSequence}
              key={index}
              todaysHabit={todaysHabit}
              progress={progress}
              setProgress={setProgress}
            />
          ))}
        </nav>
      </StyledTodayHabits>
      <Footer todaysHabit={todaysHabit} />
    </>
  );
}

function DisplayTodayHabits({
  name,
  checked,
  highestSequence,
  currentSequence,
  habitId,
}) {
  const { user } = useContext(UserContext);
  const config = { headers: { Authorization: `Bearer ${user.token}` } };
  const [body, setBody] = useState({});
  const navigate = useNavigate();

  function handleCheck() {
    if (!checked) {
      const promise = MarcarHabitoComoFeito(habitId, body, config);
      promise.then((res) => {
        navigate("/habitos");
        navigate("/hoje");
      });

      promise.catch((err) => alert("Erro!"));
    } else {
      const promise = DesmarcarHabitoComoFeito(habitId, body, config);
      promise.then((res) => {
        navigate("/habitos");
        navigate("/hoje");
      });
      promise.catch((err) => alert("Erro!"));
    }
  }

  return (
    <Habit
      current={currentSequence}
      highest={highestSequence}
      checked={checked}
    >
      <div>
        <h3>{name}</h3>
        <h1>
          Sequência atual:
          <h5>
            {currentSequence} {currentSequence === 1 ? "dia" : "dias"}
          </h5>
        </h1>
        <h1>
          Seu recorde:
          <h6>
            {highestSequence} {highestSequence === 1 ? "dia" : "dias"}
          </h6>
        </h1>
      </div>

      <span onClick={handleCheck}>
        <img src={WhiteCheck} alt="checkbox" />
      </span>
    </Habit>
  );
}
