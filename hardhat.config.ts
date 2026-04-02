import { defineConfig } from "hardhat/config";

export default defineConfig({
  solidity: {
    version: "0.8.28",
  },
  paths: {
    sources: 'lib/contracts',
    tests: 'lib/test',
  }
});
