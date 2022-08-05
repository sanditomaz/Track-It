import StyledHeader from "../Styles/StyleHeader";
import SpongeBob from "../img/SpongeBob.png";

export default function Header() {
  return (
    <StyledHeader>
      <h1>TrackIt</h1>
      <img src={SpongeBob} alt="User" />
    </StyledHeader>
  );
}
