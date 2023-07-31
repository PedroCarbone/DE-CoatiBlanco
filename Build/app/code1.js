gdjs.MenuCode = {};
gdjs.MenuCode.GDTitleObjects1= [];
gdjs.MenuCode.GDTitleObjects2= [];
gdjs.MenuCode.GDBubObjects1= [];
gdjs.MenuCode.GDBubObjects2= [];
gdjs.MenuCode.GDBobObjects1= [];
gdjs.MenuCode.GDBobObjects2= [];
gdjs.MenuCode.GDTablaObjects1= [];
gdjs.MenuCode.GDTablaObjects2= [];
gdjs.MenuCode.GDWalter_9595whiteObjects1= [];
gdjs.MenuCode.GDWalter_9595whiteObjects2= [];
gdjs.MenuCode.GDplay_9595buttonObjects1= [];
gdjs.MenuCode.GDplay_9595buttonObjects2= [];
gdjs.MenuCode.GDexit_9595buttonObjects1= [];
gdjs.MenuCode.GDexit_9595buttonObjects2= [];
gdjs.MenuCode.GDplayObjects1= [];
gdjs.MenuCode.GDplayObjects2= [];
gdjs.MenuCode.GDexitObjects1= [];
gdjs.MenuCode.GDexitObjects2= [];
gdjs.MenuCode.GDboobles2Objects1= [];
gdjs.MenuCode.GDboobles2Objects2= [];
gdjs.MenuCode.GDBlackDecoratedButtonObjects1= [];
gdjs.MenuCode.GDBlackDecoratedButtonObjects2= [];
gdjs.MenuCode.GDNewTextObjects1= [];
gdjs.MenuCode.GDNewTextObjects2= [];


gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("play_button"), gdjs.MenuCode.GDplay_9595buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDplay_9595buttonObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDplay_9595buttonObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDplay_9595buttonObjects1[k] = gdjs.MenuCode.GDplay_9595buttonObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDplay_9595buttonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("exit_button"), gdjs.MenuCode.GDexit_9595buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDexit_9595buttonObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDexit_9595buttonObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDexit_9595buttonObjects1[k] = gdjs.MenuCode.GDexit_9595buttonObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDexit_9595buttonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Exit", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("play_button"), gdjs.MenuCode.GDplay_9595buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDplay_9595buttonObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDplay_9595buttonObjects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDplay_9595buttonObjects1[k] = gdjs.MenuCode.GDplay_9595buttonObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDplay_9595buttonObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDplay_9595buttonObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDplay_9595buttonObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDplay_9595buttonObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("play_button"), gdjs.MenuCode.GDplay_9595buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDplay_9595buttonObjects1.length;i<l;++i) {
    if ( !(gdjs.MenuCode.GDplay_9595buttonObjects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDplay_9595buttonObjects1[k] = gdjs.MenuCode.GDplay_9595buttonObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDplay_9595buttonObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDplay_9595buttonObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDplay_9595buttonObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDplay_9595buttonObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("exit_button"), gdjs.MenuCode.GDexit_9595buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDexit_9595buttonObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDexit_9595buttonObjects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDexit_9595buttonObjects1[k] = gdjs.MenuCode.GDexit_9595buttonObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDexit_9595buttonObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDexit_9595buttonObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDexit_9595buttonObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDexit_9595buttonObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("exit_button"), gdjs.MenuCode.GDexit_9595buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDexit_9595buttonObjects1.length;i<l;++i) {
    if ( !(gdjs.MenuCode.GDexit_9595buttonObjects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDexit_9595buttonObjects1[k] = gdjs.MenuCode.GDexit_9595buttonObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDexit_9595buttonObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDexit_9595buttonObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDexit_9595buttonObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDexit_9595buttonObjects1[i].setAnimation(0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "BubblyBogaloo_Assets\\Menu\\Music Menu.mp3", 2, true, 20, 1);
}{gdjs.evtTools.sound.pauseMusicOnChannel(runtimeScene, 1);
}}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDTitleObjects1.length = 0;
gdjs.MenuCode.GDTitleObjects2.length = 0;
gdjs.MenuCode.GDBubObjects1.length = 0;
gdjs.MenuCode.GDBubObjects2.length = 0;
gdjs.MenuCode.GDBobObjects1.length = 0;
gdjs.MenuCode.GDBobObjects2.length = 0;
gdjs.MenuCode.GDTablaObjects1.length = 0;
gdjs.MenuCode.GDTablaObjects2.length = 0;
gdjs.MenuCode.GDWalter_9595whiteObjects1.length = 0;
gdjs.MenuCode.GDWalter_9595whiteObjects2.length = 0;
gdjs.MenuCode.GDplay_9595buttonObjects1.length = 0;
gdjs.MenuCode.GDplay_9595buttonObjects2.length = 0;
gdjs.MenuCode.GDexit_9595buttonObjects1.length = 0;
gdjs.MenuCode.GDexit_9595buttonObjects2.length = 0;
gdjs.MenuCode.GDplayObjects1.length = 0;
gdjs.MenuCode.GDplayObjects2.length = 0;
gdjs.MenuCode.GDexitObjects1.length = 0;
gdjs.MenuCode.GDexitObjects2.length = 0;
gdjs.MenuCode.GDboobles2Objects1.length = 0;
gdjs.MenuCode.GDboobles2Objects2.length = 0;
gdjs.MenuCode.GDBlackDecoratedButtonObjects1.length = 0;
gdjs.MenuCode.GDBlackDecoratedButtonObjects2.length = 0;
gdjs.MenuCode.GDNewTextObjects1.length = 0;
gdjs.MenuCode.GDNewTextObjects2.length = 0;

gdjs.MenuCode.eventsList0(runtimeScene);

return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
