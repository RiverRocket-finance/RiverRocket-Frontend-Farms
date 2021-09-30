import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'RIVA-USDC LP',
    lpAddresses: {
      97: '',
      56: '',
      1285: '0x4c7fd935ab43D5D830c61629d324B378c2cD26a9',
    },
    tokenSymbol: 'RIVA',
    tokenAddresses: {
      97: '',
      56: '',
      1285: '0xB75036cCC90B0B2B3Ba33cFf81b87C719be17941',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'RIVA-WMOVR LP',
    lpAddresses: {
      97: '',
      56: '',
      1285: '0xf74fb7eE98a9EFda370B431D5b2da53E55a68482'
    },
    tokenSymbol: 'RIVA',
    tokenAddresses: {
      97: '',
      56: '',
      1285: '0xB75036cCC90B0B2B3Ba33cFf81b87C719be17941',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 2,
    risk: 3,
    lpSymbol: 'MOVR-USDC LP',
    lpAddresses: {
      97: '',
      56: '',
      1285: '0x74888A02891586EBecCc7B04A0F7a9b5098Daf05',
    },
    tokenSymbol: 'MOVR',
    tokenAddresses: {
      97: '',
      56: '',
      1285: '0xe3f5a90f9cb311505cd691a46596599aa1a0ad7d',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
    {
    pid: 3,
    risk: 4,
    lpSymbol: 'MSWAP-MOVR LP',
    lpAddresses: {
      97: '',
      56: '',
      1285: '0x66fFF9B5072CbdFb4bCe50563eC13B237d6A4972',
    },
    tokenSymbol: 'MSWAP',
    tokenAddresses: {
      97: '',
      56: '',
      1285: '0xB3FB48bF090bEDFF4f6F93FFb40221742E107db7',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
   {
    pid: 4,
    risk: 3,
    lpSymbol: 'MSWAP-MOVR LP',
    lpAddresses: {
      97: '',
      56: '',
      1285: '0x66fFF9B5072CbdFb4bCe50563eC13B237d6A4972',
    },
    tokenSymbol: 'MSWAP',
    tokenAddresses: {
      97: '',
      56: '',
      1285: '0xB3FB48bF090bEDFF4f6F93FFb40221742E107db7',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
    {
    pid: 5,
    risk: 3,
    lpSymbol: 'WETH-USDC LP',
    lpAddresses: {
      97: '',
      56: '',
      1285: '0xDb6DD7EdaD4C5ADe2C1CD7E53DfCEbc0f50c7377',
    },
    tokenSymbol: 'WETH',
    tokenAddresses: {
      97: '',
      56: '',
      1285: '0x639a647fbe20b6c8ac19e48e2de44ea792c62c5c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  }, 
  
  
  
  
  
  
  
      {
    pid: 6,
    risk: 1,
    lpSymbol: 'BUSD-USDC LP',
    lpAddresses: {
      97: '',
      56: '',
      1285: '0x7Fae055c7836D135f0E755395b0179D4d5Af3E4D',
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '',
      56: '',
      1285: '0x5D9ab5522c64E1F6ef5e3627ECCc093f56167818',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
      {
    pid: 7,
    risk: 1,
    lpSymbol: 'USDT-USDC LP',
    lpAddresses: {
      97: '',
      56: '',
      1285: '0x9EC8b8818fd07A24481f5635D5283B2aB85dbB5a',
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      97: '',
      56: '',
      1285: '0xB44a9B6905aF7c801311e8F4E76932ee959c663C',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
      {
    pid: 8,
    risk: 1,
    lpSymbol: 'DAI-USDC LP',
    lpAddresses: {
      97: '',
      56: '',
      1285: '0x07866497aAF2E8B201300759720C5Ac873DbF0e7',
    },
    tokenSymbol: 'DAI',
    tokenAddresses: {
      97: '',
      56: '',
      1285: '0x80A16016cC4A2E6a2CACA8a4a498b1699fF0f844',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  
  
  
  
    {
    pid: 2,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'RIVA',
    lpAddresses: {
      97: '',
      56: '',
      1285: '0xB75036cCC90B0B2B3Ba33cFf81b87C719be17941',
    },
    tokenSymbol: 'RIVA',
    tokenAddresses: {
      97: '',
      56: '',
      1285: '0xB75036cCC90B0B2B3Ba33cFf81b87C719be17941',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  
  
  
  
]

export default farms
