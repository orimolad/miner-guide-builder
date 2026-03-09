import disruptorImg from "@/assets/miners/disruptor.webp";
import bitaxeImg from "@/assets/miners/bitaxe.webp";
import nerdqaxeImg from "@/assets/miners/nerdqaxe.webp";
import goldnuggetImg from "@/assets/miners/goldnugget.webp";
import zyberImg from "@/assets/miners/zyber.webp";
import avalonqImg from "@/assets/miners/avalonq.webp";
import golddiggerImg from "@/assets/miners/golddigger.jpg";

export interface BitaxeVariant {
  id: string;
  name: string;
  hashrate: string;
  hashrateValue: number; // in GH/s for calculations
  power: string;
  productLink: string;
}

export const bitaxeVariants: BitaxeVariant[] = [
  {
    id: "gamma",
    name: "Gamma",
    hashrate: "1.2 TH/s",
    hashrateValue: 1200,
    power: "18W",
    productLink: "https://bitcoinmerch.com/products/bitcoin-merch-bitaxe-601-gamma-power-supply-bitcoin-miner-1-2th-s",
  },
  {
    id: "supra-hex",
    name: "Supra Hex",
    hashrate: "4.2 TH/s",
    hashrateValue: 4200,
    power: "90W",
    productLink: "https://bitcoinmerch.com/products/bitcoin-merch-bitaxe-suprahex-4-2-th-s-bitcoin-miner-1?_pos=1&_sid=2eef023aa&_ss=r",
  },
  {
    id: "gt-gamma-turbo",
    name: "GT Gamma Turbo",
    hashrate: "2.4 TH/s",
    hashrateValue: 2400,
    power: "36W",
    productLink: "https://bitcoinmerch.com/products/bitcoin-merch-bitaxe-gt-gamma-turbo-bm1370-asic-2-2th-s?_pos=1&_sid=6ee559654&_ss=r",
  },
  {
    id: "hex",
    name: "HEX",
    hashrate: "3 TH/s",
    hashrateValue: 3000,
    power: "80W",
    productLink: "https://bitcoinmerch.com/products/bitcoin-merch%C2%AE-bitaxe-hex-solo-miner-3th-s?_pos=1&_sid=3b363e1ca&_ss=r",
  },
  {
    id: "supra",
    name: "Supra",
    hashrate: "600 GH/s",
    hashrateValue: 600,
    power: "15W",
    productLink: "https://bitcoinmerch.com/products/bitcoin-merch%C2%AE-bitaxe-400-bitcoin-miner-600gh-s?_pos=1&_sid=dbf85461e&_ss=r",
  },
  {
    id: "ultra",
    name: "Ultra",
    hashrate: "450 GH/s",
    hashrateValue: 450,
    power: "12W",
    productLink: "https://bitcoinmerch.com/products/bitcoin-merch-bitaxe-1366-solo-bitcoin-miner-up-to-500gh-s?_pos=2&_sid=c10f78836&_ss=r",
  },
];

export interface NerdqaxeVariant {
  id: string;
  name: string;
  hashrate: string;
  hashrateValue: number; // in GH/s for calculations
  power: string;
  productLink: string;
}

export const nerdqaxeVariants: NerdqaxeVariant[] = [
  {
    id: "nerdqaxe-plus-plus",
    name: "NerdQaxe++",
    hashrate: "5 TH/s",
    hashrateValue: 5000,
    power: "80W",
    productLink: "https://bitcoinmerch.com/products/bitcoin-merch-nerdqaxe-4-8th-s-multi-chip-btc-miner",
  },
  {
    id: "nerdoctaxe",
    name: "NerdOCTaxe",
    hashrate: "9.6 TH/s",
    hashrateValue: 9600,
    power: "160W",
    productLink: "https://bitcoinmerch.com/products/bitcoin-merch-nerdoctaxe-9-6th-s?_pos=1&_sid=d09525aee&_ss=r",
  },
  {
    id: "nerdqaxe-hydro",
    name: "NerdQaxe++ Hydro",
    hashrate: "4.8 TH/s",
    hashrateValue: 4800,
    power: "80W",
    productLink: "https://bitcoinmerch.com/products/bitcoin-merch-nerdqaxe-hydro?_pos=2&_sid=60709e436&_ss=r",
  },
  {
    id: "nerdaxe",
    name: "Nerdaxe",
    hashrate: "1.2 TH/s",
    hashrateValue: 1200,
    power: "18W",
    productLink: "https://bitcoinmerch.com/products/bitcoin-merch-nerdaxe-btc-miner?_pos=1&_sid=00442c8ba&_ss=r",
  },
  {
    id: "nerdqaxe-plus",
    name: "NerdQaxe+",
    hashrate: "2.4 TH/s",
    hashrateValue: 2400,
    power: "40W",
    productLink: "https://bitcoinmerch.com/products/bitcoin-merch-nerdqaxe-2-4th-s-btc-miner?_pos=1&_sid=1fa4c470f&_ss=r",
  },
];

export interface Miner {
  id: string;
  name: string;
  hashrate: string;
  power: string;
  defaultIP: string;
  productLink: string;
  isUsbPowered: boolean;
  hasDisplay: boolean;
  image: string;
  hasBitaxeVariants?: boolean;
  hasNerdqaxeVariants?: boolean;
}

export const miners: Miner[] = [
  {
    id: "golddigger",
    name: "Gold Digger",
    hashrate: "~1000 KH/s",
    power: "<3W",
    defaultIP: "192.168.4.1",
    productLink: "https://bitcoinmerch.com/products/bitcoin-merch-gold-digger-lottery-nmminer-1000kh-s",
    isUsbPowered: true,
    hasDisplay: true,
    image: golddiggerImg,
  },
  {
    id: "disruptor",
    name: "Disruptor",
    hashrate: "~300 GH/s",
    power: "8W",
    defaultIP: "192.168.4.1",
    productLink: "https://bitcoinmerch.com/products/bitcoin-merch-disruptor-usb-solo-bitcoin-miner",
    isUsbPowered: true,
    hasDisplay: false,
    image: disruptorImg,
  },
  {
    id: "bitaxe",
    name: "Bitaxe",
    hashrate: "~1.2 TH/s",
    power: "~18W",
    defaultIP: "192.168.1.xxx",
    productLink: "https://bitcoinmerch.com/products/bitcoin-merch-bitaxe-601-gamma-power-supply-bitcoin-miner-1-2th-s",
    isUsbPowered: false,
    hasDisplay: true,
    image: bitaxeImg,
    hasBitaxeVariants: true,
  },
  {
    id: "nerdqaxe",
    name: "Nerdaxe",
    hashrate: "5 TH/s",
    power: "External Power Supply Included",
    defaultIP: "192.168.1.xxx",
    productLink: "https://bitcoinmerch.com/products/bitcoin-merch-nerdqaxe-4-8th-s-multi-chip-btc-miner",
    isUsbPowered: false,
    hasDisplay: true,
    image: nerdqaxeImg,
    hasNerdqaxeVariants: true,
  },
  {
    id: "goldnugget",
    name: "Gold Nugget",
    hashrate: "~300 KH/s",
    power: "<3W",
    defaultIP: "192.168.4.1",
    productLink: "https://bitcoinmerch.com/products/goldnugget-nerdminer",
    isUsbPowered: true,
    hasDisplay: true,
    image: goldnuggetImg,
  },
  {
    id: "zyber",
    name: "Zyber 8G",
    hashrate: "10+ TH/s",
    power: "~170W",
    defaultIP: "192.168.4.1",
    productLink: "https://bitcoinmerch.com/products/bitcoin-merch-zyber-8g-10-th-s-high-performance-home-bitcoin-miner",
    isUsbPowered: false,
    hasDisplay: true,
    image: zyberImg,
  },
  {
    id: "avalonq",
    name: "Avalon Q",
    hashrate: "90 TH/s",
    power: "Industrial Power Supply",
    defaultIP: "Check device screen or router",
    productLink: "https://bitcoinmerch.com/products/bitcoin-merch-canaan-avalon-q-90th-s-btc-miner",
    isUsbPowered: false,
    hasDisplay: true,
    image: avalonqImg,
  },
];

export const getMiner = (id: string): Miner | undefined => {
  return miners.find((miner) => miner.id === id);
};

export const getBitaxeVariant = (id: string): BitaxeVariant | undefined => {
  return bitaxeVariants.find((variant) => variant.id === id);
};

export const getNerdqaxeVariant = (id: string): NerdqaxeVariant | undefined => {
  return nerdqaxeVariants.find((variant) => variant.id === id);
};
