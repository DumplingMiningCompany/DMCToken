pragma solidity ^0.4.11;


import "../zeppelin/token/MintableToken.sol";


/**
 * @title  DMC Token
 * @dev The Dumpling Mining Company Token Smart Contract
 */


contract DMCToken is MintableToken {
    string public constant name = "Dumpling Mining Company Token";
    string public constant symbol = "DMC";
    int8 public constant decimals = 18;

    /**
     * Construct the token.
     * This token must be created through a Dumpling Mining Company UG multisig wallet, so that it is owned by that wallet.
     * @param _initialSupply How many tokens we start with
     */
    function DMCToken(uint _initialSupply) {

        if(0 == _initialSupply) {
	    throw; // Without any supply it is useless to create a token
        }

        // Set the owner of this token
        owner = msg.sender;

        // Mint the tokens
        if (false == mint(owner, _initialSupply)) {
	    throw; // Minting of the tokens failed
        }

        // No more tokens can be minted after creation of the token. 
        if (false == finishMinting()) {
            throw; // Finish minting failed
        }
    }
}
