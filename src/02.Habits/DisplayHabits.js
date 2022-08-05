import StyledDisplayHabits from "../Styles/StyledDisplayHabits";
import trash from "../img/trash.png";

export default function DisplayHabits() {
  const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];
  const clickedColor = "#CFCFCF";
  return (
    <nav>
      <section>
        <h1>Meus hábitos</h1>
        <div>+</div>
      </section>
      <StyledDisplayHabits clickedColor={clickedColor}>
        <div>
          <h1>Ler 1 capítulo de livro</h1>
          <img src={trash} />
        </div>
        <span>
          {weekDays.map((item, index) => (
            <ClickedDay day={item} key={index} />
          ))}
        </span>
      </StyledDisplayHabits>

      <StyledDisplayHabits clickedColor={clickedColor}>
        <div>
          <h1>Ler 1 capítulo de livro</h1>
          <img src={trash} />
        </div>
        <span>
          {weekDays.map((item, index) => (
            <ClickedDay day={item} key={index} />
          ))}
        </span>
      </StyledDisplayHabits>
    </nav>
  );
}

function ClickedDay({ day }) {
  return <p>{day}</p>;
}
