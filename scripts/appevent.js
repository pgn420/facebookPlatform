function createAppEvents() {
  var appEventsContainer = createSection('App Events', 'app_events_container');
  createButton(appEventsContainer, 'ActivateApp', 'eventActivateApp');
  createButton(appEventsContainer, 'Tutorial', 'eventTutorial');
  createButton(appEventsContainer, 'Registration', 'eventRegistration');
  createButton(appEventsContainer, 'Achievement', 'eventAchievement');
  createButton(appEventsContainer, 'Purchase', 'eventPurchase');
  $('<input/>').attr({ type: 'text', id: 'purchaseField', value: '19.9'}).appendTo(appEventsContainer);

  createButton(appEventsContainer, 'Custom Event', 'eventCustom');
  $('<input/>').attr({ type: 'text', id: 'customField', value: 'fridayNightOldFashioned'}).appendTo(appEventsContainer);

  createButton(appEventsContainer, 'Level Achieved', 'eventLevel');
  $('<input/>').attr({ type: 'text', id: 'levelField', value: 'Dungeon 1'}).appendTo(appEventsContainer);
}

function eventActivateApp() {
  FB.AppEvents.activateApp();
}

function eventTutorial() {  
  var params = {};
  params[FB.AppEvents.ParameterNames.CONTENT_ID] = 't001';
  params[FB.AppEvents.ParameterNames.CONTENT_TYPE] = 'Tutorial';
  params[FB.AppEvents.ParameterNames.DESCRIPTION] = 'Step 1';
  params[FB.AppEvents.ParameterNames.SUCCESS] = '1'; // i feel this param is not necessary

  FB.AppEvents.logEvent(FB.AppEvents.EventNames.COMPLETED_TUTORIAL, null, params);
}

function eventRegistration() {
  var params = {};
  params[FB.AppEvents.ParameterNames.REGISTRATION_METHOD] = 'Facebook';
  FB.AppEvents.logEvent(FB.AppEvents.EventNames.COMPLETED_REGISTRATION, null, params);
}

function eventPurchase() {
  var purchaseAmt = Number(document.getElementById("purchaseField").value);
  console.log('purchaseAmt ' + purchaseAmt);
  var params = {};
  params[FB.AppEvents.ParameterNames.CONTENT_ID] = 'QW-12345';
  FB.AppEvents.logPurchase(purchaseAmt, 'USD', params);
}

function eventCustom() {
  var params = {};
  params["ggparam"] = 11;
  FB.AppEvents.logEvent(document.getElementById("customField").value, null, params);
}

function eventLevel() {
  var params = {};
  params[FB.AppEvents.ParameterNames.LEVEL] = document.getElementById("levelField").value;
  params['levelScore'] = 15443;
  FB.AppEvents.logEvent(FB.AppEvents.EventNames.ACHIEVED_LEVEL, null, params);
}

function eventAchievement() {
  var params = {};
  params[FB.AppEvents.ParameterNames.CONTENT_ID] = '1010';
  params[FB.AppEvents.ParameterNames.CONTENT_TYPE] = 'Hero collection';
  params[FB.AppEvents.ParameterNames.DESCRIPTION] = 'Collected 10 heroes';
  FB.AppEvents.logEvent(FB.AppEvents.EventNames.UNLOCKED_ACHIEVEMENT, null, params);
}