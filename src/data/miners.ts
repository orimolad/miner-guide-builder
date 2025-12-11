export interface Miner {
  id: string;
  name: string;
  hashrate: string;
  power: string;
  defaultIP: string;
  productLink: string;
  isUsbPowered: boolean;
  hasDisplay: boolean;
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
  },
  {
    id: "bitaxe",
    name: "Bitaxe Gamma",
    hashrate: "~1.2 TH/s",
    power: "~15 W/TH",
    defaultIP: "192.168.1.xxx",
    productLink: "https://bitcoinmerch.com/products/bitcoin-merch-bitaxe-601-gamma-power-supply-bitcoin-miner-1-2th-s",
    isUsbPowered: false,
    hasDisplay: true,
  },
  {
    id: "nerdqaxe",
    name: "NerdQaxe++",
    hashrate: "5 TH/s",
    power: "External Power Supply Included",
    defaultIP: "192.168.1.xxx",
    productLink: "https://bitcoinmerch.com/products/bitcoin-merch-nerdqaxe-4-8th-s-multi-chip-btc-miner",
    isUsbPowered: false,
    hasDisplay: false,
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
  },
];

export const getMiner = (id: string): Miner | undefined => {
  return miners.find((miner) => miner.id === id);
};
