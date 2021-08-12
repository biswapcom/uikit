import React from "react";
import styled from "styled-components";
import { Link } from "../../components/Link";
import { HelpIcon } from "../../components/Svg";
import { Modal } from "../Modal";
import WalletCard from "./WalletCard";
import config, { walletLocalStorageKey } from "./config";
import { Config, Login } from "./types";

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

const getPreferredConfig = (walletConfig: Config[]) => {
  const preferredWalletName = localStorage.getItem(walletLocalStorageKey);
  const sortedConfig = walletConfig.sort((a: Config, b: Config) => a.priority - b.priority);

  if (!preferredWalletName) {
    return sortedConfig;
  }

  const preferredWallet = sortedConfig.find((sortedWalletConfig) => sortedWalletConfig.title === preferredWalletName);

  if (!preferredWallet) {
    return sortedConfig;
  }

  return [
    preferredWallet,
    ...sortedConfig.filter((sortedWalletConfig) => sortedWalletConfig.title !== preferredWalletName),
  ];
};

const ConnectModal: React.FC<Props> = ({ login, onDismiss = () => null }) => {

  const sortedConfig = getPreferredConfig(config);

  return (
      <Modal title="Connect to a wallet" onDismiss={onDismiss}>
        <Wrapper>
          <WalletCardsWrapper>
            {sortedConfig.map((entry) => (
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
    )
};

export default ConnectModal;