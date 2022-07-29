import { MdEast } from "react-icons/md";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface NavbarStyleProps {
  extendNavbar: boolean;
}

export const NavbarContainer = styled.nav`
  width: 100%;
  height: ${(props: NavbarStyleProps) =>
    props.extendNavbar ? "100vh" : "80px"};

  border-bottom: 2px solid #ebebeb;

  display: flex;
  flex-direction: column;

  @media (min-width: 1138px) {
    height: 80px;
  }
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

export const LeftContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  margin-left: 3rem;
  padding-left: 5%;
`;

export const RightContainer = styled.div`
  flex: 30%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 50px;
`;

export const Logo = styled.p`
  font: italic normal bold 44px "IBM Plex Sans", sans-serif;
  color: #707070;
  margin: 10px;
`;

export const Selector = styled.div`
  background-color: #b5c401;
  margin-bottom: -12px;
  margin-top: 5px;
  margin-left: -12px;
  width: 107px;
  height: 7px;
  border-radius: 6px;
`;

export const NavbarLink = styled(Link)`
  font: italic normal bold 22px "IBM Plex Sans", sans-serif;
  color: #707070;
  text-decoration: none;
  margin: 20px;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.1);
    color: #b5c401;
  }

  @media (max-width: 1138px) {
    display: none;
  }
`;

export const ArrowRight = styled(MdEast)`
  margin-left: 10px;
  display: inline-block;
  vertical-align: middle;
`;

export const NavbarLinkExtended = styled(Link)`
  font: italic normal bold 22px "IBM Plex Sans", sans-serif;
  color: #707070;
  text-decoration: none;
  margin: 20px;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.1);
    color: #b5c401;
  }
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
`;

export const OpenLinksButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: #707070;
  font-size: 45px;
  cursor: pointer;

  @media (min-width: 1138px) {
    display: none;
  }
`;

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1138px) {
    display: none;
  }
`;
