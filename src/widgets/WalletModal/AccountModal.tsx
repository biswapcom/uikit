import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../../components/Button/Button";
import Text from "../../components/Text/Text";
import LinkExternal from "../../components/Link/LinkExternal";
import Flex from "../../components/Box/Flex";
import { Modal } from "../Modal";
import CopyToClipboard from "./CopyToClipboard";
import connectors, { connectorLocalStorageKey } from "./config";
import { useWalletModal } from "./index";
import Loader from "../Menu/icons/Loader";
import { CheckmarkCircleIcon, ErrorIcon } from "../../components/Svg";

interface Props {
  account: string;
  logout: () => void;
  login: any;
  onDismiss?: () => void;
  recentTransaction?: any;
  rowStatus?: any
  chainId?: any;
  clearTransaction?: any;
  isSwap?: any,
  transactionsForUIKit?: any
}

const ConnectedWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const TransactionWrapper = styled.div`
  border-radius: 16px;
  padding: 24px;
  background-color: #F2F6FC;
`


const AccountModal: React.FC<Props> = ({transactionsForUIKit, isSwap, account, logout, onDismiss = () => null, login,recentTransaction,chainId,clearTransaction}) =>{
  const [currentConnector, setCurrentConnector] = useState('');

  useEffect(()=>{
    if (account) {
      const localStorageConnector = window.localStorage.getItem(connectorLocalStorageKey);
      const current = connectors.find(el=>el.connectorId === localStorageConnector);
      if (current && current?.title) {
        setCurrentConnector(current.title)
      }
    }
  },[account])

  const { onPresentConnectModal } = useWalletModal(login, logout, account,recentTransaction,chainId);

  const changeWalletHandler = async () => {
    await onDismiss();
    await logout();
    onPresentConnectModal();
  }

  const ClearAndDismiss = () => {
    clearTransaction();
    onDismiss();
  }

  return (
    <Modal title="Your wallet" onDismiss={onDismiss}>
      <ConnectedWrapper>
        <Text fontSize='14px' fontWeight='400' lineHeight='21px' color='#708DB7'>Connected with {currentConnector}</Text>
        <Button onClick={changeWalletHandler} scale='sm' variant='primary'>Change</Button>
      </ConnectedWrapper>
      <Text
        fontSize="14px"
        fontWeight='600'
        color='#07162D'
        style={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          marginBottom: "8px",
          marginTop: '16px'
        }}
      >
        {account}
      </Text>
      <Flex mb="32px">
        <CopyToClipboard toCopy={account}>Copy Address</CopyToClipboard>
        <LinkExternal ml='26px' small href={`https://bscscan.com/address/${account}`} mr="16px">
          View on BscScan
        </LinkExternal>
      </Flex>
        {
          isSwap && (
            <TransactionWrapper>
              <Flex justifyContent='space-between' alignItems='center'>
                <Text fontSize='14px' fontWeight='600' lineHeight='21px' color='#07162D'>
                  Recent transactions
                </Text>
                <Button m={0} p={0} scale='sm' variant='text' onClick={ClearAndDismiss}>
                  Clear All
                </Button>
              </Flex>
              <>
                {transactionsForUIKit()}
              </>
            </TransactionWrapper>
          )
        }
      <Flex>
        <Button
          style={{ width: '100%' }}
          mt='24px'
          variant="secondary"
          onClick={() => {
            logout();
            window.localStorage.removeItem(connectorLocalStorageKey);
            onDismiss();
          }}
        >
          Logout
        </Button>
      </Flex>
    </Modal>
  );

}

export default AccountModal;
