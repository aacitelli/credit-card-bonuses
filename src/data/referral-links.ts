const getRandom = (array: string[]): string => {
  return array[Math.floor(Math.random() * array.length)] as string;
};

export const REFERRALS = {
  CHASE: {
    SAPPHIRE: getRandom(["https://www.referyourchasecard.com/6j/QN3N8HQ4KX"]),
    INKS: getRandom([
      "https://www.referyourchasecard.com/21o/98ZI1A53EK",
      "https://www.referyourchasecard.com/21o/1QKLYDOXDQ",
      "https://www.referyourchasecard.com/21o/YURXNKIY4Y",
    ]),
    FREEDOM: getRandom(["https://www.referyourchasecard.com/18o/9KKC4IK8LP"]),
    UNITED: getRandom(["https://www.referyourchasecard.com/215N/D2KTYJ4FTP"]),
    SOUTHWEST: getRandom([
      "https://www.referyourchasecard.com/226f/0MJIAMX5UZ",
    ]),
  },
  AMERICAN_EXPRESS: {
    GOLD: "https://americanexpress.com/en-us/referral/ANDENa0UQA?xl=cp19",
    BUSINESS_GREEN:
      "https://americanexpress.com/en-us/referral/ANDENaewip?xl=cp19",
    DELTA_BUSINESS_PLATINUM:
      "https://americanexpress.com/en-us/referral/delta-skymiles-platinum?ref=ANDENaLLR3&xl=cp19",
  },
};
