import React from "react";
import styled from "styled-components";
import { Link } from "../../components/Link";
import { HelpIcon } from "../../components/Svg";
import { Modal } from "../Modal";
import WalletCard from "./WalletCard";
import config from "./config";
import { Login } from "./types";

interface Props {
  login: Login;
  onDismiss?: () => void;
}

const HelpLink = styled(Link)`
  display: flex;
  align-self: center;
  align-items: center;
  margin-top: 24px;
`

const Wrapper = styled.div`
`

const WalletCardsWrapper = styled.div`
  display: grid;
  grid-gap: 16px;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
`

const ConnectModal: React.FC<Props> = ({ login, onDismiss = () => null }) => (
  <Modal title="Connect to a wallet" onDismiss={onDismiss}>
    <Wrapper>
      <WalletCardsWrapper>
        {config.map((entry) => (
          <WalletCard
            key={entry.title}
            login={login}
            walletConfig={entry}
            onDismiss={onDismiss}
          />
        ))}
      </WalletCardsWrapper>
      <HelpLink
        href="https://docs.biswap.org/faq/biswap-platform#how-do-i-connect-my-wallet-to-biswap"
        external
      >
        <HelpIcon color="primary" mr="6px" />
        Learn how to connect
      </HelpLink>
    </Wrapper>
  </Modal>
);

export default ConnectModal;
