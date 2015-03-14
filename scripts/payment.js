function createPayment() {
  var paymentContainer = createSection('Payment', 'payment_container');
  createButton(paymentContainer, 'Buy Coin', 'buyCoins');
  createButton(paymentContainer, 'Buy Gift', 'gift');
  createButton(paymentContainer, 'Gift To', 'giftTo');
  createButton(paymentContainer, 'New Payer Promotion', 'newPayerPromotion');
}

function verifyPayment(data) {
  if (!data) {
    alert("There was an error processing your payment. Please try again!");
    return;
  }

  console.log('Verifying payment', data);

  if (data.error_code) {
    if (data.error_code != 1383010) {
      alert("There was an error processing your payment." + data.error_message + " Error code:" + data.error_code);
    }
    return;
  }
}

function buyCoins() {
  //var requestID = hash(64);
  //console.log("Constructing Request ID: " + requestID);
  FB.ui({
    method : 'pay',
    action : 'purchaseitem',
    product : gCoinsObjectURL,
    //request_id : requestID,
    quantity : 1
  }, verifyPayment
  );
}

function gift() {
  FB.ui({
    method: 'gift',
    product: gCoinsObjectURL,
    message: 'I hope you like my gift!',
  }, fbCallback);
}

function giftTo() {
  var friend = getSelectedFriend();
  console.log('gift to friend ' + friend);
  FB.ui({
    method: 'gift',
    product: gCoinsObjectURL,
    message: 'I hope you like my gift!',
    to: friend
  }, fbCallback);
}

function newPayerPromotion() {
  FB.ui({
    method: 'fbpromotion',
    display: 'popup',
    quantity: 1,
    product : gCoinsObjectURL,
  }, fbCallback);
}