import { GamesButton } from "./styles";

interface GameButtonProps {
  active?: boolean;
  notActive?: boolean;
  type: string;
  color: string;
  onClick?: () => void;
}

const GameButton = ({ active, type, color, onClick }: GameButtonProps) => {
  return (
    <div>
      <GamesButton active={active} onClick={onClick} color={color}>
        {type}
      </GamesButton>
    </div>
  );
};

export default GameButton;
