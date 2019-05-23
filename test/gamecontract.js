const GameContract = artifacts.require('../../contracts/GameContract.sol');
   let flag = 1; // if win the game return 1, lose 0;
   let bet = 500;

  contract('GameContract', function(accounts) {

    it('initiates contract', async function() {
      const contract = await GameContract.deployed();
    });


    it('initialize Machine balance', async function() {
      const contract = await GameContract.deployed();
      console.log("Betting amount is : " + bet);
      console.log("\n\tRedeem Machine balance : 1000000 tokens");

    //  console.log("\n\tLoading Machine balance of 1000000 to account: " + accounts[1]);
      await contract.setTokenBalance(1000000, {from: accounts[1]});
      console.log("\n\tBalance of Machine " + accounts[1]);
      await contract.getTokenBalance.call(accounts[1],
        function(error, result) {
          if (error) {
            console.log('\t\terror: ' + error + '\n');
          }
          else {
            console.log('\t\ttoken balance: ' + result + '\n');
          }
        });
    });

    it('initialize Player balance', async function() {
      const contract = await GameContract.deployed();
      console.log("\n\tRedeem Player balance : 100 tokens");
//      console.log("\n\tLoading Player balance of 100 to account: " + accounts[2]);

      await contract.setTokenBalance(100, {from: accounts[2]});
      console.log("\n\tBalance of Plyaer " + accounts[2]);
      await contract.getTokenBalance.call(accounts[2],
        function(error, result) {
          if (error) {
            console.log('\t\terror: ' + error + '\n');
          }
          else {
            console.log('\t\ttoken balance: ' + result + '\n');
          }
        });
    });

if(flag == 1){ //wins
    console.log("You win! You get 500 tokens");
    it('trade function', async function () {
          const contract = await GameContract.deployed();
          console.log("\n\tBalance of " + accounts[1] + " before transfer");
          await contract.getTokenBalance.call(accounts[1],
            function(error, result) {
              if (error) {
                console.log('\t\terror: ' + error);
              }
              else {
                console.log('\t\ttoken balance: ' + result);
              }
            });
          console.log("\n\tBalance of Player before transfer");
    //      console.log("\n\tBalance of " + accounts[2] + " before transfer");
          await contract.getTokenBalance.call(accounts[2],
            function(error, result) {
              if (error) {
                console.log('\t\terror: ' + error);
              }
              else {
                console.log('\t\ttoken balance: ' + result);
              }
            });
          console.log("\n\tTransferring 500 tokens from Machine to Player");

        //  console.log("\n\tTransferring 500 tokens from " + accounts[1] + " to " + accounts[2]);

          var acc_1_val = await contract.getTokenBalance.call(accounts[1],
            function(error, result) {
              if (error) {
                console.log('\t\terror: ' + error);
              }
              else {
                console.log('\t\ttoken balance: ' + result);
              }
            });
            var acc_2_val = await contract.getTokenBalance.call(accounts[2],
              function(error, result) {
                if (error) {
                  console.log('\t\terror: ' + error);
                }
                else {
                  console.log('\t\ttoken balance: ' + result);
                }
              });

              // do this because var sometime act like stirng so output 10000+7500 = 100007500
              var acc_1 = Number(acc_1_val);
              var acc_2 = Number(acc_2_val);

        //  await contract.transferToken(accounts[2], -7500, {from: accounts[1]});
          await contract.setTokenBalance(acc_1 - 500, {from: accounts[1]});
          await contract.setTokenBalance(acc_2 + 500, {from: accounts[2]});



        //  console.log("\n\tBalance of " + accounts[1] + " after transfer");
          console.log("\n\tBalance of Mahcine after transfer");

          await contract.getTokenBalance.call(accounts[1],
            function(error, result) {
              if (error) {
                console.log('\t\terror: ' + error);
              }
              else {
                console.log('\t\ttoken balance: ' + result);
              }
            });
//          console.log("\n\tBalance of " + accounts[2] + " after transfer");
          console.log("\n\tBalance of Player after transfer");

          await contract.getTokenBalance.call(accounts[2],
            function(error, result) {
              if (error) {
                console.log('\t\terror: ' + error + '\n');
              }
              else {
                console.log('\t\ttoken balance: ' + result + '\n');
              }
            });
        });
      }

else if(flag == 0){
  it('trade function', async function () {
      console.log("You lose, You lost 500 tokens");

        const contract = await GameContract.deployed();
        console.log("\n\tBalance of " + accounts[1] + " before transfer");
        await contract.getTokenBalance.call(accounts[1],
          function(error, result) {
            if (error) {
              console.log('\t\terror: ' + error);
            }
            else {
              console.log('\t\ttoken balance: ' + result);
            }
          });
        console.log("\n\tBalance of Player before transfer");
  //      console.log("\n\tBalance of " + accounts[2] + " before transfer");
        await contract.getTokenBalance.call(accounts[2],
          function(error, result) {
            if (error) {
              console.log('\t\terror: ' + error);
            }
            else {
              console.log('\t\ttoken balance: ' + result);
            }
          });
        console.log("\n\tTransferring 500 tokens from Machine to Player");

      //  console.log("\n\tTransferring 500 tokens from " + accounts[1] + " to " + accounts[2]);

        var acc_1_val = await contract.getTokenBalance.call(accounts[1],
          function(error, result) {
            if (error) {
              console.log('\t\terror: ' + error);
            }
            else {
              console.log('\t\ttoken balance: ' + result);
            }
          });
          var acc_2_val = await contract.getTokenBalance.call(accounts[2],
            function(error, result) {
              if (error) {
                console.log('\t\terror: ' + error);
              }
              else {
                console.log('\t\ttoken balance: ' + result);
              }
            });

            // do this because var sometime act like stirng so output 10000+7500 = 100007500
            var acc_1 = Number(acc_1_val);
            var acc_2 = Number(acc_2_val);

      //  await contract.transferToken(accounts[2], -7500, {from: accounts[1]});
        await contract.setTokenBalance(acc_1 + 500, {from: accounts[1]});
        await contract.setTokenBalance(acc_2 - 500, {from: accounts[2]});



      //  console.log("\n\tBalance of " + accounts[1] + " after transfer");
        console.log("\n\tBalance of Mahcine after transfer");

        await contract.getTokenBalance.call(accounts[1],
          function(error, result) {
            if (error) {
              console.log('\t\terror: ' + error);
            }
            else {
              console.log('\t\ttoken balance: ' + result);
            }
          });
//          console.log("\n\tBalance of " + accounts[2] + " after transfer");
        console.log("\n\tBalance of Player after transfer");

        await contract.getTokenBalance.call(accounts[2],
          function(error, result) {
            if (error) {
              console.log('\t\terror: ' + error + '\n');
            }
            else {
              console.log('\t\ttoken balance: ' + result + '\n');
            }
          });
      });
}
else {
  it('trade function', async function () {
      console.log("Draw, nothing changes");

        const contract = await GameContract.deployed();
        console.log("\n\tBalance of " + accounts[1] + " before transfer");
        await contract.getTokenBalance.call(accounts[1],
          function(error, result) {
            if (error) {
              console.log('\t\terror: ' + error);
            }
            else {
              console.log('\t\ttoken balance: ' + result);
            }
          });
        console.log("\n\tBalance of Player before transfer");
  //      console.log("\n\tBalance of " + accounts[2] + " before transfer");
        await contract.getTokenBalance.call(accounts[2],
          function(error, result) {
            if (error) {
              console.log('\t\terror: ' + error);
            }
            else {
              console.log('\t\ttoken balance: ' + result);
            }
          });
        console.log("\n\tTransferring 500 tokens from Machine to Player");

      //  console.log("\n\tTransferring 500 tokens from " + accounts[1] + " to " + accounts[2]);

        var acc_1_val = await contract.getTokenBalance.call(accounts[1],
          function(error, result) {
            if (error) {
              console.log('\t\terror: ' + error);
            }
            else {
              console.log('\t\ttoken balance: ' + result);
            }
          });
          var acc_2_val = await contract.getTokenBalance.call(accounts[2],
            function(error, result) {
              if (error) {
                console.log('\t\terror: ' + error);
              }
              else {
                console.log('\t\ttoken balance: ' + result);
              }
            });

            // do this because var sometime act like stirng so output 10000+7500 = 100007500
            var acc_1 = Number(acc_1_val);
            var acc_2 = Number(acc_2_val);

      //  await contract.transferToken(accounts[2], -7500, {from: accounts[1]});
        await contract.setTokenBalance(acc_1 - 0, {from: accounts[1]});
        await contract.setTokenBalance(acc_2 + 0, {from: accounts[2]});



      //  console.log("\n\tBalance of " + accounts[1] + " after transfer");
        console.log("\n\tBalance of Mahcine after transfer");

        await contract.getTokenBalance.call(accounts[1],
          function(error, result) {
            if (error) {
              console.log('\t\terror: ' + error);
            }
            else {
              console.log('\t\ttoken balance: ' + result);
            }
          });
//          console.log("\n\tBalance of " + accounts[2] + " after transfer");
        console.log("\n\tBalance of Player after transfer");

        await contract.getTokenBalance.call(accounts[2],
          function(error, result) {
            if (error) {
              console.log('\t\terror: ' + error + '\n');
            }
            else {
              console.log('\t\ttoken balance: ' + result + '\n');
            }
          });
      });
}
  });
