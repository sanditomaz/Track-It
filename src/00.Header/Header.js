import StyledHeader from "../Styles/StyleHeader";
import { useContext } from "react";
import UserContext from "../06.Shared/UserContext";

export default function Header() {
  const { user } = useContext(UserContext);

  return (
    <StyledHeader>
      <h1>TrackIt</h1>
      <img src={user.image} alt="User" />
    </StyledHeader>
  );
}
