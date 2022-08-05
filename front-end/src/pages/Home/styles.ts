import { MdEast } from "react-icons/md";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
`;

export const HomeHeader = styled.div`
  min-width: 0;
  width: 100vw;
  display: flex;
  margin-top: 4.6rem;

  @media (max-width: 1138px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const RecentGames = styled.h1`
  font: italic normal bold 24px ${(props) => props.theme.font};
  color: ${(props) => props.theme.colors.primary.text};
  text-transform: uppercase;
  margin-left: 8.6rem;

  @media (max-width: 1138px) {
    margin-left: 0;
    margin-bottom: 20px;
  }
`;

export const FiltersContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 45px;

  @media (max-width: 1138px) {
    margin-left: 0;
    margin-right: 20px;
  }
`;

export const FiltersText = styled.p`
  font: italic normal normal 17px ${(props) => props.theme.font};
  color: ${(props) => props.theme.colors.secundary.text};
`;

export const NewBetLink = styled(Link)`
  margin-left: 34rem;
  font: italic normal bold 24px ${(props) => props.theme.font};
  color: ${(props) => props.theme.colors.primary.main};
  text-decoration: none;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 1509px) {
    margin-left: 10rem;
  }

  @media (max-width: 1138px) {
    margin-left: 10px;
    margin-top: 15px;
  }
`;

export const ArrowRight = styled(MdEast)`
  margin-left: 10px;
  display: inline-block;
  vertical-align: middle;
`;

export const BetsPlayedContainer = styled.div`
  width: 100vw;
  height: 65vh;
  display: flex;
  flex-direction: column;
  padding-left: 8.6rem;
  margin-top: 35px;
  overflow-y: auto;
`;

export const NoBet = styled.p`
  font: italic normal bold 20px ${(props) => props.theme.font};
`;
