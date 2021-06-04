import React from "react";
import styled from "styled-components";
import Button from "../../components/Button/Button";
import Text from "../../components/Text/Text";
import LinkExternal from "../../components/Link/LinkExternal";
import Flex from "../../components/Box/Flex";
import { Modal } from "../Modal";
import CopyToClipboard from "./CopyToClipboard";
import { connectorLocalStorageKey } from "./config";

interface Props {
  account: string;
  logout: () => void;
  onDismiss?: () => void;
  login?:any;
  recentTransaction?: any;
  rowStatus?: any
  chainId?: any
  getRowStatus?: any
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

const AccountModal: React.FC<Props> = ({ account, logout, onDismiss = () => null,login ,recentTransaction,chainId,getRowStatus}) => {
  console.log('recentTransaction account modal',recentTransaction,);
  console.log('chainId account modal',chainId);
  console.log('getRowStatus account modal',getRowStatus);
  return (
    <Modal title="Your wallet" onDismiss={onDismiss}>
      <ConnectedWrapper>
        <Text fontSize='14px' fontWeight='400' lineHeight='21px' color='#708DB7'>Connected with Metamask</Text>
        <Button scale='sm' variant='primary'>Change</Button>
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
      <TransactionWrapper>
        <Flex justifyContent='space-between' alignItems='center'>
          <Text fontSize='14px' fontWeight='600' lineHeight='21px' color='#07162D'>
            Recent transactions
          </Text>
          <Button scale='sm' variant='text'>
            Clear All
          </Button>
        </Flex>
        <>

          {/* {!account && ( */}
          {/*  <Flex justifyContent="center" flexDirection="column"> */}
          {/*    <Text mb="8px" bold> */}
          {/*      Please connect your wallet to view your recent transactions */}
          {/*    </Text> */}
          {/*  </Flex> */}
          {/* )} */}
          {/* {account && chainId && recentTransaction.length === 0 && ( */}
          {/*  <Flex justifyContent="center" flexDirection="column"> */}
          {/*    <Text mb="8px" bold> */}
          {/*      No recent transactions */}
          {/*    </Text> */}
          {/*  </Flex> */}
          {/* )} */}
          {/* {account && */}
          {/* chainId && */}
          {/* recentTransaction.map((sortedRecentTransaction: any) => { */}
          {/*  const { hash, summary } = sortedRecentTransaction */}
          {/*  const { icon } = getRowStatus(sortedRecentTransaction) */}
          {/*  let { color } = getRowStatus(sortedRecentTransaction) */}
          
          {/*  if (color === 'success') { */}
          {/*    color = 'primary' */}
          {/*  } */}
          
          {/*  return ( */}
          {/*    <> */}
          {/*      <Flex key={hash} alignItems="center" justifyContent="space-between" mb="4px"> */}
          {/*        /!* <LinkExternal href={getBscScanLink(chainId, hash, 'transaction')} color={color}> *!/ */}
          {/*        /!*  {summary ?? hash} *!/ */}
          {/*        /!* </LinkExternal> *!/ */}
          {/*        {icon} */}
          {/*      </Flex> */}
          {/*    </> */}
          {/*  ) */}
          {/* })} */}
        </>
      </TransactionWrapper>
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