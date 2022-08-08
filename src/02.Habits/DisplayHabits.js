import StyledDisplayHabits from "../Styles/StyledDisplayHabits";
import trash from "../img/trash.png";
import { Paragraph } from "../06.Shared/stylesExports";
import { useState, useContext } from "react";
import AddHabits from "./AddHabits";
import { DeletarHabito } from "../06.Shared/API";
import UserContext from "../06.Shared/UserContext";
import { useNavigate } from "react-router-dom";

export default function DisplayHabits({ userListedHabit }) {
  const [typeHabit, setTypeHabit] = useState(false);
  return (
    <nav>
      <section>
        <h1>Meus hábitos</h1>
        <div onClick={() => setTypeHabit(true)}>+</div>
      </section>
      {typeHabit ? <AddHabits setTypeHabit={setTypeHabit} /> : ""}

      {userListedHabit.map((item, index) => (
        <MyHabits
          name={item.name}
          days={item.days}
          habitId={item.id}
          key={index}
        />
      ))}
    </nav>
  );
}

function MyHabits({ name, days, habitId }) {
  const { user } = useContext(UserContext);
  const config = { headers: { Authorization: `Bearer ${user.token}` } };
  const navigate = useNavigate();
  const weekDays = [
    { id: 0, day: "D" },
    { id: 1, day: "S" },
    { id: 2, day: "T" },
    { id: 3, day: "Q" },
    { id: 4, day: "Q" },
    { id: 5, day: "S" },
    { id: 6, day: "S" },
  ];

  function deleteHabit() {
    const confirm = window.confirm(
      "Tem certeza que você quer apagar esse hábito?"
    );
    if (confirm) {
      const promise = DeletarHabito(config, habitId);
      promise.then(() => {
        console.log("yay, it worked!!");
        navigate("/hoje");
        navigate("/habitos");
      });
    }
  }

  return (
    <StyledDisplayHabits>
      <div>
        <h1>{name}</h1>
        <img src={trash} onClick={deleteHabit} alt="icon" />
      </div>
      <span>
        {weekDays.map((item, index) => (
          <Colour days={days} idP={item.id} listeddays={item.day} key={index} />
        ))}
      </span>
    </StyledDisplayHabits>
  );
}

function Colour({ days, idP, listeddays }) {
  let backGroundColor = "#FFFFFF";
  let color = "#dbdbdb";
  days.map((item) =>
    item === idP ? ((color = "#FFFFFF"), (backGroundColor = "#CFCFCF")) : ""
  );
  return (
    <Paragraph idP={idP} color={color} backGroundColor={backGroundColor}>
      {listeddays}
    </Paragraph>
  );
}
