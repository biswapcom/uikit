import React from "react";
import styled from "styled-components";
import Button from "../../../components/Button/Button";
import Text from "../../../components/Text/Text";
import Wallet from "../icons/Wallet";
import { useWalletModal } from "../../WalletModal";
import { Login } from "../../WalletModal/types";

interface Props {
  account?: string;
  login: Login;
  logout: () => void;
}

const WalletWrap = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.card};
  border-radius: 8px;
`;

const CurrencyValue = styled.div`
  padding: 0 16px;
`;

const UserBlock: React.FC<Props> = ({ account, login, logout }) => {
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(login, logout, account);
  const accountEllipsis = account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : null;
  const iconProps = { width: "24px", color: "contrast", style: { cursor: "pointer" } };
  return (
    <div>
      {account ? (
        <WalletWrap>
          <CurrencyValue>
            <Text fontSize="14px" color="text">
              12.34 BNB
            </Text>
          </CurrencyValue>
          <Button
            scale="sm"
            onClick={() => {
              onPresentAccountModal();
            }}
          >
            <Wallet {...iconProps} mr="8px" />
            {accountEllipsis}
          </Button>
        </WalletWrap>
      ) : (
        <Button
          scale="sm"
          onClick={() => {
            onPresentConnectModal();
          }}
        >
          <Wallet {...iconProps} mr="8px" />
          Connect wallet
        </Button>
      )}
    </div>
  );
};

export default React.memo(UserBlock, (prevProps, nextProps) => prevProps.account === nextProps.account);
