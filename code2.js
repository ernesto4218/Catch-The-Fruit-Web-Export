gdjs.LoginCode = {};
gdjs.LoginCode.GDBGObjects1= [];
gdjs.LoginCode.GDBGObjects2= [];
gdjs.LoginCode.GDBGObjects3= [];
gdjs.LoginCode.GDBGObjects4= [];
gdjs.LoginCode.GDBGObjects5= [];
gdjs.LoginCode.GDSignInObjects1= [];
gdjs.LoginCode.GDSignInObjects2= [];
gdjs.LoginCode.GDSignInObjects3= [];
gdjs.LoginCode.GDSignInObjects4= [];
gdjs.LoginCode.GDSignInObjects5= [];
gdjs.LoginCode.GDStateObjects1= [];
gdjs.LoginCode.GDStateObjects2= [];
gdjs.LoginCode.GDStateObjects3= [];
gdjs.LoginCode.GDStateObjects4= [];
gdjs.LoginCode.GDStateObjects5= [];
gdjs.LoginCode.GDState2Objects1= [];
gdjs.LoginCode.GDState2Objects2= [];
gdjs.LoginCode.GDState2Objects3= [];
gdjs.LoginCode.GDState2Objects4= [];
gdjs.LoginCode.GDState2Objects5= [];

gdjs.LoginCode.conditionTrue_0 = {val:false};
gdjs.LoginCode.condition0IsTrue_0 = {val:false};
gdjs.LoginCode.condition1IsTrue_0 = {val:false};
gdjs.LoginCode.condition2IsTrue_0 = {val:false};
gdjs.LoginCode.condition3IsTrue_0 = {val:false};
gdjs.LoginCode.condition4IsTrue_0 = {val:false};
gdjs.LoginCode.conditionTrue_1 = {val:false};
gdjs.LoginCode.condition0IsTrue_1 = {val:false};
gdjs.LoginCode.condition1IsTrue_1 = {val:false};
gdjs.LoginCode.condition2IsTrue_1 = {val:false};
gdjs.LoginCode.condition3IsTrue_1 = {val:false};
gdjs.LoginCode.condition4IsTrue_1 = {val:false};


gdjs.LoginCode.mapOfGDgdjs_46LoginCode_46GDSignInObjects1Objects = Hashtable.newFrom({"SignIn": gdjs.LoginCode.GDSignInObjects1});
gdjs.LoginCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{



}


{


gdjs.LoginCode.condition0IsTrue_0.val = false;
{
gdjs.LoginCode.condition0IsTrue_0.val = !(gdjs.evtTools.firebaseTools.auth.isAuthentified());
}if (gdjs.LoginCode.condition0IsTrue_0.val) {
gdjs.copyArray(asyncObjectsList.getObjects("State"), gdjs.LoginCode.GDStateObjects4);

{gdjs.evtTools.firebaseTools.auth.signInWithProvider("google", runtimeScene.getVariables().get("SignInState"));
}{for(var i = 0, len = gdjs.LoginCode.GDStateObjects4.length ;i < len;++i) {
    gdjs.LoginCode.GDStateObjects4[i].setString("Connecting Account..");
}
}{for(var i = 0, len = gdjs.LoginCode.GDStateObjects4.length ;i < len;++i) {
    gdjs.LoginCode.GDStateObjects4[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}}

}


{


gdjs.LoginCode.condition0IsTrue_0.val = false;
{
gdjs.LoginCode.condition0IsTrue_0.val = gdjs.evtTools.firebaseTools.auth.isAuthentified();
}if (gdjs.LoginCode.condition0IsTrue_0.val) {
{gdjs.evtTools.firebaseTools.firestore.hasDocument("Users", gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), runtimeScene.getVariables().get("CheckForUser"), runtimeScene.getVariables().get("CheckForUserState"));
}}

}


};gdjs.LoginCode.asyncCallback18400316 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("SignIn"), gdjs.LoginCode.GDSignInObjects3);

{for(var i = 0, len = gdjs.LoginCode.GDSignInObjects3.length ;i < len;++i) {
    gdjs.LoginCode.GDSignInObjects3[i].getBehavior("Tween").removeTween("release");
}
}
{ //Subevents
gdjs.LoginCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.LoginCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
for (const obj of gdjs.LoginCode.GDSignInObjects2) asyncObjectsList.addObject("SignIn", obj);
/* Don't save State as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.LoginCode.asyncCallback18400316(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.LoginCode.asyncCallback18399276 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("SignIn"), gdjs.LoginCode.GDSignInObjects2);

{for(var i = 0, len = gdjs.LoginCode.GDSignInObjects2.length ;i < len;++i) {
    gdjs.LoginCode.GDSignInObjects2[i].getBehavior("Tween").addObjectScaleTween("release", 1, 1, "easeInOutCubic", 200, false, true);
}
}
{ //Subevents
gdjs.LoginCode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.LoginCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.LoginCode.GDSignInObjects1) asyncObjectsList.addObject("SignIn", obj);
for (const obj of gdjs.LoginCode.GDStateObjects1) asyncObjectsList.addObject("State", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.LoginCode.asyncCallback18399276(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.LoginCode.asyncCallback18412108 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Dashboard", false);
}}
gdjs.LoginCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.LoginCode.asyncCallback18412108(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.LoginCode.asyncCallback18413636 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Dashboard", false);
}}
gdjs.LoginCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.LoginCode.asyncCallback18413636(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.LoginCode.userFunc0x1011610 = function(runtimeScene) {
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
gdjs.LoginCode.eventsList5 = function(runtimeScene) {

{


gdjs.LoginCode.userFunc0x1011610(runtimeScene);

}


};gdjs.LoginCode.userFunc0x1011760 = function(runtimeScene) {
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
gdjs.LoginCode.eventsList6 = function(runtimeScene) {

{


gdjs.LoginCode.userFunc0x1011760(runtimeScene);

}


{


{
}

}


};gdjs.LoginCode.eventsList7 = function(runtimeScene) {

{



}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("State2"), gdjs.LoginCode.GDState2Objects1);
{for(var i = 0, len = gdjs.LoginCode.GDState2Objects1.length ;i < len;++i) {
    gdjs.LoginCode.GDState2Objects1[i].setString("SignInState : " + gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("SignInState")) + gdjs.evtTools.string.newLine() + "CheckForUserState: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("CheckForUserState")) + gdjs.evtTools.string.newLine());
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SignIn"), gdjs.LoginCode.GDSignInObjects1);

gdjs.LoginCode.condition0IsTrue_0.val = false;
gdjs.LoginCode.condition1IsTrue_0.val = false;
gdjs.LoginCode.condition2IsTrue_0.val = false;
gdjs.LoginCode.condition3IsTrue_0.val = false;
{
gdjs.LoginCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.LoginCode.mapOfGDgdjs_46LoginCode_46GDSignInObjects1Objects, runtimeScene, true, false);
}if ( gdjs.LoginCode.condition0IsTrue_0.val ) {
{
gdjs.LoginCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.LoginCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.LoginCode.GDSignInObjects1.length;i<l;++i) {
    if ( !(gdjs.LoginCode.GDSignInObjects1[i].getBehavior("Tween").exists("release")) ) {
        gdjs.LoginCode.condition2IsTrue_0.val = true;
        gdjs.LoginCode.GDSignInObjects1[k] = gdjs.LoginCode.GDSignInObjects1[i];
        ++k;
    }
}
gdjs.LoginCode.GDSignInObjects1.length = k;}if ( gdjs.LoginCode.condition2IsTrue_0.val ) {
{
{gdjs.LoginCode.conditionTrue_1 = gdjs.LoginCode.condition3IsTrue_0;
gdjs.LoginCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(18398820);
}
}}
}
}
if (gdjs.LoginCode.condition3IsTrue_0.val) {
/* Reuse gdjs.LoginCode.GDSignInObjects1 */
gdjs.copyArray(runtimeScene.getObjects("State"), gdjs.LoginCode.GDStateObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "click.wav", false, 50, 1);
}{for(var i = 0, len = gdjs.LoginCode.GDStateObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDStateObjects1[i].setString("Please Wait..");
}
}{for(var i = 0, len = gdjs.LoginCode.GDStateObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDStateObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.LoginCode.GDSignInObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDSignInObjects1[i].getBehavior("Tween").addObjectScaleTween("click", 0.9, 0.9, "easeInOutCubic", 200, false, true);
}
}
{ //Subevents
gdjs.LoginCode.eventsList2(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.LoginCode.condition0IsTrue_0.val = false;
gdjs.LoginCode.condition1IsTrue_0.val = false;
{
gdjs.LoginCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("SignInState")) == "ok";
}if ( gdjs.LoginCode.condition0IsTrue_0.val ) {
{
{gdjs.LoginCode.conditionTrue_1 = gdjs.LoginCode.condition1IsTrue_0;
gdjs.LoginCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(18404580);
}
}}
if (gdjs.LoginCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("State"), gdjs.LoginCode.GDStateObjects1);
{gdjs.evtTools.firebaseTools.firestore.hasDocument("Users", gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), runtimeScene.getVariables().get("CheckForUser"), runtimeScene.getVariables().get("CheckForUserState"));
}{for(var i = 0, len = gdjs.LoginCode.GDStateObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDStateObjects1[i].setString("Please Wait...");
}
}{for(var i = 0, len = gdjs.LoginCode.GDStateObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDStateObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}}

}


{



}


{


gdjs.LoginCode.condition0IsTrue_0.val = false;
gdjs.LoginCode.condition1IsTrue_0.val = false;
{
gdjs.LoginCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("CheckForUser")) == "false";
}if ( gdjs.LoginCode.condition0IsTrue_0.val ) {
{
{gdjs.LoginCode.conditionTrue_1 = gdjs.LoginCode.condition1IsTrue_0;
gdjs.LoginCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(18405868);
}
}}
if (gdjs.LoginCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("State"), gdjs.LoginCode.GDStateObjects1);
{runtimeScene.getVariables().getFromIndex(0).getChild("UserInfo").getChild("Email").setString(gdjs.evtTools.firebaseTools.auth.userManagement.getEmail());
}{runtimeScene.getVariables().getFromIndex(0).getChild("UserInfo").getChild("DocID").setString(gdjs.evtTools.firebaseTools.auth.userManagement.getUID());
}{runtimeScene.getVariables().getFromIndex(0).getChild("UserInfo").getChild("Name").setString(gdjs.evtTools.firebaseTools.auth.userManagement.getDisplayName());
}{runtimeScene.getVariables().getFromIndex(0).getChild("Invite").getChild("Allow").setString("true");
}{runtimeScene.getVariables().get("InvitePayload").getChild("InviteCode").setString(gdjs.evtTools.string.toUpperCase(gdjs.evtTools.string.subStr(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), 0, 4) + gdjs.evtTools.common.toString(gdjs.random(999))));
}{runtimeScene.getVariables().get("InvitePayload").getChild("Invited").setString("0");
}{for(var i = 0, len = gdjs.LoginCode.GDStateObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDStateObjects1[i].setString("Creating Account...");
}
}{for(var i = 0, len = gdjs.LoginCode.GDStateObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDStateObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}}

}


{


gdjs.LoginCode.condition0IsTrue_0.val = false;
gdjs.LoginCode.condition1IsTrue_0.val = false;
{
{gdjs.LoginCode.conditionTrue_1 = gdjs.LoginCode.condition0IsTrue_0;
gdjs.LoginCode.condition0IsTrue_1.val = false;
gdjs.LoginCode.condition1IsTrue_1.val = false;
gdjs.LoginCode.condition2IsTrue_1.val = false;
{
gdjs.LoginCode.condition0IsTrue_1.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(0).getChild("UserInfo").getChild("Email")) != "0";
if( gdjs.LoginCode.condition0IsTrue_1.val ) {
    gdjs.LoginCode.conditionTrue_1.val = true;
}
}
{
gdjs.LoginCode.condition1IsTrue_1.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(0).getChild("UserInfo").getChild("DocID")) != "0";
if( gdjs.LoginCode.condition1IsTrue_1.val ) {
    gdjs.LoginCode.conditionTrue_1.val = true;
}
}
{
gdjs.LoginCode.condition2IsTrue_1.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(0).getChild("UserInfo").getChild("Name")) != "0";
if( gdjs.LoginCode.condition2IsTrue_1.val ) {
    gdjs.LoginCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.LoginCode.condition0IsTrue_0.val ) {
{
{gdjs.LoginCode.conditionTrue_1 = gdjs.LoginCode.condition1IsTrue_0;
gdjs.LoginCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(18409500);
}
}}
if (gdjs.LoginCode.condition1IsTrue_0.val) {
{gdjs.evtTools.firebaseTools.firestore.writeDocument("Users", gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), runtimeScene.getVariables().getFromIndex(0), runtimeScene.getVariables().get("PayloadState"));
}{gdjs.evtTools.firebaseTools.firestore.writeDocument("Invites", gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), runtimeScene.getVariables().get("InvitePayload"), runtimeScene.getVariables().get("InvitePayloadState"));
}{gdjs.evtTools.firebaseTools.database.writeField("Users/" + gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "ID", gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), runtimeScene.getVariables().get("IDRDBstate"));
}}

}


{


gdjs.LoginCode.condition0IsTrue_0.val = false;
gdjs.LoginCode.condition1IsTrue_0.val = false;
gdjs.LoginCode.condition2IsTrue_0.val = false;
gdjs.LoginCode.condition3IsTrue_0.val = false;
{
gdjs.LoginCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("PayloadState")) == "ok";
}if ( gdjs.LoginCode.condition0IsTrue_0.val ) {
{
gdjs.LoginCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("InvitePayloadState")) == "ok";
}if ( gdjs.LoginCode.condition1IsTrue_0.val ) {
{
gdjs.LoginCode.condition2IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("IDRDBstate")) == "ok";
}if ( gdjs.LoginCode.condition2IsTrue_0.val ) {
{
{gdjs.LoginCode.conditionTrue_1 = gdjs.LoginCode.condition3IsTrue_0;
gdjs.LoginCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(18411652);
}
}}
}
}
if (gdjs.LoginCode.condition3IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("State"), gdjs.LoginCode.GDStateObjects1);
{for(var i = 0, len = gdjs.LoginCode.GDStateObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDStateObjects1[i].setString("Account Created!");
}
}{for(var i = 0, len = gdjs.LoginCode.GDStateObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDStateObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}
{ //Subevents
gdjs.LoginCode.eventsList3(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.LoginCode.condition0IsTrue_0.val = false;
gdjs.LoginCode.condition1IsTrue_0.val = false;
{
gdjs.LoginCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("CheckForUser")) == "true";
}if ( gdjs.LoginCode.condition0IsTrue_0.val ) {
{
{gdjs.LoginCode.conditionTrue_1 = gdjs.LoginCode.condition1IsTrue_0;
gdjs.LoginCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(18413180);
}
}}
if (gdjs.LoginCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("State"), gdjs.LoginCode.GDStateObjects1);
{for(var i = 0, len = gdjs.LoginCode.GDStateObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDStateObjects1[i].setString("Sign In Succesful!");
}
}{for(var i = 0, len = gdjs.LoginCode.GDStateObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDStateObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}
{ //Subevents
gdjs.LoginCode.eventsList4(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.LoginCode.condition0IsTrue_0.val = false;
{
{gdjs.LoginCode.conditionTrue_1 = gdjs.LoginCode.condition0IsTrue_0;
gdjs.LoginCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13054276);
}
}if (gdjs.LoginCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.LoginCode.eventsList5(runtimeScene);} //End of subevents
}

}


{



}


{


{

{ //Subevents
gdjs.LoginCode.eventsList6(runtimeScene);} //End of subevents
}

}


};

gdjs.LoginCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LoginCode.GDBGObjects1.length = 0;
gdjs.LoginCode.GDBGObjects2.length = 0;
gdjs.LoginCode.GDBGObjects3.length = 0;
gdjs.LoginCode.GDBGObjects4.length = 0;
gdjs.LoginCode.GDBGObjects5.length = 0;
gdjs.LoginCode.GDSignInObjects1.length = 0;
gdjs.LoginCode.GDSignInObjects2.length = 0;
gdjs.LoginCode.GDSignInObjects3.length = 0;
gdjs.LoginCode.GDSignInObjects4.length = 0;
gdjs.LoginCode.GDSignInObjects5.length = 0;
gdjs.LoginCode.GDStateObjects1.length = 0;
gdjs.LoginCode.GDStateObjects2.length = 0;
gdjs.LoginCode.GDStateObjects3.length = 0;
gdjs.LoginCode.GDStateObjects4.length = 0;
gdjs.LoginCode.GDStateObjects5.length = 0;
gdjs.LoginCode.GDState2Objects1.length = 0;
gdjs.LoginCode.GDState2Objects2.length = 0;
gdjs.LoginCode.GDState2Objects3.length = 0;
gdjs.LoginCode.GDState2Objects4.length = 0;
gdjs.LoginCode.GDState2Objects5.length = 0;

gdjs.LoginCode.eventsList7(runtimeScene);

return;

}

gdjs['LoginCode'] = gdjs.LoginCode;
