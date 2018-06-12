var DumbContract = artifacts.require("DumbContract"); 


module.exports = function (deployer){
    deployer.deploy(
        DumbContract
    ); 
}