function createRequest() {
  var requestContainer = createSection('Request', 'request_container');
  createButton(requestContainer, 'Invite', 'requestNonUsers');
  createButton(requestContainer, 'Invitable', 'requestInvitable');
  createButton(requestContainer, 'Request', 'requestAppUsers');
  createButton(requestContainer, 'RequestSend', 'requestSend');
  createButton(requestContainer, 'RequestSend To Friend', 'requestSendTo');
  createButton(requestContainer, 'RequestAskfor', 'requestAskfor');
}

function requestNonUsers() {
  FB.ui({
    method : 'apprequests',
    title : 'Invite friend',
    message : 'Go have a quick match',
    data: 'requestNonUsers',
    filters : ['app_non_users']
  }, fbCallback);
}

function requestInvitable() {
  var friend = getSelectedFriendInvitable();
  FB.ui({
    method: 'apprequests',
    title: 'Invitable',
    message: 'Go have a quick match',
    data: 'requestInvitable',
    to: friend
  }, fbCallback);
}

function requestAppUsers() {
  FB.ui({
    method : 'apprequests',
    title : 'Request for help',
    message : 'I need help please give me a heart',
    data: 'requestAppUsers',
    filters : ['app_users'],
  }, fbCallback);
}

function requestSend() {
  FB.ui({
    method : 'apprequests',
    title : 'Send gift to your friend',
    action_type:'send',
    message : 'Here is a gift for you',
    data: 'requestSend',
    object_id: 822085917813319,
    filters : ['app_users'],
  }, fbCallback);
}

function requestSendTo() {
  var friend = getSelectedFriend();
  FB.ui({
    method : 'apprequests',
    title : 'Send gift to your friend',
    action_type:'send',
    message : 'Here is a gift for you',
    data: 'requestSendTo',
    object_id: 822085917813319,
    to: friend,
  }, fbCallback);
}

function requestAskfor() {
  FB.ui({
    method : 'apprequests',
    title : 'Please help me!!',
    action_type:'askfor',
    message : 'I need help please give me a heart',
    filters : ['app_users'],
    data: 'requestAskfor',
    object_id: 822085917813319,
  }, fbCallback);
}
