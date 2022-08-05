import logo from "../img/logo.png";
import StyledLogin from "../Styles/StyledLogin";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <StyledLogin>
      <nav>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <section>
          <input type="email" required placeholder="email" />
          <input type="password" required placeholder="senha" />

          <div>
            <button>Entrar</button>
          </div>

          <Link to={`/cadastro`}>
            <nobr>
              <h1>Não tem uma conta? Cadastre-se!</h1>
            </nobr>
          </Link>
        </section>
      </nav>
    </StyledLogin>
  );
}
