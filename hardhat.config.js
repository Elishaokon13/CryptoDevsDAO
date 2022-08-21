require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });


module.exports = {
  solidity: "0.8.9",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/fibkItJPx0r46oRnR-Xe79Qp3KPwAp-W",
      accounts: [process.env.RINKEBY_PRIVATE_KEY]
    },
  },
};
