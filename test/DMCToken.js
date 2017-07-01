var DMCToken = artifacts.require("./DMCToken.sol");

contract('DMCToken', function (accounts) {
    it('should have an initial supply of 2.500.000 tokens', function () {
        DMCToken.deployed().then(function (instance) {
            return instance.balanceOf.call(accounts[0]);
        }).then(function (balance) {
            assert.equal(balance.valueOf(), 2500000, "2500000 wasn't in the first account");
        });
    });

    it('should have a symbol "DMC"', function () {
        DMCToken.deployed().then(function (instance) {
            assert.equal(instance.symbol, "DMC", "DMC is not the value of property symbol");
        });
    });

    it('should have a name "Dumpling Mining Company Token"', function () {
        DMCToken.deployed().then(function (instance) {
            assert.equal(instance.name, "Dumpling Mining Company Token", "Dumpling Mining Company Token is not the value of property name");
        });
    });

    it('should have a decimals property of 18', function () {
        DMCToken.deployed().then(function (instance) {
            assert.equal(instance.decimals, 18, "18 is not the value of decimals property");
        });
    });
});
