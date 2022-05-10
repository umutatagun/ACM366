var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var ada = document.getElementById("adacoin");


var settings = {
    "async" :true,
    "scrossDomain":true,
    "url":"https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ccardano&vs_currencies=usd",
    "method":"GET",
    "headers":{}
}
$.ajax(settings).done(function(res){
    btc.innerHTML = res.bitcoin.usd;
    eth.innerHTML = res.ethereum.usd;
    ada.innerHTML = res.cardano.usd;
});