require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      // url: `${process.env.ALCHEMY_APP_URL}`,
      url: "https://eth-rinkeby.alchemyapi.io/v2/mY93vsojzevGChJw7dGjWyo_WMzCBSCl",
      // accounts: `${process.env.FIREFOX_METAMASK_RINKEBY}`
      accounts: ["12627ebf72b70d1632c95feca96e215bdbe4f1bc8f73140e214d0dff53e6999b"]
    }
  }
};
