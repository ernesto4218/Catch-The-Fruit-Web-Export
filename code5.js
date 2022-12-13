gdjs.InviteCode = {};
gdjs.InviteCode.GDConfirmBTNObjects1= [];
gdjs.InviteCode.GDConfirmBTNObjects2= [];
gdjs.InviteCode.GDConfirmBTNObjects3= [];
gdjs.InviteCode.GDConfirmBTNObjects4= [];
gdjs.InviteCode.GDInviteFrameObjects1= [];
gdjs.InviteCode.GDInviteFrameObjects2= [];
gdjs.InviteCode.GDInviteFrameObjects3= [];
gdjs.InviteCode.GDInviteFrameObjects4= [];
gdjs.InviteCode.GDInvitecodeFrameObjects1= [];
gdjs.InviteCode.GDInvitecodeFrameObjects2= [];
gdjs.InviteCode.GDInvitecodeFrameObjects3= [];
gdjs.InviteCode.GDInvitecodeFrameObjects4= [];
gdjs.InviteCode.GDInputInvitecodeObjects1= [];
gdjs.InviteCode.GDInputInvitecodeObjects2= [];
gdjs.InviteCode.GDInputInvitecodeObjects3= [];
gdjs.InviteCode.GDInputInvitecodeObjects4= [];
gdjs.InviteCode.GDInviteCodeTXTObjects1= [];
gdjs.InviteCode.GDInviteCodeTXTObjects2= [];
gdjs.InviteCode.GDInviteCodeTXTObjects3= [];
gdjs.InviteCode.GDInviteCodeTXTObjects4= [];
gdjs.InviteCode.GDInviteCodeStateTXTObjects1= [];
gdjs.InviteCode.GDInviteCodeStateTXTObjects2= [];
gdjs.InviteCode.GDInviteCodeStateTXTObjects3= [];
gdjs.InviteCode.GDInviteCodeStateTXTObjects4= [];
gdjs.InviteCode.GDStateFrameObjects1= [];
gdjs.InviteCode.GDStateFrameObjects2= [];
gdjs.InviteCode.GDStateFrameObjects3= [];
gdjs.InviteCode.GDStateFrameObjects4= [];
gdjs.InviteCode.GDBlackObjects1= [];
gdjs.InviteCode.GDBlackObjects2= [];
gdjs.InviteCode.GDBlackObjects3= [];
gdjs.InviteCode.GDBlackObjects4= [];
gdjs.InviteCode.GDYourInviteCodeObjects1= [];
gdjs.InviteCode.GDYourInviteCodeObjects2= [];
gdjs.InviteCode.GDYourInviteCodeObjects3= [];
gdjs.InviteCode.GDYourInviteCodeObjects4= [];
gdjs.InviteCode.GDtotalInvitesObjects1= [];
gdjs.InviteCode.GDtotalInvitesObjects2= [];
gdjs.InviteCode.GDtotalInvitesObjects3= [];
gdjs.InviteCode.GDtotalInvitesObjects4= [];
gdjs.InviteCode.GDtotalInvitesValueObjects1= [];
gdjs.InviteCode.GDtotalInvitesValueObjects2= [];
gdjs.InviteCode.GDtotalInvitesValueObjects3= [];
gdjs.InviteCode.GDtotalInvitesValueObjects4= [];
gdjs.InviteCode.GDbackObjects1= [];
gdjs.InviteCode.GDbackObjects2= [];
gdjs.InviteCode.GDbackObjects3= [];
gdjs.InviteCode.GDbackObjects4= [];

gdjs.InviteCode.conditionTrue_0 = {val:false};
gdjs.InviteCode.condition0IsTrue_0 = {val:false};
gdjs.InviteCode.condition1IsTrue_0 = {val:false};
gdjs.InviteCode.condition2IsTrue_0 = {val:false};
gdjs.InviteCode.condition3IsTrue_0 = {val:false};
gdjs.InviteCode.condition4IsTrue_0 = {val:false};
gdjs.InviteCode.conditionTrue_1 = {val:false};
gdjs.InviteCode.condition0IsTrue_1 = {val:false};
gdjs.InviteCode.condition1IsTrue_1 = {val:false};
gdjs.InviteCode.condition2IsTrue_1 = {val:false};
gdjs.InviteCode.condition3IsTrue_1 = {val:false};
gdjs.InviteCode.condition4IsTrue_1 = {val:false};


gdjs.InviteCode.mapOfGDgdjs_46InviteCode_46GDConfirmBTNObjects2Objects = Hashtable.newFrom({"ConfirmBTN": gdjs.InviteCode.GDConfirmBTNObjects2});
gdjs.InviteCode.asyncCallback18472196 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Invite", false);
}}
gdjs.InviteCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.InviteCode.asyncCallback18472196(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.InviteCode.eventsList1 = function(runtimeScene) {

{



}


{

gdjs.copyArray(gdjs.InviteCode.GDInputInvitecodeObjects2, gdjs.InviteCode.GDInputInvitecodeObjects3);


gdjs.InviteCode.condition0IsTrue_0.val = false;
{
gdjs.InviteCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("YourInviteCode")) != (( gdjs.InviteCode.GDInputInvitecodeObjects3.length === 0 ) ? "" :gdjs.InviteCode.GDInputInvitecodeObjects3[0].getString());
}if (gdjs.InviteCode.condition0IsTrue_0.val) {
/* Reuse gdjs.InviteCode.GDInputInvitecodeObjects3 */
gdjs.copyArray(gdjs.InviteCode.GDInviteCodeStateTXTObjects2, gdjs.InviteCode.GDInviteCodeStateTXTObjects3);

{gdjs.evtTools.firebaseTools.firestore.startQuery("InviteCodeExist", "Invites");
}{gdjs.evtTools.firebaseTools.firestore.queryWhere("InviteCodeExist", "InviteCode", "==", (( gdjs.InviteCode.GDInputInvitecodeObjects3.length === 0 ) ? "" :gdjs.InviteCode.GDInputInvitecodeObjects3[0].getString()));
}{gdjs.evtTools.firebaseTools.firestore.executeQuery("InviteCodeExist", runtimeScene.getVariables().get("QueryResult"), runtimeScene.getVariables().get("QueryResultState"));
}{for(var i = 0, len = gdjs.InviteCode.GDInviteCodeStateTXTObjects3.length ;i < len;++i) {
    gdjs.InviteCode.GDInviteCodeStateTXTObjects3[i].setString("Please Wait...");
}
}{for(var i = 0, len = gdjs.InviteCode.GDInviteCodeStateTXTObjects3.length ;i < len;++i) {
    gdjs.InviteCode.GDInviteCodeStateTXTObjects3[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}}

}


{

/* Reuse gdjs.InviteCode.GDInputInvitecodeObjects2 */

gdjs.InviteCode.condition0IsTrue_0.val = false;
{
gdjs.InviteCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("YourInviteCode")) == (( gdjs.InviteCode.GDInputInvitecodeObjects2.length === 0 ) ? "" :gdjs.InviteCode.GDInputInvitecodeObjects2[0].getString());
}if (gdjs.InviteCode.condition0IsTrue_0.val) {
/* Reuse gdjs.InviteCode.GDInviteCodeStateTXTObjects2 */
{for(var i = 0, len = gdjs.InviteCode.GDInviteCodeStateTXTObjects2.length ;i < len;++i) {
    gdjs.InviteCode.GDInviteCodeStateTXTObjects2[i].setString("You cannot use your own invite code");
}
}{for(var i = 0, len = gdjs.InviteCode.GDInviteCodeStateTXTObjects2.length ;i < len;++i) {
    gdjs.InviteCode.GDInviteCodeStateTXTObjects2[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}
{ //Subevents
gdjs.InviteCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.InviteCode.asyncCallback18480636 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Invite", false);
}}
gdjs.InviteCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.InviteCode.asyncCallback18480636(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.InviteCode.asyncCallback18481524 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Invite", false);
}}
gdjs.InviteCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.InviteCode.asyncCallback18481524(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.InviteCode.userFunc0xc531d8 = function(runtimeScene) {
"use strict";
var time_var = runtimeScene.getVariables().get("time_var");
var date_var = runtimeScene.getVariables().get("date_var");
var month_var = runtimeScene.getVariables().get("month_var");
var year_var = runtimeScene.getVariables().get("year_var");


var d = new Date();
var hour = d.getHours();
var min = d.getMinutes();
var sec = d.getSeconds();
var mili = d.getMilliseconds();


if (sec < 10) {
    time_var.setString(hour+":"+min+ ":0"+sec+":" +mili);
}else if (min < 10) {
    time_var.setString(hour+":0"+min+ ":"+sec+":" +mili);
}else {
    time_var.setString(hour+":"+min+ ":"+sec+":" +mili);
}


var date = d.getDate();
date_var.setString(date);

var month = d.getMonth();
    var montharr =["January","February","March","April","May","June","July","August","September","October","November","December"];
    month=montharr[month];
month_var.setString(month);

var year = d.getFullYear();

year_var.setString(year);




};
gdjs.InviteCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("InputInvitecode"), gdjs.InviteCode.GDInputInvitecodeObjects2);

gdjs.InviteCode.condition0IsTrue_0.val = false;
gdjs.InviteCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.InviteCode.GDInputInvitecodeObjects2.length;i<l;++i) {
    if ( gdjs.InviteCode.GDInputInvitecodeObjects2[i].isFocused() ) {
        gdjs.InviteCode.condition0IsTrue_0.val = true;
        gdjs.InviteCode.GDInputInvitecodeObjects2[k] = gdjs.InviteCode.GDInputInvitecodeObjects2[i];
        ++k;
    }
}
gdjs.InviteCode.GDInputInvitecodeObjects2.length = k;}if ( gdjs.InviteCode.condition0IsTrue_0.val ) {
{
{gdjs.InviteCode.conditionTrue_1 = gdjs.InviteCode.condition1IsTrue_0;
gdjs.InviteCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(18466108);
}
}}
if (gdjs.InviteCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("InviteCodeTXT"), gdjs.InviteCode.GDInviteCodeTXTObjects2);
{for(var i = 0, len = gdjs.InviteCode.GDInviteCodeTXTObjects2.length ;i < len;++i) {
    gdjs.InviteCode.GDInviteCodeTXTObjects2[i].setX(-(1000));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ConfirmBTN"), gdjs.InviteCode.GDConfirmBTNObjects2);

gdjs.InviteCode.condition0IsTrue_0.val = false;
gdjs.InviteCode.condition1IsTrue_0.val = false;
gdjs.InviteCode.condition2IsTrue_0.val = false;
gdjs.InviteCode.condition3IsTrue_0.val = false;
{
gdjs.InviteCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.InviteCode.mapOfGDgdjs_46InviteCode_46GDConfirmBTNObjects2Objects, runtimeScene, true, false);
}if ( gdjs.InviteCode.condition0IsTrue_0.val ) {
{
gdjs.InviteCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.InviteCode.condition1IsTrue_0.val ) {
{
gdjs.InviteCode.condition2IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("YourInviteCodeState")) == "ok";
}if ( gdjs.InviteCode.condition2IsTrue_0.val ) {
{
{gdjs.InviteCode.conditionTrue_1 = gdjs.InviteCode.condition3IsTrue_0;
gdjs.InviteCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(18467364);
}
}}
}
}
if (gdjs.InviteCode.condition3IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Black"), gdjs.InviteCode.GDBlackObjects2);
/* Reuse gdjs.InviteCode.GDConfirmBTNObjects2 */
gdjs.copyArray(runtimeScene.getObjects("InputInvitecode"), gdjs.InviteCode.GDInputInvitecodeObjects2);
gdjs.copyArray(runtimeScene.getObjects("InviteCodeStateTXT"), gdjs.InviteCode.GDInviteCodeStateTXTObjects2);
gdjs.copyArray(runtimeScene.getObjects("StateFrame"), gdjs.InviteCode.GDStateFrameObjects2);
{for(var i = 0, len = gdjs.InviteCode.GDInviteCodeStateTXTObjects2.length ;i < len;++i) {
    gdjs.InviteCode.GDInviteCodeStateTXTObjects2[i].setString("Please Wait..");
}
}{for(var i = 0, len = gdjs.InviteCode.GDBlackObjects2.length ;i < len;++i) {
    gdjs.InviteCode.GDBlackObjects2[i].setWidth(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene));
}
}{for(var i = 0, len = gdjs.InviteCode.GDBlackObjects2.length ;i < len;++i) {
    gdjs.InviteCode.GDBlackObjects2[i].setHeight(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene));
}
}{for(var i = 0, len = gdjs.InviteCode.GDBlackObjects2.length ;i < len;++i) {
    gdjs.InviteCode.GDBlackObjects2[i].setOpacity(150);
}
}{for(var i = 0, len = gdjs.InviteCode.GDBlackObjects2.length ;i < len;++i) {
    gdjs.InviteCode.GDBlackObjects2[i].setPosition(0,0);
}
}{for(var i = 0, len = gdjs.InviteCode.GDStateFrameObjects2.length ;i < len;++i) {
    gdjs.InviteCode.GDStateFrameObjects2[i].setOpacity(240);
}
}{for(var i = 0, len = gdjs.InviteCode.GDStateFrameObjects2.length ;i < len;++i) {
    gdjs.InviteCode.GDStateFrameObjects2[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.InviteCode.GDInviteCodeStateTXTObjects2.length ;i < len;++i) {
    gdjs.InviteCode.GDInviteCodeStateTXTObjects2[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.InviteCode.GDInputInvitecodeObjects2.length ;i < len;++i) {
    gdjs.InviteCode.GDInputInvitecodeObjects2[i].setX(-(1000));
}
}{for(var i = 0, len = gdjs.InviteCode.GDConfirmBTNObjects2.length ;i < len;++i) {
    gdjs.InviteCode.GDConfirmBTNObjects2[i].setX(-(1000));
}
}
{ //Subevents
gdjs.InviteCode.eventsList1(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.InviteCode.condition0IsTrue_0.val = false;
gdjs.InviteCode.condition1IsTrue_0.val = false;
{
gdjs.InviteCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("QueryResult").getChild("docs").getChild(0).getChild("exists")) == "true";
}if ( gdjs.InviteCode.condition0IsTrue_0.val ) {
{
{gdjs.InviteCode.conditionTrue_1 = gdjs.InviteCode.condition1IsTrue_0;
gdjs.InviteCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(18473548);
}
}}
if (gdjs.InviteCode.condition1IsTrue_0.val) {
{gdjs.evtTools.firebaseTools.firestore.updateField("Users", gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Invite.Allow", "true", runtimeScene.getVariables().get("AllowInviteState"));
}}

}


{


gdjs.InviteCode.condition0IsTrue_0.val = false;
gdjs.InviteCode.condition1IsTrue_0.val = false;
{
gdjs.InviteCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("AllowInviteState")) == "ok";
}if ( gdjs.InviteCode.condition0IsTrue_0.val ) {
{
{gdjs.InviteCode.conditionTrue_1 = gdjs.InviteCode.condition1IsTrue_0;
gdjs.InviteCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(18473460);
}
}}
if (gdjs.InviteCode.condition1IsTrue_0.val) {
{gdjs.evtTools.firebaseTools.firestore.updateField("Invites", gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("QueryResult").getChild("docs").getChild(0).getChild("id")), "Invited", gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("QueryResult").getChild("docs").getChild(0).getChild("data").getChild("Invited")) + 1), runtimeScene.getVariables().get("UpdateInvitedState"));
}}

}


{



}


{


gdjs.InviteCode.condition0IsTrue_0.val = false;
gdjs.InviteCode.condition1IsTrue_0.val = false;
{
gdjs.InviteCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("UpdateInvitedState")) == "ok";
}if ( gdjs.InviteCode.condition0IsTrue_0.val ) {
{
{gdjs.InviteCode.conditionTrue_1 = gdjs.InviteCode.condition1IsTrue_0;
gdjs.InviteCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(18475964);
}
}}
if (gdjs.InviteCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("InputInvitecode"), gdjs.InviteCode.GDInputInvitecodeObjects2);
gdjs.copyArray(runtimeScene.getObjects("InviteCodeStateTXT"), gdjs.InviteCode.GDInviteCodeStateTXTObjects2);
{gdjs.evtTools.firebaseTools.firestore.updateField("Users", gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Invite.EnterInviteCode", (( gdjs.InviteCode.GDInputInvitecodeObjects2.length === 0 ) ? "" :gdjs.InviteCode.GDInputInvitecodeObjects2[0].getString()), runtimeScene.getVariables().get("UpdateInvitedRecordState3"));
}{gdjs.evtTools.firebaseTools.firestore.updateField("Users", gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Invite.ID", gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("QueryResult").getChild("docs").getChild(0).getChild("id")), runtimeScene.getVariables().get("UpdateInvitedRecordState4"));
}{for(var i = 0, len = gdjs.InviteCode.GDInviteCodeStateTXTObjects2.length ;i < len;++i) {
    gdjs.InviteCode.GDInviteCodeStateTXTObjects2[i].setString("Please Wait....");
}
}{for(var i = 0, len = gdjs.InviteCode.GDInviteCodeStateTXTObjects2.length ;i < len;++i) {
    gdjs.InviteCode.GDInviteCodeStateTXTObjects2[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}}

}


{



}


{


gdjs.InviteCode.condition0IsTrue_0.val = false;
gdjs.InviteCode.condition1IsTrue_0.val = false;
gdjs.InviteCode.condition2IsTrue_0.val = false;
{
gdjs.InviteCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("UpdateInvitedRecordState3")) == "ok";
}if ( gdjs.InviteCode.condition0IsTrue_0.val ) {
{
gdjs.InviteCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("UpdateInvitedRecordState4")) == "ok";
}if ( gdjs.InviteCode.condition1IsTrue_0.val ) {
{
{gdjs.InviteCode.conditionTrue_1 = gdjs.InviteCode.condition2IsTrue_0;
gdjs.InviteCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(18478292);
}
}}
}
if (gdjs.InviteCode.condition2IsTrue_0.val) {
{gdjs.evtTools.firebaseTools.database.getVariable("Users/" + gdjs.evtTools.firebaseTools.auth.userManagement.getUID() + "/Coins", runtimeScene.getVariables().get("GetCoins"), runtimeScene.getVariables().get("GetCoinsState"));
}}

}


{



}


{


gdjs.InviteCode.condition0IsTrue_0.val = false;
gdjs.InviteCode.condition1IsTrue_0.val = false;
{
gdjs.InviteCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("GetCoinsState")) == "ok";
}if ( gdjs.InviteCode.condition0IsTrue_0.val ) {
{
{gdjs.InviteCode.conditionTrue_1 = gdjs.InviteCode.condition1IsTrue_0;
gdjs.InviteCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(18479604);
}
}}
if (gdjs.InviteCode.condition1IsTrue_0.val) {
{gdjs.evtTools.firebaseTools.database.updateField("Users/" + gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Coins", gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("GetCoins")) + 1000), runtimeScene.getVariables().get("UpdateCoinState"));
}}

}


{


gdjs.InviteCode.condition0IsTrue_0.val = false;
{
gdjs.InviteCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("UpdateCoinState")) == "ok";
}if (gdjs.InviteCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("InviteCodeStateTXT"), gdjs.InviteCode.GDInviteCodeStateTXTObjects2);
{for(var i = 0, len = gdjs.InviteCode.GDInviteCodeStateTXTObjects2.length ;i < len;++i) {
    gdjs.InviteCode.GDInviteCodeStateTXTObjects2[i].setString("Invite success!");
}
}{for(var i = 0, len = gdjs.InviteCode.GDInviteCodeStateTXTObjects2.length ;i < len;++i) {
    gdjs.InviteCode.GDInviteCodeStateTXTObjects2[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}
{ //Subevents
gdjs.InviteCode.eventsList2(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.InviteCode.condition0IsTrue_0.val = false;
gdjs.InviteCode.condition1IsTrue_0.val = false;
gdjs.InviteCode.condition2IsTrue_0.val = false;
{
gdjs.InviteCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("QueryResult").getChild("docs").getChild(0).getChild("exists")) == "0";
}if ( gdjs.InviteCode.condition0IsTrue_0.val ) {
{
gdjs.InviteCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("QueryResultState")) == "ok";
}if ( gdjs.InviteCode.condition1IsTrue_0.val ) {
{
{gdjs.InviteCode.conditionTrue_1 = gdjs.InviteCode.condition2IsTrue_0;
gdjs.InviteCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(18481876);
}
}}
}
if (gdjs.InviteCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("InviteCodeStateTXT"), gdjs.InviteCode.GDInviteCodeStateTXTObjects2);
{for(var i = 0, len = gdjs.InviteCode.GDInviteCodeStateTXTObjects2.length ;i < len;++i) {
    gdjs.InviteCode.GDInviteCodeStateTXTObjects2[i].setString("Invite code does not exists");
}
}{for(var i = 0, len = gdjs.InviteCode.GDInviteCodeStateTXTObjects2.length ;i < len;++i) {
    gdjs.InviteCode.GDInviteCodeStateTXTObjects2[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}
{ //Subevents
gdjs.InviteCode.eventsList3(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.InviteCode.userFunc0xc531d8(runtimeScene);

}


};gdjs.InviteCode.eventsList5 = function(runtimeScene) {

{


gdjs.InviteCode.eventsList4(runtimeScene);
}


};gdjs.InviteCode.mapOfGDgdjs_46InviteCode_46GDbackObjects1Objects = Hashtable.newFrom({"back": gdjs.InviteCode.GDbackObjects1});
gdjs.InviteCode.eventsList6 = function(runtimeScene) {

{


gdjs.InviteCode.condition0IsTrue_0.val = false;
gdjs.InviteCode.condition1IsTrue_0.val = false;
{
gdjs.InviteCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
}if ( gdjs.InviteCode.condition0IsTrue_0.val ) {
{
{gdjs.InviteCode.conditionTrue_1 = gdjs.InviteCode.condition1IsTrue_0;
gdjs.InviteCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(18460276);
}
}}
if (gdjs.InviteCode.condition1IsTrue_0.val) {
{gdjs.evtTools.firebaseTools.auth.signInWithEmail("user@gmail.com", "password", runtimeScene.getVariables().get("SignInState"));
}}

}


{


{
{runtimeScene.getVariables().get("WriteInviteLogs").getChild("Data").getChild("Text").setString("A friend used your invite code");
}{runtimeScene.getVariables().get("WriteInviteLogs").getChild("Data").getChild("Date").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("month_var")) + "/" + gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("date_var")) + "/" + gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("year_var")) + " " + gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("time_var")));
}{runtimeScene.getVariables().get("WriteInviteLogs").getChild("Data").getChild("Number").setString(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("QueryResult").getChild("docs").getChild(0).getChild("data").getChild("Invited")) + 1));
}}

}


{


gdjs.InviteCode.condition0IsTrue_0.val = false;
{
{gdjs.InviteCode.conditionTrue_1 = gdjs.InviteCode.condition0IsTrue_0;
gdjs.InviteCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(18462420);
}
}if (gdjs.InviteCode.condition0IsTrue_0.val) {
{gdjs.evtTools.firebaseTools.firestore.getField("Invites", gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "InviteCode", runtimeScene.getVariables().get("YourInviteCode"), runtimeScene.getVariables().get("YourInviteCodeState"));
}{gdjs.evtTools.firebaseTools.firestore.getField("Invites", gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Invited", runtimeScene.getVariables().get("TotalInvited"), runtimeScene.getVariables().get("TotalInviteState"));
}{gdjs.evtTools.firebaseTools.firestore.getField("Users", gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Invite.EnterInviteCode", runtimeScene.getVariables().get("HaveInvitedCode"), runtimeScene.getVariables().get("HaveInvitedCodeState"));
}{runtimeScene.getVariables().get("WriteInviteLogs").getChild("Data").getChild("ID").setString(gdjs.evtTools.firebaseTools.auth.userManagement.getUID());
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("YourInviteCode"), gdjs.InviteCode.GDYourInviteCodeObjects1);
gdjs.copyArray(runtimeScene.getObjects("totalInvitesValue"), gdjs.InviteCode.GDtotalInvitesValueObjects1);
{for(var i = 0, len = gdjs.InviteCode.GDYourInviteCodeObjects1.length ;i < len;++i) {
    gdjs.InviteCode.GDYourInviteCodeObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("YourInviteCode")));
}
}{for(var i = 0, len = gdjs.InviteCode.GDtotalInvitesValueObjects1.length ;i < len;++i) {
    gdjs.InviteCode.GDtotalInvitesValueObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("TotalInvited")));
}
}}

}


{


gdjs.InviteCode.condition0IsTrue_0.val = false;
{
gdjs.InviteCode.condition0IsTrue_0.val = !(gdjs.evtsExt__InternetConnectivity__IsDeviceOnline.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}if (gdjs.InviteCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Offline", false);
}}

}


{


gdjs.InviteCode.condition0IsTrue_0.val = false;
{
gdjs.InviteCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("HaveInvitedCode")) == "0";
}if (gdjs.InviteCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setGameResolutionSize(runtimeScene, 720, 1280);
}{gdjs.evtTools.window.setGameResolutionResizeMode(runtimeScene, "adaptHeight");
}
{ //Subevents
gdjs.InviteCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


gdjs.InviteCode.condition0IsTrue_0.val = false;
gdjs.InviteCode.condition1IsTrue_0.val = false;
{
gdjs.InviteCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("HaveInvitedCode")) != "0";
}if ( gdjs.InviteCode.condition0IsTrue_0.val ) {
{
{gdjs.InviteCode.conditionTrue_1 = gdjs.InviteCode.condition1IsTrue_0;
gdjs.InviteCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(18483508);
}
}}
if (gdjs.InviteCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("InputInvitecode"), gdjs.InviteCode.GDInputInvitecodeObjects1);
gdjs.copyArray(runtimeScene.getObjects("InviteCodeStateTXT"), gdjs.InviteCode.GDInviteCodeStateTXTObjects1);
gdjs.copyArray(runtimeScene.getObjects("InviteCodeTXT"), gdjs.InviteCode.GDInviteCodeTXTObjects1);
{for(var i = 0, len = gdjs.InviteCode.GDInputInvitecodeObjects1.length ;i < len;++i) {
    gdjs.InviteCode.GDInputInvitecodeObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("HaveInvitedCode")));
}
}{for(var i = 0, len = gdjs.InviteCode.GDInviteCodeTXTObjects1.length ;i < len;++i) {
    gdjs.InviteCode.GDInviteCodeTXTObjects1[i].setX(-(1000));
}
}{for(var i = 0, len = gdjs.InviteCode.GDInviteCodeStateTXTObjects1.length ;i < len;++i) {
    gdjs.InviteCode.GDInviteCodeStateTXTObjects1[i].setX(-(1000));
}
}{for(var i = 0, len = gdjs.InviteCode.GDInputInvitecodeObjects1.length ;i < len;++i) {
    gdjs.InviteCode.GDInputInvitecodeObjects1[i].setDisabled(true);
}
}{gdjs.evtTools.window.setGameResolutionResizeMode(runtimeScene, "");
}{gdjs.evtTools.window.setGameResolutionSize(runtimeScene, 720, 1280);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("back"), gdjs.InviteCode.GDbackObjects1);

gdjs.InviteCode.condition0IsTrue_0.val = false;
gdjs.InviteCode.condition1IsTrue_0.val = false;
gdjs.InviteCode.condition2IsTrue_0.val = false;
{
gdjs.InviteCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.InviteCode.mapOfGDgdjs_46InviteCode_46GDbackObjects1Objects, runtimeScene, true, false);
}if ( gdjs.InviteCode.condition0IsTrue_0.val ) {
{
gdjs.InviteCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.InviteCode.condition1IsTrue_0.val ) {
{
{gdjs.InviteCode.conditionTrue_1 = gdjs.InviteCode.condition2IsTrue_0;
gdjs.InviteCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(18485828);
}
}}
}
if (gdjs.InviteCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


};

gdjs.InviteCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.InviteCode.GDConfirmBTNObjects1.length = 0;
gdjs.InviteCode.GDConfirmBTNObjects2.length = 0;
gdjs.InviteCode.GDConfirmBTNObjects3.length = 0;
gdjs.InviteCode.GDConfirmBTNObjects4.length = 0;
gdjs.InviteCode.GDInviteFrameObjects1.length = 0;
gdjs.InviteCode.GDInviteFrameObjects2.length = 0;
gdjs.InviteCode.GDInviteFrameObjects3.length = 0;
gdjs.InviteCode.GDInviteFrameObjects4.length = 0;
gdjs.InviteCode.GDInvitecodeFrameObjects1.length = 0;
gdjs.InviteCode.GDInvitecodeFrameObjects2.length = 0;
gdjs.InviteCode.GDInvitecodeFrameObjects3.length = 0;
gdjs.InviteCode.GDInvitecodeFrameObjects4.length = 0;
gdjs.InviteCode.GDInputInvitecodeObjects1.length = 0;
gdjs.InviteCode.GDInputInvitecodeObjects2.length = 0;
gdjs.InviteCode.GDInputInvitecodeObjects3.length = 0;
gdjs.InviteCode.GDInputInvitecodeObjects4.length = 0;
gdjs.InviteCode.GDInviteCodeTXTObjects1.length = 0;
gdjs.InviteCode.GDInviteCodeTXTObjects2.length = 0;
gdjs.InviteCode.GDInviteCodeTXTObjects3.length = 0;
gdjs.InviteCode.GDInviteCodeTXTObjects4.length = 0;
gdjs.InviteCode.GDInviteCodeStateTXTObjects1.length = 0;
gdjs.InviteCode.GDInviteCodeStateTXTObjects2.length = 0;
gdjs.InviteCode.GDInviteCodeStateTXTObjects3.length = 0;
gdjs.InviteCode.GDInviteCodeStateTXTObjects4.length = 0;
gdjs.InviteCode.GDStateFrameObjects1.length = 0;
gdjs.InviteCode.GDStateFrameObjects2.length = 0;
gdjs.InviteCode.GDStateFrameObjects3.length = 0;
gdjs.InviteCode.GDStateFrameObjects4.length = 0;
gdjs.InviteCode.GDBlackObjects1.length = 0;
gdjs.InviteCode.GDBlackObjects2.length = 0;
gdjs.InviteCode.GDBlackObjects3.length = 0;
gdjs.InviteCode.GDBlackObjects4.length = 0;
gdjs.InviteCode.GDYourInviteCodeObjects1.length = 0;
gdjs.InviteCode.GDYourInviteCodeObjects2.length = 0;
gdjs.InviteCode.GDYourInviteCodeObjects3.length = 0;
gdjs.InviteCode.GDYourInviteCodeObjects4.length = 0;
gdjs.InviteCode.GDtotalInvitesObjects1.length = 0;
gdjs.InviteCode.GDtotalInvitesObjects2.length = 0;
gdjs.InviteCode.GDtotalInvitesObjects3.length = 0;
gdjs.InviteCode.GDtotalInvitesObjects4.length = 0;
gdjs.InviteCode.GDtotalInvitesValueObjects1.length = 0;
gdjs.InviteCode.GDtotalInvitesValueObjects2.length = 0;
gdjs.InviteCode.GDtotalInvitesValueObjects3.length = 0;
gdjs.InviteCode.GDtotalInvitesValueObjects4.length = 0;
gdjs.InviteCode.GDbackObjects1.length = 0;
gdjs.InviteCode.GDbackObjects2.length = 0;
gdjs.InviteCode.GDbackObjects3.length = 0;
gdjs.InviteCode.GDbackObjects4.length = 0;

gdjs.InviteCode.eventsList6(runtimeScene);

return;

}

gdjs['InviteCode'] = gdjs.InviteCode;
