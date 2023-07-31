gdjs.PausaCode = {};
gdjs.PausaCode.GDTitleObjects1= [];
gdjs.PausaCode.GDTitleObjects2= [];
gdjs.PausaCode.GDBubObjects1= [];
gdjs.PausaCode.GDBubObjects2= [];
gdjs.PausaCode.GDBobObjects1= [];
gdjs.PausaCode.GDBobObjects2= [];
gdjs.PausaCode.GDTablaObjects1= [];
gdjs.PausaCode.GDTablaObjects2= [];
gdjs.PausaCode.GDWalter_9595whiteObjects1= [];
gdjs.PausaCode.GDWalter_9595whiteObjects2= [];
gdjs.PausaCode.GDplay_9595buttonObjects1= [];
gdjs.PausaCode.GDplay_9595buttonObjects2= [];
gdjs.PausaCode.GDexit_9595buttonObjects1= [];
gdjs.PausaCode.GDexit_9595buttonObjects2= [];
gdjs.PausaCode.GDplayObjects1= [];
gdjs.PausaCode.GDplayObjects2= [];
gdjs.PausaCode.GDexitObjects1= [];
gdjs.PausaCode.GDexitObjects2= [];
gdjs.PausaCode.GDboobles2Objects1= [];
gdjs.PausaCode.GDboobles2Objects2= [];
gdjs.PausaCode.GDBlackDecoratedButtonObjects1= [];
gdjs.PausaCode.GDBlackDecoratedButtonObjects2= [];
gdjs.PausaCode.GDPausaObjects1= [];
gdjs.PausaCode.GDPausaObjects2= [];


gdjs.PausaCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("play_button"), gdjs.PausaCode.GDplay_9595buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PausaCode.GDplay_9595buttonObjects1.length;i<l;++i) {
    if ( gdjs.PausaCode.GDplay_9595buttonObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.PausaCode.GDplay_9595buttonObjects1[k] = gdjs.PausaCode.GDplay_9595buttonObjects1[i];
        ++k;
    }
}
gdjs.PausaCode.GDplay_9595buttonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Pausa");
}{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}{gdjs.evtTools.sound.pauseSoundOnChannel(runtimeScene, 2);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("exit_button"), gdjs.PausaCode.GDexit_9595buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PausaCode.GDexit_9595buttonObjects1.length;i<l;++i) {
    if ( gdjs.PausaCode.GDexit_9595buttonObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.PausaCode.GDexit_9595buttonObjects1[k] = gdjs.PausaCode.GDexit_9595buttonObjects1[i];
        ++k;
    }
}
gdjs.PausaCode.GDexit_9595buttonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("play_button"), gdjs.PausaCode.GDplay_9595buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PausaCode.GDplay_9595buttonObjects1.length;i<l;++i) {
    if ( gdjs.PausaCode.GDplay_9595buttonObjects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.PausaCode.GDplay_9595buttonObjects1[k] = gdjs.PausaCode.GDplay_9595buttonObjects1[i];
        ++k;
    }
}
gdjs.PausaCode.GDplay_9595buttonObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.PausaCode.GDplay_9595buttonObjects1 */
{for(var i = 0, len = gdjs.PausaCode.GDplay_9595buttonObjects1.length ;i < len;++i) {
    gdjs.PausaCode.GDplay_9595buttonObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("play_button"), gdjs.PausaCode.GDplay_9595buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PausaCode.GDplay_9595buttonObjects1.length;i<l;++i) {
    if ( !(gdjs.PausaCode.GDplay_9595buttonObjects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.PausaCode.GDplay_9595buttonObjects1[k] = gdjs.PausaCode.GDplay_9595buttonObjects1[i];
        ++k;
    }
}
gdjs.PausaCode.GDplay_9595buttonObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.PausaCode.GDplay_9595buttonObjects1 */
{for(var i = 0, len = gdjs.PausaCode.GDplay_9595buttonObjects1.length ;i < len;++i) {
    gdjs.PausaCode.GDplay_9595buttonObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("exit_button"), gdjs.PausaCode.GDexit_9595buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PausaCode.GDexit_9595buttonObjects1.length;i<l;++i) {
    if ( gdjs.PausaCode.GDexit_9595buttonObjects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.PausaCode.GDexit_9595buttonObjects1[k] = gdjs.PausaCode.GDexit_9595buttonObjects1[i];
        ++k;
    }
}
gdjs.PausaCode.GDexit_9595buttonObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.PausaCode.GDexit_9595buttonObjects1 */
{for(var i = 0, len = gdjs.PausaCode.GDexit_9595buttonObjects1.length ;i < len;++i) {
    gdjs.PausaCode.GDexit_9595buttonObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("exit_button"), gdjs.PausaCode.GDexit_9595buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PausaCode.GDexit_9595buttonObjects1.length;i<l;++i) {
    if ( !(gdjs.PausaCode.GDexit_9595buttonObjects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.PausaCode.GDexit_9595buttonObjects1[k] = gdjs.PausaCode.GDexit_9595buttonObjects1[i];
        ++k;
    }
}
gdjs.PausaCode.GDexit_9595buttonObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.PausaCode.GDexit_9595buttonObjects1 */
{for(var i = 0, len = gdjs.PausaCode.GDexit_9595buttonObjects1.length ;i < len;++i) {
    gdjs.PausaCode.GDexit_9595buttonObjects1[i].setAnimation(0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "BubblyBogaloo_Assets\\Menu\\Music Menu.mp3", 2, true, 20, 1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Pausa");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Pausa") >= 0.4;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Pausa");
}{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}{gdjs.evtTools.sound.pauseSoundOnChannel(runtimeScene, 2);
}{gdjs.evtTools.sound.setSoundOnChannelVolume(runtimeScene, 3, 20);
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "BubblyBogaloo_Assets\\SFX\\sound_level.mp3");
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "assets\\Llora_Nuls.mp3");
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.PausaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PausaCode.GDTitleObjects1.length = 0;
gdjs.PausaCode.GDTitleObjects2.length = 0;
gdjs.PausaCode.GDBubObjects1.length = 0;
gdjs.PausaCode.GDBubObjects2.length = 0;
gdjs.PausaCode.GDBobObjects1.length = 0;
gdjs.PausaCode.GDBobObjects2.length = 0;
gdjs.PausaCode.GDTablaObjects1.length = 0;
gdjs.PausaCode.GDTablaObjects2.length = 0;
gdjs.PausaCode.GDWalter_9595whiteObjects1.length = 0;
gdjs.PausaCode.GDWalter_9595whiteObjects2.length = 0;
gdjs.PausaCode.GDplay_9595buttonObjects1.length = 0;
gdjs.PausaCode.GDplay_9595buttonObjects2.length = 0;
gdjs.PausaCode.GDexit_9595buttonObjects1.length = 0;
gdjs.PausaCode.GDexit_9595buttonObjects2.length = 0;
gdjs.PausaCode.GDplayObjects1.length = 0;
gdjs.PausaCode.GDplayObjects2.length = 0;
gdjs.PausaCode.GDexitObjects1.length = 0;
gdjs.PausaCode.GDexitObjects2.length = 0;
gdjs.PausaCode.GDboobles2Objects1.length = 0;
gdjs.PausaCode.GDboobles2Objects2.length = 0;
gdjs.PausaCode.GDBlackDecoratedButtonObjects1.length = 0;
gdjs.PausaCode.GDBlackDecoratedButtonObjects2.length = 0;
gdjs.PausaCode.GDPausaObjects1.length = 0;
gdjs.PausaCode.GDPausaObjects2.length = 0;

gdjs.PausaCode.eventsList0(runtimeScene);

return;

}

gdjs['PausaCode'] = gdjs.PausaCode;
