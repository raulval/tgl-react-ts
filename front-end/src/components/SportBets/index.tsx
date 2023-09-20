import React from "react";

import { useTheme } from "styled-components";
import moment from "moment";
import { props } from "cypress/types/bluebird";
import { FaCoins } from "react-icons/fa";
import { currencyFormat } from "shared/utils";
import {
  BetsContainer,
  Separator,
  BetsWrapper,
  BetPicked,
  BetDate,
  BetMatch,
  BetsContentsContainer,
  BetsP,
} from "./styles";
import { SportBetsProps } from "./types";

export const SportBets: React.FC<SportBetsProps> = ({ data }) => {
  const { colors } = useTheme();

  return (
    <BetsContainer>
      <Separator color={colors.leagues} />
      <BetsWrapper>
        <BetsContentsContainer>
          <BetPicked>
            {data.picked} - {currencyFormat(data.amount)}
            <FaCoins
              size={13}
              color={colors.primary.text}
              style={{ marginLeft: "5px" }}
            />
          </BetPicked>
        </BetsContentsContainer>
        <BetsContentsContainer>
          <BetsP>Possible Earnings: </BetsP>
          <BetPicked>
            {currencyFormat(data.earning)}
            <FaCoins
              size={13}
              color={colors.primary.text}
              style={{ marginLeft: "10px" }}
            />
          </BetPicked>
        </BetsContentsContainer>
        <BetsContentsContainer>
          <BetDate>{moment(data.match.start_time).format("L - HH:mm")}</BetDate>
        </BetsContentsContainer>

        <BetMatch>{data.match.name}</BetMatch>
      </BetsWrapper>
    </BetsContainer>
  );
};
