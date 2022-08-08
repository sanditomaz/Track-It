import { useState, useContext } from "react";
import { StyledAddHabits, StyledParagraph } from "../06.Shared/stylesExports";
import { CriarHabito } from "../06.Shared/API";
import UserContext from "../06.Shared/UserContext";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";

export default function AddHabits({ setTypeHabit }) {
  const weekDays = [
    { id: 0, day: "D" },
    { id: 1, day: "S" },
    { id: 2, day: "T" },
    { id: 3, day: "Q" },
    { id: 4, day: "Q" },
    { id: 5, day: "S" },
    { id: 6, day: "S" },
  ];
  const [typedHabbit, setTypedHabbit] = useState("");
  const [days, setDays] = useState([]);
  const [disable, setDisable] = useState(false);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const config = { headers: { Authorization: `Bearer ${user.token}` } };
  console.log(days);
  function sendHabit() {
    if (days.length === 0) {
      alert("Selecione pelo menos um dia da semana!");
    } else {
      setDisable(true);
      const body = {
        name: typedHabbit,
        days: days,
      };

      const promise = CriarHabito(body, config);
      promise.then((res) => {
        {
          setDisable(false);
          setTypeHabit(false);
          navigate("/hoje");
          navigate("/habitos");
        }
      });
      promise.catch(() => {
        setDisable(false);
        console.log("Algo de errado não está certo!");
      });
    }
  }

  return (
    <StyledAddHabits>
      <input
        type="text"
        placeholder="nome do hábito"
        value={typedHabbit}
        name="name"
        disabled={disable}
        onChange={(e) => {
          setTypedHabbit(e.target.value);
        }}
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
