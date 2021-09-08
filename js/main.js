let accounts;

window.onload = function() {
    console.log("Boardyjump is loaded ready to go");
}

const enableETH = async () => {
   accounts = await window.ethereum.request({ method: 'eth_requestAccounts'}).catch((err) => {
   //error handler
   console.log(err.code);
   })

  console.log(accounts);  

}
