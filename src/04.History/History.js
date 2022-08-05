import StyledHistory from "../Styles/StyledHistory";
import { Header, Footer } from "../06.Shared/exports";

export default function History() {
  return (
    <>
      <Header />
      <StyledHistory>
        <nav>
          <section>
            <h1>Histórico</h1>
            <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
          </section>
        </nav>
      </StyledHistory>
      <Footer />
    </>
  );
}
