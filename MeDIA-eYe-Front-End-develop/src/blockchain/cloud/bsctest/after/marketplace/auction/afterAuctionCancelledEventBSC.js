Moralis.Cloud.afterSave('EventBSCAuctionCancelledTest', async (request) => {
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
    '--------------------------------AUCTION CANCELLED BSC--------------------------------'
  );

  // get listing id
  const listingId = request.object.get('auctionId');
  // find listing in database
  const Listing = Moralis.Object.extend('MediaEyeListing');

  const query = new Moralis.Query(Listing);
  query.equalTo('listingId', listingId);
  query.equalTo('chainId', '0x61');
  query.equalTo('type', 'auction');
  query.equalTo('status', 'available');
  const listing = await query.first();

  // set listing status to cancelled
  listing.set('status', 'cancelled');
  await listing.save();
});
