gdjs.WithdrawCode = {};
gdjs.WithdrawCode.GDGcashBTNObjects1= [];
gdjs.WithdrawCode.GDGcashBTNObjects2= [];
gdjs.WithdrawCode.GDGcashBTNObjects3= [];
gdjs.WithdrawCode.GDGcashBTNObjects4= [];
gdjs.WithdrawCode.GDWithdrawTitleTxTObjects1= [];
gdjs.WithdrawCode.GDWithdrawTitleTxTObjects2= [];
gdjs.WithdrawCode.GDWithdrawTitleTxTObjects3= [];
gdjs.WithdrawCode.GDWithdrawTitleTxTObjects4= [];
gdjs.WithdrawCode.GDMoreWithrawalTxTObjects1= [];
gdjs.WithdrawCode.GDMoreWithrawalTxTObjects2= [];
gdjs.WithdrawCode.GDMoreWithrawalTxTObjects3= [];
gdjs.WithdrawCode.GDMoreWithrawalTxTObjects4= [];
gdjs.WithdrawCode.GDViewHistroyObjects1= [];
gdjs.WithdrawCode.GDViewHistroyObjects2= [];
gdjs.WithdrawCode.GDViewHistroyObjects3= [];
gdjs.WithdrawCode.GDViewHistroyObjects4= [];
gdjs.WithdrawCode.GDNotEnoughBalanceTxTObjects1= [];
gdjs.WithdrawCode.GDNotEnoughBalanceTxTObjects2= [];
gdjs.WithdrawCode.GDNotEnoughBalanceTxTObjects3= [];
gdjs.WithdrawCode.GDNotEnoughBalanceTxTObjects4= [];
gdjs.WithdrawCode.GDWithdrawNoticeObjects1= [];
gdjs.WithdrawCode.GDWithdrawNoticeObjects2= [];
gdjs.WithdrawCode.GDWithdrawNoticeObjects3= [];
gdjs.WithdrawCode.GDWithdrawNoticeObjects4= [];
gdjs.WithdrawCode.GDErrorAmountObjects1= [];
gdjs.WithdrawCode.GDErrorAmountObjects2= [];
gdjs.WithdrawCode.GDErrorAmountObjects3= [];
gdjs.WithdrawCode.GDErrorAmountObjects4= [];
gdjs.WithdrawCode.GDWithdrawStateTxTObjects1= [];
gdjs.WithdrawCode.GDWithdrawStateTxTObjects2= [];
gdjs.WithdrawCode.GDWithdrawStateTxTObjects3= [];
gdjs.WithdrawCode.GDWithdrawStateTxTObjects4= [];
gdjs.WithdrawCode.GDBackBTNObjects1= [];
gdjs.WithdrawCode.GDBackBTNObjects2= [];
gdjs.WithdrawCode.GDBackBTNObjects3= [];
gdjs.WithdrawCode.GDBackBTNObjects4= [];
gdjs.WithdrawCode.GDGcashNumberObjects1= [];
gdjs.WithdrawCode.GDGcashNumberObjects2= [];
gdjs.WithdrawCode.GDGcashNumberObjects3= [];
gdjs.WithdrawCode.GDGcashNumberObjects4= [];
gdjs.WithdrawCode.GDAmountObjects1= [];
gdjs.WithdrawCode.GDAmountObjects2= [];
gdjs.WithdrawCode.GDAmountObjects3= [];
gdjs.WithdrawCode.GDAmountObjects4= [];
gdjs.WithdrawCode.GDWithdrawBTNObjects1= [];
gdjs.WithdrawCode.GDWithdrawBTNObjects2= [];
gdjs.WithdrawCode.GDWithdrawBTNObjects3= [];
gdjs.WithdrawCode.GDWithdrawBTNObjects4= [];

gdjs.WithdrawCode.conditionTrue_0 = {val:false};
gdjs.WithdrawCode.condition0IsTrue_0 = {val:false};
gdjs.WithdrawCode.condition1IsTrue_0 = {val:false};
gdjs.WithdrawCode.condition2IsTrue_0 = {val:false};
gdjs.WithdrawCode.condition3IsTrue_0 = {val:false};
gdjs.WithdrawCode.condition4IsTrue_0 = {val:false};
gdjs.WithdrawCode.conditionTrue_1 = {val:false};
gdjs.WithdrawCode.condition0IsTrue_1 = {val:false};
gdjs.WithdrawCode.condition1IsTrue_1 = {val:false};
gdjs.WithdrawCode.condition2IsTrue_1 = {val:false};
gdjs.WithdrawCode.condition3IsTrue_1 = {val:false};
gdjs.WithdrawCode.condition4IsTrue_1 = {val:false};


gdjs.WithdrawCode.eventsList0 = function(runtimeScene) {

{


gdjs.WithdrawCode.condition0IsTrue_0.val = false;
{
gdjs.WithdrawCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.WithdrawCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("GcashBTN"), gdjs.WithdrawCode.GDGcashBTNObjects1);
gdjs.copyArray(runtimeScene.getObjects("MoreWithrawalTxT"), gdjs.WithdrawCode.GDMoreWithrawalTxTObjects1);
gdjs.copyArray(runtimeScene.getObjects("WithdrawTitleTxT"), gdjs.WithdrawCode.GDWithdrawTitleTxTObjects1);
{for(var i = 0, len = gdjs.WithdrawCode.GDWithdrawTitleTxTObjects1.length ;i < len;++i) {
    gdjs.WithdrawCode.GDWithdrawTitleTxTObjects1[i].setTextAlignment("center");
}
}{for(var i = 0, len = gdjs.WithdrawCode.GDMoreWithrawalTxTObjects1.length ;i < len;++i) {
    gdjs.WithdrawCode.GDMoreWithrawalTxTObjects1[i].setTextAlignment("center");
}
}{for(var i = 0, len = gdjs.WithdrawCode.GDGcashBTNObjects1.length ;i < len;++i) {
    gdjs.WithdrawCode.GDGcashBTNObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.WithdrawCode.GDWithdrawTitleTxTObjects1.length ;i < len;++i) {
    gdjs.WithdrawCode.GDWithdrawTitleTxTObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.WithdrawCode.GDMoreWithrawalTxTObjects1.length ;i < len;++i) {
    gdjs.WithdrawCode.GDMoreWithrawalTxTObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}}

}


};gdjs.WithdrawCode.mapOfGDgdjs_46WithdrawCode_46GDGcashBTNObjects1Objects = Hashtable.newFrom({"GcashBTN": gdjs.WithdrawCode.GDGcashBTNObjects1});
gdjs.WithdrawCode.eventsList1 = function(runtimeScene) {

{


gdjs.WithdrawCode.condition0IsTrue_0.val = false;
{
gdjs.WithdrawCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Balance")) >= 50;
}if (gdjs.WithdrawCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Amount"), gdjs.WithdrawCode.GDAmountObjects2);
gdjs.copyArray(runtimeScene.getObjects("ErrorAmount"), gdjs.WithdrawCode.GDErrorAmountObjects2);
gdjs.copyArray(gdjs.WithdrawCode.GDGcashBTNObjects1, gdjs.WithdrawCode.GDGcashBTNObjects2);

gdjs.copyArray(runtimeScene.getObjects("GcashNumber"), gdjs.WithdrawCode.GDGcashNumberObjects2);
gdjs.copyArray(runtimeScene.getObjects("MoreWithrawalTxT"), gdjs.WithdrawCode.GDMoreWithrawalTxTObjects2);
gdjs.copyArray(runtimeScene.getObjects("NotEnoughBalanceTxT"), gdjs.WithdrawCode.GDNotEnoughBalanceTxTObjects2);
gdjs.copyArray(runtimeScene.getObjects("ViewHistroy"), gdjs.WithdrawCode.GDViewHistroyObjects2);
gdjs.copyArray(runtimeScene.getObjects("WithdrawBTN"), gdjs.WithdrawCode.GDWithdrawBTNObjects2);
gdjs.copyArray(runtimeScene.getObjects("WithdrawNotice"), gdjs.WithdrawCode.GDWithdrawNoticeObjects2);
{for(var i = 0, len = gdjs.WithdrawCode.GDGcashBTNObjects2.length ;i < len;++i) {
    gdjs.WithdrawCode.GDGcashBTNObjects2[i].setX(-(1000));
}
}{for(var i = 0, len = gdjs.WithdrawCode.GDMoreWithrawalTxTObjects2.length ;i < len;++i) {
    gdjs.WithdrawCode.GDMoreWithrawalTxTObjects2[i].setX(-(1000));
}
}{for(var i = 0, len = gdjs.WithdrawCode.GDViewHistroyObjects2.length ;i < len;++i) {
    gdjs.WithdrawCode.GDViewHistroyObjects2[i].setX(-(1000));
}
}{for(var i = 0, len = gdjs.WithdrawCode.GDNotEnoughBalanceTxTObjects2.length ;i < len;++i) {
    gdjs.WithdrawCode.GDNotEnoughBalanceTxTObjects2[i].setCenterXInScene(-(1000));
}
}{for(var i = 0, len = gdjs.WithdrawCode.GDGcashNumberObjects2.length ;i < len;++i) {
    gdjs.WithdrawCode.GDGcashNumberObjects2[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.WithdrawCode.GDAmountObjects2.length ;i < len;++i) {
    gdjs.WithdrawCode.GDAmountObjects2[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.WithdrawCode.GDWithdrawBTNObjects2.length ;i < len;++i) {
    gdjs.WithdrawCode.GDWithdrawBTNObjects2[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.WithdrawCode.GDWithdrawNoticeObjects2.length ;i < len;++i) {
    gdjs.WithdrawCode.GDWithdrawNoticeObjects2[i].setX((( gdjs.WithdrawCode.GDAmountObjects2.length === 0 ) ? 0 :gdjs.WithdrawCode.GDAmountObjects2[0].getX()));
}
}{for(var i = 0, len = gdjs.WithdrawCode.GDErrorAmountObjects2.length ;i < len;++i) {
    gdjs.WithdrawCode.GDErrorAmountObjects2[i].setX((( gdjs.WithdrawCode.GDAmountObjects2.length === 0 ) ? 0 :gdjs.WithdrawCode.GDAmountObjects2[0].getX()));
}
}}

}


{


gdjs.WithdrawCode.condition0IsTrue_0.val = false;
{
gdjs.WithdrawCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Balance")) < 50;
}if (gdjs.WithdrawCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NotEnoughBalanceTxT"), gdjs.WithdrawCode.GDNotEnoughBalanceTxTObjects1);
{for(var i = 0, len = gdjs.WithdrawCode.GDNotEnoughBalanceTxTObjects1.length ;i < len;++i) {
    gdjs.WithdrawCode.GDNotEnoughBalanceTxTObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}}

}


};gdjs.WithdrawCode.mapOfGDgdjs_46WithdrawCode_46GDViewHistroyObjects1Objects = Hashtable.newFrom({"ViewHistroy": gdjs.WithdrawCode.GDViewHistroyObjects1});
gdjs.WithdrawCode.eventsList2 = function(runtimeScene) {

{


gdjs.WithdrawCode.condition0IsTrue_0.val = false;
{
gdjs.WithdrawCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Balance")) >= 50;
}if (gdjs.WithdrawCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Amount"), gdjs.WithdrawCode.GDAmountObjects2);
gdjs.copyArray(runtimeScene.getObjects("ErrorAmount"), gdjs.WithdrawCode.GDErrorAmountObjects2);
gdjs.copyArray(runtimeScene.getObjects("GcashBTN"), gdjs.WithdrawCode.GDGcashBTNObjects2);
gdjs.copyArray(runtimeScene.getObjects("GcashNumber"), gdjs.WithdrawCode.GDGcashNumberObjects2);
gdjs.copyArray(runtimeScene.getObjects("MoreWithrawalTxT"), gdjs.WithdrawCode.GDMoreWithrawalTxTObjects2);
gdjs.copyArray(runtimeScene.getObjects("NotEnoughBalanceTxT"), gdjs.WithdrawCode.GDNotEnoughBalanceTxTObjects2);
gdjs.copyArray(gdjs.WithdrawCode.GDViewHistroyObjects1, gdjs.WithdrawCode.GDViewHistroyObjects2);

gdjs.copyArray(runtimeScene.getObjects("WithdrawBTN"), gdjs.WithdrawCode.GDWithdrawBTNObjects2);
gdjs.copyArray(runtimeScene.getObjects("WithdrawNotice"), gdjs.WithdrawCode.GDWithdrawNoticeObjects2);
{for(var i = 0, len = gdjs.WithdrawCode.GDGcashBTNObjects2.length ;i < len;++i) {
    gdjs.WithdrawCode.GDGcashBTNObjects2[i].setX(-(1000));
}
}{for(var i = 0, len = gdjs.WithdrawCode.GDMoreWithrawalTxTObjects2.length ;i < len;++i) {
    gdjs.WithdrawCode.GDMoreWithrawalTxTObjects2[i].setX(-(1000));
}
}{for(var i = 0, len = gdjs.WithdrawCode.GDViewHistroyObjects2.length ;i < len;++i) {
    gdjs.WithdrawCode.GDViewHistroyObjects2[i].setX(-(1000));
}
}{for(var i = 0, len = gdjs.WithdrawCode.GDNotEnoughBalanceTxTObjects2.length ;i < len;++i) {
    gdjs.WithdrawCode.GDNotEnoughBalanceTxTObjects2[i].setCenterXInScene(-(1000));
}
}{for(var i = 0, len = gdjs.WithdrawCode.GDGcashNumberObjects2.length ;i < len;++i) {
    gdjs.WithdrawCode.GDGcashNumberObjects2[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.WithdrawCode.GDAmountObjects2.length ;i < len;++i) {
    gdjs.WithdrawCode.GDAmountObjects2[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.WithdrawCode.GDWithdrawBTNObjects2.length ;i < len;++i) {
    gdjs.WithdrawCode.GDWithdrawBTNObjects2[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.WithdrawCode.GDWithdrawNoticeObjects2.length ;i < len;++i) {
    gdjs.WithdrawCode.GDWithdrawNoticeObjects2[i].setX((( gdjs.WithdrawCode.GDAmountObjects2.length === 0 ) ? 0 :gdjs.WithdrawCode.GDAmountObjects2[0].getX()));
}
}{for(var i = 0, len = gdjs.WithdrawCode.GDErrorAmountObjects2.length ;i < len;++i) {
    gdjs.WithdrawCode.GDErrorAmountObjects2[i].setX((( gdjs.WithdrawCode.GDAmountObjects2.length === 0 ) ? 0 :gdjs.WithdrawCode.GDAmountObjects2[0].getX()));
}
}}

}


{


gdjs.WithdrawCode.condition0IsTrue_0.val = false;
{
gdjs.WithdrawCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Balance")) < 50;
}if (gdjs.WithdrawCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NotEnoughBalanceTxT"), gdjs.WithdrawCode.GDNotEnoughBalanceTxTObjects1);
{for(var i = 0, len = gdjs.WithdrawCode.GDNotEnoughBalanceTxTObjects1.length ;i < len;++i) {
    gdjs.WithdrawCode.GDNotEnoughBalanceTxTObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}}

}


};gdjs.WithdrawCode.mapOfGDgdjs_46WithdrawCode_46GDWithdrawBTNObjects2Objects = Hashtable.newFrom({"WithdrawBTN": gdjs.WithdrawCode.GDWithdrawBTNObjects2});
gdjs.WithdrawCode.eventsList3 = function(runtimeScene) {

{


gdjs.WithdrawCode.condition0IsTrue_0.val = false;
{
gdjs.WithdrawCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("WithdrawAmount")) == 50;
}if (gdjs.WithdrawCode.condition0IsTrue_0.val) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().get("AmountValid"), true);
}}

}


{


gdjs.WithdrawCode.condition0IsTrue_0.val = false;
{
gdjs.WithdrawCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("WithdrawAmount")) == 70;
}if (gdjs.WithdrawCode.condition0IsTrue_0.val) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().get("AmountValid"), true);
}}

}


{


gdjs.WithdrawCode.condition0IsTrue_0.val = false;
{
gdjs.WithdrawCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("WithdrawAmount")) == 100;
}if (gdjs.WithdrawCode.condition0IsTrue_0.val) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().get("AmountValid"), true);
}}

}


{


gdjs.WithdrawCode.condition0IsTrue_0.val = false;
{
gdjs.WithdrawCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("WithdrawAmount")) == 150;
}if (gdjs.WithdrawCode.condition0IsTrue_0.val) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().get("AmountValid"), true);
}}

}


};gdjs.WithdrawCode.eventsList4 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("WithdrawStateTxT"), gdjs.WithdrawCode.GDWithdrawStateTxTObjects2);
{for(var i = 0, len = gdjs.WithdrawCode.GDWithdrawStateTxTObjects2.length ;i < len;++i) {
    gdjs.WithdrawCode.GDWithdrawStateTxTObjects2[i].setString("Please do not leave the website" + gdjs.evtTools.string.newLine() + "Processing..");
}
}{for(var i = 0, len = gdjs.WithdrawCode.GDWithdrawStateTxTObjects2.length ;i < len;++i) {
    gdjs.WithdrawCode.GDWithdrawStateTxTObjects2[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}}

}


};gdjs.WithdrawCode.asyncCallback18580276 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Withdraw", false);
}}
gdjs.WithdrawCode.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.WithdrawCode.asyncCallback18580276(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.WithdrawCode.eventsList6 = function(runtimeScene) {

{


{
{gdjs.evtTools.network.jsonToVariableStructure(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("GetTime")), runtimeScene.getVariables().get("GetTimeJson"));
}}

}


{


gdjs.WithdrawCode.condition0IsTrue_0.val = false;
{
{gdjs.WithdrawCode.conditionTrue_1 = gdjs.WithdrawCode.condition0IsTrue_0;
gdjs.WithdrawCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(18564260);
}
}if (gdjs.WithdrawCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setGameResolutionResizeMode(runtimeScene, "");
}{gdjs.evtTools.window.setGameResolutionSize(runtimeScene, 720, 1280);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("WithdrawBTN"), gdjs.WithdrawCode.GDWithdrawBTNObjects2);

gdjs.WithdrawCode.condition0IsTrue_0.val = false;
gdjs.WithdrawCode.condition1IsTrue_0.val = false;
gdjs.WithdrawCode.condition2IsTrue_0.val = false;
gdjs.WithdrawCode.condition3IsTrue_0.val = false;
{
gdjs.WithdrawCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.WithdrawCode.mapOfGDgdjs_46WithdrawCode_46GDWithdrawBTNObjects2Objects, runtimeScene, true, false);
}if ( gdjs.WithdrawCode.condition0IsTrue_0.val ) {
{
gdjs.WithdrawCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.WithdrawCode.condition1IsTrue_0.val ) {
{
gdjs.WithdrawCode.condition2IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().get("WithdrawBTNPressed"), false);
}if ( gdjs.WithdrawCode.condition2IsTrue_0.val ) {
{
{gdjs.WithdrawCode.conditionTrue_1 = gdjs.WithdrawCode.condition3IsTrue_0;
gdjs.WithdrawCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(18566228);
}
}}
}
}
if (gdjs.WithdrawCode.condition3IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Amount"), gdjs.WithdrawCode.GDAmountObjects2);
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().get("WithdrawBTNPressed"), true);
}{runtimeScene.getVariables().get("WithdrawAmount").setNumber(gdjs.evtTools.common.toNumber((( gdjs.WithdrawCode.GDAmountObjects2.length === 0 ) ? "" :gdjs.WithdrawCode.GDAmountObjects2[0].getString())));
}
{ //Subevents
gdjs.WithdrawCode.eventsList3(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.WithdrawCode.condition0IsTrue_0.val = false;
gdjs.WithdrawCode.condition1IsTrue_0.val = false;
{
gdjs.WithdrawCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().get("AmountValid"), true);
}if ( gdjs.WithdrawCode.condition0IsTrue_0.val ) {
{
{gdjs.WithdrawCode.conditionTrue_1 = gdjs.WithdrawCode.condition1IsTrue_0;
gdjs.WithdrawCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(18569804);
}
}}
if (gdjs.WithdrawCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ErrorAmount"), gdjs.WithdrawCode.GDErrorAmountObjects2);
gdjs.copyArray(runtimeScene.getObjects("WithdrawBTN"), gdjs.WithdrawCode.GDWithdrawBTNObjects2);
{gdjs.evtTools.firebaseTools.database.getField("Users/" + gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Coins", runtimeScene.getVariables().get("Coins"), runtimeScene.getVariables().get("GetCoinsState"));
}{for(var i = 0, len = gdjs.WithdrawCode.GDErrorAmountObjects2.length ;i < len;++i) {
    gdjs.WithdrawCode.GDErrorAmountObjects2[i].setString("");
}
}{for(var i = 0, len = gdjs.WithdrawCode.GDWithdrawBTNObjects2.length ;i < len;++i) {
    gdjs.WithdrawCode.GDWithdrawBTNObjects2[i].setX(-(1000));
}
}{runtimeScene.getVariables().get("TransID").setString(gdjs.evtTools.string.toUpperCase(gdjs.evtTools.string.subStr(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), 3, gdjs.randomInRange(3, 6)) + gdjs.evtTools.common.toString(gdjs.random(9999))));
}{gdjs.evtTools.network.sendAsyncRequest("https://api.timezonedb.com/v2/get-time-zone?key=55L8WMD9RDC2&format=json&by=zone&zone=Asia/Manila", "", "GET", "", runtimeScene.getVariables().get("GetTime"), runtimeScene.getVariables().get("timestate"));
}{gdjs.evtTools.firebaseTools.firestore.writeField("Withdraw", gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("TransID")), "", runtimeScene.getVariables().get("ValueState"), true);
}
{ //Subevents
gdjs.WithdrawCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


gdjs.WithdrawCode.condition0IsTrue_0.val = false;
gdjs.WithdrawCode.condition1IsTrue_0.val = false;
gdjs.WithdrawCode.condition2IsTrue_0.val = false;
{
gdjs.WithdrawCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().get("WithdrawBTNPressed"), true);
}if ( gdjs.WithdrawCode.condition0IsTrue_0.val ) {
{
gdjs.WithdrawCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().get("AmountValid"), false);
}if ( gdjs.WithdrawCode.condition1IsTrue_0.val ) {
{
{gdjs.WithdrawCode.conditionTrue_1 = gdjs.WithdrawCode.condition2IsTrue_0;
gdjs.WithdrawCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(18573460);
}
}}
}
if (gdjs.WithdrawCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ErrorAmount"), gdjs.WithdrawCode.GDErrorAmountObjects2);
{for(var i = 0, len = gdjs.WithdrawCode.GDErrorAmountObjects2.length ;i < len;++i) {
    gdjs.WithdrawCode.GDErrorAmountObjects2[i].setString("Invalid amount");
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().get("WithdrawBTNPressed"), false);
}}

}


{



}


{


gdjs.WithdrawCode.condition0IsTrue_0.val = false;
gdjs.WithdrawCode.condition1IsTrue_0.val = false;
{
gdjs.WithdrawCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("ValueState")) == "ok";
}if ( gdjs.WithdrawCode.condition0IsTrue_0.val ) {
{
{gdjs.WithdrawCode.conditionTrue_1 = gdjs.WithdrawCode.condition1IsTrue_0;
gdjs.WithdrawCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(18574436);
}
}}
if (gdjs.WithdrawCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Amount"), gdjs.WithdrawCode.GDAmountObjects2);
gdjs.copyArray(runtimeScene.getObjects("GcashNumber"), gdjs.WithdrawCode.GDGcashNumberObjects2);
gdjs.copyArray(runtimeScene.getObjects("WithdrawStateTxT"), gdjs.WithdrawCode.GDWithdrawStateTxTObjects2);
{for(var i = 0, len = gdjs.WithdrawCode.GDWithdrawStateTxTObjects2.length ;i < len;++i) {
    gdjs.WithdrawCode.GDWithdrawStateTxTObjects2[i].setString("Please do not leave the website");
}
}{for(var i = 0, len = gdjs.WithdrawCode.GDWithdrawStateTxTObjects2.length ;i < len;++i) {
    gdjs.WithdrawCode.GDWithdrawStateTxTObjects2[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{runtimeScene.getVariables().get("Payload").getChild("Gcash").setString((( gdjs.WithdrawCode.GDGcashNumberObjects2.length === 0 ) ? "" :gdjs.WithdrawCode.GDGcashNumberObjects2[0].getString()));
}{runtimeScene.getVariables().get("Payload").getChild("Amount").setString((( gdjs.WithdrawCode.GDAmountObjects2.length === 0 ) ? "" :gdjs.WithdrawCode.GDAmountObjects2[0].getString()));
}{runtimeScene.getVariables().get("Payload").getChild("Date").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("GetTimeJson").getChild("formatted")));
}{runtimeScene.getVariables().get("Payload").getChild("TransID").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("TransID")));
}{gdjs.evtTools.firebaseTools.database.updateField("Users/" + gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Coins", gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Coins")) - gdjs.evtTools.common.toNumber((( gdjs.WithdrawCode.GDAmountObjects2.length === 0 ) ? "" :gdjs.WithdrawCode.GDAmountObjects2[0].getString())) * 1000), runtimeScene.getVariables().get("UpdateCoinState"));
}{gdjs.evtTools.firebaseTools.firestore.updateField("Users", gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Withdraw.ActiveID", gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("TransID")), runtimeScene.getVariables().get("UpdateTransID"));
}{gdjs.evtTools.firebaseTools.firestore.updateField("Withdraw", gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("TransID")) + ".TransID", gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("Payload").getChild("TransID")), runtimeScene.getVariables().get("PayloadStateTransID"));
}{gdjs.evtTools.firebaseTools.firestore.updateField("Withdraw", gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("TransID")) + ".Gcash", gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("Payload").getChild("Gcash")), runtimeScene.getVariables().get("PayloadStateGcash"));
}{gdjs.evtTools.firebaseTools.firestore.updateField("Withdraw", gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("TransID")) + ".Amount", gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("Payload").getChild("Amount")), runtimeScene.getVariables().get("PayloadStateAmount"));
}{gdjs.evtTools.firebaseTools.firestore.updateField("Withdraw", gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("TransID")) + ".Date", gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("Payload").getChild("Date")), runtimeScene.getVariables().get("PayloadStateDate"));
}}

}


{



}


{


{
}

}


{


gdjs.WithdrawCode.condition0IsTrue_0.val = false;
gdjs.WithdrawCode.condition1IsTrue_0.val = false;
{
gdjs.WithdrawCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("UpdateTransID")) == "ok";
}if ( gdjs.WithdrawCode.condition0IsTrue_0.val ) {
{
{gdjs.WithdrawCode.conditionTrue_1 = gdjs.WithdrawCode.condition1IsTrue_0;
gdjs.WithdrawCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(18579684);
}
}}
if (gdjs.WithdrawCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("WithdrawStateTxT"), gdjs.WithdrawCode.GDWithdrawStateTxTObjects2);
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().get("WithdrawBTNPressed"), false);
}{for(var i = 0, len = gdjs.WithdrawCode.GDWithdrawStateTxTObjects2.length ;i < len;++i) {
    gdjs.WithdrawCode.GDWithdrawStateTxTObjects2[i].setString("Please do not leave the website" + gdjs.evtTools.string.newLine() + "Request successful");
}
}{for(var i = 0, len = gdjs.WithdrawCode.GDWithdrawStateTxTObjects2.length ;i < len;++i) {
    gdjs.WithdrawCode.GDWithdrawStateTxTObjects2[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}
{ //Subevents
gdjs.WithdrawCode.eventsList5(runtimeScene);} //End of subevents
}

}


{



}


};gdjs.WithdrawCode.mapOfGDgdjs_46WithdrawCode_46GDBackBTNObjects1Objects = Hashtable.newFrom({"BackBTN": gdjs.WithdrawCode.GDBackBTNObjects1});
gdjs.WithdrawCode.eventsList7 = function(runtimeScene) {

{


gdjs.WithdrawCode.eventsList0(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("GcashBTN"), gdjs.WithdrawCode.GDGcashBTNObjects1);

gdjs.WithdrawCode.condition0IsTrue_0.val = false;
gdjs.WithdrawCode.condition1IsTrue_0.val = false;
gdjs.WithdrawCode.condition2IsTrue_0.val = false;
{
gdjs.WithdrawCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.WithdrawCode.mapOfGDgdjs_46WithdrawCode_46GDGcashBTNObjects1Objects, runtimeScene, true, false);
}if ( gdjs.WithdrawCode.condition0IsTrue_0.val ) {
{
gdjs.WithdrawCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.WithdrawCode.condition1IsTrue_0.val ) {
{
{gdjs.WithdrawCode.conditionTrue_1 = gdjs.WithdrawCode.condition2IsTrue_0;
gdjs.WithdrawCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(18556652);
}
}}
}
if (gdjs.WithdrawCode.condition2IsTrue_0.val) {
{gdjs.evtTools.window.setGameResolutionResizeMode(runtimeScene, "adaptHeight");
}{gdjs.evtTools.window.setGameResolutionSize(runtimeScene, 720, 1280);
}
{ //Subevents
gdjs.WithdrawCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ViewHistroy"), gdjs.WithdrawCode.GDViewHistroyObjects1);

gdjs.WithdrawCode.condition0IsTrue_0.val = false;
gdjs.WithdrawCode.condition1IsTrue_0.val = false;
gdjs.WithdrawCode.condition2IsTrue_0.val = false;
{
gdjs.WithdrawCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.WithdrawCode.mapOfGDgdjs_46WithdrawCode_46GDViewHistroyObjects1Objects, runtimeScene, true, false);
}if ( gdjs.WithdrawCode.condition0IsTrue_0.val ) {
{
gdjs.WithdrawCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.WithdrawCode.condition1IsTrue_0.val ) {
{
{gdjs.WithdrawCode.conditionTrue_1 = gdjs.WithdrawCode.condition2IsTrue_0;
gdjs.WithdrawCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(18560740);
}
}}
}
if (gdjs.WithdrawCode.condition2IsTrue_0.val) {

{ //Subevents
gdjs.WithdrawCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


gdjs.WithdrawCode.eventsList6(runtimeScene);
}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("BackBTN"), gdjs.WithdrawCode.GDBackBTNObjects1);

gdjs.WithdrawCode.condition0IsTrue_0.val = false;
gdjs.WithdrawCode.condition1IsTrue_0.val = false;
gdjs.WithdrawCode.condition2IsTrue_0.val = false;
{
gdjs.WithdrawCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.WithdrawCode.mapOfGDgdjs_46WithdrawCode_46GDBackBTNObjects1Objects, runtimeScene, true, false);
}if ( gdjs.WithdrawCode.condition0IsTrue_0.val ) {
{
gdjs.WithdrawCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.WithdrawCode.condition1IsTrue_0.val ) {
{
{gdjs.WithdrawCode.conditionTrue_1 = gdjs.WithdrawCode.condition2IsTrue_0;
gdjs.WithdrawCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(18582884);
}
}}
}
if (gdjs.WithdrawCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Dashboard", false);
}}

}


};

gdjs.WithdrawCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.WithdrawCode.GDGcashBTNObjects1.length = 0;
gdjs.WithdrawCode.GDGcashBTNObjects2.length = 0;
gdjs.WithdrawCode.GDGcashBTNObjects3.length = 0;
gdjs.WithdrawCode.GDGcashBTNObjects4.length = 0;
gdjs.WithdrawCode.GDWithdrawTitleTxTObjects1.length = 0;
gdjs.WithdrawCode.GDWithdrawTitleTxTObjects2.length = 0;
gdjs.WithdrawCode.GDWithdrawTitleTxTObjects3.length = 0;
gdjs.WithdrawCode.GDWithdrawTitleTxTObjects4.length = 0;
gdjs.WithdrawCode.GDMoreWithrawalTxTObjects1.length = 0;
gdjs.WithdrawCode.GDMoreWithrawalTxTObjects2.length = 0;
gdjs.WithdrawCode.GDMoreWithrawalTxTObjects3.length = 0;
gdjs.WithdrawCode.GDMoreWithrawalTxTObjects4.length = 0;
gdjs.WithdrawCode.GDViewHistroyObjects1.length = 0;
gdjs.WithdrawCode.GDViewHistroyObjects2.length = 0;
gdjs.WithdrawCode.GDViewHistroyObjects3.length = 0;
gdjs.WithdrawCode.GDViewHistroyObjects4.length = 0;
gdjs.WithdrawCode.GDNotEnoughBalanceTxTObjects1.length = 0;
gdjs.WithdrawCode.GDNotEnoughBalanceTxTObjects2.length = 0;
gdjs.WithdrawCode.GDNotEnoughBalanceTxTObjects3.length = 0;
gdjs.WithdrawCode.GDNotEnoughBalanceTxTObjects4.length = 0;
gdjs.WithdrawCode.GDWithdrawNoticeObjects1.length = 0;
gdjs.WithdrawCode.GDWithdrawNoticeObjects2.length = 0;
gdjs.WithdrawCode.GDWithdrawNoticeObjects3.length = 0;
gdjs.WithdrawCode.GDWithdrawNoticeObjects4.length = 0;
gdjs.WithdrawCode.GDErrorAmountObjects1.length = 0;
gdjs.WithdrawCode.GDErrorAmountObjects2.length = 0;
gdjs.WithdrawCode.GDErrorAmountObjects3.length = 0;
gdjs.WithdrawCode.GDErrorAmountObjects4.length = 0;
gdjs.WithdrawCode.GDWithdrawStateTxTObjects1.length = 0;
gdjs.WithdrawCode.GDWithdrawStateTxTObjects2.length = 0;
gdjs.WithdrawCode.GDWithdrawStateTxTObjects3.length = 0;
gdjs.WithdrawCode.GDWithdrawStateTxTObjects4.length = 0;
gdjs.WithdrawCode.GDBackBTNObjects1.length = 0;
gdjs.WithdrawCode.GDBackBTNObjects2.length = 0;
gdjs.WithdrawCode.GDBackBTNObjects3.length = 0;
gdjs.WithdrawCode.GDBackBTNObjects4.length = 0;
gdjs.WithdrawCode.GDGcashNumberObjects1.length = 0;
gdjs.WithdrawCode.GDGcashNumberObjects2.length = 0;
gdjs.WithdrawCode.GDGcashNumberObjects3.length = 0;
gdjs.WithdrawCode.GDGcashNumberObjects4.length = 0;
gdjs.WithdrawCode.GDAmountObjects1.length = 0;
gdjs.WithdrawCode.GDAmountObjects2.length = 0;
gdjs.WithdrawCode.GDAmountObjects3.length = 0;
gdjs.WithdrawCode.GDAmountObjects4.length = 0;
gdjs.WithdrawCode.GDWithdrawBTNObjects1.length = 0;
gdjs.WithdrawCode.GDWithdrawBTNObjects2.length = 0;
gdjs.WithdrawCode.GDWithdrawBTNObjects3.length = 0;
gdjs.WithdrawCode.GDWithdrawBTNObjects4.length = 0;

gdjs.WithdrawCode.eventsList7(runtimeScene);

return;

}

gdjs['WithdrawCode'] = gdjs.WithdrawCode;
