import StyledDisplayHabits from "../Styles/StyledDisplayHabits";
import trash from "../img/trash.png";
import { Paragraph } from "../06.Shared/stylesExports";
import { useState } from "react";

export default function DisplayHabits({ userListedHabit }) {
  return (
    <nav>
      <section>
        <h1>Meus hábitos</h1>
        <div>+</div>
      </section>
      {userListedHabit.map((item) => (
        <MyHabits name={item.name} days={item.days} />
      ))}
    </nav>
  );
}

function MyHabits({ name, days }) {
  const weekDays = [
    { id: 1, day: "D" },
    { id: 2, day: "S" },
    { id: 3, day: "T" },
    { id: 4, day: "Q" },
    { id: 5, day: "Q" },
    { id: 6, day: "S" },
    { id: 7, day: "S" },
  ];

  return (
    <StyledDisplayHabits>
      <div>
        <h1>{name}</h1>
        <img src={trash} />
      </div>
      <span>
        {weekDays.map((item, index) => (
          <Colour days={days} idP={item.id} listeddays={item.day} />
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
