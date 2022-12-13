gdjs.SplashCode = {};
gdjs.SplashCode.GDNewSpriteObjects1= [];
gdjs.SplashCode.GDNewSpriteObjects2= [];

gdjs.SplashCode.conditionTrue_0 = {val:false};
gdjs.SplashCode.condition0IsTrue_0 = {val:false};
gdjs.SplashCode.condition1IsTrue_0 = {val:false};
gdjs.SplashCode.conditionTrue_1 = {val:false};
gdjs.SplashCode.condition0IsTrue_1 = {val:false};
gdjs.SplashCode.condition1IsTrue_1 = {val:false};


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


};gdjs.SplashCode.userFunc0xf758a0 = function(runtimeScene) {
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


gdjs.SplashCode.userFunc0xf758a0(runtimeScene);

}


};gdjs.SplashCode.userFunc0xc11768 = function(runtimeScene) {
"use strict";
if (localStorage.getItem("accessed") === "true") {
  // If the link has already been accessed, show an error message
  alert("Error: This link can only be accessed from one device per user");
  localStorage.setItem("error", "This link can only be accessed from one device per user");
} else {
  // If the link has not been accessed, check if the current URL is the specified link
  if (window.location.href !== "https://ernesto4218.github.io/Catch-The-Fruit-Web-Export/") {
    // If the current URL is not the specified link, allow the user to access it
    localStorage.setItem("accessed", "true");
    window.location.href = "https://ernesto4218.github.io/Catch-The-Fruit-Web-Export/";
  }
}

};
gdjs.SplashCode.eventsList2 = function(runtimeScene) {

{


gdjs.SplashCode.userFunc0xc11768(runtimeScene);

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


gdjs.SplashCode.condition0IsTrue_0.val = false;
{
{gdjs.SplashCode.conditionTrue_1 = gdjs.SplashCode.condition0IsTrue_0;
gdjs.SplashCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(18412636);
}
}if (gdjs.SplashCode.condition0IsTrue_0.val) {

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
