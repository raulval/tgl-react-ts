import styled from "styled-components";

interface BetNumbersProps {
  active: boolean;
}

export const NumberButton = styled.button`
  width: 63px;
  height: 65px;
  text-align: center;

  margin-right: 12px;
  margin-bottom: 20px;

  background-color: ${(props: BetNumbersProps) =>
    props.active ? "rgba(0, 0, 0, 0.7)" : "#adc0c4"};
  border-radius: 100px;
  border: none;
  cursor: pointer;
  font: normal normal bold 20px ${(props) => props.theme.font};
  color: #ffffff;
  transition: all 0.2s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.4);
  }

  @media (max-width: 880px) {
    width: 50px;
    height: 50px;
  }
`;
