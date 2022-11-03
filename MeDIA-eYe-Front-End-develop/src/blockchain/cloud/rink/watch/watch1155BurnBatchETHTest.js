Moralis.Cloud.define('Watch1155BurnBatchETHTest', async (request) => {
  const logger = Moralis.Cloud.getLogger();
  logger.info(
    '------------------------------Watch 1155 BurnBatch ETH-----------------------------'
  );

  let options = {
    chainId: '0x4',
    address: '',
    description: 'ERC1155 Burn ETH',
    topic:
      'MediaEyeBurnBatchNft1155(address,uint256[],uint256[],address, uint256)',
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
          name: 'burner',
          type: 'address'
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'timestamp',
          type: 'uint256'
        }
      ],
      name: 'MediaEyeBurnBatchNft1155',
      type: 'event'
    },
    tableName: 'EventETHBurnOneOneFiveFiveTest',
    sync_historical: false
  };
  Moralis.Cloud.run('watchContractEvent', options, { useMasterKey: true });
  // unwatch event that has TABLE_NAME as table in the database
  // let options2 = { tableName: 'EventETHBurnOneOneFiveFive' };
  // Moralis.Cloud.run('unwatchContractEvent', options2, { useMasterKey: true });
});
