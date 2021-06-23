export declare enum ChainId {
    MAINNET = 56,
    BSCTESTNET = 97
}
export declare function getBscScanLink(chainId: ChainId, data: string, type: 'transaction' | 'token' | 'address'): string;
