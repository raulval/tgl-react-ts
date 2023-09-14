import { LeagueButtons } from "./styles";

interface LeagueButtonProps {
  active?: boolean;
  notActive?: boolean;
  name: string;
  onClick?: () => void;
}

const LeagueButton = ({ active, name, onClick }: LeagueButtonProps) => {
  return (
    <div>
      <LeagueButtons active={active} onClick={onClick}>
        {name}
      </LeagueButtons>
    </div>
  );
};

export default LeagueButton;
