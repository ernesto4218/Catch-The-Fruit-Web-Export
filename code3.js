gdjs.SplashCode = {};
gdjs.SplashCode.GDNewSpriteObjects1= [];
gdjs.SplashCode.GDNewSpriteObjects2= [];

gdjs.SplashCode.conditionTrue_0 = {val:false};
gdjs.SplashCode.condition0IsTrue_0 = {val:false};
gdjs.SplashCode.condition1IsTrue_0 = {val:false};


gdjs.SplashCode.asyncCallback18421316 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Login", false);
}}
gdjs.SplashCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.SplashCode.asyncCallback18421316(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.SplashCode.userFunc0xdf4df0 = function(runtimeScene) {
"use strict";
// Check for the presence of the iframe element
if (window.self !== window.top) {
  // The website is being accessed inside an iframe, so check the value of the Referer header
  var referer = document.referrer;

  if (referer === "https://nesgentgames.com/") {
    // The website is being accessed inside an iframe on the specified page, so allow access to the content
  } else {
    // The website is not being accessed inside an iframe on the specified page, so redirect the user to the specified URL
    window.location.replace("https://www.w3schools.com/");
  }
} else {
  // The website is not being accessed inside an iframe, so redirect the user to the specified URL
  window.location.replace("https://www.w3schools.com/");
}
};
gdjs.SplashCode.eventsList1 = function(runtimeScene) {

{


gdjs.SplashCode.userFunc0xdf4df0(runtimeScene);

}


};gdjs.SplashCode.userFunc0xdeb418 = function(runtimeScene) {
"use strict";
// Get the current URL of the game
var gameURL = window.location.href;

// Create a variable to store the game tab
var gameTab = null;

// Check if the game tab is already open in the browser
if(localStorage.getItem(gameURL) !== null) {
// If the game tab is already open, get the tab object
gameTab = JSON.parse(localStorage.getItem(gameURL));

// Check if the tab is still open in the browser
if(gameTab.closed) {
// If the tab is closed, update the localStorage with the current tab object
localStorage.setItem(gameURL, JSON.stringify(window));
} else {
// If the tab is still open, show an error message and close the current tab
alert("The game is already open in another tab. Please close that tab and try again.");
window.close();
}
} else {
// If the game tab is not open, update the localStorage with the current tab object
localStorage.setItem(gameURL, JSON.stringify(window));
}

// Add an event listener to monitor the tab closing event
window.addEventListener("beforeunload", function() {
// Get the current tab object
var currentTab = JSON.parse(localStorage.getItem(gameURL));

// Set the closed property to true
currentTab.closed = true;

// Update the localStorage with the updated tab object
localStorage.setItem(gameURL, JSON.stringify(currentTab));
});
};
gdjs.SplashCode.eventsList2 = function(runtimeScene) {

{


gdjs.SplashCode.userFunc0xdeb418(runtimeScene);

}


};gdjs.SplashCode.eventsList3 = function(runtimeScene) {

{


gdjs.SplashCode.condition0IsTrue_0.val = false;
{
gdjs.SplashCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.SplashCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.SplashCode.GDNewSpriteObjects1);
{for(var i = 0, len = gdjs.SplashCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.SplashCode.GDNewSpriteObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.SplashCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.SplashCode.GDNewSpriteObjects1[i].setCenterYInScene(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.SplashCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.SplashCode.GDNewSpriteObjects1[i].getBehavior("Tween").addObjectOpacityTween("show", 0, "linear", 2000, false);
}
}
{ //Subevents
gdjs.SplashCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


{

{ //Subevents
gdjs.SplashCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


{

{ //Subevents
gdjs.SplashCode.eventsList2(runtimeScene);} //End of subevents
}

}


};

gdjs.SplashCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SplashCode.GDNewSpriteObjects1.length = 0;
gdjs.SplashCode.GDNewSpriteObjects2.length = 0;

gdjs.SplashCode.eventsList3(runtimeScene);

return;

}

gdjs['SplashCode'] = gdjs.SplashCode;
