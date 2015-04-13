var gAppUrl = 'http://apps.facebook.com/platfom';
var gCoinsObjectURL = 'http://platformtest.herokuapp.com/coin.html';

function createSection(label, p_id) {
  var para = $('<p>', {text: label}).appendTo('#stage');
  $("<div>", {id: p_id, class: "a"}).appendTo(para);
  return $('#'+p_id);
}

function createButton(container, label, func) {
  var $button= $('<input/>').attr({ type: 'button', click:func,value:label, onclick:func+'()'});
  $button.appendTo(container);
  return $button;
}

function createMenu() {
  var friendContainer = createSection('Friends', 'friend_container');
  var selectFriends = document.createElement('select');
  selectFriends.id = 'select_friends';
  friendContainer.append(selectFriends);
  
  var invitableFriendContainer = createSection('Invitable Friends', 'invitable_friend_container');
  var selectInvitableFriends = document.createElement('select');
  selectInvitableFriends.id = 'select_invitable_friends';
  invitableFriendContainer.append(selectInvitableFriends);

  createPayment();
  createRequest();
  createShare();
  createAchievement();

  var groupContainer = createSection('Game Group', 'group_container');
  createButton(groupContainer, 'Create Group', 'createGroup');

  var likeContainer = createSection('Like', 'like_container');
  createButton(likeContainer, 'Like Object', 'likeObject');

  var messengerContainer = createSection('Messenger', 'messenger_container');
  createButton(messengerContainer, 'Send Dialog', 'sendDialog');

  var a2uContainer = createSection('App to User Notification', 'a2u_container');
  createButton(a2uContainer, 'Send A2U', 'sendA2U');
  $('<input/>').attr({ type: 'text', id: 'access_token', value: 'access_token'}).appendTo(a2uContainer);

  createAppEvents();
}

function buildProfile(uid) {
  var profileContainer = document.createElement('div');
  profileContainer.id = 'profile_container';
  stage.appendChild(profileContainer);
  FB.api('/me?fields=name', function(response) {
    var profileName = document.createElement('div');
    profileName.innerHTML = response.name;
    profileName.id = 'profile_name';
    profileContainer.appendChild(profileName);

    var imageURL = 'https://graph.facebook.com/' + uid + '/picture?width=64&height=64';
    var profileImage = document.createElement('img');
    profileImage.setAttribute('src', imageURL);
    profileImage.id = 'profile_image';
    profileImage.setAttribute('height', '64px');
    profileImage.setAttribute('width', '64px');
    //profileContainer.appendChild(profileImage);
  });

  getFriends();
  getInvitableFriends();
}

function likeObject() {
	FB.api("me/og.likes", "post", {
		object: "https://platformtest.herokuapp.com/cake1200.html",
  }, function(response) { console.log(response) }
  );
}

function createGroup() {
	FB.ui({
		method: 'game_group_create',
		name: 'My Test Group',
		description: 'A description for the test group',
		privacy: 'OPEN',
	},
	function(response) {
		if (response && response.id) {
			alert("Group was created with id " + response.id);
		} else {
			alert('There was an error creating your group.');
		}
	}
  );
}

function getPublishPermission() {
	FB.login(function(response) {
		if (response.authResponse) {
			console.log('User granted publish_actions');
		} else {
			console.log('User did not grant publish_actions');
		}
	}, {
		scope: 'publish_actions', 
		return_scopes: true
	});
}

function getFriends() {
	FB.api(
    "/me/friends",
    function (response) {
      if (response && !response.error) {
      	var select = document.getElementById('select_friends');
      	for (var i = 0; i < response.data.length; i++) {
      		var option = document.createElement('option');
      		option.value = response.data[i].id;
      		option.innerHTML = response.data[i].name;
      		select.appendChild(option);
      	};
      }
    }
    );
}

function getInvitableFriends() {
	FB.api(
    "/me/invitable_friends",
    function (response) {
      if (response && !response.error) {
      	var select = document.getElementById('select_invitable_friends');
      	for (var i = 0; i < response.data.length; i++) {
      		var option = document.createElement('option');
      		option.value = response.data[i].id;
      		option.innerHTML = response.data[i].name;
      		select.appendChild(option);
      	}
      }
    }
    );
}

function getSelectedFriend() {
  return document.getElementById('select_friends').value;
}

function getSelectedFriendInvitable() {
  return document.getElementById('select_invitable_friends').value;
}

function sendDialog() {
	var friend = getSelectedFriend();
	FB.ui({
   method: 'send',
   link: gCoinsObjectURL,
   redirect_uri: 'https://apps.facebook.com/testnewapipgn/',
   to: friend
 });
}

function sendA2U() {
	$.get("a2u.php", {fbid: gPlayerFBID, access_token: document.getElementById("access_token").value}, fbCallback);
}

function fbCallback(response) {
	console.log(response);
}

