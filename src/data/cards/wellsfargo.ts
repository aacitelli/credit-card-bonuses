import { z } from "zod";

import { schemas } from "../../generated/api.client";

export const WELLS_FARGO_CARDS: z.input<typeof schemas.CreditCard>[] = [
  {
    name: "Business Platinum",
    issuer: schemas.IssuersEnum.enum.WELLS_FARGO,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.USD,
    isBusiness: true,
    annualFee: 0,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 2,
    url: "https://www.wellsfargo.com/biz/business-credit/credit-cards/platinum-card/",
    imageUrl: "/images/wellsfargo/business-platinum.png",
    credits: [],
    offers: [
      {
        amount: [{ amount: 300 }],
        spend: 3000,
        days: 90,
        credits: [],
        url: "https://www.wellsfargo.com/biz/business-credit/credit-cards/platinum-card/",
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 300 }],
        spend: 3000,
        days: 90,
        credits: [],
      },
    ],
  },
  // {
  //   name: "Business Elite Signature",
  //   issuer: schemas.IssuersEnum.enum.WELLS_FARGO,
  //   network: schemas.NetworksEnum.enum.VISA,
  //   currency: schemas.CurrenciesEnum.enum.USD,
  //   isBusiness: true,
  //   annualFee: 0,
  //   isAnnualFeeWaived: false,
  //   universalCashbackPercent: 2,
  //   url: "https://www.wellsfargo.com/biz/business-credit/credit-cards/business-elite-card/",
  //   imageUrl: "/images/wellsfargo/business-elite-signature.png",
  //   credits: [],
  //   offers: [
  //     {
  //       amount: [{ amount: 1000 }],
  //       spend: 25_000,
  //       days: 90,
  //       credits: [],
  //       url: "https://www.wellsfargo.com/biz/business-credit/credit-cards/business-elite-card/",
  //     },
  //   ],
  //   historicalOffers: [
  //     {
  //       amount: [{ amount: 1000 }],
  //       spend: 25_000,
  //       days: 90,
  //       credits: [],
  //     },
  //   ],
  // },
  {
    name: "Active Cash",
    issuer: schemas.IssuersEnum.enum.WELLS_FARGO,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.USD,
    isBusiness: false,
    annualFee: 0,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 2,
    url: "https://creditcards.wellsfargo.com/active-cash-credit-card/",
    imageUrl: "/images/wellsfargo/active-cash.png",
    credits: [],
    offers: [
      {
        amount: [{ amount: 200 }],
        spend: 500,
        days: 90,
        credits: [],
        url: "https://creditcards.wellsfargo.com/active-cash-credit-card/",
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 200 }],
        spend: 2000,
        days: 90,
        credits: [],
      },
    ],
  },
  {
    name: "Autograph",
    issuer: schemas.IssuersEnum.enum.WELLS_FARGO,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.WELLS_FARGO,
    isBusiness: false,
    annualFee: 0,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 2,
    url: "https://creditcards.wellsfargo.com/autograph-visa-credit-card/?sub_channel=SEO&vendor_code=G",
    imageUrl: "/images/wellsfargo/autograph.png",
    credits: [],
    offers: [
      {
        amount: [{ amount: 20_000 }],
        spend: 1000,
        days: 90,
        credits: [],
        url: "https://creditcards.wellsfargo.com/autograph-visa-credit-card/?sub_channel=SEO&vendor_code=G",
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 30_000 }],
        spend: 1500,
        days: 90,
        credits: [],
        expiration: "2023-01-01",
      },
    ],
  },
  {
    name: "Autograph Journey",
    issuer: schemas.IssuersEnum.enum.WELLS_FARGO,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.WELLS_FARGO,
    isBusiness: false,
    annualFee: 95,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    // TODO: URL and potentially Image URL will need updated after launch
    url: "https://creditcards.wellsfargo.com/autograph-visa-credit-card/?sub_channel=SEO&vendor_code=G",
    imageUrl: "/images/wellsfargo/autograph.png",
    credits: [],
    offers: [
      {
        amount: [{ amount: 60_000 }],
        spend: 4000,
        days: 90,
        credits: [],
        details:
          "Card is brand-new, but should have an application link any day now (was supposed to be Mar 9, 2024). Links will redirect to the normal Autograph for now.",
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 60_000 }],
        spend: 4000,
        days: 90,
        credits: [],
      },
    ],
  },
];
