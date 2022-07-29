import { GamesButton } from "./styles";

interface GameButtonProps {
  title: string;
  color?: string;
}

const GameButton = (props: GameButtonProps) => {
  return (
    <div>
      <GamesButton>{props.title}</GamesButton>
    </div>
  );
};

export default GameButton;
