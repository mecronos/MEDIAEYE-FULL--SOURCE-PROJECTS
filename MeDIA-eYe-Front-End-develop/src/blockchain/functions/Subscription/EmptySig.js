const userSubscription = {
  userAddress: '0x0000000000000000000000000000000000000000',
  subscriptionTier: 0,
  startTime: 0,
  endTime: 0
};

const EMPTY_SIG_OBJ = {
  isValid: false,
  object: {
    userSubscription: userSubscription,
    v: 0,
    r: '0x0000000000000000000000000000000000000000000000000000000000000000',
    s: '0x0000000000000000000000000000000000000000000000000000000000000000'
  }
};

const userSub = ['0x0000000000000000000000000000000000000000', 0, 0, 0];

export const EMPTY_SIG = [
  false,
  userSub,
  0,
  '0x0000000000000000000000000000000000000000000000000000000000000000',
  '0x0000000000000000000000000000000000000000000000000000000000000000'
];
