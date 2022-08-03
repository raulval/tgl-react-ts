import { GamesButton } from "./styles";

interface GameButtonProps {
  active?: boolean;
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
        active={props.active}
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
