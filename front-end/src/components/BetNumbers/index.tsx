import { NumberButton } from "./styles";

interface BetNumbersProps {
  range: number;
  onClick?: () => void;
}

const BetNumbers = (props: BetNumbersProps) => {
  const numbers = Array.from(Array(props.range).keys());

  return (
    <>
      {numbers.map((number) => {
        return (
          <NumberButton key={number} onClick={props.onClick}>
            {number + 1}
          </NumberButton>
        );
      })}
    </>
  );
};

export default BetNumbers;
