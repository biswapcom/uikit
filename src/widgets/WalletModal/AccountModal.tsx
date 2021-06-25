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
  isSwap?: any
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


const AccountModal: React.FC<Props> = ({ isSwap, account, logout, onDismiss = () => null, login,recentTransaction,chainId,clearTransaction}) =>{
  const [transactions, setTransactions] = useState(recentTransaction)
  const [currentConnector, setCurrentConnector] = useState('');
  const [isPendingTransaction, setIsPendingTransactions] = useState(true)

  useEffect(()=>{
    if (account) {
      const localStorageConnector = window.localStorage.getItem(connectorLocalStorageKey);
      const current = connectors.find(el=>el.connectorId === localStorageConnector);
      if (current && current?.title) {
        setCurrentConnector(current.title)
      }
      // console.log('current',current);
    }
  },[account])

  // console.log('currentConnector',currentConnector);
  const { onPresentConnectModal } = useWalletModal(login, logout, account,recentTransaction,chainId);

  const getRowStatus = (sortedRecentTransaction: any) => {
    const { hash, receipt } = sortedRecentTransaction

    if (!hash) {
      return { icon: <Loader />, color: 'text' }
    }

    if (hash && receipt?.status === 1) {
      return { icon: <CheckmarkCircleIcon color="success" />, color: 'success' }
    }

    return { icon: <ErrorIcon color="failure" />, color: 'failure' }
  }

  const changeWalletHandler = async () => {
    await onDismiss();
    await logout();
    onPresentConnectModal();
  }

  const clearTransactions = () => {
    setTransactions([])
    clearTransaction();
  }


  console.log('recent ui',recentTransaction);
  console.log('transactions ui',transactions);
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
                <Button m={0} p={0} scale='sm' variant='text' onClick={clearTransactions}>
                  Clear All
                </Button>
              </Flex>
              <>
                {!account && (
                  <Flex justifyContent="center" flexDirection="column">
                    <Text mb="8px" bold>
                      Please connect your wallet to view your recent transactions
                    </Text>
                  </Flex>
                )}
                {account && chainId && transactions.length === 0 && (
                  <Flex justifyContent="center" flexDirection="column">
                    <Text mb="8px" bold>
                      No recent transactions
                    </Text>
                  </Flex>
                )}

                {account &&
                chainId &&
                recentTransaction.map((sortedRecentTransaction: any) => {

                  console.log('sortedRecentTransaction ui',sortedRecentTransaction);

                  const { hash, summary } = sortedRecentTransaction
                  // console.log('hash ui',hash);
                  // console.log('sortedRecentTransaction?.hash && sortedRecentTransaction?.receipt?.status ui',sortedRecentTransaction?.hash && sortedRecentTransaction?.receipt?.status);
                  //  console.log('transactions[hash].receipt', sortedRecentTransaction?.hash && sortedRecentTransaction?.receipt?.status !== 1 && !sortedRecentTransaction?.receipt);
                  // let pendingStatus;
                  const transactionHash = sortedRecentTransaction.hash

                  if (!transactionHash || !recentTransaction[transactionHash]) setIsPendingTransactions(false)

                  if (sortedRecentTransaction?.hash && sortedRecentTransaction?.receipt?.status !== 1 && !recentTransaction[transactionHash].receipt) sortedRecentTransaction(true)

                  const { icon } = getRowStatus(sortedRecentTransaction)
                  let { color } = getRowStatus(sortedRecentTransaction)

                  if (color === 'success') {
                    color = 'primary'
                  }


                  console.log('is pending', isPendingTransaction);
                  return (
                    <>
                      {hash && (
                        <Flex key={hash} alignItems="center" justifyContent="space-between" mb="4px">
                          <LinkExternal href={`https://bscscan.com/tx/${hash}`} color={color}>
                            {summary ?? hash}
                          </LinkExternal>
                          {isPendingTransaction ? <Loader/> :icon}
                        </Flex>
                      )}
                    </>
                  )
                })}
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
