Moralis.Cloud.define('Watch1155MintBatchBSC', async (request) => {
  const logger = Moralis.Cloud.getLogger();
  logger.info(
    '--------------------------------Watch 1155 Batch Mint BSC--------------------------------'
  );

  let options = {
    chainId: '0x38',
    description: 'ERC1155 Mint Batch BSC',
    address: '',
    topic:
      'MediaEyeERC1155MintBatch(address,uint256[],uint256[],address,uint256,string[],string[])',
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
          internalType: 'uint256[]',
          name: 'tokenIDs',
          type: 'uint256[]'
        },
        {
          indexed: false,
          internalType: 'uint256[]',
          name: 'amounts',
          type: 'uint256[]'
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
          internalType: 'string[]',
          name: 'tokenDatum',
          type: 'string[]'
        },
        {
          indexed: false,
          internalType: 'string[]',
          name: 'metadataURIs',
          type: 'string[]'
        }
      ],
      name: 'MediaEyeERC1155MintBatch',
      type: 'event'
    },
    tableName: 'EventBSCMintBatchOneOneFiveFive',
    sync_historical: true
  };

  Moralis.Cloud.run('watchContractEvent', options, { useMasterKey: true });
});
