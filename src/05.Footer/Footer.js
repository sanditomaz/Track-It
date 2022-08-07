import Progressbar from "../img/ProgressBar";
import StyledFooter from "../Styles/StyledFooter";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <StyledFooter>
      <Link to={`/habitos`}>
        <h1>Hábitos</h1>
      </Link>
      <Link to={`/hoje`}>
        <div>
          <Progressbar />
        </div>
      </Link>
      <Link to={`/historico`}>
        <h1>Histórico</h1>
      </Link>
    </StyledFooter>
  );
}
