Moralis.Cloud.define('Watch1155Mint', async (request) => {
  const logger = Moralis.Cloud.getLogger();
  logger.info(
    '--------------------------------Watch 1155 Mint--------------------------------'
  );

  let options = {
    chainId: '0x4',
    address: '',
    topic:
      'MediaEyeERC1155Mint(address,uint256,uint256,address,uint256,string,string)',
    abi: {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'tokenAddress',
          type: 'address'
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'tokenID',
          type: 'uint256'
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256'
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'minter',
          type: 'address'
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'timestamp',
          type: 'uint256'
        },
        {
          indexed: false,
          internalType: 'string',
          name: 'tokenData',
          type: 'string'
        },
        {
          indexed: false,
          internalType: 'string',
          name: 'mediaUri',
          type: 'string'
        }
      ],
      name: 'MediaEyeERC1155Mint',
      type: 'event'
    },
    tableName: 'EventMintOneOneFiveFive',
    sync_historical: false
  };
  Moralis.Cloud.run('watchContractEvent', options, { useMasterKey: true });
});
