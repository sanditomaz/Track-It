import logo from "../img/logo.png";
import StyledLogin from "../Styles/StyledLogin";
import { ThreeDots } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { FazerLogin } from "../06.Shared/API";
import UserContext from "../06.Shared/UserContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disable, setDisable] = useState(false);
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  function sendForm(e) {
    setDisable(true);
    e.preventDefault();
    const body = {
      email,
      password,
    };
    const promise = FazerLogin(body);
    promise.then((res) => {
      setUser(res.data);
      navigate("/hoje");
    });
    promise.catch((err) => {
      alert("Não foi possível fazer o login, verifique seus dados!");
      setDisable(false);
    });
  }

  return (
    <StyledLogin>
      <form onSubmit={sendForm}>
        <nav>
          <div>
            <img src={logo} alt="logo" />
          </div>
          <section>
            <input
              type="email"
              required
              placeholder="email"
              disabled={disable}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              type="password"
              required
              placeholder="senha"
              disabled={disable}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />

            <div>
              <button>
                {!disable ? (
                  "Entrar"
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
              </button>
            </div>

            <Link to={`/cadastro`}>
              <nobr>
                <h1>Não tem uma conta? Cadastre-se!</h1>
              </nobr>
            </Link>
          </section>
        </nav>
      </form>
    </StyledLogin>
  );
}
