import logo from "../img/logo.png";
import StyledLogin from "../Styles/StyledLogin";
import { Link, useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import { useState } from "react";
import { FazerCadastro } from "../06.Shared/API";

export default function Registration() {
  const navigate = useNavigate();
  const [disable, setDisable] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
    image: "",
  });

  function handleForm({ name, value }) {
    setForm({
      ...form,
      [name]: value,
    });
  }

  function sendForm(e) {
    setDisable(true);
    e.preventDefault();
    const promise = FazerCadastro(form);

    promise.then((res) => navigate("/"));
    promise.catch((err) => {
      alert("Não foi possível realizar o cadastro, verifique seus dados!");
      setDisable(false);
    });
  }

  return (
    <StyledLogin>
      <nav>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <form onSubmit={sendForm}>
          <section>
            <input
              type="email"
              required
              placeholder="email"
              name="email"
              disabled={disable}
              onChange={(e) =>
                handleForm({ name: e.target.name, value: e.target.value })
              }
            />
            <input
              type="password"
              required
              placeholder="senha"
              name="password"
              disabled={disable}
              onChange={(e) =>
                handleForm({ name: e.target.name, value: e.target.value })
              }
            />
            <input
              type="name"
              required
              placeholder="nome"
              name="name"
              disabled={disable}
              onChange={(e) =>
                handleForm({ name: e.target.name, value: e.target.value })
              }
            />
            <input
              type="text"
              required
              placeholder="foto"
              name="image"
              disabled={disable}
              onChange={(e) =>
                handleForm({ name: e.target.name, value: e.target.value })
              }
            />

            <div>
              <button type="submit" value="submit">
                {!disable ? (
                  "Cadastrar"
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

            <Link to={`/`}>
              <nobr>
                <h1>Já tem uma conta? Faça o login!</h1>
              </nobr>
            </Link>
          </section>
        </form>
      </nav>
    </StyledLogin>
  );
}
