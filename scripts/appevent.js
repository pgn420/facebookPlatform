function createAppEvents() {
  var appEventsContainer = createSection('App Events', 'app_events_container');

  createAppEventButton(appEventsContainer, 'Tutorial', 'eventTutorial', tutorialEvents, 'select_tutorial');
  createAppEventButton(appEventsContainer, 'Registration', 'eventRegistration', registrationEvents, 'select_registration');
  createAppEventButton(appEventsContainer, 'Achievement', 'eventAchievement', achievementEvents, 'select_achievement');
  createAppEventButton(appEventsContainer, 'Purchase', 'eventPurchase', purchaseEvents, 'select_purchase');
  createAppEventButton(appEventsContainer, 'SpendCredit', 'eventSpendCredits', spendCreditEvents, 'select_spend');
  createAppEventButton(appEventsContainer, 'PlayerLevel', 'eventLevel', levelEvents, 'select_level');

  createButton(appEventsContainer, 'Custom Event', 'eventCustom');
  $('<input/>').attr({ type: 'text', id: 'custom_event_name', value: 'eventName'}).appendTo(appEventsContainer);
  $('<input/>').attr({ type: 'text', id: 'custom_event_param_name', value: 'paramName'}).appendTo(appEventsContainer); 
  $('<input/>').attr({ type: 'text', id: 'custom_event_param_value', value: 'paramValue'}).appendTo(appEventsContainer)
}

function createAppEventButton(container, label, func, data, selector) {
  createButton(container, label, func);
  var selectOptions = document.createElement('select');
  selectOptions.id = selector;
  container.append(selectOptions);
  for (var i = 0; i < data.length; i++) {
    var option = document.createElement('option');
    option.value = i;
    option.innerHTML = data[i].displayName;
    selectOptions.appendChild(option);
  };
}

function eventTutorial() {
  FB.AppEvents.logEvent(FB.AppEvents.EventNames.COMPLETED_TUTORIAL, null, 
    tutorialEvents[document.getElementById('select_tutorial').value].params);
}

function eventRegistration() {
    FB.AppEvents.logEvent(FB.AppEvents.EventNames.COMPLETED_REGISTRATION, null, 
    tutorialEvents[document.getElementById('select_registration').value].params);
}

function eventAchievement() {
  FB.AppEvents.logEvent(FB.AppEvents.EventNames.UNLOCKED_ACHIEVEMENT, null, 
    tutorialEvents[document.getElementById('select_achievement').value].params);
}

function eventPurchase() {
  var selectedObject = purchaseEvents[document.getElementById('select_purchase').value];
  FB.AppEvents.logPurchase(selectedObject.value, selectedObject.currency, selectedObject.params);
}

function eventSpendCredits() {
  var selectedObject = spendCreditEvents[document.getElementById('select_spend').value];
  FB.AppEvents.logEvent(FB.AppEvents.EventNames.SPENT_CREDITS, selectedObject.value, selectedObject.params);
}

function eventLevel() {
  FB.AppEvents.logEvent(FB.AppEvents.EventNames.ACHIEVED_LEVEL, null, 
    tutorialEvents[document.getElementById('select_level').value].params);
}

function eventCustom() {
  var params = {};
  params[document.getElementById("custom_event_param_name").value] = document.getElementById("custom_event_param_value").value;
  FB.AppEvents.logEvent(document.getElementById("custom_event_name").value, null, params);
}

var tutorialEvents = new Array();
tutorialEvents[0] = new Object();
tutorialEvents[0].displayName = "Step 1";
tutorialEvents[0].params = new Object();
tutorialEvents[0].params[FB.AppEvents.ParameterNames.DESCRIPTION] = 'Tutorial';
tutorialEvents[0].params[FB.AppEvents.ParameterNames.SUCCESS] = '1';
tutorialEvents[0].params['Step'] = '1';
tutorialEvents[1] = new Object();
tutorialEvents[1].params = new Object();
tutorialEvents[1].displayName = "Step 2";
tutorialEvents[1].params[FB.AppEvents.ParameterNames.DESCRIPTION] = 'Tutorial';
tutorialEvents[1].params[FB.AppEvents.ParameterNames.SUCCESS] = '1';
tutorialEvents[1].params['Step'] = '2';
tutorialEvents[2] = new Object();
tutorialEvents[2].params = new Object();
tutorialEvents[2].displayName = "Step 3";
tutorialEvents[2].params[FB.AppEvents.ParameterNames.DESCRIPTION] = 'Tutorial';
tutorialEvents[2].params[FB.AppEvents.ParameterNames.SUCCESS] = '1';
tutorialEvents[2].params['Step'] = '3';

var registrationEvents = new Array();
registrationEvents[0] = new Object();
registrationEvents[0].displayName = "Facebook";
registrationEvents[0].params = new Object();
registrationEvents[0].params[FB.AppEvents.ParameterNames.REGISTRATION_METHOD] = "Facebook";
registrationEvents[1] = new Object();
registrationEvents[1].displayName = "Google+";
registrationEvents[1].params = new Object();
registrationEvents[1].params[FB.AppEvents.ParameterNames.REGISTRATION_METHOD] = "Google+";
registrationEvents[2] = new Object();
registrationEvents[2].displayName = "GameCenter";
registrationEvents[2].params = new Object();
registrationEvents[2].params[FB.AppEvents.ParameterNames.REGISTRATION_METHOD] = "GameCenter";

var achievementEvents = new Array();
achievementEvents[0] = new Object();
achievementEvents[0].displayName = "Gathered 10000 GOLD";
achievementEvents[0].params = new Object();
achievementEvents[0].params[FB.AppEvents.ParameterNames.DESCRIPTION] = "Achievement Gold";
achievementEvents[0].params[FB.AppEvents.ParameterNames.CONTENT_ID] = "a10001";
achievementEvents[0].params[FB.AppEvents.ParameterNames.CONTENT_TYPE] = "gold";
achievementEvents[1] = new Object();
achievementEvents[1].displayName = "Gathered 10000 WATER";
achievementEvents[1].params = new Object();
achievementEvents[1].params[FB.AppEvents.ParameterNames.DESCRIPTION] = "Achievement Water";
achievementEvents[1].params[FB.AppEvents.ParameterNames.CONTENT_ID] = "a20001";
achievementEvents[1].params[FB.AppEvents.ParameterNames.CONTENT_TYPE] = "water";
achievementEvents[2] = new Object();
achievementEvents[2].displayName = "Gathered 1000000 GOLD";
achievementEvents[2].params = new Object();
achievementEvents[2].params[FB.AppEvents.ParameterNames.DESCRIPTION] = "Achievement Gold";
achievementEvents[2].params[FB.AppEvents.ParameterNames.CONTENT_ID] = "a10002";
achievementEvents[2].params[FB.AppEvents.ParameterNames.CONTENT_TYPE] = "gold";

var purchaseEvents = new Array();
purchaseEvents[0] = new Object();
purchaseEvents[0].displayName = '$1.99 - 100 gems';
purchaseEvents[0].value = '1.99';
purchaseEvents[0].currency = 'USD';
purchaseEvents[0].params = new Object();
purchaseEvents[0].params[FB.AppEvents.ParameterNames.CONTENT_TYPE] = 'Gems';
purchaseEvents[0].params[FB.AppEvents.ParameterNames.CONTENT_ID] = '10001';
purchaseEvents[0].params[FB.AppEvents.ParameterNames.DESCRIPTION] = '$1.99 - 100 gems';

purchaseEvents[1] = new Object();
purchaseEvents[1].displayName = '$9.99 - 600 gems';
purchaseEvents[1].value = '9.99';
purchaseEvents[1].currency = 'USD';
purchaseEvents[1].params = new Object();
purchaseEvents[1].params[FB.AppEvents.ParameterNames.CONTENT_TYPE] = 'Gems';
purchaseEvents[1].params[FB.AppEvents.ParameterNames.CONTENT_ID] = '10002';
purchaseEvents[1].params[FB.AppEvents.ParameterNames.DESCRIPTION] = '$1.99 - 600 gems';

purchaseEvents[2] = new Object();
purchaseEvents[2].displayName = '$99.99 - 7200 gems';
purchaseEvents[2].value = '99.99';
purchaseEvents[2].currency = 'USD';
purchaseEvents[2].params = new Object();
purchaseEvents[2].params[FB.AppEvents.ParameterNames.CONTENT_TYPE] = 'Gems';
purchaseEvents[2].params[FB.AppEvents.ParameterNames.CONTENT_ID] = '10003';
purchaseEvents[2].params[FB.AppEvents.ParameterNames.DESCRIPTION] = '$99.99 - 7200 gems';

var levelEvents = new Array();
levelEvents[0] = new Object();
levelEvents[0].displayName = 'Level 1';
levelEvents[0].params = new Object();
levelEvents[0].params[FB.AppEvents.ParameterNames.DESCRIPTION] = "Player Level 1";
levelEvents[0].params[FB.AppEvents.ParameterNames.ACHIEVED_LEVEL] = '1';

levelEvents[1] = new Object();
levelEvents[1].displayName = 'Level 5';
levelEvents[1].params = new Object();
levelEvents[1].params[FB.AppEvents.ParameterNames.DESCRIPTION] = "Player Level 5";
levelEvents[1].params[FB.AppEvents.ParameterNames.ACHIEVED_LEVEL] = '5';

levelEvents[2] = new Object();
levelEvents[2].displayName = 'Level 10';
levelEvents[2].params = new Object();
levelEvents[2].params[FB.AppEvents.ParameterNames.DESCRIPTION] = "Player Level 10";
levelEvents[2].params[FB.AppEvents.ParameterNames.ACHIEVED_LEVEL] = '10';

var spendCreditEvents = new Array();
spendCreditEvents[0] = new Object();
spendCreditEvents[0].displayName = '150 Gems - Green Armor';
spendCreditEvents[0].value = 150;
spendCreditEvents[0].params = new Object();
spendCreditEvents[0].params[FB.AppEvents.ParameterNames.CONTENT_TYPE] = 'Hard Currency';
spendCreditEvents[0].params[FB.AppEvents.ParameterNames.CONTENT_ID] = '20001';
spendCreditEvents[0].params[FB.AppEvents.ParameterNames.DESCRIPTION] = '150 Gems - Green Armor';

spendCreditEvents[1] = new Object();
spendCreditEvents[1].displayName = '350 Gems - Lightning Shoe';
spendCreditEvents[1].value = 350;
spendCreditEvents[1].params = new Object();
spendCreditEvents[1].params[FB.AppEvents.ParameterNames.CONTENT_TYPE] = 'Hard Currency';
spendCreditEvents[1].params[FB.AppEvents.ParameterNames.CONTENT_ID] = '20002';
spendCreditEvents[1].params[FB.AppEvents.ParameterNames.DESCRIPTION] = '350 Gems - Lightning Shoe';

spendCreditEvents[2] = new Object();
spendCreditEvents[2].displayName = '200 Gems - Magic Helm';
spendCreditEvents[2].value = 200;
spendCreditEvents[2].params = new Object();
spendCreditEvents[2].params[FB.AppEvents.ParameterNames.CONTENT_TYPE] = 'Hard Currency';
spendCreditEvents[2].params[FB.AppEvents.ParameterNames.CONTENT_ID] = '20003';
spendCreditEvents[2].params[FB.AppEvents.ParameterNames.DESCRIPTION] = '200 Gems - Magic Helm';
