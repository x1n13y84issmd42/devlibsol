import { defineConfig } from "hardhat/config";
import hhviem from '@nomicfoundation/hardhat-toolbox-viem';
import hhhelpers from "@nomicfoundation/hardhat-network-helpers";

export default defineConfig({
  plugins: [
    hhviem,
    hhhelpers,
  ],
  solidity: {
    version: "0.8.28",
  },
  paths: {
    sources: 'lib/contracts',
    tests: 'lib/test',
  }
});
