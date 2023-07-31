gdjs.ExitCode = {};
gdjs.ExitCode.GDperrito_9595ansiedadObjects1= [];
gdjs.ExitCode.GDperrito_9595ansiedadObjects2= [];
gdjs.ExitCode.GDTextoObjects1= [];
gdjs.ExitCode.GDTextoObjects2= [];
gdjs.ExitCode.GDDebuffArrow2Objects1= [];
gdjs.ExitCode.GDDebuffArrow2Objects2= [];
gdjs.ExitCode.GDTexto2Objects1= [];
gdjs.ExitCode.GDTexto2Objects2= [];
gdjs.ExitCode.GDtexto3Objects1= [];
gdjs.ExitCode.GDtexto3Objects2= [];
gdjs.ExitCode.GDexitObjects1= [];
gdjs.ExitCode.GDexitObjects2= [];
gdjs.ExitCode.GDbackObjects1= [];
gdjs.ExitCode.GDbackObjects2= [];
gdjs.ExitCode.GDexit2Objects1= [];
gdjs.ExitCode.GDexit2Objects2= [];
gdjs.ExitCode.GDBackObjects1= [];
gdjs.ExitCode.GDBackObjects2= [];


gdjs.ExitCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("exit2"), gdjs.ExitCode.GDexit2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ExitCode.GDexit2Objects1.length;i<l;++i) {
    if ( gdjs.ExitCode.GDexit2Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.ExitCode.GDexit2Objects1[k] = gdjs.ExitCode.GDexit2Objects1[i];
        ++k;
    }
}
gdjs.ExitCode.GDexit2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("exit2"), gdjs.ExitCode.GDexit2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ExitCode.GDexit2Objects1.length;i<l;++i) {
    if ( gdjs.ExitCode.GDexit2Objects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.ExitCode.GDexit2Objects1[k] = gdjs.ExitCode.GDexit2Objects1[i];
        ++k;
    }
}
gdjs.ExitCode.GDexit2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.ExitCode.GDexit2Objects1 */
{for(var i = 0, len = gdjs.ExitCode.GDexit2Objects1.length ;i < len;++i) {
    gdjs.ExitCode.GDexit2Objects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("exit2"), gdjs.ExitCode.GDexit2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ExitCode.GDexit2Objects1.length;i<l;++i) {
    if ( !(gdjs.ExitCode.GDexit2Objects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.ExitCode.GDexit2Objects1[k] = gdjs.ExitCode.GDexit2Objects1[i];
        ++k;
    }
}
gdjs.ExitCode.GDexit2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.ExitCode.GDexit2Objects1 */
{for(var i = 0, len = gdjs.ExitCode.GDexit2Objects1.length ;i < len;++i) {
    gdjs.ExitCode.GDexit2Objects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.ExitCode.GDBackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ExitCode.GDBackObjects1.length;i<l;++i) {
    if ( gdjs.ExitCode.GDBackObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.ExitCode.GDBackObjects1[k] = gdjs.ExitCode.GDBackObjects1[i];
        ++k;
    }
}
gdjs.ExitCode.GDBackObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.ExitCode.GDBackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ExitCode.GDBackObjects1.length;i<l;++i) {
    if ( gdjs.ExitCode.GDBackObjects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.ExitCode.GDBackObjects1[k] = gdjs.ExitCode.GDBackObjects1[i];
        ++k;
    }
}
gdjs.ExitCode.GDBackObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.ExitCode.GDBackObjects1 */
{for(var i = 0, len = gdjs.ExitCode.GDBackObjects1.length ;i < len;++i) {
    gdjs.ExitCode.GDBackObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.ExitCode.GDBackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ExitCode.GDBackObjects1.length;i<l;++i) {
    if ( !(gdjs.ExitCode.GDBackObjects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.ExitCode.GDBackObjects1[k] = gdjs.ExitCode.GDBackObjects1[i];
        ++k;
    }
}
gdjs.ExitCode.GDBackObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.ExitCode.GDBackObjects1 */
{for(var i = 0, len = gdjs.ExitCode.GDBackObjects1.length ;i < len;++i) {
    gdjs.ExitCode.GDBackObjects1[i].setAnimation(0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "BubblyBogaloo_Assets\\Menu\\Bailen rochas y chetas - level.mp3", false, 20, 1);
}}

}


};

gdjs.ExitCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ExitCode.GDperrito_9595ansiedadObjects1.length = 0;
gdjs.ExitCode.GDperrito_9595ansiedadObjects2.length = 0;
gdjs.ExitCode.GDTextoObjects1.length = 0;
gdjs.ExitCode.GDTextoObjects2.length = 0;
gdjs.ExitCode.GDDebuffArrow2Objects1.length = 0;
gdjs.ExitCode.GDDebuffArrow2Objects2.length = 0;
gdjs.ExitCode.GDTexto2Objects1.length = 0;
gdjs.ExitCode.GDTexto2Objects2.length = 0;
gdjs.ExitCode.GDtexto3Objects1.length = 0;
gdjs.ExitCode.GDtexto3Objects2.length = 0;
gdjs.ExitCode.GDexitObjects1.length = 0;
gdjs.ExitCode.GDexitObjects2.length = 0;
gdjs.ExitCode.GDbackObjects1.length = 0;
gdjs.ExitCode.GDbackObjects2.length = 0;
gdjs.ExitCode.GDexit2Objects1.length = 0;
gdjs.ExitCode.GDexit2Objects2.length = 0;
gdjs.ExitCode.GDBackObjects1.length = 0;
gdjs.ExitCode.GDBackObjects2.length = 0;

gdjs.ExitCode.eventsList0(runtimeScene);

return;

}

gdjs['ExitCode'] = gdjs.ExitCode;
