import { GamesButton } from "./styles";

interface GameButtonProps {
  active?: boolean;
  notActive?: boolean;
  type: string;
  color: string;
  onClick?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

const GameButton = ({
  active,
  type,
  color,
  onClick,
  onFocus,
  onBlur,
}: GameButtonProps) => {
  return (
    <div>
      <GamesButton
        active={active}
        onClick={onClick}
        onFocus={onFocus}
        onBlur={onBlur}
        color={color}
      >
        {type}
      </GamesButton>
    </div>
  );
};

export default GameButton;
