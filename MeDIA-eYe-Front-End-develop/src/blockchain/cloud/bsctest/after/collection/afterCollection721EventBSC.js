Moralis.Cloud.afterSave(
  'EventBSCCollectionCreatedSevenTwoOneTest',
  async (request) => {
    // only run once the contract call is confirmed
    const confirmed = request.object.get('confirmed');
    if (!confirmed) {
      return;
    }

    // temporary fix
    const saved = request.object.get('saved');
    if (saved) return;
    // update event table to indicate that save has been triggered
    request.object.set('saved', true);
    request.object.save();

    const logger = Moralis.Cloud.getLogger();
    logger.info(
      '--------------------------------After 721 Collection Created BSC--------------------------------'
    );
    // event data
    const colAddress = await request.object.get('addr');
    const name = await request.object.get('name');
    const owner = await request.object.get('owner');
    const symbol = await request.object.get('symbol');
    const minters = await request.object.get('minters').map((minter) => {
      return minter.toLowerCase();
    });

    // tokenData passed into contract
    const tokenData = JSON.parse(await request.object.get('tokenData'));
    const description = tokenData.description;
    const hidden = tokenData.hidden;
    const logo = tokenData.logo;
    // banner and feature image may result to undefined as they are not required
    const banner = tokenData.banner;
    const feature = tokenData.feature;

    // save collection address into collection object
    const Collection = Moralis.Object.extend('MediaEyeCollection');
    let col = new Collection();
    col.set('banner', banner);
    col.set('chainId', '0x61');
    col.set('collectionAddress', colAddress);
    col.set('collectionType', 'ERC721');
    col.set('description', description);
    col.set('feature', feature);
    col.set('hidden', hidden);
    col.set('logo', logo);
    col.set('minters', minters);
    col.set('name', name);
    col.set('owner', owner);
    col.set('symbol', symbol);

    // query user with eth address
    const User = Moralis.Object.extend('_User');
    const query = new Moralis.Query(User);
    query.equalTo('ethAddress', owner);
    const ownerUser = await query.first({ useMasterKey: true });

    // set collection to be writeable only by user
    let acl = new Moralis.ACL();
    acl.setPublicReadAccess(true);
    acl.setPublicWriteAccess(false);
    acl.setWriteAccess(ownerUser.id, true);

    await col.setACL(acl);
    await col.save({ useMasterKey: true });
  }
);
