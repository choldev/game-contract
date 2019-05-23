pragma solidity ^0.5.0;

contract GameContract {
  uint public numPlayer = 0;

  //User data
  mapping (address => uint) public playerNumber;

  //Game Data, I think we do not need qrcode cuz qrcode itself has num W/L and token bal.
  mapping (address => uint) public numWins;
  mapping (address => uint) public numLoses;
//  mapping (address => string) public qrcode;

  //Token ; coin data
  mapping (address => uint) public gg_token_balance;

  //Token to dollar ? Maybe we don't need this.
  //mapping (address => unit) public gg_usd_rate;

  //add player
  function updataPlayers() public{
    numPlayer = numPlayer +1 ;
  }

  function setPlayer(uint _playerNumber) public{
    playerNumber[msg.sender] = _playerNumber;
  }

  function setGame(uint _numWins, uint _numLoses) public{
    numWins[msg.sender] = _numWins;
    numLoses[msg.sender] = _numLoses;
  }

  function setTokenBalance(uint _amount) public{
    gg_token_balance[msg.sender] = _amount;
  }

  function updateTokenBalanceWin(uint _amount) public{
    gg_token_balance[msg.sender] += _amount;
  }
  function updateTokenBalanceLose(uint _amount) public{
    gg_token_balance[msg.sender] -= _amount;
  }

  function getNumPlayer() public view returns(uint){
    return numPlayer;
  }

  function getPlayer(address _addr) public view returns(uint)
  {
    return (playerNumber[_addr]);
  }

  function getTokenBalance(address _addr) public view returns(uint) {
    return gg_token_balance[_addr];
  }

  function gamePlay(address _machine, uint _bet) public returns (uint sufficient){
  //  if(gg_token_balance[msg.sender] < bet)
  //    return 0;
      //too much bet

    gg_token_balance[msg.sender] = gg_token_balance[msg.sender] + _bet;
    gg_token_balance[_machine] = gg_token_balance[_machine] - _bet;
    return 0;

  }

}
