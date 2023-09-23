import moment from "moment";
import { Prize } from "services/results/types";
import {
  ResultCard,
  ResultLotteryHeader,
  ResultLotteryContestAndDate,
  ResultLotteryName,
  ResultLotteryPrize,
  ResultBody,
  ResultLotteryNumbersContainer,
  ResultLotteryNumber,
  ResultLotterySeparator,
  ResultLotteryWinnersTable,
  TableRow,
  TableHeader,
  TableCell,
} from "./styles";
import { LotteryResultCardProps } from "./types";

export const LotteryResultCard: React.FC<LotteryResultCardProps> = ({
  lotteryResults,
}) => {
  return (
    <ResultCard>
      <ResultLotteryHeader
        style={{ backgroundColor: lotteryResults?.lotteryColor }}
      >
        <ResultLotteryContestAndDate>
          Contest {lotteryResults?.contest} |{" "}
          {moment(lotteryResults?.date, "DD/MM/YYYY").format("MM/DD/YYYY")}
        </ResultLotteryContestAndDate>
        <ResultLotteryName>{lotteryResults?.name}</ResultLotteryName>
        <ResultLotteryPrize>
          {lotteryResults?.totalPrize} Millions
        </ResultLotteryPrize>
      </ResultLotteryHeader>
      <ResultBody>
        <ResultLotteryNumbersContainer>
          {lotteryResults?.numbers.map((number: number) => (
            <ResultLotteryNumber
              key={number}
              style={{ backgroundColor: lotteryResults.lotteryColor }}
            >
              {number}
            </ResultLotteryNumber>
          ))}
        </ResultLotteryNumbersContainer>
        <ResultLotterySeparator></ResultLotterySeparator>
        <ResultLotteryWinnersTable>
          <thead>
            <TableRow>
              <TableHeader
                style={{
                  backgroundColor: lotteryResults?.lotteryColor,
                  borderTopLeftRadius: 10,
                  borderBottomLeftRadius: 10,
                }}
              >
                Scores
              </TableHeader>
              <TableHeader
                style={{ backgroundColor: lotteryResults?.lotteryColor }}
              >
                Winners
              </TableHeader>
              <TableHeader
                style={{
                  backgroundColor: lotteryResults?.lotteryColor,
                  borderTopRightRadius: 10,
                  borderBottomRightRadius: 10,
                }}
              >
                Prizes
              </TableHeader>
            </TableRow>
          </thead>
          <tbody>
            {lotteryResults?.prizes.map((winner: Prize) => (
              <TableRow key={winner.scores}>
                <TableCell>{winner.scores}</TableCell>
                <TableCell>{winner.winners}</TableCell>
                <TableCell>{winner.prize}</TableCell>
              </TableRow>
            ))}
          </tbody>
        </ResultLotteryWinnersTable>
      </ResultBody>
    </ResultCard>
  );
};
