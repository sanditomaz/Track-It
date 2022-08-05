import Header from "../00.Header/Header";
import StyledHabits from "../Styles/StyledHabits";
import Footer from "../05.Footer/Footer";
import AddHabits from "./AddHabits";
import DisplayHabits from "./DisplayHabits";

export default function Habits() {
  return (
    <>
      <Header />
      <StyledHabits>
        {/*<nav>
          <section>
            <h1>Meus hábitos</h1>
            <div>+</div>
          </section>
          <h2>
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
            começar a trackear!
          </h2>
        </nav>*/}
        {/* <AddHabits /> */}
        <DisplayHabits />
      </StyledHabits>

      <Footer />
    </>
  );
}
