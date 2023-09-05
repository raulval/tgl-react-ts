import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser, setCredits } from "store/userSlice";
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
import { user as userService } from "services";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface NavbarProps {
  home?: boolean;
}

const NavBar = (props: NavbarProps) => {
  const { getUser } = userService();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { colors } = useTheme();
  const { isLogged } = useSelector(selectUser);
  const user = useSelector(selectUser);
  const credits = user?.credits || 0;
  const [extendNavbar, setExtendNavbar] = useState(false);

  useEffect(() => {
    if (!isLogged) {
      navigate("/");
      toast.error("You must be logged in to see this page", {
        toastId: "loginError1",
      });
    }
    const getUserCredits = async () => {
      try {
        const response = await getUser();
        dispatch(setCredits(response.data.credits));
      } catch (err: any) {
        console.log(err);
        if (err.response.status === 401) {
          dispatch(logout());
          navigate("/");
          toast.error("You must be logged in to see this page", {
            toastId: "loginError1",
          });
        }
      }
    };
    getUserCredits();
  }, []);

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <Logo>
            TGL
            <Selector />
          </Logo>
          {!props.home && <NavbarLink to="/home">Home</NavbarLink>}
          <NavbarLink to="/lottery">Lottery bet</NavbarLink>
          <NavbarLink to="/sports">Sports bet</NavbarLink>
          <NavbarLink to="/results">Results</NavbarLink>
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
          <NavbarLinkExtended to="/lottery">Lottery bet</NavbarLinkExtended>
          <NavbarLinkExtended to="/sports">Sports bet</NavbarLinkExtended>
          <NavbarLinkExtended to="/results">Results</NavbarLinkExtended>
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
