import { useState, useContext } from "react";
import { StyledAddHabits, StyledParagraph } from "../06.Shared/stylesExports";
import { CriarHabito } from "../06.Shared/API";
import UserContext from "../06.Shared/UserContext";
import { ThreeDots } from "react-loader-spinner";

export default function AddHabits({ setTypeHabit }) {
  const weekDays = [
    { id: 1, day: "D" },
    { id: 2, day: "S" },
    { id: 3, day: "T" },
    { id: 4, day: "Q" },
    { id: 5, day: "Q" },
    { id: 6, day: "S" },
    { id: 7, day: "S" },
  ];
  const [typedHabbit, setTypedHabbit] = useState("");
  const [days, setDays] = useState([]);
  const [habit, setHabit] = useState({});
  const [disable, setDisable] = useState(false);
  const { user } = useContext(UserContext);
  const config = { headers: { Authorization: `Bearer ${user.token}` } };

  function sendHabit() {
    setDisable(true);
    setHabit({ name: typedHabbit, days: days });

    const promise = CriarHabito(habit, config);
    promise.then((res) => {
      setDisable(false);
    });
    promise.catch(alert("Algo de errado não está certo!"));
  }
  console.log(habit);

  return (
    <StyledAddHabits>
      <input
        type="text"
        placeholder="nome do hábito"
        value={typedHabbit}
        name="name"
        disabled={disable}
        onChange={(e) => setTypedHabbit(e.target.value)}
      ></input>
      <span>
        {weekDays.map((item, index) => (
          <WeekDay
            day={item.day}
            id={item.id}
            key={index}
            days={days}
            setDays={setDays}
            disabled={disable}
          />
        ))}
      </span>
      <div>
        <aside>
          <h3 onClick={() => setTypeHabit(false)}>Cancelar</h3>
          <h4 onClick={() => sendHabit()}>
            {" "}
            {!disable ? (
              "Salvar"
            ) : (
              <ThreeDots
                height="80"
                width="70"
                radius="9"
                color="#FFFFFF"
                ariaLabel="three-dots-loading"
                wrapperStyle
                wrapperClass
              />
            )}
          </h4>
        </aside>
      </div>
    </StyledAddHabits>
  );
}

function WeekDay({ day, id, days, setDays, disabled }) {
  const [backGroundColor, setBackGroundColor] = useState("#FFFFFF");
  const [color, setColor] = useState("#dbdbdb");

  function selectDay() {
    if (color === "#dbdbdb") {
      setColor("#FFFFFF");
      setBackGroundColor("#CFCFCF");
      const clickedDays = [...days, id];
      setDays(clickedDays);
    } else {
      setColor("#dbdbdb");
      setBackGroundColor("#FFFFFF");
      const remove = days.filter((value) => value !== id);
      setDays(remove);
    }
  }

  return (
    <StyledParagraph
      color={color}
      backGroundColor={backGroundColor}
      onClick={selectDay}
      pointer={disabled}
    >
      {day}
    </StyledParagraph>
  );
}
