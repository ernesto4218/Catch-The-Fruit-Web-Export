gdjs.RewardCode = {};
gdjs.RewardCode.GDBGObjects1= [];
gdjs.RewardCode.GDBGObjects2= [];
gdjs.RewardCode.GDBGObjects3= [];
gdjs.RewardCode.GDActivateBTNObjects1= [];
gdjs.RewardCode.GDActivateBTNObjects2= [];
gdjs.RewardCode.GDActivateBTNObjects3= [];
gdjs.RewardCode.GDClaimBTNObjects1= [];
gdjs.RewardCode.GDClaimBTNObjects2= [];
gdjs.RewardCode.GDClaimBTNObjects3= [];
gdjs.RewardCode.GDDateObjects1= [];
gdjs.RewardCode.GDDateObjects2= [];
gdjs.RewardCode.GDDateObjects3= [];
gdjs.RewardCode.GDrewardstateObjects1= [];
gdjs.RewardCode.GDrewardstateObjects2= [];
gdjs.RewardCode.GDrewardstateObjects3= [];
gdjs.RewardCode.GDActivateHourlyObjects1= [];
gdjs.RewardCode.GDActivateHourlyObjects2= [];
gdjs.RewardCode.GDActivateHourlyObjects3= [];
gdjs.RewardCode.GDCombackObjects1= [];
gdjs.RewardCode.GDCombackObjects2= [];
gdjs.RewardCode.GDCombackObjects3= [];
gdjs.RewardCode.GDLoadingObjects1= [];
gdjs.RewardCode.GDLoadingObjects2= [];
gdjs.RewardCode.GDLoadingObjects3= [];
gdjs.RewardCode.GDwhiteObjects1= [];
gdjs.RewardCode.GDwhiteObjects2= [];
gdjs.RewardCode.GDwhiteObjects3= [];
gdjs.RewardCode.GDBackBTNObjects1= [];
gdjs.RewardCode.GDBackBTNObjects2= [];
gdjs.RewardCode.GDBackBTNObjects3= [];

gdjs.RewardCode.conditionTrue_0 = {val:false};
gdjs.RewardCode.condition0IsTrue_0 = {val:false};
gdjs.RewardCode.condition1IsTrue_0 = {val:false};
gdjs.RewardCode.condition2IsTrue_0 = {val:false};
gdjs.RewardCode.condition3IsTrue_0 = {val:false};
gdjs.RewardCode.condition4IsTrue_0 = {val:false};
gdjs.RewardCode.condition5IsTrue_0 = {val:false};
gdjs.RewardCode.conditionTrue_1 = {val:false};
gdjs.RewardCode.condition0IsTrue_1 = {val:false};
gdjs.RewardCode.condition1IsTrue_1 = {val:false};
gdjs.RewardCode.condition2IsTrue_1 = {val:false};
gdjs.RewardCode.condition3IsTrue_1 = {val:false};
gdjs.RewardCode.condition4IsTrue_1 = {val:false};
gdjs.RewardCode.condition5IsTrue_1 = {val:false};


gdjs.RewardCode.asyncCallback18501204 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Loading"), gdjs.RewardCode.GDLoadingObjects2);

gdjs.copyArray(asyncObjectsList.getObjects("white"), gdjs.RewardCode.GDwhiteObjects2);

{for(var i = 0, len = gdjs.RewardCode.GDwhiteObjects2.length ;i < len;++i) {
    gdjs.RewardCode.GDwhiteObjects2[i].setX(-(1000));
}
}{for(var i = 0, len = gdjs.RewardCode.GDLoadingObjects2.length ;i < len;++i) {
    gdjs.RewardCode.GDLoadingObjects2[i].setCenterXInScene(-(1000));
}
}}
gdjs.RewardCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.RewardCode.GDLoadingObjects1) asyncObjectsList.addObject("Loading", obj);
for (const obj of gdjs.RewardCode.GDwhiteObjects1) asyncObjectsList.addObject("white", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(4), (runtimeScene) => (gdjs.RewardCode.asyncCallback18501204(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.RewardCode.eventsList1 = function(runtimeScene) {

{


gdjs.RewardCode.condition0IsTrue_0.val = false;
gdjs.RewardCode.condition1IsTrue_0.val = false;
{
gdjs.RewardCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("LoadReward").getChild("Activate")) == "true";
}if ( gdjs.RewardCode.condition0IsTrue_0.val ) {
{
{gdjs.RewardCode.conditionTrue_1 = gdjs.RewardCode.condition1IsTrue_0;
gdjs.RewardCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(18503124);
}
}}
if (gdjs.RewardCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ActivateBTN"), gdjs.RewardCode.GDActivateBTNObjects1);
gdjs.copyArray(runtimeScene.getObjects("Date"), gdjs.RewardCode.GDDateObjects1);
{for(var i = 0, len = gdjs.RewardCode.GDActivateBTNObjects1.length ;i < len;++i) {
    gdjs.RewardCode.GDActivateBTNObjects1[i].setX(-(1000));
}
}{for(var i = 0, len = gdjs.RewardCode.GDDateObjects1.length ;i < len;++i) {
    gdjs.RewardCode.GDDateObjects1[i].setString("Claim your reward by " + gdjs.evtTools.string.newLine() + gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("LoadReward").getChild("ReadRewardDate")));
}
}{for(var i = 0, len = gdjs.RewardCode.GDDateObjects1.length ;i < len;++i) {
    gdjs.RewardCode.GDDateObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.RewardCode.GDDateObjects1.length ;i < len;++i) {
    gdjs.RewardCode.GDDateObjects1[i].setTextAlignment("center");
}
}}

}


};gdjs.RewardCode.mapOfGDgdjs_46RewardCode_46GDActivateBTNObjects2Objects = Hashtable.newFrom({"ActivateBTN": gdjs.RewardCode.GDActivateBTNObjects2});
gdjs.RewardCode.mapOfGDgdjs_46RewardCode_46GDwhiteObjects2Objects = Hashtable.newFrom({"white": gdjs.RewardCode.GDwhiteObjects2});
gdjs.RewardCode.asyncCallback18523468 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("ActivateBTN"), gdjs.RewardCode.GDActivateBTNObjects3);

{for(var i = 0, len = gdjs.RewardCode.GDActivateBTNObjects3.length ;i < len;++i) {
    gdjs.RewardCode.GDActivateBTNObjects3[i].getBehavior("Tween").addObjectScaleTween("click", 1, 1, "bouncePast", 200, false, true);
}
}}
gdjs.RewardCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.RewardCode.GDActivateBTNObjects2) asyncObjectsList.addObject("ActivateBTN", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.RewardCode.asyncCallback18523468(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.RewardCode.eventsList3 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("rewardstate"), gdjs.RewardCode.GDrewardstateObjects2);
{gdjs.evtTools.network.jsonToVariableStructure(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("GetTime")), runtimeScene.getVariables().get("GetTimeJson"));
}{gdjs.evtTools.network.jsonToVariableStructure(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("GetCompareCurrentTimeNow")), runtimeScene.getVariables().get("GetCompareCurrentTimeNowJson"));
}{runtimeScene.getVariables().get("CurrentDate").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("GetTimeJson").getChild("formatted")));
}{for(var i = 0, len = gdjs.RewardCode.GDrewardstateObjects2.length ;i < len;++i) {
    gdjs.RewardCode.GDrewardstateObjects2[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("RewardReady")));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ActivateBTN"), gdjs.RewardCode.GDActivateBTNObjects2);
gdjs.copyArray(runtimeScene.getObjects("white"), gdjs.RewardCode.GDwhiteObjects2);

gdjs.RewardCode.condition0IsTrue_0.val = false;
gdjs.RewardCode.condition1IsTrue_0.val = false;
gdjs.RewardCode.condition2IsTrue_0.val = false;
gdjs.RewardCode.condition3IsTrue_0.val = false;
{
gdjs.RewardCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.RewardCode.mapOfGDgdjs_46RewardCode_46GDActivateBTNObjects2Objects, runtimeScene, true, false);
}if ( gdjs.RewardCode.condition0IsTrue_0.val ) {
{
gdjs.RewardCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.RewardCode.mapOfGDgdjs_46RewardCode_46GDwhiteObjects2Objects, runtimeScene, true, true);
}if ( gdjs.RewardCode.condition1IsTrue_0.val ) {
{
gdjs.RewardCode.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.RewardCode.condition2IsTrue_0.val ) {
{
{gdjs.RewardCode.conditionTrue_1 = gdjs.RewardCode.condition3IsTrue_0;
gdjs.RewardCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(18520804);
}
}}
}
}
if (gdjs.RewardCode.condition3IsTrue_0.val) {
/* Reuse gdjs.RewardCode.GDActivateBTNObjects2 */
{gdjs.evtTools.network.sendAsyncRequest("https://api.timezonedb.com/v2/get-time-zone?key=55L8WMD9RDC2&format=json&by=zone&zone=Asia/Manila", "", "GET", "", runtimeScene.getVariables().get("GetTime"), runtimeScene.getVariables().get("timestate"));
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().get("Back"), true);
}{for(var i = 0, len = gdjs.RewardCode.GDActivateBTNObjects2.length ;i < len;++i) {
    gdjs.RewardCode.GDActivateBTNObjects2[i].getBehavior("Tween").addObjectScaleTween("click", 0.8, 0.8, "bouncePast", 200, false, true);
}
}
{ //Subevents
gdjs.RewardCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


gdjs.RewardCode.condition0IsTrue_0.val = false;
gdjs.RewardCode.condition1IsTrue_0.val = false;
{
gdjs.RewardCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("CurrentDate")) != "0";
}if ( gdjs.RewardCode.condition0IsTrue_0.val ) {
{
{gdjs.RewardCode.conditionTrue_1 = gdjs.RewardCode.condition1IsTrue_0;
gdjs.RewardCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(18524740);
}
}}
if (gdjs.RewardCode.condition1IsTrue_0.val) {
{gdjs.evtTools.firebaseTools.database.updateField("Users/" + gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Reward/Activate", "true", runtimeScene.getVariables().get("ActivateRewardBooleanState"));
}{gdjs.evtTools.firebaseTools.database.updateField("Users/" + gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Reward/ActivateDate", gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("GetTimeJson").getChild("formatted")), runtimeScene.getVariables().get("ActivateRewardState"));
}}

}


{


gdjs.RewardCode.condition0IsTrue_0.val = false;
gdjs.RewardCode.condition1IsTrue_0.val = false;
{
gdjs.RewardCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("rewardhour")) != "0";
}if ( gdjs.RewardCode.condition0IsTrue_0.val ) {
{
{gdjs.RewardCode.conditionTrue_1 = gdjs.RewardCode.condition1IsTrue_0;
gdjs.RewardCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(18527428);
}
}}
if (gdjs.RewardCode.condition1IsTrue_0.val) {
{gdjs.evtTools.firebaseTools.database.updateField("Users/" + gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Reward/ReadRewardDate", gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("rewardhour")), runtimeScene.getVariables().get("ReadRewardDateState"));
}}

}


{


gdjs.RewardCode.condition0IsTrue_0.val = false;
gdjs.RewardCode.condition1IsTrue_0.val = false;
{
gdjs.RewardCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("RewardDate")) != "0";
}if ( gdjs.RewardCode.condition0IsTrue_0.val ) {
{
{gdjs.RewardCode.conditionTrue_1 = gdjs.RewardCode.condition1IsTrue_0;
gdjs.RewardCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(18529244);
}
}}
if (gdjs.RewardCode.condition1IsTrue_0.val) {
{gdjs.evtTools.firebaseTools.database.updateField("Users/" + gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Reward/RewardDate", gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("RewardDate")), runtimeScene.getVariables().get("ActivateRewardState"));
}}

}


{


gdjs.RewardCode.condition0IsTrue_0.val = false;
gdjs.RewardCode.condition1IsTrue_0.val = false;
gdjs.RewardCode.condition2IsTrue_0.val = false;
gdjs.RewardCode.condition3IsTrue_0.val = false;
gdjs.RewardCode.condition4IsTrue_0.val = false;
{
gdjs.RewardCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("ActivateRewardBooleanState")) == "ok";
}if ( gdjs.RewardCode.condition0IsTrue_0.val ) {
{
gdjs.RewardCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("ActivateRewardState")) == "ok";
}if ( gdjs.RewardCode.condition1IsTrue_0.val ) {
{
gdjs.RewardCode.condition2IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("ReadRewardDateState")) == "ok";
}if ( gdjs.RewardCode.condition2IsTrue_0.val ) {
{
gdjs.RewardCode.condition3IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("ActivateRewardState")) == "ok";
}if ( gdjs.RewardCode.condition3IsTrue_0.val ) {
{
{gdjs.RewardCode.conditionTrue_1 = gdjs.RewardCode.condition4IsTrue_0;
gdjs.RewardCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(18532444);
}
}}
}
}
}
if (gdjs.RewardCode.condition4IsTrue_0.val) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().get("Back"), false);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Reward", false);
}}

}


};gdjs.RewardCode.mapOfGDgdjs_46RewardCode_46GDClaimBTNObjects2Objects = Hashtable.newFrom({"ClaimBTN": gdjs.RewardCode.GDClaimBTNObjects2});
gdjs.RewardCode.asyncCallback18536428 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("ClaimBTN"), gdjs.RewardCode.GDClaimBTNObjects3);

{for(var i = 0, len = gdjs.RewardCode.GDClaimBTNObjects3.length ;i < len;++i) {
    gdjs.RewardCode.GDClaimBTNObjects3[i].getBehavior("Tween").addObjectScaleTween("click", 1, 1, "bouncePast", 200, false, true);
}
}}
gdjs.RewardCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.RewardCode.GDClaimBTNObjects2) asyncObjectsList.addObject("ClaimBTN", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.RewardCode.asyncCallback18536428(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.RewardCode.asyncCallback18541508 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().get("Back"), false);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Dashboard", false);
}}
gdjs.RewardCode.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.RewardCode.asyncCallback18541508(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.RewardCode.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ClaimBTN"), gdjs.RewardCode.GDClaimBTNObjects2);

gdjs.RewardCode.condition0IsTrue_0.val = false;
gdjs.RewardCode.condition1IsTrue_0.val = false;
gdjs.RewardCode.condition2IsTrue_0.val = false;
gdjs.RewardCode.condition3IsTrue_0.val = false;
gdjs.RewardCode.condition4IsTrue_0.val = false;
{
gdjs.RewardCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("RewardReady")) == "true";
}if ( gdjs.RewardCode.condition0IsTrue_0.val ) {
{
gdjs.RewardCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("LoadReward").getChild("Activate")) == "true";
}if ( gdjs.RewardCode.condition1IsTrue_0.val ) {
{
gdjs.RewardCode.condition2IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.RewardCode.mapOfGDgdjs_46RewardCode_46GDClaimBTNObjects2Objects, runtimeScene, true, false);
}if ( gdjs.RewardCode.condition2IsTrue_0.val ) {
{
gdjs.RewardCode.condition3IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.RewardCode.condition3IsTrue_0.val ) {
{
{gdjs.RewardCode.conditionTrue_1 = gdjs.RewardCode.condition4IsTrue_0;
gdjs.RewardCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(18534620);
}
}}
}
}
}
if (gdjs.RewardCode.condition4IsTrue_0.val) {
/* Reuse gdjs.RewardCode.GDClaimBTNObjects2 */
{gdjs.evtTools.firebaseTools.database.getField("Users/" + gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Coins", runtimeScene.getVariables().get("GetCoins"), runtimeScene.getVariables().get("GetCoinsState"));
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().get("Back"), true);
}{for(var i = 0, len = gdjs.RewardCode.GDClaimBTNObjects2.length ;i < len;++i) {
    gdjs.RewardCode.GDClaimBTNObjects2[i].getBehavior("Tween").addObjectScaleTween("click", 0.8, 0.8, "bouncePast", 200, false, true);
}
}
{ //Subevents
gdjs.RewardCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


gdjs.RewardCode.condition0IsTrue_0.val = false;
gdjs.RewardCode.condition1IsTrue_0.val = false;
{
gdjs.RewardCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("GetCoinsState")) == "ok";
}if ( gdjs.RewardCode.condition0IsTrue_0.val ) {
{
{gdjs.RewardCode.conditionTrue_1 = gdjs.RewardCode.condition1IsTrue_0;
gdjs.RewardCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(18537716);
}
}}
if (gdjs.RewardCode.condition1IsTrue_0.val) {
{gdjs.evtTools.firebaseTools.database.updateField("Users/" + gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Coins", gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("GetCoins")) + 100), runtimeScene.getVariables().get("UpdateCoinState"));
}{gdjs.evtTools.firebaseTools.database.deleteField("Users/" + gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Reward", runtimeScene.getVariables().get("DeleteRewardState"));
}}

}


{


gdjs.RewardCode.condition0IsTrue_0.val = false;
gdjs.RewardCode.condition1IsTrue_0.val = false;
gdjs.RewardCode.condition2IsTrue_0.val = false;
{
gdjs.RewardCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("UpdateCoinState")) == "ok";
}if ( gdjs.RewardCode.condition0IsTrue_0.val ) {
{
gdjs.RewardCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("DeleteRewardState")) == "ok";
}if ( gdjs.RewardCode.condition1IsTrue_0.val ) {
{
{gdjs.RewardCode.conditionTrue_1 = gdjs.RewardCode.condition2IsTrue_0;
gdjs.RewardCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(18540644);
}
}}
}
if (gdjs.RewardCode.condition2IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Collect_Coin_Sound_Effect_(getmp3.pro)2.mp3", false, 50, 1);
}
{ //Subevents
gdjs.RewardCode.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.RewardCode.mapOfGDgdjs_46RewardCode_46GDBackBTNObjects1Objects = Hashtable.newFrom({"BackBTN": gdjs.RewardCode.GDBackBTNObjects1});
gdjs.RewardCode.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BackBTN"), gdjs.RewardCode.GDBackBTNObjects1);

gdjs.RewardCode.condition0IsTrue_0.val = false;
gdjs.RewardCode.condition1IsTrue_0.val = false;
gdjs.RewardCode.condition2IsTrue_0.val = false;
gdjs.RewardCode.condition3IsTrue_0.val = false;
{
gdjs.RewardCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.RewardCode.mapOfGDgdjs_46RewardCode_46GDBackBTNObjects1Objects, runtimeScene, true, false);
}if ( gdjs.RewardCode.condition0IsTrue_0.val ) {
{
gdjs.RewardCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.RewardCode.condition1IsTrue_0.val ) {
{
gdjs.RewardCode.condition2IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().get("Back"), false);
}if ( gdjs.RewardCode.condition2IsTrue_0.val ) {
{
{gdjs.RewardCode.conditionTrue_1 = gdjs.RewardCode.condition3IsTrue_0;
gdjs.RewardCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(18542636);
}
}}
}
}
if (gdjs.RewardCode.condition3IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Dashboard", false);
}}

}


};gdjs.RewardCode.userFunc0xc377c0 = function(runtimeScene) {
"use strict";
//get the current time on the scene
var currentdatevar = runtimeScene.getVariables().get("CurrentDate").getAsString();

//update the time
var rewardtime = new Date(currentdatevar);
rewardtime.setHours(rewardtime.getHours() + 1);

//set the reward date
runtimeScene.getVariables().get("RewardDate").setString(rewardtime);

//runtimeScene.getVariables().get("RewardDate").setString(rewardtime.getFullYear()+ "-" + rewardtime.getMonth() + "-" + rewardtime.getDay() + " " + rewardtime.getHours() + ":" + rewardtime.getMinutes() + ":" + rewardtime.getSeconds());

//Get the reward date hour
var rewardhour = new Date(rewardtime);

//add 0 to minutes
if (rewardhour.getMinutes() < 10) {
    var minuteval = "0" + rewardhour.getMinutes();
} else {
    var minuteval = rewardhour.getMinutes();
}
//Convert into 12 hours
if (rewardhour.getHours() > 12) {
    
    var hourval = rewardhour.getHours() - 12;
    runtimeScene.getVariables().get("rewardhour").setString(hourval + " : " +       minuteval + " PM");

} else {
    runtimeScene.getVariables().get("rewardhour").setString(rewardhour.getHours() + " : " + minuteval + " AM"); 
}


};
gdjs.RewardCode.eventsList8 = function(runtimeScene) {

{


gdjs.RewardCode.userFunc0xc377c0(runtimeScene);

}


};gdjs.RewardCode.asyncCallback18624396 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.network.sendAsyncRequest("https://api.timezonedb.com/v2/get-time-zone?key=55L8WMD9RDC2&format=json&by=zone&zone=Asia/Manila", "", "GET", "", runtimeScene.getVariables().get("GetCompareCurrentTimeNow"), gdjs.VariablesContainer.badVariable);
}}
gdjs.RewardCode.eventsList9 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.RewardCode.asyncCallback18624396(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.RewardCode.userFunc0x1001348 = function(runtimeScene) {
"use strict";
//Get the current time
var timenow = runtimeScene.getVariables().get("TimeNow").getAsString();

//Get the rewarded time
var getrewardon =  runtimeScene.getVariables().get("GetRewardOn").getAsString();

var d1 = new Date(timenow);
var d2 = new Date(getrewardon);

if (d1 > d2) {
    runtimeScene.getVariables().get("RewardReady").setString("true");
} else {
    runtimeScene.getVariables().get("RewardReady").setString("false");
}
};
gdjs.RewardCode.eventsList10 = function(runtimeScene) {

{


gdjs.RewardCode.userFunc0x1001348(runtimeScene);

}


};gdjs.RewardCode.eventsList11 = function(runtimeScene) {

{



}


{


gdjs.RewardCode.condition0IsTrue_0.val = false;
{
gdjs.RewardCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.RewardCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ActivateHourly"), gdjs.RewardCode.GDActivateHourlyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Loading"), gdjs.RewardCode.GDLoadingObjects1);
gdjs.copyArray(runtimeScene.getObjects("white"), gdjs.RewardCode.GDwhiteObjects1);
{gdjs.evtTools.firebaseTools.database.getField("Users/" + gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Reward", runtimeScene.getVariables().get("LoadReward"), runtimeScene.getVariables().get("LoadRewardState"));
}{for(var i = 0, len = gdjs.RewardCode.GDActivateHourlyObjects1.length ;i < len;++i) {
    gdjs.RewardCode.GDActivateHourlyObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.RewardCode.GDwhiteObjects1.length ;i < len;++i) {
    gdjs.RewardCode.GDwhiteObjects1[i].setX(0);
}
}{for(var i = 0, len = gdjs.RewardCode.GDLoadingObjects1.length ;i < len;++i) {
    gdjs.RewardCode.GDLoadingObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}
{ //Subevents
gdjs.RewardCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ActivateHourly"), gdjs.RewardCode.GDActivateHourlyObjects1);

gdjs.RewardCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.RewardCode.GDActivateHourlyObjects1.length;i<l;++i) {
    if ( gdjs.RewardCode.GDActivateHourlyObjects1[i].getString() != "Loading..." ) {
        gdjs.RewardCode.condition0IsTrue_0.val = true;
        gdjs.RewardCode.GDActivateHourlyObjects1[k] = gdjs.RewardCode.GDActivateHourlyObjects1[i];
        ++k;
    }
}
gdjs.RewardCode.GDActivateHourlyObjects1.length = k;}if (gdjs.RewardCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.RewardCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


gdjs.RewardCode.condition0IsTrue_0.val = false;
gdjs.RewardCode.condition1IsTrue_0.val = false;
{
gdjs.RewardCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("LoadReward").getChild("Activate")) == "0";
}if ( gdjs.RewardCode.condition0IsTrue_0.val ) {
{
{gdjs.RewardCode.conditionTrue_1 = gdjs.RewardCode.condition1IsTrue_0;
gdjs.RewardCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(18505668);
}
}}
if (gdjs.RewardCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ActivateBTN"), gdjs.RewardCode.GDActivateBTNObjects1);
gdjs.copyArray(runtimeScene.getObjects("ActivateHourly"), gdjs.RewardCode.GDActivateHourlyObjects1);
gdjs.copyArray(runtimeScene.getObjects("ClaimBTN"), gdjs.RewardCode.GDClaimBTNObjects1);
gdjs.copyArray(runtimeScene.getObjects("Comback"), gdjs.RewardCode.GDCombackObjects1);
{for(var i = 0, len = gdjs.RewardCode.GDActivateBTNObjects1.length ;i < len;++i) {
    gdjs.RewardCode.GDActivateBTNObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.RewardCode.GDClaimBTNObjects1.length ;i < len;++i) {
    gdjs.RewardCode.GDClaimBTNObjects1[i].setCenterXInScene(-(1000));
}
}{for(var i = 0, len = gdjs.RewardCode.GDActivateHourlyObjects1.length ;i < len;++i) {
    gdjs.RewardCode.GDActivateHourlyObjects1[i].setString("Activate Hourly Reward");
}
}{for(var i = 0, len = gdjs.RewardCode.GDCombackObjects1.length ;i < len;++i) {
    gdjs.RewardCode.GDCombackObjects1[i].setString("Come back later to claim your 100 coins reward!");
}
}{for(var i = 0, len = gdjs.RewardCode.GDActivateHourlyObjects1.length ;i < len;++i) {
    gdjs.RewardCode.GDActivateHourlyObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.RewardCode.GDCombackObjects1.length ;i < len;++i) {
    gdjs.RewardCode.GDCombackObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.RewardCode.GDCombackObjects1.length ;i < len;++i) {
    gdjs.RewardCode.GDCombackObjects1[i].setTextAlignment("center");
}
}{for(var i = 0, len = gdjs.RewardCode.GDActivateHourlyObjects1.length ;i < len;++i) {
    gdjs.RewardCode.GDActivateHourlyObjects1[i].setTextAlignment("center");
}
}}

}


{



}


{


gdjs.RewardCode.condition0IsTrue_0.val = false;
gdjs.RewardCode.condition1IsTrue_0.val = false;
{
gdjs.RewardCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("RewardReady")) == "true";
}if ( gdjs.RewardCode.condition0IsTrue_0.val ) {
{
{gdjs.RewardCode.conditionTrue_1 = gdjs.RewardCode.condition1IsTrue_0;
gdjs.RewardCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(18510076);
}
}}
if (gdjs.RewardCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ActivateHourly"), gdjs.RewardCode.GDActivateHourlyObjects1);
gdjs.copyArray(runtimeScene.getObjects("ClaimBTN"), gdjs.RewardCode.GDClaimBTNObjects1);
gdjs.copyArray(runtimeScene.getObjects("Comback"), gdjs.RewardCode.GDCombackObjects1);
{for(var i = 0, len = gdjs.RewardCode.GDClaimBTNObjects1.length ;i < len;++i) {
    gdjs.RewardCode.GDClaimBTNObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.RewardCode.GDActivateHourlyObjects1.length ;i < len;++i) {
    gdjs.RewardCode.GDActivateHourlyObjects1[i].setString("Claim Hourly Reward");
}
}{for(var i = 0, len = gdjs.RewardCode.GDCombackObjects1.length ;i < len;++i) {
    gdjs.RewardCode.GDCombackObjects1[i].setString("Come back later to claim your 100 coins reward!");
}
}{for(var i = 0, len = gdjs.RewardCode.GDActivateHourlyObjects1.length ;i < len;++i) {
    gdjs.RewardCode.GDActivateHourlyObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.RewardCode.GDCombackObjects1.length ;i < len;++i) {
    gdjs.RewardCode.GDCombackObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.RewardCode.GDCombackObjects1.length ;i < len;++i) {
    gdjs.RewardCode.GDCombackObjects1[i].setTextAlignment("center");
}
}{for(var i = 0, len = gdjs.RewardCode.GDActivateHourlyObjects1.length ;i < len;++i) {
    gdjs.RewardCode.GDActivateHourlyObjects1[i].setTextAlignment("center");
}
}}

}


{


gdjs.RewardCode.condition0IsTrue_0.val = false;
gdjs.RewardCode.condition1IsTrue_0.val = false;
{
gdjs.RewardCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("RewardReady")) == "false";
}if ( gdjs.RewardCode.condition0IsTrue_0.val ) {
{
{gdjs.RewardCode.conditionTrue_1 = gdjs.RewardCode.condition1IsTrue_0;
gdjs.RewardCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(18513996);
}
}}
if (gdjs.RewardCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ActivateHourly"), gdjs.RewardCode.GDActivateHourlyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Comback"), gdjs.RewardCode.GDCombackObjects1);
{for(var i = 0, len = gdjs.RewardCode.GDActivateHourlyObjects1.length ;i < len;++i) {
    gdjs.RewardCode.GDActivateHourlyObjects1[i].setString("Activate Hourly Reward");
}
}{for(var i = 0, len = gdjs.RewardCode.GDCombackObjects1.length ;i < len;++i) {
    gdjs.RewardCode.GDCombackObjects1[i].setString("Come back later to claim your 100 coins reward!");
}
}{for(var i = 0, len = gdjs.RewardCode.GDActivateHourlyObjects1.length ;i < len;++i) {
    gdjs.RewardCode.GDActivateHourlyObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.RewardCode.GDCombackObjects1.length ;i < len;++i) {
    gdjs.RewardCode.GDCombackObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.RewardCode.GDCombackObjects1.length ;i < len;++i) {
    gdjs.RewardCode.GDCombackObjects1[i].setTextAlignment("center");
}
}{for(var i = 0, len = gdjs.RewardCode.GDActivateHourlyObjects1.length ;i < len;++i) {
    gdjs.RewardCode.GDActivateHourlyObjects1[i].setTextAlignment("center");
}
}}

}


{


gdjs.RewardCode.eventsList3(runtimeScene);
}


{


gdjs.RewardCode.eventsList6(runtimeScene);
}


{


gdjs.RewardCode.eventsList7(runtimeScene);
}


{



}


{


gdjs.RewardCode.condition0IsTrue_0.val = false;
{
gdjs.RewardCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("CurrentDate")) != "0";
}if (gdjs.RewardCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.RewardCode.eventsList8(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.RewardCode.condition0IsTrue_0.val = false;
gdjs.RewardCode.condition1IsTrue_0.val = false;
{
gdjs.RewardCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("LoadReward").getChild("Activate")) == "true";
}if ( gdjs.RewardCode.condition0IsTrue_0.val ) {
{
{gdjs.RewardCode.conditionTrue_1 = gdjs.RewardCode.condition1IsTrue_0;
gdjs.RewardCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(18624188);
}
}}
if (gdjs.RewardCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.RewardCode.eventsList9(runtimeScene);} //End of subevents
}

}


{


{
{runtimeScene.getVariables().get("TimeNow").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("GetCompareCurrentTimeNowJson").getChild("formatted")));
}{runtimeScene.getVariables().get("GetRewardOn").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("LoadReward").getChild("RewardDate")));
}}

}


{


gdjs.RewardCode.condition0IsTrue_0.val = false;
{
gdjs.RewardCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("TimeNow")) != "0";
}if (gdjs.RewardCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.RewardCode.eventsList10(runtimeScene);} //End of subevents
}

}


};

gdjs.RewardCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.RewardCode.GDBGObjects1.length = 0;
gdjs.RewardCode.GDBGObjects2.length = 0;
gdjs.RewardCode.GDBGObjects3.length = 0;
gdjs.RewardCode.GDActivateBTNObjects1.length = 0;
gdjs.RewardCode.GDActivateBTNObjects2.length = 0;
gdjs.RewardCode.GDActivateBTNObjects3.length = 0;
gdjs.RewardCode.GDClaimBTNObjects1.length = 0;
gdjs.RewardCode.GDClaimBTNObjects2.length = 0;
gdjs.RewardCode.GDClaimBTNObjects3.length = 0;
gdjs.RewardCode.GDDateObjects1.length = 0;
gdjs.RewardCode.GDDateObjects2.length = 0;
gdjs.RewardCode.GDDateObjects3.length = 0;
gdjs.RewardCode.GDrewardstateObjects1.length = 0;
gdjs.RewardCode.GDrewardstateObjects2.length = 0;
gdjs.RewardCode.GDrewardstateObjects3.length = 0;
gdjs.RewardCode.GDActivateHourlyObjects1.length = 0;
gdjs.RewardCode.GDActivateHourlyObjects2.length = 0;
gdjs.RewardCode.GDActivateHourlyObjects3.length = 0;
gdjs.RewardCode.GDCombackObjects1.length = 0;
gdjs.RewardCode.GDCombackObjects2.length = 0;
gdjs.RewardCode.GDCombackObjects3.length = 0;
gdjs.RewardCode.GDLoadingObjects1.length = 0;
gdjs.RewardCode.GDLoadingObjects2.length = 0;
gdjs.RewardCode.GDLoadingObjects3.length = 0;
gdjs.RewardCode.GDwhiteObjects1.length = 0;
gdjs.RewardCode.GDwhiteObjects2.length = 0;
gdjs.RewardCode.GDwhiteObjects3.length = 0;
gdjs.RewardCode.GDBackBTNObjects1.length = 0;
gdjs.RewardCode.GDBackBTNObjects2.length = 0;
gdjs.RewardCode.GDBackBTNObjects3.length = 0;

gdjs.RewardCode.eventsList11(runtimeScene);

return;

}

gdjs['RewardCode'] = gdjs.RewardCode;
