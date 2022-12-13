gdjs.HeartCode = {};
gdjs.HeartCode.GDBGObjects1= [];
gdjs.HeartCode.GDBGObjects2= [];
gdjs.HeartCode.GDBGObjects3= [];
gdjs.HeartCode.GDBGObjects4= [];
gdjs.HeartCode.GDTimeTxTObjects1= [];
gdjs.HeartCode.GDTimeTxTObjects2= [];
gdjs.HeartCode.GDTimeTxTObjects3= [];
gdjs.HeartCode.GDTimeTxTObjects4= [];
gdjs.HeartCode.GDBackObjects1= [];
gdjs.HeartCode.GDBackObjects2= [];
gdjs.HeartCode.GDBackObjects3= [];
gdjs.HeartCode.GDBackObjects4= [];

gdjs.HeartCode.conditionTrue_0 = {val:false};
gdjs.HeartCode.condition0IsTrue_0 = {val:false};
gdjs.HeartCode.condition1IsTrue_0 = {val:false};
gdjs.HeartCode.condition2IsTrue_0 = {val:false};
gdjs.HeartCode.condition3IsTrue_0 = {val:false};
gdjs.HeartCode.condition4IsTrue_0 = {val:false};
gdjs.HeartCode.conditionTrue_1 = {val:false};
gdjs.HeartCode.condition0IsTrue_1 = {val:false};
gdjs.HeartCode.condition1IsTrue_1 = {val:false};
gdjs.HeartCode.condition2IsTrue_1 = {val:false};
gdjs.HeartCode.condition3IsTrue_1 = {val:false};
gdjs.HeartCode.condition4IsTrue_1 = {val:false};


gdjs.HeartCode.mapOfGDgdjs_46HeartCode_46GDBackObjects1Objects = Hashtable.newFrom({"Back": gdjs.HeartCode.GDBackObjects1});
gdjs.HeartCode.eventsList0 = function(runtimeScene) {

{



}


{


{
{gdjs.evtTools.network.jsonToVariableStructure(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("GetCompareCurrentTimeNow")), runtimeScene.getVariables().get("GetCompareCurrentTimeNowJson"));
}{gdjs.evtTools.network.jsonToVariableStructure(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("GetTime")), runtimeScene.getVariables().get("GetTimeJson"));
}{runtimeScene.getVariables().get("CurrentDate").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("GetTimeJson").getChild("formatted")));
}}

}


{



}


{


gdjs.HeartCode.condition0IsTrue_0.val = false;
gdjs.HeartCode.condition1IsTrue_0.val = false;
gdjs.HeartCode.condition2IsTrue_0.val = false;
{
gdjs.HeartCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("Hearts")) == "0";
}if ( gdjs.HeartCode.condition0IsTrue_0.val ) {
{
gdjs.HeartCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("GetHeartState")) == "ok";
}if ( gdjs.HeartCode.condition1IsTrue_0.val ) {
{
{gdjs.HeartCode.conditionTrue_1 = gdjs.HeartCode.condition2IsTrue_0;
gdjs.HeartCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(18598012);
}
}}
}
if (gdjs.HeartCode.condition2IsTrue_0.val) {
{gdjs.evtTools.firebaseTools.database.getField("Users/" + gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "HeartRegen", runtimeScene.getVariables().get("LoadHeartRegen"), runtimeScene.getVariables().get("LoadHeartRegenState"));
}{gdjs.evtTools.sound.pauseSoundOnChannel(runtimeScene, 2);
}}

}


{



}


{


gdjs.HeartCode.condition0IsTrue_0.val = false;
gdjs.HeartCode.condition1IsTrue_0.val = false;
gdjs.HeartCode.condition2IsTrue_0.val = false;
{
gdjs.HeartCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("LoadHeartRegen").getChild("Activate")) == "true";
}if ( gdjs.HeartCode.condition0IsTrue_0.val ) {
{
gdjs.HeartCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("LoadHeartRegenState")) == "ok";
}if ( gdjs.HeartCode.condition1IsTrue_0.val ) {
{
{gdjs.HeartCode.conditionTrue_1 = gdjs.HeartCode.condition2IsTrue_0;
gdjs.HeartCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(18600828);
}
}}
}
if (gdjs.HeartCode.condition2IsTrue_0.val) {
{gdjs.evtTools.network.sendAsyncRequest("https://api.timezonedb.com/v2/get-time-zone?key=55L8WMD9RDC2&format=json&by=zone&zone=Asia/Manila", "", "GET", "", runtimeScene.getVariables().get("GetCompareCurrentTimeNow"), gdjs.VariablesContainer.badVariable);
}}

}


{


gdjs.HeartCode.condition0IsTrue_0.val = false;
gdjs.HeartCode.condition1IsTrue_0.val = false;
gdjs.HeartCode.condition2IsTrue_0.val = false;
{
gdjs.HeartCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("LoadHeartRegen").getChild("Activate")) != "true";
}if ( gdjs.HeartCode.condition0IsTrue_0.val ) {
{
gdjs.HeartCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("LoadHeartRegenState")) == "ok";
}if ( gdjs.HeartCode.condition1IsTrue_0.val ) {
{
{gdjs.HeartCode.conditionTrue_1 = gdjs.HeartCode.condition2IsTrue_0;
gdjs.HeartCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(18603028);
}
}}
}
if (gdjs.HeartCode.condition2IsTrue_0.val) {
{gdjs.evtTools.network.sendAsyncRequest("https://api.timezonedb.com/v2/get-time-zone?key=55L8WMD9RDC2&format=json&by=zone&zone=Asia/Manila", "", "GET", "", runtimeScene.getVariables().get("GetTime"), runtimeScene.getVariables().get("timestate"));
}}

}


{



}


{


gdjs.HeartCode.condition0IsTrue_0.val = false;
gdjs.HeartCode.condition1IsTrue_0.val = false;
{
gdjs.HeartCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("CurrentDate")) != "0";
}if ( gdjs.HeartCode.condition0IsTrue_0.val ) {
{
{gdjs.HeartCode.conditionTrue_1 = gdjs.HeartCode.condition1IsTrue_0;
gdjs.HeartCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(18604380);
}
}}
if (gdjs.HeartCode.condition1IsTrue_0.val) {
{gdjs.evtTools.firebaseTools.database.updateField("Users/" + gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "HeartRegen/Activate", "true", runtimeScene.getVariables().get("HeartRegenBooleanState"));
}{gdjs.evtTools.firebaseTools.database.updateField("Users/" + gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "HeartRegen/StartDate", gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("GetTimeJson").getChild("formatted")), runtimeScene.getVariables().get("StartState"));
}}

}


{


gdjs.HeartCode.condition0IsTrue_0.val = false;
gdjs.HeartCode.condition1IsTrue_0.val = false;
{
gdjs.HeartCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("rewardhour")) != "0";
}if ( gdjs.HeartCode.condition0IsTrue_0.val ) {
{
{gdjs.HeartCode.conditionTrue_1 = gdjs.HeartCode.condition1IsTrue_0;
gdjs.HeartCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(18607068);
}
}}
if (gdjs.HeartCode.condition1IsTrue_0.val) {
{gdjs.evtTools.firebaseTools.database.updateField("Users/" + gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "HeartRegen/ReadHeartDate", gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("rewardhour")), runtimeScene.getVariables().get("ReadRewardDateState"));
}}

}


{


gdjs.HeartCode.condition0IsTrue_0.val = false;
gdjs.HeartCode.condition1IsTrue_0.val = false;
{
gdjs.HeartCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(0)) != "0";
}if ( gdjs.HeartCode.condition0IsTrue_0.val ) {
{
{gdjs.HeartCode.conditionTrue_1 = gdjs.HeartCode.condition1IsTrue_0;
gdjs.HeartCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(18608884);
}
}}
if (gdjs.HeartCode.condition1IsTrue_0.val) {
{gdjs.evtTools.firebaseTools.database.updateField("Users/" + gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "HeartRegen/RegenDate", gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(0)), runtimeScene.getVariables().get("RegenDateState"));
}}

}


{


gdjs.HeartCode.condition0IsTrue_0.val = false;
gdjs.HeartCode.condition1IsTrue_0.val = false;
gdjs.HeartCode.condition2IsTrue_0.val = false;
{
gdjs.HeartCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("RegenDateState")) == "ok";
}if ( gdjs.HeartCode.condition0IsTrue_0.val ) {
{
gdjs.HeartCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("ReadRewardDateState")) == "ok";
}if ( gdjs.HeartCode.condition1IsTrue_0.val ) {
{
{gdjs.HeartCode.conditionTrue_1 = gdjs.HeartCode.condition2IsTrue_0;
gdjs.HeartCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(18611092);
}
}}
}
if (gdjs.HeartCode.condition2IsTrue_0.val) {
{runtimeScene.getVariables().get("LoadHeartRegen").getChild("ReadHeartDate").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("rewardhour")));
}}

}


{



}


{


gdjs.HeartCode.condition0IsTrue_0.val = false;
gdjs.HeartCode.condition1IsTrue_0.val = false;
{
gdjs.HeartCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("RegenReady")) == "true";
}if ( gdjs.HeartCode.condition0IsTrue_0.val ) {
{
{gdjs.HeartCode.conditionTrue_1 = gdjs.HeartCode.condition1IsTrue_0;
gdjs.HeartCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(18612516);
}
}}
if (gdjs.HeartCode.condition1IsTrue_0.val) {
{gdjs.evtTools.firebaseTools.database.updateField("Users/" + gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Hearts", "3", runtimeScene.getVariables().get("UpdateHeartState"));
}}

}


{


gdjs.HeartCode.condition0IsTrue_0.val = false;
gdjs.HeartCode.condition1IsTrue_0.val = false;
{
gdjs.HeartCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("UpdateHeartState")) == "ok";
}if ( gdjs.HeartCode.condition0IsTrue_0.val ) {
{
{gdjs.HeartCode.conditionTrue_1 = gdjs.HeartCode.condition1IsTrue_0;
gdjs.HeartCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(18614220);
}
}}
if (gdjs.HeartCode.condition1IsTrue_0.val) {
{gdjs.evtTools.firebaseTools.database.deleteField("Users/" + gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "HeartRegen", runtimeScene.getVariables().get("DeleteHeartRegen"));
}}

}


{


gdjs.HeartCode.condition0IsTrue_0.val = false;
gdjs.HeartCode.condition1IsTrue_0.val = false;
{
gdjs.HeartCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("DeleteHeartRegen")) == "ok";
}if ( gdjs.HeartCode.condition0IsTrue_0.val ) {
{
{gdjs.HeartCode.conditionTrue_1 = gdjs.HeartCode.condition1IsTrue_0;
gdjs.HeartCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(18616100);
}
}}
if (gdjs.HeartCode.condition1IsTrue_0.val) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("ShowFullHeart"), true);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("TriggerHeartRegen"), false);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Home", false);
}}

}


};gdjs.HeartCode.userFunc0xbe38b0 = function(runtimeScene) {
"use strict";
//get the current time on the scene
var currentdatevar = runtimeScene.getVariables().get("CurrentDate").getAsString();

//update the time
var rewardtime = new Date(currentdatevar);
rewardtime.setHours(rewardtime.getHours() + 2);

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
gdjs.HeartCode.eventsList1 = function(runtimeScene) {

{


gdjs.HeartCode.userFunc0xbe38b0(runtimeScene);

}


};gdjs.HeartCode.userFunc0xbe3c88 = function(runtimeScene) {
"use strict";
//Get the current time
var timenow = runtimeScene.getVariables().get("TimeNow").getAsString();

//Get the rewarded time
var getrewardon =  runtimeScene.getVariables().get("HeartRegenOn").getAsString();

var d1 = new Date(timenow);
var d2 = new Date(getrewardon);

if (d1 > d2) {
    runtimeScene.getVariables().get("RegenReady").setString("true");
} else {
    runtimeScene.getVariables().get("RegenReady").setString("false");
}
};
gdjs.HeartCode.eventsList2 = function(runtimeScene) {

{


gdjs.HeartCode.userFunc0xbe3c88(runtimeScene);

}


};gdjs.HeartCode.eventsList3 = function(runtimeScene) {

{


gdjs.HeartCode.eventsList0(runtimeScene);
}


{



}


{


gdjs.HeartCode.condition0IsTrue_0.val = false;
{
gdjs.HeartCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("CurrentDate")) != "0";
}if (gdjs.HeartCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.HeartCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


{
{runtimeScene.getVariables().get("TimeNow").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("GetCompareCurrentTimeNowJson").getChild("formatted")));
}{runtimeScene.getVariables().get("HeartRegenOn").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("LoadHeartRegen").getChild("RegenDate")));
}}

}


{


gdjs.HeartCode.condition0IsTrue_0.val = false;
{
gdjs.HeartCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("TimeNow")) != "0";
}if (gdjs.HeartCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.HeartCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.HeartCode.eventsList4 = function(runtimeScene) {

{



}


{


{
{gdjs.evtTools.network.jsonToVariableStructure(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("GetCompareCurrentTimeNow")), runtimeScene.getVariables().get("GetCompareCurrentTimeNowJson"));
}{gdjs.evtTools.network.jsonToVariableStructure(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("GetTime")), runtimeScene.getVariables().get("GetTimeJson"));
}{runtimeScene.getVariables().get("CurrentDate").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("GetTimeJson").getChild("formatted")));
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("TimeTxT"), gdjs.HeartCode.GDTimeTxTObjects1);
{for(var i = 0, len = gdjs.HeartCode.GDTimeTxTObjects1.length ;i < len;++i) {
    gdjs.HeartCode.GDTimeTxTObjects1[i].setTextAlignment("center");
}
}{for(var i = 0, len = gdjs.HeartCode.GDTimeTxTObjects1.length ;i < len;++i) {
    gdjs.HeartCode.GDTimeTxTObjects1[i].setString("Check back later on " + gdjs.evtTools.string.newLine() + gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("LoadHeartRegen").getChild("ReadHeartDate")));
}
}{for(var i = 0, len = gdjs.HeartCode.GDTimeTxTObjects1.length ;i < len;++i) {
    gdjs.HeartCode.GDTimeTxTObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}}

}


{



}


{


gdjs.HeartCode.condition0IsTrue_0.val = false;
{
gdjs.HeartCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.HeartCode.condition0IsTrue_0.val) {
{gdjs.evtTools.firebaseTools.database.getField("Users/" + gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "HeartRegen", runtimeScene.getVariables().get("LoadHeartRegen"), runtimeScene.getVariables().get("LoadHeartRegenState"));
}{gdjs.evtTools.sound.pauseSoundOnChannel(runtimeScene, 2);
}}

}


{



}


{


gdjs.HeartCode.condition0IsTrue_0.val = false;
gdjs.HeartCode.condition1IsTrue_0.val = false;
gdjs.HeartCode.condition2IsTrue_0.val = false;
{
gdjs.HeartCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("LoadHeartRegen").getChild("Activate")) == "true";
}if ( gdjs.HeartCode.condition0IsTrue_0.val ) {
{
gdjs.HeartCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("LoadHeartRegenState")) == "ok";
}if ( gdjs.HeartCode.condition1IsTrue_0.val ) {
{
{gdjs.HeartCode.conditionTrue_1 = gdjs.HeartCode.condition2IsTrue_0;
gdjs.HeartCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(18504348);
}
}}
}
if (gdjs.HeartCode.condition2IsTrue_0.val) {
{gdjs.evtTools.network.sendAsyncRequest("https://api.timezonedb.com/v2/get-time-zone?key=55L8WMD9RDC2&format=json&by=zone&zone=Asia/Manila", "", "GET", "", runtimeScene.getVariables().get("GetCompareCurrentTimeNow"), gdjs.VariablesContainer.badVariable);
}}

}


{


gdjs.HeartCode.condition0IsTrue_0.val = false;
gdjs.HeartCode.condition1IsTrue_0.val = false;
gdjs.HeartCode.condition2IsTrue_0.val = false;
{
gdjs.HeartCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("LoadHeartRegen").getChild("Activate")) != "true";
}if ( gdjs.HeartCode.condition0IsTrue_0.val ) {
{
gdjs.HeartCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("LoadHeartRegenState")) == "ok";
}if ( gdjs.HeartCode.condition1IsTrue_0.val ) {
{
{gdjs.HeartCode.conditionTrue_1 = gdjs.HeartCode.condition2IsTrue_0;
gdjs.HeartCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(18501932);
}
}}
}
if (gdjs.HeartCode.condition2IsTrue_0.val) {
{gdjs.evtTools.network.sendAsyncRequest("https://api.timezonedb.com/v2/get-time-zone?key=55L8WMD9RDC2&format=json&by=zone&zone=Asia/Manila", "", "GET", "", runtimeScene.getVariables().get("GetTime"), runtimeScene.getVariables().get("timestate"));
}}

}


{



}


{


gdjs.HeartCode.condition0IsTrue_0.val = false;
gdjs.HeartCode.condition1IsTrue_0.val = false;
{
gdjs.HeartCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("CurrentDate")) != "0";
}if ( gdjs.HeartCode.condition0IsTrue_0.val ) {
{
{gdjs.HeartCode.conditionTrue_1 = gdjs.HeartCode.condition1IsTrue_0;
gdjs.HeartCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(18510748);
}
}}
if (gdjs.HeartCode.condition1IsTrue_0.val) {
{gdjs.evtTools.firebaseTools.database.updateField("Users/" + gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "HeartRegen/Activate", "true", runtimeScene.getVariables().get("HeartRegenBooleanState"));
}{gdjs.evtTools.firebaseTools.database.updateField("Users/" + gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "HeartRegen/StartDate", gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("GetTimeJson").getChild("formatted")), runtimeScene.getVariables().get("StartState"));
}}

}


{


gdjs.HeartCode.condition0IsTrue_0.val = false;
gdjs.HeartCode.condition1IsTrue_0.val = false;
{
gdjs.HeartCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("rewardhour")) != "0";
}if ( gdjs.HeartCode.condition0IsTrue_0.val ) {
{
{gdjs.HeartCode.conditionTrue_1 = gdjs.HeartCode.condition1IsTrue_0;
gdjs.HeartCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(18519620);
}
}}
if (gdjs.HeartCode.condition1IsTrue_0.val) {
{gdjs.evtTools.firebaseTools.database.updateField("Users/" + gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "HeartRegen/ReadHeartDate", gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("rewardhour")), runtimeScene.getVariables().get("ReadRewardDateState"));
}}

}


{


gdjs.HeartCode.condition0IsTrue_0.val = false;
gdjs.HeartCode.condition1IsTrue_0.val = false;
{
gdjs.HeartCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(0)) != "0";
}if ( gdjs.HeartCode.condition0IsTrue_0.val ) {
{
{gdjs.HeartCode.conditionTrue_1 = gdjs.HeartCode.condition1IsTrue_0;
gdjs.HeartCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(18502676);
}
}}
if (gdjs.HeartCode.condition1IsTrue_0.val) {
{gdjs.evtTools.firebaseTools.database.updateField("Users/" + gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "HeartRegen/RegenDate", gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(0)), runtimeScene.getVariables().get("RegenDateState"));
}}

}


{


gdjs.HeartCode.condition0IsTrue_0.val = false;
gdjs.HeartCode.condition1IsTrue_0.val = false;
gdjs.HeartCode.condition2IsTrue_0.val = false;
gdjs.HeartCode.condition3IsTrue_0.val = false;
{
gdjs.HeartCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("RegenDateState")) == "ok";
}if ( gdjs.HeartCode.condition0IsTrue_0.val ) {
{
gdjs.HeartCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("ReadRewardDateState")) == "ok";
}if ( gdjs.HeartCode.condition1IsTrue_0.val ) {
{
gdjs.HeartCode.condition2IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("HeartRegenBooleanState")) == "ok";
}if ( gdjs.HeartCode.condition2IsTrue_0.val ) {
{
{gdjs.HeartCode.conditionTrue_1 = gdjs.HeartCode.condition3IsTrue_0;
gdjs.HeartCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(18533820);
}
}}
}
}
if (gdjs.HeartCode.condition3IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Heart", false);
}}

}


{



}


{


gdjs.HeartCode.condition0IsTrue_0.val = false;
gdjs.HeartCode.condition1IsTrue_0.val = false;
{
gdjs.HeartCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("RegenReady")) == "true";
}if ( gdjs.HeartCode.condition0IsTrue_0.val ) {
{
{gdjs.HeartCode.conditionTrue_1 = gdjs.HeartCode.condition1IsTrue_0;
gdjs.HeartCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(18499756);
}
}}
if (gdjs.HeartCode.condition1IsTrue_0.val) {
{gdjs.evtTools.firebaseTools.database.updateField("Users/" + gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Hearts", "3", runtimeScene.getVariables().get("UpdateHeartState"));
}}

}


{


gdjs.HeartCode.condition0IsTrue_0.val = false;
gdjs.HeartCode.condition1IsTrue_0.val = false;
{
gdjs.HeartCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("UpdateHeartState")) == "ok";
}if ( gdjs.HeartCode.condition0IsTrue_0.val ) {
{
{gdjs.HeartCode.conditionTrue_1 = gdjs.HeartCode.condition1IsTrue_0;
gdjs.HeartCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(18499532);
}
}}
if (gdjs.HeartCode.condition1IsTrue_0.val) {
{gdjs.evtTools.firebaseTools.database.deleteField("Users/" + gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "HeartRegen", runtimeScene.getVariables().get("DeleteHeartRegen"));
}}

}


{


gdjs.HeartCode.condition0IsTrue_0.val = false;
gdjs.HeartCode.condition1IsTrue_0.val = false;
{
gdjs.HeartCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("DeleteHeartRegen")) == "ok";
}if ( gdjs.HeartCode.condition0IsTrue_0.val ) {
{
{gdjs.HeartCode.conditionTrue_1 = gdjs.HeartCode.condition1IsTrue_0;
gdjs.HeartCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(18534996);
}
}}
if (gdjs.HeartCode.condition1IsTrue_0.val) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("ShowFullHeart"), true);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Home", false);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.HeartCode.GDBackObjects1);

gdjs.HeartCode.condition0IsTrue_0.val = false;
gdjs.HeartCode.condition1IsTrue_0.val = false;
gdjs.HeartCode.condition2IsTrue_0.val = false;
{
gdjs.HeartCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.HeartCode.mapOfGDgdjs_46HeartCode_46GDBackObjects1Objects, runtimeScene, true, false);
}if ( gdjs.HeartCode.condition0IsTrue_0.val ) {
{
gdjs.HeartCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.HeartCode.condition1IsTrue_0.val ) {
{
{gdjs.HeartCode.conditionTrue_1 = gdjs.HeartCode.condition2IsTrue_0;
gdjs.HeartCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(18518300);
}
}}
}
if (gdjs.HeartCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Dashboard", false);
}}

}


{



}


{


gdjs.HeartCode.condition0IsTrue_0.val = false;
{
gdjs.HeartCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("TriggerHeartRegen"), true);
}if (gdjs.HeartCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.HeartCode.eventsList3(runtimeScene);} //End of subevents
}

}


};

gdjs.HeartCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.HeartCode.GDBGObjects1.length = 0;
gdjs.HeartCode.GDBGObjects2.length = 0;
gdjs.HeartCode.GDBGObjects3.length = 0;
gdjs.HeartCode.GDBGObjects4.length = 0;
gdjs.HeartCode.GDTimeTxTObjects1.length = 0;
gdjs.HeartCode.GDTimeTxTObjects2.length = 0;
gdjs.HeartCode.GDTimeTxTObjects3.length = 0;
gdjs.HeartCode.GDTimeTxTObjects4.length = 0;
gdjs.HeartCode.GDBackObjects1.length = 0;
gdjs.HeartCode.GDBackObjects2.length = 0;
gdjs.HeartCode.GDBackObjects3.length = 0;
gdjs.HeartCode.GDBackObjects4.length = 0;

gdjs.HeartCode.eventsList4(runtimeScene);

return;

}

gdjs['HeartCode'] = gdjs.HeartCode;
