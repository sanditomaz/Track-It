import StyledAddHabits from "../Styles/StyledAddHabits";

export default function AddHabits() {
  const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];
  const color = "#FFFFFF";
  const clickedColor = "#CFCFCF";
  return (
    <nav>
      <section>
        <h1>Meus hábitos</h1>
        <div>+</div>
      </section>
      <StyledAddHabits color={color}>
        <input type="text" placeholder="nome do hábito"></input>
        <span>
          {weekDays.map((item, index) => (
            <WeekDay day={item} key={index} />
          ))}
        </span>
        <div>
          <aside>
            <h3>Cancelar</h3>
            <h4>Salvar</h4>
          </aside>
        </div>
      </StyledAddHabits>

      <h2>
        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
        começar a trackear!
      </h2>
    </nav>
  );
}

function WeekDay({ day }) {
  return <p>{day}</p>;
}
