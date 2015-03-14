function createShare() {
  var shareDialogContainer = createSection('Feed/Share Dialog', 'feed_dialog_container');
  createButton(shareDialogContainer, 'Feed Dialog', 'feedDialog');
  createButton(shareDialogContainer, 'Feed Dialog Redirect', 'feedDialogRedirect');
  createButton(shareDialogContainer, 'Feed Dialog Redirect Link Only', 'feedDialogRedirectLinkOnly');
  createButton(shareDialogContainer, 'Feed Dialog to friend', 'feedDialogTo');
  createButton(shareDialogContainer, 'Share Dialog', 'shareDialog');
  createButton(shareDialogContainer, 'Share Dialog Open Graph', 'shareDialogOpenGraph');

  var streamPublishContainer = createSection('Stream publish', 'stream_publish_container');
  createButton(streamPublishContainer, 'Get Publish persmission', 'getPublishPermission');
  createButton(streamPublishContainer, 'Stream Publish', 'streamPublish');
  createButton(streamPublishContainer, 'Stream Publish Redirect', 'streamPublishRedirect');
  createButton(streamPublishContainer, 'Stream Publish Open Graph', 'streamPublishOpenGraph');
  createButton(streamPublishContainer, 'Stream Publish Open Graph Wide', 'streamPublishOpenGraphWide');
  createButton(streamPublishContainer, 'Stream Publish Open Graph Square', 'streamPublishOpenGraphSquare');
}

function feedDialog() {
  FB.ui({
    method: 'feed',
    name: 'Feed Dialog',    
    picture: "https://platformtest.herokuapp.com/1200630.jpg",
    caption: "Ellen is power",
    description: "Lean in!",
    link: 'https://apps.facebook.com/platfom/',
    ref: 'fDlg',
    actions: {
      name : 'Ellen is awesome! Watch it now!',
      link : 'https://apps.facebook.com/platfom/'
    }
  }, fbCallback
  );
}

function feedDialogRedirect() {
  FB.ui({
    method: 'feed',
    name: 'Feed Dialog',    
    picture: "https://platformtest.herokuapp.com/1200630.jpg",
    caption: "Ellen is power",
    description: "Lean in!",
    link: 'https://platformtest.herokuapp.com/linkonly.html',
    ref: 'fDlgR',
    actions: {
      name : 'Ellen is awesome! Watch it now!',
      link : 'https://apps.facebook.com/platfom/'
    }
  }, fbCallback
  );
}

function feedDialogRedirectLinkOnly() {
  FB.ui({
    method: 'feed',
    link: 'https://platformtest.herokuapp.com/1200630.html',
    ref: 'feedDlgReLink',
    actions: {
      name : 'Ellen is awesome! Watch it now!',
      link : 'https://apps.facebook.com/platfom/'
    }
  }, fbCallback
  );
}

function feedDialogTo() {
  var friend = getSelectedFriend();
  FB.ui({
    method: 'feed',
    link: 'https://platformtest.herokuapp.com/1200630.html',
    ref: 'fDlgTo',
    actions: {
      name : 'Ellen is awesome! Watch it now!',
      link : 'https://apps.facebook.com/platfom/'
    },
    to: friend
  }, fbCallback
  );
}

function shareDialog() {
  FB.ui({
    method: 'share',
    ref: 'sDlg',
    href: 'https://platformtest.herokuapp.com/1200630.html',
  }, fbCallback
  );
}

function streamPublish() {
  FB.api("me/feed", "post", {
    //message: "Ellen show is awesome, you need to check that (btw this is shared by a game app)",
    name: 'Shared by feed API',    
    link: "https://apps.facebook.com/platfom/",
    picture: "https://platformtest.herokuapp.com/1200630.jpg",
    caption: "Ellen is power",
    description: "Lean in!",
    ref: 'sp',
    actions: {
      name : 'Ellen is awesome! Watch it now!',
      link : 'https://apps.facebook.com/platfom/'
    }
  }, fbCallback
  );
}

function streamPublishRedirect() {
  FB.api("me/feed", "post", {
    //message: "Ellen show is awesome, you need to check that (btw this is shared by a game app)",
    name: 'Shared by feed API with redirect',    
    link: "https://platformtest.herokuapp.com/1200630.html",
    picture: "https://platformtest.herokuapp.com/1200630.jpg",
    caption: "Ellen is power",
    description: "Lean in!",
    ref: 'streamPublishR',
    actions: {
      name : 'Ellen is awesome! Watch it now!',
      link : 'https://apps.facebook.com/platfom/'
    }
  }, fbCallback
  );
}

function streamPublishOpenGraph() {
  FB.api("me/platfom:eat", "post", {
    cake: "https://platformtest.herokuapp.com/cake1200.html",
    ref: 'spog',
    'fb:explicitly_shared' : 'true'
  }, fbCallback
  );
}

function streamPublishOpenGraphWide() {
  FB.api("me/platfom:eat", "post", {
    cake: "https://platformtest.herokuapp.com/cakewide.html",
    ref: 'spogw',
    'fb:explicitly_shared' : 'true'
  }, fbCallback
  );
}

function streamPublishOpenGraphSquare() {
  FB.api("me/platfom:eat", "post", {
    cake: "https://platformtest.herokuapp.com/cakenormal.html",
    ref: 'spogs',
    'fb:explicitly_shared' : 'true'
  }, fbCallback
  );
}

function shareDialogOpenGraph() {
  FB.ui({
    method: 'share_open_graph',
    name: 'test me?',
    action_type: 'platfom:eat',
    ref: 'sDlgOG',
    action_properties: JSON.stringify({
      cake:'https://platformtest.herokuapp.com/cake1200.html',
    })
  }, fbCallback
  );
}