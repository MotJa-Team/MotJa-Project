// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import './node_modules/@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol';
import './node_modules/@openzeppelin/contracts/access/Ownable.sol';
import './node_modules/@openzeppelin/contracts/utils/Strings.sol';
import './token.sol';

contract NFT is Ownable, ERC721Enumerable {
    constructor(string memory _uri, string memory _boxuri, address tokenContract) ERC721("CelebdayNFT", "CN") {
        URI = _uri;
        BOX_URI = _boxuri;
        tokenCT = Token(tokenContract);
    }   

    Token public tokenCT;

    string public URI;
    string public BOX_URI;

    struct present {
        uint finalB;
        uint currentB;
    }

    struct presentInfo {
        address presentOwner;
        uint Number;
    }

    // evenEmit을 쓰게된다면 chargeBalance() 금액충전함수를 쓸때, 누가 얼만큼 충전했는지 로그를 남기는 용도로 쓰일예정
    event whoCharged(address _from, address indexed _to, uint indexed _num, uint _price);
 
    // 주소 => 토큰아이디 => struct(몇번쨰선물, 최종가격, 현재가격)             // mapping을 하나만 사용
    mapping(address=>mapping(uint=>present)) public PRESENT;                  // 해당 주소의 몇번쨰 선물의 최종금액과 현재금액        // 배열로도 시도해보자
    mapping(uint=>presentInfo) public presentNum;                                    // 토큰아이디로 몇번쨰 선물인지 저장하는 용도

    // NFT 민팅 + 선물 등록 함수
    function mintNFT(uint _num, uint _price) public {
        address nftOwner = msg.sender;
        require(PRESENT[nftOwner][_num].finalB == 0);

        uint tokenID = totalSupply() + 1;

        presentNum[tokenID].presentOwner = nftOwner;
        presentNum[tokenID].Number = _num;                  // 몇번째 선물의 nft인지 저장하기

        PRESENT[nftOwner][_num].finalB = _price;     // 가격을 넣으면서 선물 등록하기

        _mint(nftOwner, tokenID);
    }

    function tokenURI(uint _tokenId) public override view returns(string memory) {
        address tokenOwner = presentNum[_tokenId].presentOwner;
        uint presentNumber = presentNum[_tokenId].Number;

        if(PRESENT[tokenOwner][presentNumber].finalB <= PRESENT[tokenOwner][presentNumber].currentB) {

            return string(abi.encodePacked(URI, '/', Strings.toString(_tokenId), '.json'));         // 금액이 달성했을경우 원래의 uri 사용
        } else {

            return string(abi.encodePacked(BOX_URI));     // 금액이 달성하지 않았다면 선물상자 uri 사용
        }
    }

    // 선물에 돈 충전하는 함수
    function chargeBalance(address _to, uint _num, uint _price) public {
        require(_to != msg.sender);                                                      // 선물이 본인것인지 확인
        require(PRESENT[_to][_num].finalB != 0);                                         // 선물이 들어가있는지 확인
        require(PRESENT[_to][_num].currentB < PRESENT[_to][_num].finalB);                // 해당 선물의 최종 금액보다 현재 충전된 금액이 적은지 확인
        require(PRESENT[_to][_num].finalB-PRESENT[_to][_num].currentB >= _price);        // 남은 금액이 충전할금액보다 크거나 같은지 확인

        PRESENT[_to][_num].currentB += _price;                                           // 선물의 현재 금액에 충전한 금액만큼 더하기

        tokenCT.burn(_price);                                                            // 금액을 저장한후 사용된 코인은 없애버림

        emit whoCharged(msg.sender, _to, _num, _price);
    }

    // 코인 구매
    function buyCoin(uint _amount) public payable {
        // 그날의 환율을 받아와서 msg.value 설정해야함

        tokenCT.mintToken(_amount);                     // 개수만큼 토큰을 구매하는 형식
    }

    // 충전된 금액 비율 반환해주는 함수
    function getChargeRatio(address _address, uint _num) public view returns(uint) { 
        require(PRESENT[_address][_num].finalB != 0);
        return (PRESENT[_address][_num].currentB * 100) / PRESENT[_address][_num].finalB;
    }

    // 컨트렉트주인이 컨트렉트에서 돈을 뺴는 witdraw 함수
    function ownerWithdraw() public onlyOwner {
        payable(owner()).transfer(address(this).balance);
    }

    function setURI(string memory _uri) public onlyOwner {
       URI = _uri; 
    }
}