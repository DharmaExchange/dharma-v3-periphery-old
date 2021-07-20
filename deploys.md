# Deployment addresses

The latest version of `dharma-v3-core`, `@uniswap/v3-periphery` are deployed to Ethereum mainnet and all testnets
at the same addresses.

The source code is verified with Etherscan on all networks, for all contracts except `UniswapV3Pool`.
We are working on getting the `UniswapV3Pool` contract verified with Etherscan.

These addresses are final and were deployed from these npm package versions:

- `dharma-v3-core`: [`1.0.0`](https://github.com/Uniswap/uniswap-v3-core/tree/v1.0.0)
- `@uniswap/v3-periphery`: [`1.0.0`](https://github.com/Uniswap/uniswap-v3-periphery/tree/v1.0.0)

| Contract                           | Address                                      | Source Code                                                                                                                   |
| ---------------------------------- | -------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| UniswapV3Factory                   | [0xe6b04592B0373980FD8EB8A66Ca12a8Edc937964](https://bscscan.com/address/0xe6b04592B0373980FD8EB8A66Ca12a8Edc937964) | https://github.com/DharmaExchange/dharma-v3-core/blob/v0.0.1/contracts/UniswapV3Factory.sol                                         |
| Multicall2                         | [0xffBe6a2253e03a83D1ddE16e4F5f2F58184AbabB](https://bscscan.com/address/0xffBe6a2253e03a83D1ddE16e4F5f2F58184AbabB) | https://bscscan.com/address/0xffBe6a2253e03a83D1ddE16e4F5f2F58184AbabB#code                                                  |
| ProxyAdmin                         | [0xE317fA8310608b9aCBDC5d9fe8BA3f29dE7665De](https://bscscan.com/address/0xE317fA8310608b9aCBDC5d9fe8BA3f29dE7665De) | https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v3.4.1-solc-0.7-2/contracts/proxy/ProxyAdmin.sol                  |
| TickLens                           | [0xe1d1fa757f44fA8dbE8964dda9BBD8F7C4BFcF09](https://bscscan.com/address/0xe1d1fa757f44fA8dbE8964dda9BBD8F7C4BFcF09) | https://github.com/DharmaExchange/dharma-v3-periphery/blob/v0.0.1/contracts/lens/TickLens.sol                                       |
| Quoter                             | [0xBd85555F80e3de0743ACe421b46eC3A8C97b7bD2](https://bscscan.com/address/0xBd85555F80e3de0743ACe421b46eC3A8C97b7bD2) | https://github.com/DharmaExchange/dharma-v3-periphery/blob/v0.0.1/contracts/lens/Quoter.sol                                         |
| SwapRouter                         | [0x90B3c58eeF196c6647EEB5957c5Ad003d3A1B643](https://bscscan.com/address/0x90B3c58eeF196c6647EEB5957c5Ad003d3A1B643) | https://github.com/DharmaExchange/dharma-v3-periphery/blob/v0.0.1/contracts/SwapRouter.sol                                          |
| NFTDescriptor                      | [0xd45071289dB850ee59f64EeA7AC689D117580f0F](https://bscscan.com/address/0xd45071289dB850ee59f64EeA7AC689D117580f0F) | https://github.com/DharmaExchange/dharma-v3-periphery/blob/v0.0.1/contracts/libraries/NFTDescriptor.sol                             |
| NonfungibleTokenPositionDescriptor | `n/a                                       ` | https://github.com/DharmaExchange/dharma-v3-periphery/blob/v0.0.1/contracts/NonfungibleTokenPositionDescriptor.sol                  |
| TransparentUpgradeableProxy        | `n/a                                       ` | https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v3.4.1-solc-0.7-2/contracts/proxy/TransparentUpgradeableProxy.sol |
| NonfungiblePositionManager         | `n/a                                       ` | https://github.com/DharmaExchange/dharma-v3-periphery/blob/v0.0.1/contracts/NonfungiblePositionManager.sol                          |
| V3Migrator                         | `n/a                                       ` | https://github.com/DharmaExchange/dharma-v3-periphery/blob/v0.0.1/contracts/V3Migrator.sol                                          |
