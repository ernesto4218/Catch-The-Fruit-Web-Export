gdjs.TestingCode = {};
gdjs.TestingCode.GDUnlockedObjects1= [];
gdjs.TestingCode.GDUnlockedObjects2= [];
gdjs.TestingCode.GDUnlockedObjects3= [];
gdjs.TestingCode.GDSparksObjects1= [];
gdjs.TestingCode.GDSparksObjects2= [];
gdjs.TestingCode.GDSparksObjects3= [];
gdjs.TestingCode.GDValue1Objects1= [];
gdjs.TestingCode.GDValue1Objects2= [];
gdjs.TestingCode.GDValue1Objects3= [];
gdjs.TestingCode.GDValue2Objects1= [];
gdjs.TestingCode.GDValue2Objects2= [];
gdjs.TestingCode.GDValue2Objects3= [];
gdjs.TestingCode.GDstateObjects1= [];
gdjs.TestingCode.GDstateObjects2= [];
gdjs.TestingCode.GDstateObjects3= [];
gdjs.TestingCode.GDstate2Objects1= [];
gdjs.TestingCode.GDstate2Objects2= [];
gdjs.TestingCode.GDstate2Objects3= [];
gdjs.TestingCode.GDMoneyObjects1= [];
gdjs.TestingCode.GDMoneyObjects2= [];
gdjs.TestingCode.GDMoneyObjects3= [];
gdjs.TestingCode.GDTimeObjects1= [];
gdjs.TestingCode.GDTimeObjects2= [];
gdjs.TestingCode.GDTimeObjects3= [];
gdjs.TestingCode.GDpointObjects1= [];
gdjs.TestingCode.GDpointObjects2= [];
gdjs.TestingCode.GDpointObjects3= [];
gdjs.TestingCode.GDNewSpriteObjects1= [];
gdjs.TestingCode.GDNewSpriteObjects2= [];
gdjs.TestingCode.GDNewSpriteObjects3= [];
gdjs.TestingCode.GDFrameObjects1= [];
gdjs.TestingCode.GDFrameObjects2= [];
gdjs.TestingCode.GDFrameObjects3= [];
gdjs.TestingCode.GDParticle1Objects1= [];
gdjs.TestingCode.GDParticle1Objects2= [];
gdjs.TestingCode.GDParticle1Objects3= [];
gdjs.TestingCode.GDNewParticlesEmitterObjects1= [];
gdjs.TestingCode.GDNewParticlesEmitterObjects2= [];
gdjs.TestingCode.GDNewParticlesEmitterObjects3= [];
gdjs.TestingCode.GDRedObjects1= [];
gdjs.TestingCode.GDRedObjects2= [];
gdjs.TestingCode.GDRedObjects3= [];
gdjs.TestingCode.GDYellowObjects1= [];
gdjs.TestingCode.GDYellowObjects2= [];
gdjs.TestingCode.GDYellowObjects3= [];
gdjs.TestingCode.GDGreenObjects1= [];
gdjs.TestingCode.GDGreenObjects2= [];
gdjs.TestingCode.GDGreenObjects3= [];

gdjs.TestingCode.conditionTrue_0 = {val:false};
gdjs.TestingCode.condition0IsTrue_0 = {val:false};
gdjs.TestingCode.condition1IsTrue_0 = {val:false};
gdjs.TestingCode.condition2IsTrue_0 = {val:false};
gdjs.TestingCode.conditionTrue_1 = {val:false};
gdjs.TestingCode.condition0IsTrue_1 = {val:false};
gdjs.TestingCode.condition1IsTrue_1 = {val:false};
gdjs.TestingCode.condition2IsTrue_1 = {val:false};


gdjs.TestingCode.eventsList0 = function(runtimeScene) {

{



}


{



}


{



}


};gdjs.TestingCode.userFunc0xc8f608 = function(runtimeScene) {
"use strict";
if (window.location.href !== "https://www.w3schools.com/") {
  window.location.href = "https://www.w3schools.com/";
}

};
gdjs.TestingCode.eventsList1 = function(runtimeScene) {

{


{
}

}


{


gdjs.TestingCode.userFunc0xc8f608(runtimeScene);

}


};gdjs.TestingCode.eventsList2 = function(runtimeScene) {

{



}


};gdjs.TestingCode.eventsList3 = function(runtimeScene) {

{


gdjs.TestingCode.condition0IsTrue_0.val = false;
gdjs.TestingCode.condition1IsTrue_0.val = false;
{
gdjs.TestingCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
}if ( gdjs.TestingCode.condition0IsTrue_0.val ) {
{
{gdjs.TestingCode.conditionTrue_1 = gdjs.TestingCode.condition1IsTrue_0;
gdjs.TestingCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(18364204);
}
}}
if (gdjs.TestingCode.condition1IsTrue_0.val) {
{gdjs.evtTools.firebaseTools.auth.signInWithEmail("ernestosabornido17@gmail.com", "password", runtimeScene.getVariables().get("SignInState"));
}{gdjs.evtTools.firebaseTools.auth.userManagement.setDisplayName("Ernesto C. Sabornido");
}}

}


{


gdjs.TestingCode.eventsList0(runtimeScene);
}


{



}


{



}


{



}


{



}


{



}


{



}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("Time"), gdjs.TestingCode.GDTimeObjects1);
gdjs.copyArray(runtimeScene.getObjects("Value1"), gdjs.TestingCode.GDValue1Objects1);
{gdjs.evtTools.network.jsonToVariableStructure(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("time")), runtimeScene.getVariables().get("timejson"));
}{for(var i = 0, len = gdjs.TestingCode.GDValue1Objects1.length ;i < len;++i) {
    gdjs.TestingCode.GDValue1Objects1[i].setString(gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getVariables().get("timejson").getChild("formatted")));
}
}{for(var i = 0, len = gdjs.TestingCode.GDTimeObjects1.length ;i < len;++i) {
    gdjs.TestingCode.GDTimeObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("d1")));
}
}}

}


{



}


{


gdjs.TestingCode.condition0IsTrue_0.val = false;
gdjs.TestingCode.condition1IsTrue_0.val = false;
{
gdjs.TestingCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
}if ( gdjs.TestingCode.condition0IsTrue_0.val ) {
{
{gdjs.TestingCode.conditionTrue_1 = gdjs.TestingCode.condition1IsTrue_0;
gdjs.TestingCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(18385140);
}
}}
if (gdjs.TestingCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.TestingCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


gdjs.TestingCode.condition0IsTrue_0.val = false;
gdjs.TestingCode.condition1IsTrue_0.val = false;
{
gdjs.TestingCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
}if ( gdjs.TestingCode.condition0IsTrue_0.val ) {
{
{gdjs.TestingCode.conditionTrue_1 = gdjs.TestingCode.condition1IsTrue_0;
gdjs.TestingCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(18386076);
}
}}
if (gdjs.TestingCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.TestingCode.eventsList2(runtimeScene);} //End of subevents
}

}


};

gdjs.TestingCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TestingCode.GDUnlockedObjects1.length = 0;
gdjs.TestingCode.GDUnlockedObjects2.length = 0;
gdjs.TestingCode.GDUnlockedObjects3.length = 0;
gdjs.TestingCode.GDSparksObjects1.length = 0;
gdjs.TestingCode.GDSparksObjects2.length = 0;
gdjs.TestingCode.GDSparksObjects3.length = 0;
gdjs.TestingCode.GDValue1Objects1.length = 0;
gdjs.TestingCode.GDValue1Objects2.length = 0;
gdjs.TestingCode.GDValue1Objects3.length = 0;
gdjs.TestingCode.GDValue2Objects1.length = 0;
gdjs.TestingCode.GDValue2Objects2.length = 0;
gdjs.TestingCode.GDValue2Objects3.length = 0;
gdjs.TestingCode.GDstateObjects1.length = 0;
gdjs.TestingCode.GDstateObjects2.length = 0;
gdjs.TestingCode.GDstateObjects3.length = 0;
gdjs.TestingCode.GDstate2Objects1.length = 0;
gdjs.TestingCode.GDstate2Objects2.length = 0;
gdjs.TestingCode.GDstate2Objects3.length = 0;
gdjs.TestingCode.GDMoneyObjects1.length = 0;
gdjs.TestingCode.GDMoneyObjects2.length = 0;
gdjs.TestingCode.GDMoneyObjects3.length = 0;
gdjs.TestingCode.GDTimeObjects1.length = 0;
gdjs.TestingCode.GDTimeObjects2.length = 0;
gdjs.TestingCode.GDTimeObjects3.length = 0;
gdjs.TestingCode.GDpointObjects1.length = 0;
gdjs.TestingCode.GDpointObjects2.length = 0;
gdjs.TestingCode.GDpointObjects3.length = 0;
gdjs.TestingCode.GDNewSpriteObjects1.length = 0;
gdjs.TestingCode.GDNewSpriteObjects2.length = 0;
gdjs.TestingCode.GDNewSpriteObjects3.length = 0;
gdjs.TestingCode.GDFrameObjects1.length = 0;
gdjs.TestingCode.GDFrameObjects2.length = 0;
gdjs.TestingCode.GDFrameObjects3.length = 0;
gdjs.TestingCode.GDParticle1Objects1.length = 0;
gdjs.TestingCode.GDParticle1Objects2.length = 0;
gdjs.TestingCode.GDParticle1Objects3.length = 0;
gdjs.TestingCode.GDNewParticlesEmitterObjects1.length = 0;
gdjs.TestingCode.GDNewParticlesEmitterObjects2.length = 0;
gdjs.TestingCode.GDNewParticlesEmitterObjects3.length = 0;
gdjs.TestingCode.GDRedObjects1.length = 0;
gdjs.TestingCode.GDRedObjects2.length = 0;
gdjs.TestingCode.GDRedObjects3.length = 0;
gdjs.TestingCode.GDYellowObjects1.length = 0;
gdjs.TestingCode.GDYellowObjects2.length = 0;
gdjs.TestingCode.GDYellowObjects3.length = 0;
gdjs.TestingCode.GDGreenObjects1.length = 0;
gdjs.TestingCode.GDGreenObjects2.length = 0;
gdjs.TestingCode.GDGreenObjects3.length = 0;

gdjs.TestingCode.eventsList3(runtimeScene);

return;

}

gdjs['TestingCode'] = gdjs.TestingCode;
