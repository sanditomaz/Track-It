import { StyledTodayHabits, Habit } from "../06.Shared/stylesExports";
import { Header, Footer } from "../06.Shared/exports";
import WhiteCheck from "../img/whitecheck.png";

export default function TodayHabits() {
  const backgroundColor = "#8FC549";
  return (
    <>
      <Header />
      <StyledTodayHabits>
        <nav>
          <section>
            <h1>Segunda, 17/05</h1>
            <h2>Nenhum hábito concluído ainda</h2>
          </section>
          <Habit backgroundColor={backgroundColor}>
            <div>
              <h3>Ler 1 capítulo de livro</h3>
              <p>Sequência atual: 3 dias</p>
              <p>Seu recorde: 5 dias</p>
            </div>

            <span>
              <img src={WhiteCheck} alt="checkbox" />
            </span>
          </Habit>
        </nav>
      </StyledTodayHabits>
      <Footer />
    </>
  );
}

function displayTodayHabits(){
  return(
    
  )
}