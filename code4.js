gdjs.DashboardCode = {};
gdjs.DashboardCode.GDBGObjects1= [];
gdjs.DashboardCode.GDBGObjects2= [];
gdjs.DashboardCode.GDBGObjects3= [];
gdjs.DashboardCode.GDBGObjects4= [];
gdjs.DashboardCode.GDInviteBTNObjects1= [];
gdjs.DashboardCode.GDInviteBTNObjects2= [];
gdjs.DashboardCode.GDInviteBTNObjects3= [];
gdjs.DashboardCode.GDInviteBTNObjects4= [];
gdjs.DashboardCode.GDCashoutBTNObjects1= [];
gdjs.DashboardCode.GDCashoutBTNObjects2= [];
gdjs.DashboardCode.GDCashoutBTNObjects3= [];
gdjs.DashboardCode.GDCashoutBTNObjects4= [];
gdjs.DashboardCode.GDRewardBTNObjects1= [];
gdjs.DashboardCode.GDRewardBTNObjects2= [];
gdjs.DashboardCode.GDRewardBTNObjects3= [];
gdjs.DashboardCode.GDRewardBTNObjects4= [];
gdjs.DashboardCode.GDProfileBTNObjects1= [];
gdjs.DashboardCode.GDProfileBTNObjects2= [];
gdjs.DashboardCode.GDProfileBTNObjects3= [];
gdjs.DashboardCode.GDProfileBTNObjects4= [];
gdjs.DashboardCode.GDCoinsTXTObjects1= [];
gdjs.DashboardCode.GDCoinsTXTObjects2= [];
gdjs.DashboardCode.GDCoinsTXTObjects3= [];
gdjs.DashboardCode.GDCoinsTXTObjects4= [];
gdjs.DashboardCode.GDPesosTXTObjects1= [];
gdjs.DashboardCode.GDPesosTXTObjects2= [];
gdjs.DashboardCode.GDPesosTXTObjects3= [];
gdjs.DashboardCode.GDPesosTXTObjects4= [];
gdjs.DashboardCode.GDPesosVarObjects1= [];
gdjs.DashboardCode.GDPesosVarObjects2= [];
gdjs.DashboardCode.GDPesosVarObjects3= [];
gdjs.DashboardCode.GDPesosVarObjects4= [];
gdjs.DashboardCode.GDHelloObjects1= [];
gdjs.DashboardCode.GDHelloObjects2= [];
gdjs.DashboardCode.GDHelloObjects3= [];
gdjs.DashboardCode.GDHelloObjects4= [];
gdjs.DashboardCode.GDGameTXTObjects1= [];
gdjs.DashboardCode.GDGameTXTObjects2= [];
gdjs.DashboardCode.GDGameTXTObjects3= [];
gdjs.DashboardCode.GDGameTXTObjects4= [];
gdjs.DashboardCode.GDActivityTXTObjects1= [];
gdjs.DashboardCode.GDActivityTXTObjects2= [];
gdjs.DashboardCode.GDActivityTXTObjects3= [];
gdjs.DashboardCode.GDActivityTXTObjects4= [];
gdjs.DashboardCode.GDActivitiesObjects1= [];
gdjs.DashboardCode.GDActivitiesObjects2= [];
gdjs.DashboardCode.GDActivitiesObjects3= [];
gdjs.DashboardCode.GDActivitiesObjects4= [];
gdjs.DashboardCode.GDLevelTxtObjects1= [];
gdjs.DashboardCode.GDLevelTxtObjects2= [];
gdjs.DashboardCode.GDLevelTxtObjects3= [];
gdjs.DashboardCode.GDLevelTxtObjects4= [];
gdjs.DashboardCode.GDwhiteObjects1= [];
gdjs.DashboardCode.GDwhiteObjects2= [];
gdjs.DashboardCode.GDwhiteObjects3= [];
gdjs.DashboardCode.GDwhiteObjects4= [];
gdjs.DashboardCode.GDBackObjects1= [];
gdjs.DashboardCode.GDBackObjects2= [];
gdjs.DashboardCode.GDBackObjects3= [];
gdjs.DashboardCode.GDBackObjects4= [];
gdjs.DashboardCode.GDProfilePicObjects1= [];
gdjs.DashboardCode.GDProfilePicObjects2= [];
gdjs.DashboardCode.GDProfilePicObjects3= [];
gdjs.DashboardCode.GDProfilePicObjects4= [];
gdjs.DashboardCode.GDGameFrameObjects1= [];
gdjs.DashboardCode.GDGameFrameObjects2= [];
gdjs.DashboardCode.GDGameFrameObjects3= [];
gdjs.DashboardCode.GDGameFrameObjects4= [];
gdjs.DashboardCode.GDGameBTNObjects1= [];
gdjs.DashboardCode.GDGameBTNObjects2= [];
gdjs.DashboardCode.GDGameBTNObjects3= [];
gdjs.DashboardCode.GDGameBTNObjects4= [];
gdjs.DashboardCode.GDLevelBarObjects1= [];
gdjs.DashboardCode.GDLevelBarObjects2= [];
gdjs.DashboardCode.GDLevelBarObjects3= [];
gdjs.DashboardCode.GDLevelBarObjects4= [];

gdjs.DashboardCode.conditionTrue_0 = {val:false};
gdjs.DashboardCode.condition0IsTrue_0 = {val:false};
gdjs.DashboardCode.condition1IsTrue_0 = {val:false};
gdjs.DashboardCode.condition2IsTrue_0 = {val:false};
gdjs.DashboardCode.condition3IsTrue_0 = {val:false};
gdjs.DashboardCode.conditionTrue_1 = {val:false};
gdjs.DashboardCode.condition0IsTrue_1 = {val:false};
gdjs.DashboardCode.condition1IsTrue_1 = {val:false};
gdjs.DashboardCode.condition2IsTrue_1 = {val:false};
gdjs.DashboardCode.condition3IsTrue_1 = {val:false};


gdjs.DashboardCode.eventsList0 = function(runtimeScene) {

{


gdjs.DashboardCode.condition0IsTrue_0.val = false;
{
gdjs.DashboardCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Coins")) < 1000;
}if (gdjs.DashboardCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("CoinsTXT"), gdjs.DashboardCode.GDCoinsTXTObjects3);
{for(var i = 0, len = gdjs.DashboardCode.GDCoinsTXTObjects3.length ;i < len;++i) {
    gdjs.DashboardCode.GDCoinsTXTObjects3[i].setString("= " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Coins"))) + " Coins");
}
}}

}


{


gdjs.DashboardCode.condition0IsTrue_0.val = false;
gdjs.DashboardCode.condition1IsTrue_0.val = false;
{
gdjs.DashboardCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Coins")) >= 1000;
}if ( gdjs.DashboardCode.condition0IsTrue_0.val ) {
{
gdjs.DashboardCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Coins")) < 10000;
}}
if (gdjs.DashboardCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("CoinsTXT"), gdjs.DashboardCode.GDCoinsTXTObjects3);
{for(var i = 0, len = gdjs.DashboardCode.GDCoinsTXTObjects3.length ;i < len;++i) {
    gdjs.DashboardCode.GDCoinsTXTObjects3[i].setString("= " + gdjs.evtTools.string.subStr(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Coins"))), 0, 1) + "," + gdjs.evtTools.string.subStr(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Coins"))), 1, 3) + " Coins");
}
}}

}


{


gdjs.DashboardCode.condition0IsTrue_0.val = false;
gdjs.DashboardCode.condition1IsTrue_0.val = false;
{
gdjs.DashboardCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Coins")) >= 10000;
}if ( gdjs.DashboardCode.condition0IsTrue_0.val ) {
{
gdjs.DashboardCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Coins")) < 100000;
}}
if (gdjs.DashboardCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("CoinsTXT"), gdjs.DashboardCode.GDCoinsTXTObjects3);
{for(var i = 0, len = gdjs.DashboardCode.GDCoinsTXTObjects3.length ;i < len;++i) {
    gdjs.DashboardCode.GDCoinsTXTObjects3[i].setString("= " + gdjs.evtTools.string.subStr(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Coins"))), 0, 2) + "," + gdjs.evtTools.string.subStr(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Coins"))), 2, 3) + " Coins");
}
}}

}


{


gdjs.DashboardCode.condition0IsTrue_0.val = false;
gdjs.DashboardCode.condition1IsTrue_0.val = false;
{
gdjs.DashboardCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Coins")) >= 100000;
}if ( gdjs.DashboardCode.condition0IsTrue_0.val ) {
{
gdjs.DashboardCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Coins")) < 1000000;
}}
if (gdjs.DashboardCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("CoinsTXT"), gdjs.DashboardCode.GDCoinsTXTObjects3);
{for(var i = 0, len = gdjs.DashboardCode.GDCoinsTXTObjects3.length ;i < len;++i) {
    gdjs.DashboardCode.GDCoinsTXTObjects3[i].setString("= " + gdjs.evtTools.string.subStr(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Coins"))), 0, 3) + "," + gdjs.evtTools.string.subStr(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Coins"))), 3, 6) + " Coins");
}
}}

}


{


gdjs.DashboardCode.condition0IsTrue_0.val = false;
{
gdjs.DashboardCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Coins")) >= 1000000;
}if (gdjs.DashboardCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("CoinsTXT"), gdjs.DashboardCode.GDCoinsTXTObjects2);
{for(var i = 0, len = gdjs.DashboardCode.GDCoinsTXTObjects2.length ;i < len;++i) {
    gdjs.DashboardCode.GDCoinsTXTObjects2[i].setString("= " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Coins")) / 1000000) + "M Coins");
}
}}

}


};gdjs.DashboardCode.eventsList1 = function(runtimeScene) {

{


gdjs.DashboardCode.condition0IsTrue_0.val = false;
{
gdjs.DashboardCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.DashboardCode.condition0IsTrue_0.val) {
{gdjs.evtTools.firebaseTools.database.getField("Users/" + gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Coins", runtimeScene.getVariables().get("Coins"), runtimeScene.getVariables().get("CoinsState"));
}{gdjs.evtTools.firebaseTools.database.getField("Users/" + gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Experiences", runtimeScene.getVariables().get("Experiences"), runtimeScene.getVariables().get("ExperiencesState"));
}{gdjs.evtTools.window.setGameResolutionResizeMode(runtimeScene, "");
}{gdjs.evtTools.window.setGameResolutionSize(runtimeScene, 720, 1280);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("LevelBar"), gdjs.DashboardCode.GDLevelBarObjects2);
gdjs.copyArray(runtimeScene.getObjects("LevelTxt"), gdjs.DashboardCode.GDLevelTxtObjects2);
gdjs.copyArray(runtimeScene.getObjects("PesosVar"), gdjs.DashboardCode.GDPesosVarObjects2);
{runtimeScene.getVariables().get("Pesos").setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Coins")) * 0.001);
}{for(var i = 0, len = gdjs.DashboardCode.GDPesosVarObjects2.length ;i < len;++i) {
    gdjs.DashboardCode.GDPesosVarObjects2[i].setString("₱" + gdjs.evtTools.string.subStr(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("Pesos")), 0, 4));
}
}{for(var i = 0, len = gdjs.DashboardCode.GDLevelTxtObjects2.length ;i < len;++i) {
    gdjs.DashboardCode.GDLevelTxtObjects2[i].setString("Level " + gdjs.evtTools.common.toString(gdjs.evtTools.common.trunc(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Experiences")) / 100)));
}
}{for(var i = 0, len = gdjs.DashboardCode.GDLevelTxtObjects2.length ;i < len;++i) {
    gdjs.DashboardCode.GDLevelTxtObjects2[i].setCenterPositionInScene((( gdjs.DashboardCode.GDLevelBarObjects2.length === 0 ) ? 0 :gdjs.DashboardCode.GDLevelBarObjects2[0].getCenterXInScene()),(( gdjs.DashboardCode.GDLevelBarObjects2.length === 0 ) ? 0 :gdjs.DashboardCode.GDLevelBarObjects2[0].getCenterYInScene()));
}
}{for(var i = 0, len = gdjs.DashboardCode.GDLevelTxtObjects2.length ;i < len;++i) {
    gdjs.DashboardCode.GDLevelTxtObjects2[i].setTextAlignment("center");
}
}}

}


{


gdjs.DashboardCode.eventsList0(runtimeScene);
}


{


gdjs.DashboardCode.condition0IsTrue_0.val = false;
{
{gdjs.DashboardCode.conditionTrue_1 = gdjs.DashboardCode.condition0IsTrue_0;
gdjs.DashboardCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(18433564);
}
}if (gdjs.DashboardCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Hello"), gdjs.DashboardCode.GDHelloObjects1);
{for(var i = 0, len = gdjs.DashboardCode.GDHelloObjects1.length ;i < len;++i) {
    gdjs.DashboardCode.GDHelloObjects1[i].setString("Hello, " + gdjs.evtTools.string.newLine() + gdjs.evtTools.firebaseTools.auth.userManagement.getDisplayName());
}
}}

}


};gdjs.DashboardCode.mapOfGDgdjs_46DashboardCode_46GDInviteBTNObjects1Objects = Hashtable.newFrom({"InviteBTN": gdjs.DashboardCode.GDInviteBTNObjects1});
gdjs.DashboardCode.asyncCallback18435276 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Invite");
}}
gdjs.DashboardCode.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.DashboardCode.asyncCallback18435276(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.DashboardCode.asyncCallback18434980 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("InviteBTN"), gdjs.DashboardCode.GDInviteBTNObjects2);

{for(var i = 0, len = gdjs.DashboardCode.GDInviteBTNObjects2.length ;i < len;++i) {
    gdjs.DashboardCode.GDInviteBTNObjects2[i].getBehavior("Tween").addObjectScaleTween("click", 1, 1, "bouncePast", 200, false, true);
}
}
{ //Subevents
gdjs.DashboardCode.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.DashboardCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.DashboardCode.GDInviteBTNObjects1) asyncObjectsList.addObject("InviteBTN", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.DashboardCode.asyncCallback18434980(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.DashboardCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("InviteBTN"), gdjs.DashboardCode.GDInviteBTNObjects1);

gdjs.DashboardCode.condition0IsTrue_0.val = false;
gdjs.DashboardCode.condition1IsTrue_0.val = false;
gdjs.DashboardCode.condition2IsTrue_0.val = false;
{
gdjs.DashboardCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.DashboardCode.mapOfGDgdjs_46DashboardCode_46GDInviteBTNObjects1Objects, runtimeScene, true, false);
}if ( gdjs.DashboardCode.condition0IsTrue_0.val ) {
{
gdjs.DashboardCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.DashboardCode.condition1IsTrue_0.val ) {
{
{gdjs.DashboardCode.conditionTrue_1 = gdjs.DashboardCode.condition2IsTrue_0;
gdjs.DashboardCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(18434828);
}
}}
}
if (gdjs.DashboardCode.condition2IsTrue_0.val) {
/* Reuse gdjs.DashboardCode.GDInviteBTNObjects1 */
{for(var i = 0, len = gdjs.DashboardCode.GDInviteBTNObjects1.length ;i < len;++i) {
    gdjs.DashboardCode.GDInviteBTNObjects1[i].getBehavior("Tween").addObjectScaleTween("click", 0.9, 0.9, "bouncePast", 200, false, true);
}
}
{ //Subevents
gdjs.DashboardCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.DashboardCode.mapOfGDgdjs_46DashboardCode_46GDCashoutBTNObjects1Objects = Hashtable.newFrom({"CashoutBTN": gdjs.DashboardCode.GDCashoutBTNObjects1});
gdjs.DashboardCode.asyncCallback18437652 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Withdraw");
}}
gdjs.DashboardCode.eventsList5 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.DashboardCode.asyncCallback18437652(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.DashboardCode.asyncCallback18437396 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("CashoutBTN"), gdjs.DashboardCode.GDCashoutBTNObjects2);

{for(var i = 0, len = gdjs.DashboardCode.GDCashoutBTNObjects2.length ;i < len;++i) {
    gdjs.DashboardCode.GDCashoutBTNObjects2[i].getBehavior("Tween").addObjectScaleTween("click", 1, 1, "bouncePast", 200, false, true);
}
}
{ //Subevents
gdjs.DashboardCode.eventsList5(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.DashboardCode.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.DashboardCode.GDCashoutBTNObjects1) asyncObjectsList.addObject("CashoutBTN", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.DashboardCode.asyncCallback18437396(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.DashboardCode.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("CashoutBTN"), gdjs.DashboardCode.GDCashoutBTNObjects1);

gdjs.DashboardCode.condition0IsTrue_0.val = false;
gdjs.DashboardCode.condition1IsTrue_0.val = false;
gdjs.DashboardCode.condition2IsTrue_0.val = false;
{
gdjs.DashboardCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.DashboardCode.mapOfGDgdjs_46DashboardCode_46GDCashoutBTNObjects1Objects, runtimeScene, true, false);
}if ( gdjs.DashboardCode.condition0IsTrue_0.val ) {
{
gdjs.DashboardCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.DashboardCode.condition1IsTrue_0.val ) {
{
{gdjs.DashboardCode.conditionTrue_1 = gdjs.DashboardCode.condition2IsTrue_0;
gdjs.DashboardCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(18436924);
}
}}
}
if (gdjs.DashboardCode.condition2IsTrue_0.val) {
/* Reuse gdjs.DashboardCode.GDCashoutBTNObjects1 */
{runtimeScene.getGame().getVariables().get("Balance").setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Coins")) * 0.001);
}{for(var i = 0, len = gdjs.DashboardCode.GDCashoutBTNObjects1.length ;i < len;++i) {
    gdjs.DashboardCode.GDCashoutBTNObjects1[i].getBehavior("Tween").addObjectScaleTween("click", 0.9, 0.9, "bouncePast", 200, false, true);
}
}
{ //Subevents
gdjs.DashboardCode.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs.DashboardCode.mapOfGDgdjs_46DashboardCode_46GDRewardBTNObjects1Objects = Hashtable.newFrom({"RewardBTN": gdjs.DashboardCode.GDRewardBTNObjects1});
gdjs.DashboardCode.asyncCallback18438796 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Reward");
}}
gdjs.DashboardCode.eventsList8 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.DashboardCode.asyncCallback18438796(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.DashboardCode.asyncCallback18438724 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("RewardBTN"), gdjs.DashboardCode.GDRewardBTNObjects2);

{for(var i = 0, len = gdjs.DashboardCode.GDRewardBTNObjects2.length ;i < len;++i) {
    gdjs.DashboardCode.GDRewardBTNObjects2[i].getBehavior("Tween").addObjectScaleTween("click", 1, 1, "bouncePast", 200, false, true);
}
}
{ //Subevents
gdjs.DashboardCode.eventsList8(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.DashboardCode.eventsList9 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.DashboardCode.GDRewardBTNObjects1) asyncObjectsList.addObject("RewardBTN", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.DashboardCode.asyncCallback18438724(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.DashboardCode.eventsList10 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("RewardBTN"), gdjs.DashboardCode.GDRewardBTNObjects1);

gdjs.DashboardCode.condition0IsTrue_0.val = false;
gdjs.DashboardCode.condition1IsTrue_0.val = false;
gdjs.DashboardCode.condition2IsTrue_0.val = false;
{
gdjs.DashboardCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.DashboardCode.mapOfGDgdjs_46DashboardCode_46GDRewardBTNObjects1Objects, runtimeScene, true, false);
}if ( gdjs.DashboardCode.condition0IsTrue_0.val ) {
{
gdjs.DashboardCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.DashboardCode.condition1IsTrue_0.val ) {
{
{gdjs.DashboardCode.conditionTrue_1 = gdjs.DashboardCode.condition2IsTrue_0;
gdjs.DashboardCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(18436380);
}
}}
}
if (gdjs.DashboardCode.condition2IsTrue_0.val) {
/* Reuse gdjs.DashboardCode.GDRewardBTNObjects1 */
{for(var i = 0, len = gdjs.DashboardCode.GDRewardBTNObjects1.length ;i < len;++i) {
    gdjs.DashboardCode.GDRewardBTNObjects1[i].getBehavior("Tween").addObjectScaleTween("click", 0.9, 0.9, "bouncePast", 200, false, true);
}
}
{ //Subevents
gdjs.DashboardCode.eventsList9(runtimeScene);} //End of subevents
}

}


};gdjs.DashboardCode.mapOfGDgdjs_46DashboardCode_46GDBackObjects1Objects = Hashtable.newFrom({"Back": gdjs.DashboardCode.GDBackObjects1});
gdjs.DashboardCode.mapOfGDgdjs_46DashboardCode_46GDProfilePicObjects1Objects = Hashtable.newFrom({"ProfilePic": gdjs.DashboardCode.GDProfilePicObjects1});
gdjs.DashboardCode.eventsList11 = function(runtimeScene) {

{


gdjs.DashboardCode.condition0IsTrue_0.val = false;
{
{gdjs.DashboardCode.conditionTrue_1 = gdjs.DashboardCode.condition0IsTrue_0;
gdjs.DashboardCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(18442684);
}
}if (gdjs.DashboardCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ProfilePic"), gdjs.DashboardCode.GDProfilePicObjects1);
{gdjs.evtsExt__LoadImageFromURL__LoadURLIntoSprite.func(runtimeScene, gdjs.evtTools.firebaseTools.auth.userManagement.getPhotoURL(), gdjs.DashboardCode.mapOfGDgdjs_46DashboardCode_46GDProfilePicObjects1Objects, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};gdjs.DashboardCode.mapOfGDgdjs_46DashboardCode_46GDGameBTNObjects2Objects = Hashtable.newFrom({"GameBTN": gdjs.DashboardCode.GDGameBTNObjects2});
gdjs.DashboardCode.eventsList12 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("GameBTN"), gdjs.DashboardCode.GDGameBTNObjects2);

gdjs.DashboardCode.condition0IsTrue_0.val = false;
gdjs.DashboardCode.condition1IsTrue_0.val = false;
gdjs.DashboardCode.condition2IsTrue_0.val = false;
{
gdjs.DashboardCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.DashboardCode.mapOfGDgdjs_46DashboardCode_46GDGameBTNObjects2Objects, runtimeScene, true, false);
}if ( gdjs.DashboardCode.condition0IsTrue_0.val ) {
{
gdjs.DashboardCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.DashboardCode.condition1IsTrue_0.val ) {
{
{gdjs.DashboardCode.conditionTrue_1 = gdjs.DashboardCode.condition2IsTrue_0;
gdjs.DashboardCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(18443540);
}
}}
}
if (gdjs.DashboardCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Home", false);
}}

}


{


gdjs.DashboardCode.condition0IsTrue_0.val = false;
{
{gdjs.DashboardCode.conditionTrue_1 = gdjs.DashboardCode.condition0IsTrue_0;
gdjs.DashboardCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(18443388);
}
}if (gdjs.DashboardCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("GameBTN"), gdjs.DashboardCode.GDGameBTNObjects1);
gdjs.copyArray(runtimeScene.getObjects("GameFrame"), gdjs.DashboardCode.GDGameFrameObjects1);
{for(var i = 0, len = gdjs.DashboardCode.GDGameBTNObjects1.length ;i < len;++i) {
    gdjs.DashboardCode.GDGameBTNObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.DashboardCode.GDGameFrameObjects1.length ;i < len;++i) {
    gdjs.DashboardCode.GDGameFrameObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}}

}


};gdjs.DashboardCode.eventsList13 = function(runtimeScene) {

{


gdjs.DashboardCode.eventsList1(runtimeScene);
}


{


gdjs.DashboardCode.eventsList4(runtimeScene);
}


{


gdjs.DashboardCode.eventsList7(runtimeScene);
}


{


gdjs.DashboardCode.eventsList10(runtimeScene);
}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.DashboardCode.GDBackObjects1);

gdjs.DashboardCode.condition0IsTrue_0.val = false;
gdjs.DashboardCode.condition1IsTrue_0.val = false;
gdjs.DashboardCode.condition2IsTrue_0.val = false;
{
gdjs.DashboardCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.DashboardCode.mapOfGDgdjs_46DashboardCode_46GDBackObjects1Objects, runtimeScene, true, false);
}if ( gdjs.DashboardCode.condition0IsTrue_0.val ) {
{
gdjs.DashboardCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.DashboardCode.condition1IsTrue_0.val ) {
{
{gdjs.DashboardCode.conditionTrue_1 = gdjs.DashboardCode.condition2IsTrue_0;
gdjs.DashboardCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(18441172);
}
}}
}
if (gdjs.DashboardCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Home", false);
}}

}


{


gdjs.DashboardCode.condition0IsTrue_0.val = false;
gdjs.DashboardCode.condition1IsTrue_0.val = false;
{
gdjs.DashboardCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
}if ( gdjs.DashboardCode.condition0IsTrue_0.val ) {
{
{gdjs.DashboardCode.conditionTrue_1 = gdjs.DashboardCode.condition1IsTrue_0;
gdjs.DashboardCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(18441892);
}
}}
if (gdjs.DashboardCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Heart", false);
}}

}


{


gdjs.DashboardCode.eventsList11(runtimeScene);
}


{


gdjs.DashboardCode.eventsList12(runtimeScene);
}


};

gdjs.DashboardCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.DashboardCode.GDBGObjects1.length = 0;
gdjs.DashboardCode.GDBGObjects2.length = 0;
gdjs.DashboardCode.GDBGObjects3.length = 0;
gdjs.DashboardCode.GDBGObjects4.length = 0;
gdjs.DashboardCode.GDInviteBTNObjects1.length = 0;
gdjs.DashboardCode.GDInviteBTNObjects2.length = 0;
gdjs.DashboardCode.GDInviteBTNObjects3.length = 0;
gdjs.DashboardCode.GDInviteBTNObjects4.length = 0;
gdjs.DashboardCode.GDCashoutBTNObjects1.length = 0;
gdjs.DashboardCode.GDCashoutBTNObjects2.length = 0;
gdjs.DashboardCode.GDCashoutBTNObjects3.length = 0;
gdjs.DashboardCode.GDCashoutBTNObjects4.length = 0;
gdjs.DashboardCode.GDRewardBTNObjects1.length = 0;
gdjs.DashboardCode.GDRewardBTNObjects2.length = 0;
gdjs.DashboardCode.GDRewardBTNObjects3.length = 0;
gdjs.DashboardCode.GDRewardBTNObjects4.length = 0;
gdjs.DashboardCode.GDProfileBTNObjects1.length = 0;
gdjs.DashboardCode.GDProfileBTNObjects2.length = 0;
gdjs.DashboardCode.GDProfileBTNObjects3.length = 0;
gdjs.DashboardCode.GDProfileBTNObjects4.length = 0;
gdjs.DashboardCode.GDCoinsTXTObjects1.length = 0;
gdjs.DashboardCode.GDCoinsTXTObjects2.length = 0;
gdjs.DashboardCode.GDCoinsTXTObjects3.length = 0;
gdjs.DashboardCode.GDCoinsTXTObjects4.length = 0;
gdjs.DashboardCode.GDPesosTXTObjects1.length = 0;
gdjs.DashboardCode.GDPesosTXTObjects2.length = 0;
gdjs.DashboardCode.GDPesosTXTObjects3.length = 0;
gdjs.DashboardCode.GDPesosTXTObjects4.length = 0;
gdjs.DashboardCode.GDPesosVarObjects1.length = 0;
gdjs.DashboardCode.GDPesosVarObjects2.length = 0;
gdjs.DashboardCode.GDPesosVarObjects3.length = 0;
gdjs.DashboardCode.GDPesosVarObjects4.length = 0;
gdjs.DashboardCode.GDHelloObjects1.length = 0;
gdjs.DashboardCode.GDHelloObjects2.length = 0;
gdjs.DashboardCode.GDHelloObjects3.length = 0;
gdjs.DashboardCode.GDHelloObjects4.length = 0;
gdjs.DashboardCode.GDGameTXTObjects1.length = 0;
gdjs.DashboardCode.GDGameTXTObjects2.length = 0;
gdjs.DashboardCode.GDGameTXTObjects3.length = 0;
gdjs.DashboardCode.GDGameTXTObjects4.length = 0;
gdjs.DashboardCode.GDActivityTXTObjects1.length = 0;
gdjs.DashboardCode.GDActivityTXTObjects2.length = 0;
gdjs.DashboardCode.GDActivityTXTObjects3.length = 0;
gdjs.DashboardCode.GDActivityTXTObjects4.length = 0;
gdjs.DashboardCode.GDActivitiesObjects1.length = 0;
gdjs.DashboardCode.GDActivitiesObjects2.length = 0;
gdjs.DashboardCode.GDActivitiesObjects3.length = 0;
gdjs.DashboardCode.GDActivitiesObjects4.length = 0;
gdjs.DashboardCode.GDLevelTxtObjects1.length = 0;
gdjs.DashboardCode.GDLevelTxtObjects2.length = 0;
gdjs.DashboardCode.GDLevelTxtObjects3.length = 0;
gdjs.DashboardCode.GDLevelTxtObjects4.length = 0;
gdjs.DashboardCode.GDwhiteObjects1.length = 0;
gdjs.DashboardCode.GDwhiteObjects2.length = 0;
gdjs.DashboardCode.GDwhiteObjects3.length = 0;
gdjs.DashboardCode.GDwhiteObjects4.length = 0;
gdjs.DashboardCode.GDBackObjects1.length = 0;
gdjs.DashboardCode.GDBackObjects2.length = 0;
gdjs.DashboardCode.GDBackObjects3.length = 0;
gdjs.DashboardCode.GDBackObjects4.length = 0;
gdjs.DashboardCode.GDProfilePicObjects1.length = 0;
gdjs.DashboardCode.GDProfilePicObjects2.length = 0;
gdjs.DashboardCode.GDProfilePicObjects3.length = 0;
gdjs.DashboardCode.GDProfilePicObjects4.length = 0;
gdjs.DashboardCode.GDGameFrameObjects1.length = 0;
gdjs.DashboardCode.GDGameFrameObjects2.length = 0;
gdjs.DashboardCode.GDGameFrameObjects3.length = 0;
gdjs.DashboardCode.GDGameFrameObjects4.length = 0;
gdjs.DashboardCode.GDGameBTNObjects1.length = 0;
gdjs.DashboardCode.GDGameBTNObjects2.length = 0;
gdjs.DashboardCode.GDGameBTNObjects3.length = 0;
gdjs.DashboardCode.GDGameBTNObjects4.length = 0;
gdjs.DashboardCode.GDLevelBarObjects1.length = 0;
gdjs.DashboardCode.GDLevelBarObjects2.length = 0;
gdjs.DashboardCode.GDLevelBarObjects3.length = 0;
gdjs.DashboardCode.GDLevelBarObjects4.length = 0;

gdjs.DashboardCode.eventsList13(runtimeScene);

return;

}

gdjs['DashboardCode'] = gdjs.DashboardCode;
