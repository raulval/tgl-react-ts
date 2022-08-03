import { NumberButton } from "./styles";

interface BetNumbersProps {
  range: number;
  selectedNumbers: number[];
  onClick: (e: any) => void;
}

const BetNumbers = (props: BetNumbersProps) => {
  const numbers = Array.from(Array(props.range).keys());

  return (
    <>
      {numbers.map((number) => {
        const isActive = props.selectedNumbers.includes(number + 1)
          ? true
          : false;

        return (
          <NumberButton
            key={number}
            onClick={props.onClick}
            active={isActive}
            value={number + 1}
          >
            {number + 1}
          </NumberButton>
        );
      })}
    </>
  );
};

export default BetNumbers;
