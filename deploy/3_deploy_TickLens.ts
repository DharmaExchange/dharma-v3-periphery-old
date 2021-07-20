import { HardhatRuntimeEnvironment } from "hardhat/types"
import { DeployFunction } from "hardhat-deploy/types"
 
//WBNB 0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c
//Factory 0x1b15f28630b875c4c83bfbfbfc9b230dec8c33b8
//Router 0x90B3c58eeF196c6647EEB5957c5Ad003d3A1B643
//Multicall2 0x397bdde000fe9bdcFEE2a3e6aCb03a1554c96B41

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre
  const { deploy } = deployments
  const { deployer } = await getNamedAccounts()

  await deploy("TickLens", {
    from: deployer,
    args: [],
    log: true,
    skipIfAlreadyDeployed: true,
  })
}
export default func
func.tags = ["TickLens"]
