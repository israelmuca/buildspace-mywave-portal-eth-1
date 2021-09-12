async function main(){
  const [owner, rPerson1, rPerson2, rPerson3] = await ethers.getSigners();
  const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
  const waveContract = await waveContractFactory.deploy();
  await waveContract.deployed();
  console.log("Contract deployed to: ", waveContract.address);
  console.log("Contract deployted by: ", owner.address);

  let waveCount;
  waveCount = await waveContract.getTotalWaves();
  
  let waveTxn = await waveContract.wave();
  await waveTxn.wait();

  waveCount = await waveContract.getTotalWaves();

  waveTxn = await waveContract.connect(rPerson1).wave();
  await waveTxn.wait();

  waveTxn = await waveContract.connect(rPerson2).wave();
  await waveTxn.wait();

  waveTxn = await waveContract.connect(rPerson3).wave();
  await waveTxn.wait();

  waveCount = await waveContract.getTotalWaves();
}



main()
  .then(() => process.exit(0))
  .catch((err)=>{
    console.error(err);
    process.exit(1);
  })