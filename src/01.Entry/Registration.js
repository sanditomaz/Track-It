import logo from "../img/logo.png";
import StyledLogin from "../Styles/StyledLogin";
import { Link } from "react-router-dom";

export default function Registration() {
  return (
    <StyledLogin>
      <nav>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <section>
          <input type="email" required placeholder="email" />
          <input type="password" required placeholder="senha" />
          <input type="name" required placeholder="nome" />
          <input type="foto" required placeholder="foto" />

          <div>
            <button>Cadastrar</button>
          </div>

          <Link to={`/`}>
            <nobr>
              <h1>Já tem uma conta? Faça o login!</h1>
            </nobr>
          </Link>
        </section>
      </nav>
    </StyledLogin>
  );
}
