pragma solidity ^0.4.18;

contract BBCoin {

    /* balanceOf BBCoin */
    mapping (address => uint256) public balanceOf;


    /* initialize contract with initial suuply to the creator of the contract */
    function BBCoin(uint256 initialSupply) public {
        balanceOf[msg.sender] = initialSupply;              // Give the creator all initial tokens
    }

    /* Send coins */
    function transfer(address _to, uint256 _value) public {
        require(balanceOf[msg.sender] >= _value);           // Check if the sender has enough
        require(balanceOf[_to] + _value >= balanceOf[_to]); // Check for overflows
        balanceOf[msg.sender] -= _value;                    // Subtract from the sender
        balanceOf[_to] += _value;                           // Add the same to the recipient
    }
    /* gets balanceOf for address addr */
    function getBalance(address addr) view public returns(uint256) {
        return balanceOf[addr];
    }

}
