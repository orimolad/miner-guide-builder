import disruptorImg from "@/assets/miners/disruptor.webp";
import bitaxeImg from "@/assets/miners/bitaxe.webp";
import nerdqaxeImg from "@/assets/miners/nerdqaxe.webp";
import goldnuggetImg from "@/assets/miners/goldnugget.webp";
import zyberImg from "@/assets/miners/zyber.webp";
import avalonqImg from "@/assets/miners/avalonq.webp";

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
    productLink: "https://bitcoinmerch.com/products/bitcoin-merch-bitaxe-supra-hex-4-2-th-s-bitcoin-miner",
  },
  {
    id: "gt-gamma-turbo",
    name: "GT Gamma Turbo",
    hashrate: "2.4 TH/s",
    hashrateValue: 2400,
    power: "36W",
    productLink: "https://bitcoinmerch.com/products/bitcoin-merch-bitaxe-gt-gamma-turbo-2-4-th-s-bitcoin-miner",
  },
  {
    id: "hex",
    name: "HEX",
    hashrate: "3 TH/s",
    hashrateValue: 3000,
    power: "80W",
    productLink: "https://bitcoinmerch.com/products/bitcoin-merch-bitaxe-hex-3-th-s-bitcoin-miner",
  },
  {
    id: "supra",
    name: "Supra",
    hashrate: "600 GH/s",
    hashrateValue: 600,
    power: "15W",
    productLink: "https://bitcoinmerch.com/products/bitcoin-merch-bitaxe-supra-600-gh-s-bitcoin-miner",
  },
  {
    id: "ultra",
    name: "Ultra",
    hashrate: "450 GH/s",
    hashrateValue: 450,
    power: "12W",
    productLink: "https://bitcoinmerch.com/products/bitcoin-merch-bitaxe-ultra-450-gh-s-bitcoin-miner",
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
}

export const miners: Miner[] = [
  {
    id: "disruptor",
    name: "Disruptor",
    hashrate: "~300 GH/s",
    power: "USB Powered",
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
    name: "NerdQaxe++/ NerdOCTaxe/ Hydro",
    hashrate: "5 TH/s",
    power: "External Power Supply Included",
    defaultIP: "192.168.1.xxx",
    productLink: "https://bitcoinmerch.com/products/bitcoin-merch-nerdqaxe-4-8th-s-multi-chip-btc-miner",
    isUsbPowered: false,
    hasDisplay: false,
    image: nerdqaxeImg,
  },
  {
    id: "goldnugget",
    name: "Gold Nugget / Nerd Miner",
    hashrate: "~350 kH/s",
    power: "USB Powered",
    defaultIP: "192.168.4.1",
    productLink: "https://bitcoinmerch.com/products/goldnugget-nerdminer",
    isUsbPowered: true,
    hasDisplay: false,
    image: avalonqImg,
  },
  {
    id: "zyber",
    name: "Zyber 8G",
    hashrate: "10 TH/s",
    power: "High-Performance Power Supply",
    defaultIP: "Check device screen or router",
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
    image: goldnuggetImg,
  },
];

export const getMiner = (id: string): Miner | undefined => {
  return miners.find((miner) => miner.id === id);
};

export const getBitaxeVariant = (id: string): BitaxeVariant | undefined => {
  return bitaxeVariants.find((variant) => variant.id === id);
};
