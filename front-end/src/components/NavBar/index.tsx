import { useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/userSlice";
import {
  ArrowRight,
  LeftContainer,
  Logo,
  NavbarContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLink,
  NavbarLinkContainer,
  NavbarLinkExtended,
  OpenLinksButton,
  RightContainer,
  Selector,
} from "./styles";

interface NavbarProps {
  home?: boolean;
}

const NavBar = (props: NavbarProps) => {
  const dispatch = useDispatch();
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <Logo>
            TGL
            <Selector />
          </Logo>
          {!props.home && <NavbarLink to="/home">Home</NavbarLink>}
        </LeftContainer>
        <RightContainer>
          <NavbarLinkContainer>
            <NavbarLink to="#">Account</NavbarLink>
            <NavbarLink to="/" onClick={() => dispatch(logout())}>
              Log out <ArrowRight />
            </NavbarLink>
            <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          {!props.home && (
            <NavbarLinkExtended to="/home">Home</NavbarLinkExtended>
          )}
          <NavbarLinkExtended to="#">Account</NavbarLinkExtended>
          <NavbarLinkExtended to="/">
            Log out <ArrowRight />
          </NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
};

export default NavBar;
