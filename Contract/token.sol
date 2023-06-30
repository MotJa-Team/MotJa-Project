// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import './node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol';
import './node_modules/@openzeppelin/contracts/access/Ownable.sol';

contract Token is Ownable, ERC20("CelebdayToken", "CT") {

    function MintToken(uint _amount) public onlyOwner {
        _mint(msg.sender, _amount);
    }

    function decimals() public pure override returns(uint8) {
        return 0;
    }
}