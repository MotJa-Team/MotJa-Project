// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import './node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol';
import './node_modules/@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol';
import './node_modules/@openzeppelin/contracts/access/Ownable.sol';
import './nft.sol';

contract Token is ERC20("CelebdayToken", "CT"), Ownable, ERC20Burnable {

    address n_contract;

    function setNftContract(address _nft) public onlyOwner {
        n_contract = _nft;                                          // nft 컨트렉트 주소 저장
    }

    function mintToken(uint _amount) public {
        require(msg.sender == n_contract);                          // msg.sender가 컨트렉트 주소일떄 통과
        _mint(tx.origin, _amount);                                  // tx.origin 즉 nft컨트렉트에서 함수를 누른 msg.sender가 민팅 실행
    }

    function decimals() public pure override returns(uint8) {
        return 0;
    }

    function burn(uint256 amount) override public virtual {
        _burn(tx.origin, amount);                                   // tx.origin 즉 nft컨트렉트에서 함수를 누른 msg.sender가 번 실행
    }
}