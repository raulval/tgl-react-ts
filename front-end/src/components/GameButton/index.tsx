import { GamesButton } from "./styles";

interface GameButtonProps {
  type: string;
  color: string;
  onClick?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

const GameButton = (props: GameButtonProps) => {
  return (
    <div>
      <GamesButton
        onClick={props.onClick}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        color={props.color}
      >
        {props.type}
      </GamesButton>
    </div>
  );
};

export default GameButton;
