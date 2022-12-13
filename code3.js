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


};gdjs.SplashCode.userFunc0x98e358 = function(runtimeScene) {
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


gdjs.SplashCode.userFunc0x98e358(runtimeScene);

}


};

gdjs.SplashCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SplashCode.GDNewSpriteObjects1.length = 0;
gdjs.SplashCode.GDNewSpriteObjects2.length = 0;

gdjs.SplashCode.eventsList1(runtimeScene);

return;

}

gdjs['SplashCode'] = gdjs.SplashCode;
