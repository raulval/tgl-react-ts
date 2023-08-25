import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "store/userSlice";
import { FaCoins } from "react-icons/fa";
import {
  ArrowRight,
  LeftContainer,
  Logo,
  NavbarContainer,
  NavbarCredits,
  NavbarCreditsWrapper,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLink,
  NavbarLinkContainer,
  NavbarLinkExtended,
  OpenLinksButton,
  RightContainer,
  Selector,
} from "./styles";
import { useTheme } from "styled-components";

interface NavbarProps {
  home?: boolean;
}

const NavBar = (props: NavbarProps) => {
  const dispatch = useDispatch();
  const { colors } = useTheme();
  const user = useSelector(selectUser);
  const credits = user?.credits || 0;
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
        <NavbarCreditsWrapper>
          <NavbarCredits>{credits.toFixed(2)}</NavbarCredits>
          <FaCoins
            size={20}
            color={colors.primary.text}
            style={{ marginLeft: "10px" }}
          />
        </NavbarCreditsWrapper>
        <RightContainer>
          <NavbarLinkContainer>
            <NavbarLink to="/account">Account</NavbarLink>
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
          <NavbarLinkExtended to="/account">Account</NavbarLinkExtended>
          <NavbarLinkExtended to="/" onClick={() => dispatch(logout())}>
            Log out <ArrowRight />
          </NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
};

export default NavBar;
