import { GamesButton } from "./styles";

interface GameButtonProps {
  type: string;
  color: string;
  onClick: () => void;
}

const GameButton = (props: GameButtonProps) => {
  return (
    <div>
      <GamesButton onClick={props.onClick} color={props.color}>
        {props.type}
      </GamesButton>
    </div>
  );
};

export default GameButton;
