// ==UserScript==
// @name        New My hack DA TV mod
// @namespace    -
// @version     34
// @description  'BEST HACK TO MOOMOO IO' Mod tools - 【HatMacro & settings - ESC】【Better Map】 【More FPS & CPS】【AutoChat - 8 Numpad / ▲】【ServerCrash - 2 Numpad / ▼】【KillCheat?】【LabyWebsite - top left】【Windmill - N】【CircleTrap/boostpad - I】【CircleWindmill - O】【CX Insta [double spike] - spacebar】【Boost&spike - G】【AutoHeal】【Insta - R】【Age1 Insta - U】 【WeaponRadius [Katana, Sword, Poleram]】【More FPS * Choose 0-25】【More CPS * 30】【-50% ClownHat chance】【Aimcursor】【Map outlined in blue】【auto instakill bot need 50+ food】【working on regular bot mode】
// @author      Nuro
// @match        *://moomoo.io/*
// @match        *://sandbox.moomoo.io/*
// @grant        none
// @require https://greasyfork.org/scripts/368273-msgpack/code/msgpack.js?version=598723
// @require http://code.jquery.com/jquery-3.3.1.min.js
// @require https://code.jquery.com/ui/1.12.0/jquery-ui.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/jquery-confirm/3.3.0/jquery-confirm.min.js
// ==/UserScript==

$('#mapDisplay').css({
    'background': 'url("http://i.imgur.com/Qllo1mA.png")'
});


$("#mapDisplay").css({background: `url('https://i.imgur.com/fgFsQJp.png')`});
$("#mapDisplay").css({
    'border-radious':'300px',
    'border':'3px solid #5196ab'
});
$("#consentBlock").css({display: "none"});
//$("#youtuberOf").css({display: "none"});
$("#mapDisplay").css({background: `url('https://i.imgur.com/fgFsQJp.png')`});

$('#menuContainer').append('For the Mult-Mod Website click on the wolf symbol in the top left')


var countr = 0;
var delay = 0;
var rand = Math.round(Math.random()*1000);



var sANC = 1;
var aNC = [255,255,0];
var rANC = [0,255];

var mk = document.getElementById("gameCanvas").getContext("2d");
var Laa = 0;
var Lab = 0;
var aVZ = 0;
var fBX = "Whats up";
var resForRANC = 1;

// 1920-1080

function rainbowColor(){
    if(resForRANC === 1){
        aNC = [124,224,61,1];
        resForRANC = 0;
    }
    if(aNC[0] === 255 && aNC[1] !== 255 && aNC[2] === 0){aNC[1] += 255/rANC[1];}
    if(aNC[0] !== 0 && aNC[1] === 255 && aNC[2] === 0){aNC[0] += 255/rANC[1]*-1;}
    if(aNC[0] === 0 && aNC[1] === 255 && aNC[2] !== 255){aNC[2] += 255/rANC[1];}
    if(aNC[0] === 0 && aNC[1] !== 0 && aNC[2] === 255){aNC[1] += 255/rANC[1]*-1;}
    if(aNC[0] !== 255 && aNC[1] === 0 && aNC[2] === 255){aNC[0] += 255/rANC[1];}
    if(aNC[0] === 255 && aNC[1] === 0 && aNC[2] !== 0){aNC[2] += 255/rANC[1]*-1;}
    if(aNC[0] < 0){aNC[0] = 0;} if(255 < aNC[0]){aNC[0] = 255;}
    if(aNC[1] < 0){aNC[1] = 0;} if(255 < aNC[1]){aNC[1] = 255;}
    if(aNC[2] < 0){aNC[2] = 0;} if(255 < aNC[2]){aNC[2] = 255;}
}

function katie(){
    if(document.getElementById("actionBarItem0")){
        if(document.getElementById("actionBarItem3").style.display === "inline-block"){
            if(fBX !== 3){
                aVZ = [[0,480],[0,360],[0,255]];
                if(sANC === 1){aNC = [255,0,0];}
                fBX = 3;
            }

            aVZ[0][0] += 1;
            if(aVZ[0][1] <= aVZ[0][0]){
                aVZ[0][0] = 0;
            }
            aVZ[1][0] += 1;
            if(aVZ[1][1] <= aVZ[1][0]){
                aVZ[1][0] = 0;
            }
            aVZ[2][0] += 1;
            if(aVZ[2][1] <= aVZ[2][0]){
                aVZ[2][0] = 0;
            }

            mk.beginPath();
            mk.lineWidth = 24;
            mk.strokeStyle = "rgb("+Math.round(aNC[0])+","+Math.round(aNC[1])+","+Math.round(aNC[2])+",0.625)";
            mk.arc(960,540,212,0+Math.PI/(aVZ[0][1]/2)*aVZ[0][0],7/8*Math.PI+Math.PI/(aVZ[0][1]/2)*aVZ[0][0]);
            mk.stroke();
            mk.beginPath();
            mk.lineWidth = 30;
            mk.strokeStyle = "rgb("+Math.round(aNC[0]/255*220)+","+Math.round(aNC[1]/255*220)+","+Math.round(aNC[2]/255*220)+",0.625)";
            mk.arc(960,540,185,0+Math.PI/(aVZ[1][1]/2)*aVZ[1][0],2/3*Math.PI+Math.PI/(aVZ[1][1]/2)*aVZ[1][0]);
            mk.stroke();
            mk.beginPath();
            mk.lineWidth = 45;
            mk.strokeStyle = "rgb("+Math.round(aNC[0])+","+Math.round(aNC[1])+","+Math.round(aNC[2])+",0.5)";
            mk.arc(960,540,85,0+Math.PI/(aVZ[2][1]/2)*aVZ[2][0],1/3*Math.PI+Math.PI/(aVZ[2][1]/2)*aVZ[2][0]);
            mk.stroke();
        }
        if(document.getElementById("actionBarItem4").style.display === "inline-block"){
            if(fBX !== 4){
                aVZ = [[0,360],[0,250],[0,225],[0,250]];
                if(sANC === 1){aNC = [255,0,0];}
                fBX = 4;
            }

            aVZ[0][0] += -1;
            if(aVZ[0][1] <= aVZ[0][0]){
                aVZ[0][0] = 0;
            }
            aVZ[1][0] += 1;
            if(aVZ[1][1] <= aVZ[1][0]){
                aVZ[1][0] = 0;
            }
            aVZ[2][0] += -1;
            if(aVZ[2][1] <= aVZ[2][0]){
                aVZ[2][0] = 0;
            }
            aVZ[3][0] += 1;
            if(aVZ[3][1] <= aVZ[3][0]){
                aVZ[3][0] = 0;
            }

            mk.beginPath();
            mk.lineWidth = 36;
            mk.strokeStyle = "rgb("+Math.round(aNC[0])+","+Math.round(aNC[1])+","+Math.round(aNC[2])+",0.45)";
            mk.arc(960,540,251,0+Math.PI/(aVZ[0][1]/2)*aVZ[0][0],15/16*Math.PI+Math.PI/(aVZ[0][1]/2)*aVZ[0][0]);
            mk.stroke();
            mk.beginPath();
            mk.lineWidth = 46;
            mk.strokeStyle = "rgb("+Math.round(aNC[0]/255*220)+","+Math.round(aNC[1]/255*220)+","+Math.round(aNC[2]/255*220)+",0.45)";
            mk.arc(960,540,210,0+Math.PI/(aVZ[1][1]/2)*aVZ[1][0],7/9*Math.PI+Math.PI/(aVZ[1][1]/2)*aVZ[1][0]);
            mk.stroke();
            mk.beginPath();
            mk.lineWidth = 32;
            mk.strokeStyle = "rgb("+Math.round(aNC[0])+","+Math.round(aNC[1])+","+Math.round(aNC[2])+",0.383)";
            mk.arc(960,540,109,0+Math.PI/(aVZ[2][1]/2)*aVZ[2][0],2/3*Math.PI+Math.PI/(aVZ[2][1]/2)*aVZ[2][0]);
            mk.stroke();
            mk.beginPath();
            mk.lineWidth = 26;
            mk.strokeStyle = "rgb("+Math.round(aNC[0]/255*235)+","+Math.round(aNC[1]/255*235)+","+Math.round(aNC[2]/255*235)+",0.383)";
            mk.arc(960,540,80,0+Math.PI/(aVZ[3][1]/2)*aVZ[3][0],7/8*Math.PI+Math.PI/(aVZ[3][1]/2)*aVZ[3][0]);
            mk.stroke();
        }
        if(document.getElementById("actionBarItem5").style.display === "inline-block"){
            if(fBX !== 5){
                aVZ = [[0,250,2.5,10,1.2]];
                if(sANC === 1){aNC = [255,0,255];}
                fBX = 5;
            }

            aVZ[0][0] += 1;
            if(aVZ[0][1] <= aVZ[0][0]){
                aVZ[0][0] = 0;
            }

            for(Laa = 0; Laa < Math.round(aVZ[0][1]/5*2); Laa++){
                mk.beginPath();
                mk.lineWidth = 26;
                mk.strokeStyle = "rgb("+Math.round(aNC[0]/255*235)+","+Math.round(aNC[1]/255*235)+","+Math.round(aNC[2]/255*235)+",0.5)";
                mk.arc(960,540,200+Math.sin(aVZ[0][3]*Math.PI/(aVZ[0][1]/aVZ[0][2])*(Laa-aVZ[0][0]))*aVZ[0][3]*aVZ[0][4],0-2*Math.PI/aVZ[0][1]*Laa+2*Math.PI/aVZ[0][1]*aVZ[0][0],2*Math.PI/aVZ[0][1]-2*Math.PI/aVZ[0][1]*Laa+2*Math.PI/aVZ[0][1]*aVZ[0][0]);
                mk.stroke();
            }
        }
    }
}

function letThereBeLight(){
    if(rANC[0] === 1){
        rainbowColor();
    }
    katie();
    window.requestAnimationFrame(letThereBeLight);
}

window.requestAnimationFrame(letThereBeLight);



var ID_WinterCap = 15;
var ID_FlipperHat = 31;
var ID_MarksmanCap = 1;
var ID_BushGear = 10;
var ID_SoldierHelmet = 6;
var ID_AntiVenomGear = 23;
var ID_MusketeerHat = 32;
var ID_MedicGear = 13;
var ID_BullHelmet = 7;
var ID_EmpHelmet = 22;
var ID_BoosterHat = 12;
var ID_BarbarianArmor = 26;
var ID_BullMask = 46;
var ID_WindmillHat = 14;
var ID_SpikeGear = 11;
var ID_BushidoArmor = 16;
var ID_SamuraiArmor = 20;
var ID_ScavengerGear = 27;
var ID_TankGear = 40;
var ID_TurretGear = 53;

// Keys
var TankGearKey = 90;
var BullHelmetKey = 74;
var SoldierHelmetKey = 71;
var TurretKey = 72;
var BoosterHatKey = 66;
var uneqiup = 16;
var SpikeGearKey = 89;
var EmpKey = 84;
var SamuKey = 80;
var SpikeKey = 86

try {
    document.getElementById("moomooio_728x90_home").style.display = "none";
    $("moomooio728x90_home").parent().css({display: "none"});
} catch (e) {
    console.log("There was an error removing the ads.");
}


var menuChange = document.createElement("div");
menuChange.className = "menuCard";
menuChange.id = "mainSettings";
menuChange.innerHTML = `
<div id="simpleModal" class="modal">
<div class="modal-content">
<div class="modal-header">
<span class="closeBtn">&times;</span>
<h2 style="font-size: 17px;">Mod - Settings</h2>
</div>
<div class="modal-body" style="font-size: 17px;">
<div class="flexControl">
<h3 style="color: #5692dc; font-size: 17px;">Mod Menu by Nuro.#6512</h3>
 <div align="left"><div class="menuHeader">Auto Heal Speed:<input onchange="plspeedupdate();" id="pspeed" type="number" value="150" style="width:60px;"></div><div id="desktopInstructions" class="menuText"><a class="menuText" title="When you press *P* Key it will change police hats automatically. Please be sure that you have enough gold for Bummble Hat and Winter Cap, else it wont work.">4 Walls <font style="font-size: 18px;" color="red">(?)</font>:</a><a href="https://www.youtube.com/channel/UCb5P-Vs-Eg7bpQW04dPbbdQ?view_as=subscriber" target="_blank" style="font-size:18px;padding-left:46px;">P key</a><br><a title="When you press *O* it will change free animal hats automatically." class="menuText"Windmill Circle <font style="font-size: 18px;" color="red">Windmill Circle</font>:</a><a href="" target="_blank" style="font-size:18px;padding-left:28px;">O key</a><br><a title="When you press *K* it will change all free hats automatically. (not Caps)" class="menuText">CPS     : <font style="font-size: 18px;" color="red">(?)</font>:</a>.........<input onchange="plspeedupdate();" id="pspeed" type="number" value="200" style="width:60px;"></a><br><a title="When you press *L* key it will change animal caps automatically." class="menuText">Insta Bow<font style="font-size: 18px;" color="red">(?)</font>:</a><a href="" target="_blank" style="font-size:18px;padding-left:34px;">L key</a></br><a title="When you press *F* key it will put trap and no one will see that you put it there." class="menuText">Trap<font style="font-size: 18px;" color="red"></font>:</a>F key</a></br><a title="When you press *M* key it will on/off background of map." class="menuText">2 Spikes insta<font style="font-size: 18px;" color="red">(?)</font>:</a><a>Space</a><br><a title="When you press *N* key it will show or hide objects which you and your clan put." class="menuText">Windmill<font style="font-size: 18px;" color="red">(?)</font>:</a><a href="" target="_blank" style="font-size:18px;padding-left:14px;">N key</a><br>anti clown hat On/Off: <a href="https://zombsroyaleio.org" target="_blank" style="font-size:18px;padding-left:21px;">T key</a><br><br>Auto Heal: Collect Food<br>Bull Helmet: <a title="If you buy the bull helmet, any time you swing this mod will put the bull helmet on and take it off automatically. If you put on another hat, the mod will automatically remember that hat and put it on after its done with the bull helmet. The mod will also take of the monkey tail (if its on) when you swing. ---> Imagine the combinations! Soldier +bull and plague +bull are good combos to get started with" style="font-size: 18px;color:dodgerblue;">Read Me (?)</a><br></div><hr>HAT SETTINGS<div class="modal"><div class="modal-content"><div align="left"><a title="Its the speed of auto healing, default is 150 | Doing lower is faster, but moomoo.io game has pinocchio mode for fast healing that canceling healing..">Auto Heal Speed (?): </a><input onchange="handleMessage();" id="autospeed" type="number" value="150" style="width:60px;"></br><a title="Its the speed of animals mod, default is 200">Animals Mod Speed (?): </a><input onchange="anspeedupdate();" id="aspeed" type="number" value="200" style="width:60px;"></br><a title="Its the speed of free hats mod, default is 200">Free Hats Mod Speed (?): </a><input onchange="plspeedupdate();" id="pspeed" type="number" value="200" style="width:60px;"></br><a title="Its the speed of animal caps mod, default is 200">Animal Caps Mod Speed (?): </a><input onchange="clspeedupdate();" id="caspeed" type="number" value="200" style="width:60px;"></br><a title="Its the speed of police mod, default is 250">Police Mod Speed (?): </a><input onchange="frspeedupdate();" id="fspeed" type="number" value="250" style="width:60px;"></div></div></div> -

<h3 class="menuPrompt">Tank Gear: </h3> <input value="${String.fromCharCode(TankGearKey)}" id="tankGear" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/>
<h3 class="menuPrompt">Bull Helmet: </h3> <input value="${String.fromCharCode(BullHelmetKey)}" id="bullHelm" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/>
<h3 class="menuPrompt">Soldier Helmet: </h3> <input value="${String.fromCharCode(SoldierHelmetKey)}" id="soldier" class="keyPressLow"onkeyup="this.value = this.value.toUpperCase();"  maxlength="1" type="text"/>
<h3 class="menuPrompt">Turret Gear: </h3> <input value="${String.fromCharCode(TurretKey)}" id="turret" class="keyPressLow" maxlength="1" onkeyup="this.value = this.value.toUpperCase();" type="text"/>
<h3 class="menuPrompt">Booster Hat: </h3> <input value="${String.fromCharCode(BoosterHatKey)}" id="booster" class="keyPressLow" maxlength="1" onkeyup="this.value = this.value.toUpperCase();" type="text"/>
<h3 class="menuPrompt">Spike Gear: </h3> <input value="${String.fromCharCode(SpikeGearKey)}" id="spikeg" class="keyPressLow" maxlength="1" onkeyup="this.value = this.value.toUpperCase();" type="text"/>
<h3 class="menuPrompt">Emp Helmet: </h3> <input value="${String.fromCharCode(EmpKey)}" id="emp" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/>
<h3 class="menuPrompt">Samurai Armor: </h3> <input value="${String.fromCharCode(SamuKey)}" id="samu" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/>
<hr>
<h3 style="font-size: 17px;"> Settings </h3>
<div class="modal-body" style="font-size: 17px;">
<div class="flexControl">
<label class="container">activate: Better map?
<input type="checkbox" id="myCheck">
<span class="checkmark"></span>
</label>
</div>
</div>
<div class="modal-body" style="font-size: 17px;">
<div class="flexControl">
<label class="container">anti insta heal press f4
<input type="checkbox" id="myCheck2">
<span class="checkmark"></span>
</label>
</div>
</div>
<div class="modal-body" style="font-size: 17px;">
<div class="flexControl">
<label class="container">-50% ClownHat chancev(Labymod scam, do
<input type="checkbox" id="getCheck">
<span class="checkmark"></span>
                      <div class="modal-body" style="font-size: 17px;">
            <div class="flexControl">
<label class="container">Hat Macro speed - 100%
                    <input type="checkbox" id="myCheck">
                    <span class="checkmark"></span>
                </label>
            </div>
        </div>
                <div class="modal-body" style="font-size: 17px;">
            <div class="flexControl">
<label class="container">Hat Macro speed - 70% 〖recommended〗
                    <input type="checkbox" id="myCheck">
                    <span class="checkmark"></span>
                </label>
            </div>
        </div>
                        <div class="modal-body" style="font-size: 17px;">
            <div class="flexControl">
<label class="container">Hat Macro speed - 130%
                    <input type="checkbox" id="myCheck">
                    <span class="checkmark"></span>
                </label>
            </div>
        </div>
        <div class="modal-footer">
            <p>If you activate hat macro speeds, this is added together</p>
        </div>
    </div>
</div>
</label>
</div>
</div>
<div class="modal-footer">
<h3 style="font-size: 14px;">Whats FPS? - FPS means "Frames per second" * The FPS value indicates how many frames per second appear on your screen and therefore how smoothly the picture runs. <br> <br> Whats CPS? - CPS is an abbreviation for "characters per second" * It is a unit for speed in data transmission</h3>
<p>If something doesn't work properly, write it down in the rating</p>
</div>
</div>
</div>
`
document.body.appendChild(menuChange)


$("#tankGear").on("input", () => {
    var cval = $("#tankGear").val();
    if (cval){
        TankGearKey = cval.toUpperCase();
        TankGearKey = TankGearKey.charCodeAt(0);
        console.log(TankGearKey);
    }
});

$("#bullHelm").on("input", () => {
    var cval = $("#bullHelm").val();
    if (cval){
        BullHelmetKey = cval.toUpperCase();
        BullHelmetKey = BullHelmetKey.charCodeAt(0);
        console.log(BullHelmetKey);
    }
});

$("#soldier").on("input", () => {
    var cval = $("#soldier").val();
    if (cval){
        SoldierHelmetKey = cval.toUpperCase();
        SoldierHelmetKey = SoldierHelmetKey.charCodeAt(0);
        console.log(SoldierHelmetKey);
    }
});

$("#turret").on("input", () => {
    var cval = $("#turret").val();
    if (cval){
        TurretKey = cval.toUpperCase();
        TurretKey = TurretKey.charCodeAt(0);
        console.log(TurretKey);
    }
});



$("#emp").on("input", () => {
    var cval = $("#emp").val();
    if (cval){
        EmpKey = cval.toUpperCase();
        EmpKey = EmpKey.charCodeAt(0);
        console.log(EmpKey);
    }
});

$("#samu").on("input", () => {
    var cval = $("#samu").val();
    if (cval){
        SamuKey = cval.toUpperCase();
        SamuKey = SamuKey.charCodeAt(0);
        console.log(SamuKey);
    }
});

$("#booster").on("input", () => {
    var cval = $("#booster").val();
    if (cval){
        BoosterHatKey = cval.toUpperCase();
        BoosterHatKey = BoosterHatKey.charCodeAt(0);
        console.log(BoosterHatKey);
    }
});

$("#spikeg").on("input", () => {
    var cval = $("#spikeg").val();
    if (cval){
        SpikeGearKey = cval.toUpperCase();
        SpikeGearKey = SpikeGearKey.charCodeAt(0);
        console.log(SpikeGearKey);
    }
});

$("#trap").on("input", () => {
    var cval = $("#trap").val();
    if (cval){
        TrapKey = cval.toUpperCase();
        TrapKey = TrapKey.charCodeAt(0);
        console.log(TrapKey);
    }
});

var styleItem = document.createElement("style");//gay kids dont know how to code
styleItem.type = "text/css";
styleItem.appendChild(document.createTextNode(`
.keyPressLow {
margin-left: 8px;
font-size: 16px;
margin-right: 8px;
height: 25px;
width: 50px;
background-color: #fcfcfc;
border-radius: 3.5px;
border: none;
text-align: center;
color: #4A4A4A;
border: 0.5px solid #f2f2f2;
}

.menuPrompt {
font-size: 17px;
font-family: 'Hammersmith One';
color: #4A4A4A;
flex: 0.2;
text-align: center;
margin-top: 10px;
display: inline-block;
}

.modal {
display: none;
position: fixed;
z-index: 1;
left: 0;
top: 0;
overflow: auto;
height: 100%;
width: 100%;
}

.modal-content {
margin: 10% auto;
width: 40%;
box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.17);
font-size: 14px;
line-height: 1.6;
}

.modal-header h2,
.modal-footer h3 {
margin: 0;
}

.modal-header {
background: #42a739;
padding: 15px;
color: #fff;
border-top-left-radius: 5px;
border-top-right-radius: 5px;
}

.modal-body {
padding: 10px 20px;
background: #fff;
}

.modal-footer {
background: #2b9ae2;
padding: 10px;
color: #fff;
text-align: center;
border-bottom-left-radius: 5px;
border-bottom-right-radius: 5px;
}

.closeBtn {
color: #ccc;
float: right;
font-size: 30px;
color: #fff;
}

.closeBtn:hover,
.closeBtn:focus {
color: #2652e2;
text-decoration: none;
cursor: pointer;
}

/* Customize the label (the container) */
.container {
display: block;
position: relative;
padding-left: 35px;
margin-bottom: 12px;
cursor: pointer;
font-size: 16px;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
}

/* Hide the browser's default checkbox */
.container input {
position: absolute;
opacity: 0;
cursor: pointer;
height: 0;
width: 0;
}

/* Create a custom checkbox */
.checkmark {
position: absolute;
top: 0;
left: 0;
height: 25px;
width: 25px;
background-color: #eee;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
background-color: #ccc;
}

/* When the checkbox is checked, add a green background */
.container input:checked ~ .checkmark {
background-color: #27cf29;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
content: "";
position: absolute;
display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
left: 9px;
top: 5px;
width: 5px;
height: 10px;
border: solid white;
border-width: 0 3px 3px 0;
-webkit-transform: rotate(45deg);
-ms-transform: rotate(45deg);
transform: rotate(45deg);
}

`))
document.head.appendChild(styleItem);


$("#adCard").css({display: "none"});


document.addEventListener('keydown', function(e) {
    if (e.keyCode == uneqiup && document.activeElement.id.toLowerCase() !== 'chatbox'){
        console.log("done")
        storeEquip(0);
    } else if (e.keyCode == 27){
        if (modal.style.display = "none") {
            modal.style.display = "block";
        } else {
            modal.style.display = "none";
        }
    } else if (e.keyCode == TankGearKey && document.activeElement.id.toLowerCase() !== 'chatbox'){
        storeEquip(ID_TankGear);
    } else if (e.keyCode == SoldierHelmetKey && document.activeElement.id.toLowerCase() !== 'chatbox'){
        storeEquip(ID_SoldierHelmet);
    } else if (e.keyCode == BullHelmetKey && document.activeElement.id.toLowerCase() !== 'chatbox'){
        storeEquip(ID_BullHelmet);
    } else if (e.keyCode == BoosterHatKey && document.activeElement.id.toLowerCase() !== 'chatbox'){
        storeEquip(ID_BoosterHat);
    } else if (e.keyCode == EmpKey && document.activeElement.id.toLowerCase() !== 'chatbox'){
        storeEquip(ID_EmpHelmet);
    } else if (e.keyCode == SamuKey && document.activeElement.id.toLowerCase() !== 'chatbox'){
        storeEquip(ID_SamuraiArmor);
    } else if (e.keyCode == SpikeGearKey && document.activeElement.id.toLowerCase() !== 'chatbox'){
        storeEquip(ID_SpikeGear);
    } else if (e.keyCode == TurretKey && document.activeElement.id.toLowerCase() !== 'chatbox'){
        storeEquip(ID_TurretGear);
    }
})

// Get modal element
var modal = document.getElementById("simpleModal");
// Get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

// Events
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// Close
function closeModal() {
    modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}

var checkbox = document.querySelector("#myCheck")

checkbox.addEventListener('change', function() {
    if (this.checked) {
        $("#mapDisplay").css({background: `url('https://i.imgur.com/fgFsQJp.png')`});
        console.log('checked')
    } else {
        $("#mapDisplay").css({background: `rgba(0, 0, 0, 0.25)`})
        console.log('unchecked')
    }
})
var checkbox2 = document.querySelector("#myCheck2")

checkbox.addEventListener('change', function() {
    if (this.checked) {
        healSpeed = 0
        console.log('checked')
    } else {
        healSpeed = 150
        console.log('unchecked')
    }
})


var myElement = document.querySelector('#nameInput');
myElement.style.backgroundColor = "#fffdfd";
myElement.style.color = "#000000";

var getElement = document.querySelector('#enterGame');
getElement.style.backgroundColor = "#d81e1e";
getElement.style.color = "#000000";

window.history.replaceState = () => {};
window.history.pushState = () => {};

const force = getParam("force-connect", window.location.search);
const party = getParam("server", window.location.search);
const ip = /\d+:\d+:\d+/.exec(party);
var canplace=true;
var run=true;


WebSocket = class extends WebSocket {
    constructor(...args){
        if (force !== null && /\d+:\d+:\d+/.test(force)){
            const allServers = [];
            const servers = window.vultr.servers;
            let len = servers.length;
            let server;
            let games;
            let gameLen;
            while (len--) {
                server = servers[len];
                games = server.games;
                gameLen = games.length;
                while (gameLen--) {
                    allServers.push({id: `${server.region}:${server.index}:${gameLen}`, ip: server.ip, gameIndex: gameLen});
                }
            }
            const s = (function (id) {
                let len = allServers.length;
                while (len--) {
                    if (allServers[len].id === id) return allServers[len];
                }
                return false;
            })(force);
            args[0] = args[0].replace(/ip_[a-z0-9]+/, `ip_${s.ip}`).replace(/\?gameIndex=\d+/, `?gameIndex=${s.gameIndex}`);
        }
        super(...args);
    }
};

function getParam(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
console.log("MooMoo.io modded UI");

(function(){

    addEventListener("click", function(e) { // changes the 'reload' button
        if (e.target.tagName == "A" && e.target.href == "javascript:window.location.href=window.location.href") {
            e.preventDefault();
            location.replace(location.origin);
        }
    });

    var sI = -1,
        hideAct = false;

    function $(e){
        var a = document.querySelectorAll(e);
        if(a.length == 1){
            return a[0];
        } else if(a.length == 0){
            return null;
        } else {
            return a;
        }
        return a;
    }

    function getCookie(e){
        var c = document.cookie, g;
        c=c.split('; ');
        c.forEach(function(ob){
            var f=ob.split('=');
            if(f[0]==e){
                g=f[1];
                return;
            }
            return;
        }
                 );
        if(g!==undefined){
            return g;
        }else{
            return null;
        }
    }

    function resetInterval() {
        clearInterval(sI);

        if(hideAct){
            $("#mainMenu").classList.remove("hide");
            hideAct = false;
        }
        sI = setInterval(function(){
            hideActionMenu();
        }, 10e3);
    }

    function hideActionMenu() {
        hideAct = true;
        $("#mainMenu").classList.add("hide");
    }

    addEventListener("mousemove", function(){
        resetInterval();
    });
    addEventListener("keydown", function() {
        resetInterval();
    });
    document.body.addEventListener("focus", function() {
        resetInterval();
    });
    addEventListener("blur", function() {
        hideActionMenu();
    });

    Array.prototype.remove = function(){
        for(let i of this){
            i.remove();
        }
    };

    Element.prototype.remove = function(){
        this.parentElement.removeChild(this);
    };

    window.Worker = null;

    addEventListener("load", function(){
        [$("#youtuberOf"), $("#adCard"), $("#followText"), $("#youtubeFollow"), $("#twitterFollow"), $(".menuCard[style='width:728px;display:inline-block;margin-top:10px;padding:10px;']")].remove();
        $("#promoImgHolder").innerHTML = "";
        {
            let a = [$("#serverBrowser"), $("#altServer")];
            for (var i = 0; i < a.length; i++) {
                $("#promoImgHolder").appendChild(a[i]);
            }
        }
        {
            let settings = $(".settingRadio"),
                parent = document.createElement("div");

            parent.classList.add("settings", "menuCard");
            parent.addEventListener("click", function(e) {
                if (e.target == this) { // prevent closing if user clicked settings
                    this.classList.toggle("show");
                }
            });

            for (let i of settings) {
                parent.appendChild(i);
            }

            $("#menuCardHolder").children[0].appendChild(parent);
        }
        {
            let b = $("#skinColorHolder");
            $("#promoImgHolder").appendChild(b);
            $("#rightCardHolder").remove();
        }
        {
            if(localStorage.tampermonkeyMoomooChangelogSave){
                if(localStorage.tampermonkeyMoomooChangelogSave == a.innerText){
                    a.parentElement.style.opacity = .5;
                } else {
                    a.style.fontSize = "5em";
                    a.addEventListener("click", function(){
                        localStorage.tampermonkeyMoomooChangelogSave = a.innerText;
                        a.style.fontSize = "1em";
                        a.parentElement.style.opacity = .5;
                    });
                }
            } else {
                localStorage.tampermonkeyMoomooChangelogSave = a.innerText;
            }
        }
        {
            // custom css!
            let e = document.createElement("style");
            e.innerHTML = `

`;
            document.head.appendChild(e);
        }
    });

}());

try {
    window.admob = {
        requestInterstitialAd: ()=>{},
        showInterstitialAd: ()=>{}
    }
} catch (e) {
    console.warn(e)
}




$('#subConfirmationElement').click( () => {
    window.follmoo();
    localStorage["Subbed"] = true;
});

$("#youtuberOf").remove();
$("#followText").remove();
$("#twitterFollow").remove();
$("#youtubeFollow").remove();
$("#adCard").remove();
$("#mobileInstructions").remove();
$("#downloadButtonContainer").remove();
$("#mobileDownloadButtonContainer").remove();
$(".downloadBadge").remove();

var autoreloadloop;
var autoreloadenough = 0;

autoreloadloop = setInterval(function () {
    if (autoreloadenough < 200) {
        document.title = "🐺Mult-Mod🐺 * by LBM team";
        if (document.getElementById("loadingText").innerHTML == `disconnected<a href="javascript:window.location.href=window.location.href" class="ytLink">reload</a>`) {
            document.title = "AutoReload:Working";
            clearInterval(autoreloadloop);
            setTimeout(function () {document.title = "Moo Moo";}, 1000)
            location.reload();
        }
        autoreloadenough++;
    }
    else if (autoreloadenough >= 300) {
        clearInterval(autoreloadloop);
        document.title = "AutoReloader Done";
        setTimeout(function () {document.title = "Moo Moo";}, 1000)
    }
}, 50);

$("#consentBlock").css({display: "none"});
//$("#youtuberOf").css({display: "none"});

document.getElementById("moomooio_728x90_home").style.display = "none";
$("#moomooio_728x90_home").parent().css({display: "none"});

window.onbeforeunload = null;

let mouseX;
let mouseY;

let width;
let height;

setInterval(() => {
   if(clanToggle == 1) {
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
    }
    doNewSend(["testing", [6]]);
}, 200);

setInterval(() => {
    if(messageToggle == 1) {
        doNewSend(["ch", [animate(true, 5)]])
    }
}, 200);

setInterval(() => {
    if(autoaim == true) {
        doNewSend(["2", [nearestEnemyAngle]]);
    }
}, 0);

setInterval(() => {
    if(hatToggle == 1) {
        if(oldHat != normalHat) {
            hat(normalHat);
            console.log("Tried. - Hat")
        }
        if(oldAcc != normalAcc) {
            acc(normalAcc);
            console.log("Tried. - Acc")
        }
        oldHat = normalHat;
        oldAcc = normalAcc
    }
}, 25);

function normal() {
    hat(normalHat);
    acc(normalAcc);
}

function aim(x, y){
     var cvs = document.getElementById("gameCanvas");
     cvs.dispatchEvent(new MouseEvent("mousemove", {
         clientX: x,
         clientY: y

     }));
}
let coreURL = new URL(window.location.href);
window.sessionStorage.force = coreURL.searchParams.get("fc");

var nearestEnemy;
var nearestEnemyAngle;
var isEnemyNear;
var instaSpeed = 230;
var primary;
var secondary;
var foodType;
var wallType;
var spikeType;
var millType;
var mineType;
var boostType;
var turretType;
var spawnpadType;
var autoaim = false;
var tick = 0;
var oldHat;
var oldAcc;
var enemiesNear;
var normalHat;
var normalAcc;
var ws;

var msgpack5 = msgpack;
var boostDir;
let myPlayer = {
    id: null,
    x: null,
    y: null,
    dir: null,
    object: null,
    weapon: null,
    clan: null,
    isLeader: null,
    hat: null,
    accessory: null,
    isSkull: null
};

let healSpeed = 150;
var messageToggle = 0;
var clanToggle = 0;
let healToggle = 1;
let hatToggle = 0;
var stuff={};
var bot;
var atk;
var matk;
var accessories = [
    {
        id: 12,
        name: "Snowball",
        price: 1e3,
        scale: 105,
        xOff: 18,
        desc: "no effect"
    }, {
        id: 9,
        name: "Tree Cape",
        price: 1e3,
        scale: 90,
        desc: "no effect"
    }, {
        id: 10,
        name: "Stone Cape",
        price: 1e3,
        scale: 90,
        desc: "no effect"
    }, {
        id: 3,
        name: "Cookie Cape",
        price: 1500,
        scale: 90,
        desc: "no effect"
    }, {
        id: 8,
        name: "Cow Cape",
        price: 2e3,
        scale: 90,
        desc: "no effect"
    }, {
        id: 11,
        name: "Monkey Tail",
        price: 2e3,
        scale: 97,
        xOff: 25,
        desc: "Super speed but reduced damage",
        spdMult: 1.35,
        dmgMultO: .2
    }, {
        id: 17,
        name: "Apple Basket",
        price: 3e3,
        scale: 80,
        xOff: 12,
        desc: "slowly regenerates health over time",
        healthRegen: 1
    }, {
        id: 6,
        name: "Winter Cape",
        price: 3e3,
        scale: 90,
        desc: "no effect"
    }, {
        id: 4,
        name: "Skull Cape",
        price: 4e3,
        scale: 90,
        desc: "no effect"
    }, {
        id: 5,
        name: "Dash Cape",
        price: 5e3,
        scale: 90,
        desc: "no effect"
    }, {
        id: 2,
        name: "Dragon Cape",
        price: 6e3,
        scale: 90,
        desc: "no effect"
    }, {
        id: 1,
        name: "Super Cape",
        price: 8e3,
        scale: 90,
        desc: "no effect"
    }, {
        id: 7,
        name: "Troll Cape",
        price: 8e3,
        scale: 90,
        desc: "no effect"
    }, {
        id: 14,
        name: "Thorns",
        price: 1e4,
        scale: 115,
        xOff: 20,
        desc: "no effect"
    }, {
        id: 15,
        name: "Blockades",
        price: 1e4,
        scale: 95,
        xOff: 15,
        desc: "no effect"
    }, {
        id: 20,
        name: "Devils Tail",
        price: 1e4,
        scale: 95,
        xOff: 20,
        desc: "no effect"
    }, {
        id: 16,
        name: "Sawblade",
        price: 12e3,
        scale: 90,
        spin: !0,
        xOff: 0,
        desc: "deal damage to players that damage you",
        dmg: .15
    }, {
        id: 13,
        name: "Angel Wings",
        price: 15e3,
        scale: 138,
        xOff: 22,
        desc: "slowly regenerates health over time",
        healthRegen: 3
    }, {
        id: 19,
        name: "Shadow Wings",
        price: 15e3,
        scale: 138,
        xOff: 22,
        desc: "increased movement speed",
        spdMult: 1.1
    }, {
        id: 18,
        name: "Blood Wings",
        price: 2e4,
        scale: 178,
        xOff: 26,
        desc: "restores health when you deal damage",
        healD: .2
    }, {
        id: 21,
        name: "Corrupt X Wings",
        price: 2e4,
        scale: 178,
        xOff: 26,
        desc: "deal damage to players that damage you",
        dmg: .25
    }];

var hats = hats = [
    {
        id: 45,
        name: "Shame!",
        dontSell: !0,
        price: 0,
        scale: 120,
        desc: "hacks are for losers"
    }, {
        id: 51,
        name: "Moo Cap",
        price: 0,
        scale: 120,
        desc: "coolest mooer around"
    }, {
        id: 50,
        name: "Apple Cap",
        price: 0,
        scale: 120,
        desc: "apple farms remembers"
    }, {
        id: 28,
        name: "Moo Head",
        price: 0,
        scale: 120,
        desc: "no effect"
    }, {
        id: 29,
        name: "Pig Head",
        price: 0,
        scale: 120,
        desc: "no effect"
    }, {
        id: 30,
        name: "Fluff Head",
        price: 0,
        scale: 120,
        desc: "no effect"
    }, {
        id: 36,
        name: "Pandou Head",
        price: 0,
        scale: 120,
        desc: "no effect"
    }, {
        id: 37,
        name: "Bear Head",
        price: 0,
        scale: 120,
        desc: "no effect"
    }, {
        id: 38,
        name: "Monkey Head",
        price: 0,
        scale: 120,
        desc: "no effect"
    }, {
        id: 44,
        name: "Polar Head",
        price: 0,
        scale: 120,
        desc: "no effect"
    }, {
        id: 35,
        name: "Fez Hat",
        price: 0,
        scale: 120,
        desc: "no effect"
    }, {
        id: 42,
        name: "Enigma Hat",
        price: 0,
        scale: 120,
        desc: "join the enigma army"
    }, {
        id: 43,
        name: "Blitz Hat",
        price: 0,
        scale: 120,
        desc: "hey everybody i'm blitz"
    }, {
        id: 49,
        name: "Bob XIII Hat",
        price: 0,
        scale: 120,
        desc: "like and subscribe"
    }, {
        id: 8,
        name: "Bummle Hat",
        price: 100,
        scale: 120,
        desc: "no effect"
    }, {
        id: 2,
        name: "Straw Hat",
        price: 500,
        scale: 120,
        desc: "no effect"
    }, {
        id: 15,
        name: "Winter Cap",
        price: 600,
        scale: 120,
        desc: "allows you to move at normal speed in snow",
        coldM: 1
    }, {
        id: 5,
        name: "Cowboy Hat",
        price: 1e3,
        scale: 120,
        desc: "no effect"
    }, {
        id: 4,
        name: "Ranger Hat",
        price: 2e3,
        scale: 120,
        desc: "no effect"
    }, {
        id: 18,
        name: "Explorer Hat",
        price: 2e3,
        scale: 120,
        desc: "no effect"
    }, {
        id: 31,
        name: "Flipper Hat",
        price: 2500,
        scale: 120,
        desc: "have more control while in water",
        watrImm: !0
    }, {
        id: 1,
        name: "Marksman Cap",
        price: 3e3,
        scale: 120,
        desc: "increases arrow speed and range",
        aMlt: 1.3
    }, {
        id: 10,
        name: "Bush Gear",
        price: 3e3,
        scale: 160,
        desc: "allows you to disguise yourself as a bush"
    }, {
        id: 48,
        name: "Halo",
        price: 3e3,
        scale: 120,
        desc: "no effect"
    }, {
        id: 6,
        name: "Soldier Helmet",
        price: 4e3,
        scale: 120,
        desc: "reduces damage taken but slows movement",
        spdMult: .94,
        dmgMult: .75
    }, {
        id: 23,
        name: "Anti Venom Gear",
        price: 4e3,
        scale: 120,
        desc: "makes you immune to poison",
        poisonRes: 1
    }, {
        id: 13,
        name: "Medic Gear",
        price: 5e3,
        scale: 110,
        desc: "slowly regenerates health over time",
        healthRegen: 3
    }, {
        id: 9,
        name: "Miners Helmet",
        price: 5e3,
        scale: 120,
        desc: "earn 1 extra gold per resource",
        extraGold: 1
    }, {
        id: 32,
        name: "Musketeer Hat",
        price: 5e3,
        scale: 120,
        desc: "reduces cost of projectiles",
        projCost: .5
    }, {
        id: 7,
        name: "Bull Helmet",
        price: 6e3,
        scale: 120,
        desc: "increases damage done but drains health",
        healthRegen: -5,
        dmgMultO: 1.5,
        spdMult: .96
    }, {
        id: 22,
        name: "Emp Helmet",
        price: 6e3,
        scale: 120,
        desc: "turrets won't attack but you move slower",
        antiTurret: 1,
        spdMult: .7
    }, {
        id: 12,
        name: "Booster Hat",
        price: 6e3,
        scale: 120,
        desc: "increases your movement speed",
        spdMult: 1.16
    }, {
        id: 26,
        name: "Barbarian Armor",
        price: 8e3,
        scale: 120,
        desc: "knocks back enemies that attack you",
        dmgK: .6
    }, {
        id: 21,
        name: "Plague Mask",
        price: 1e4,
        scale: 120,
        desc: "melee attacks deal poison damage",
        poisonDmg: 5,
        poisonTime: 6
    }, {
        id: 46,
        name: "Bull Mask",
        price: 1e4,
        scale: 120,
        desc: "bulls won't target you unless you attack them",
        bullRepel: 1
    }, {
        id: 14,
        name: "Windmill Hat",
        topSprite: !0,
        price: 1e4,
        scale: 120,
        desc: "generates points while worn",
        pps: 1.5
    }, {
        id: 11,
        name: "Spike Gear",
        topSprite: !0,
        price: 1e4,
        scale: 120,
        desc: "deal damage to players that damage you",
        dmg: .45
    }, {
        id: 53,
        name: "Turret Gear",
        topSprite: !0,
        price: 1e4,
        scale: 120,
        desc: "you become a walking turret",
        turret: {
            proj: 1,
            range: 700,
            rate: 2500
        },
        spdMult: .5
    }, {
        id: 20,
        name: "Samurai Armor",
        price: 12e3,
        scale: 120,
        desc: "increased attack speed and fire rate",
        atkSpd: .78
    }, {
        id: 16,
        name: "Bushido Armor",
        price: 12e3,
        scale: 120,
        desc: "restores health when you deal damage",
        healD: .4
    }, {
        id: 27,
        name: "Scavenger Gear",
        price: 15e3,
        scale: 120,
        desc: "earn double points for each kill",
        kScrM: 2
    }, {
        id: 40,
        name: "Tank Gear",
        price: 15e3,
        scale: 120,
        desc: "increased damage to buildings but slower movement",
        spdMult: .3,
        bDmg: 3.3
    }, {
        id: 52,
        name: "Thief Gear",
        price: 15e3,
        scale: 120,
        desc: "steal half of a players gold when you kill them",
        goldSteal: .5
    }];

var objects = [
    {
        id: 0,
        name: "food",
        layer: 0
    }, {
        id: 1,
        name: "walls",
        place: !0,
        limit: 30,
        layer: 0
    }, {
        id: 2,
        name: "spikes",
        place: !0,
        limit: 15,
        layer: 0
    }, {
        id: 3,
        name: "mill",
        place: !0,
        limit: 7,
        layer: 1
    }, {
        id: 4,
        name: "mine",
        place: !0,
        limit: 1,
        layer: 0
    }, {
        id: 5,
        name: "trap",
        place: !0,
        limit: 6,
        layer: -1
    }, {
        id: 6,
        name: "booster",
        place: !0,
        limit: 12,
        layer: -1
    }, {
        id: 7,
        name: "turret",
        place: !0,
        limit: 2,
        layer: 1
    }, {
        id: 8,
        name: "watchtower",
        place: !0,
        limit: 12,
        layer: 1
    }, {
        id: 9,
        name: "buff",
        place: !0,
        limit: 4,
        layer: -1
    }, {
        id: 10,
        name: "spawn",
        place: !0,
        limit: 1,
        layer: -1
    }, {
        id: 11,
        name: "sapling",
        place: !0,
        limit: 2,
        layer: 0
    }, {
        id: 12,
        name: "blocker",
        place: !0,
        limit: 3,
        layer: -1
    }, {
        id: 13,
        name: "teleporter",
        place: !0,
        limit: 1,
        layer: -1
    }];

var weapons = [
    {
        id: 0,
        type: 0,
        name: "tool hammer",
        desc: "tool for gathering all resources",
        src: "hammer_1",
        length: 140,
        width: 140,
        xOff: -3,
        yOff: 18,
        dmg: 25,
        range: 65,
        gather: 1,
        speed: 300
    }, {
        id: 1,
        type: 0,
        age: 2,
        name: "hand axe",
        desc: "gathers resources at a higher rate",
        src: "axe_1",
        length: 140,
        width: 140,
        xOff: 3,
        yOff: 24,
        dmg: 30,
        spdMult: 1,
        range: 70,
        gather: 2,
        speed: 400
    }, {
        id: 2,
        type: 0,
        age: 8,
        pre: 1,
        name: "great axe",
        desc: "deal more damage and gather more resources",
        src: "great_axe_1",
        length: 140,
        width: 140,
        xOff: -8,
        yOff: 25,
        dmg: 35,
        spdMult: 1,
        range: 75,
        gather: 4,
        speed: 400
    }, {
        id: 3,
        type: 0,
        age: 2,
        name: "short sword",
        desc: "increased attack power but slower move speed",
        src: "sword_1",
        iPad: 1.3,
        length: 130,
        width: 210,
        xOff: -8,
        yOff: 46,
        dmg: 35,
        spdMult: .85,
        range: 110,
        gather: 1,
        speed: 300
    }, {
        id: 4,
        type: 0,
        age: 8,
        pre: 3,
        name: "katana",
        desc: "greater range and damage",
        src: "samurai_1",
        iPad: 1.3,
        length: 130,
        width: 210,
        xOff: -8,
        yOff: 59,
        dmg: 40,
        spdMult: .8,
        range: 118,
        gather: 1,
        speed: 300
    }, {
        id: 5,
        type: 0,
        age: 2,
        name: "polearm",
        desc: "long range melee weapon",
        src: "spear_1",
        iPad: 1.3,
        length: 130,
        width: 210,
        xOff: -8,
        yOff: 53,
        dmg: 45,
        knock: .2,
        spdMult: .82,
        range: 142,
        gather: 1,
        speed: 700
    }, {
        id: 6,
        type: 0,
        age: 2,
        name: "bat",
        desc: "fast long range melee weapon",
        src: "bat_1",
        iPad: 1.3,
        length: 110,
        width: 180,
        xOff: -8,
        yOff: 53,
        dmg: 20,
        knock: .7,
        range: 110,
        gather: 1,
        speed: 300
    }, {
        id: 7,
        type: 0,
        age: 2,
        name: "daggers",
        desc: "really fast short range weapon",
        src: "dagger_1",
        iPad: .8,
        length: 110,
        width: 110,
        xOff: 18,
        yOff: 0,
        dmg: 20,
        knock: .1,
        range: 65,
        gather: 1,
        hitSlow: .1,
        spdMult: 1.13,
        speed: 100
    }, {
        id: 8,
        type: 0,
        age: 2,
        name: "stick",
        desc: "great for gathering but very weak",
        src: "stick_1",
        length: 140,
        width: 140,
        xOff: 3,
        yOff: 24,
        dmg: 1,
        spdMult: 1,
        range: 70,
        gather: 7,
        speed: 400
    }, {
        id: 9,
        type: 1,
        age: 6,
        name: "hunting bow",
        desc: "bow used for ranged combat and hunting",
        src: "bow_1",
        req: ["wood", 4],
        length: 120,
        width: 120,
        xOff: -6,
        yOff: 0,
        projectile: 0,
        spdMult: .75,
        speed: 600
    }, {
        id: 10,
        type: 1,
        age: 6,
        name: "great hammer",
        desc: "hammer used for destroying structures",
        src: "great_hammer_1",
        length: 140,
        width: 140,
        xOff: -9,
        yOff: 25,
        dmg: 10,
        spdMult: .88,
        range: 75,
        sDmg: 7.5,
        gather: 1,
        speed: 400
    }, {
        id: 11,
        type: 1,
        age: 6,
        name: "wooden shield",
        desc: "blocks projectiles and reduces melee damage",
        src: "shield_1",
        length: 120,
        width: 120,
        shield: .2,
        xOff: 6,
        yOff: 0,
        spdMult: .7
    }, {
        id: 12,
        type: 1,
        age: 8,
        pre: 9,
        name: "crossbow",
        desc: "deals more damage and has greater range",
        src: "crossbow_1",
        req: ["wood", 5],
        aboveHand: !0,
        armS: .75,
        length: 120,
        width: 120,
        xOff: -4,
        yOff: 0,
        projectile: 2,
        spdMult: .7,
        speed: 700
    }, {
        id: 13,
        type: 1,
        age: 9,
        pre: 12,
        name: "repeater crossbow",
        desc: "high firerate crossbow with reduced damage",
        src: "crossbow_2",
        req: ["wood", 10],
        aboveHand: !0,
        armS: .75,
        length: 120,
        width: 120,
        xOff: -4,
        yOff: 0,
        projectile: 3,
        spdMult: .7,
        speed: 300
    }, {
        id: 14,
        type: 1,
        age: 6,
        name: "mc grabby",
        desc: "steals resources from enemies",
        src: "grab_1",
        length: 130,
        width: 210,
        xOff: -8,
        yOff: 53,
        dmg: 0,
        steal: 250,
        knock: .2,
        spdMult: 1.05,
        range: 125,
        gather: 0,
        speed: 700
    }, {
        id: 15,
        type: 1,
        age: 9,
        pre: 12,
        name: "musket",
        desc: "slow firerate but high damage and range",
        src: "musket_1",
        req: ["stone", 10],
        aboveHand: !0,
        rec: .35,
        armS: .6,
        hndS: .3,
        hndD: 1.6,
        length: 205,
        width: 205,
        xOff: 25,
        yOff: 0,
        projectile: 5,
        hideProjectile: !0,
        spdMult: .6,
        speed: 1500
    }];

var activeObjects = [
    {
        name: "apple",
        desc: "restores 20 health when consumed",
        req: ["food", 10],
        consume: function (e) {
            return e.changeHealth(20, e)
        },
        scale: 22,
        holdOffset: 15
    }, {
        age: 3,
        name: "cookie",
        desc: "restores 40 health when consumed",
        req: ["food", 15],
        consume: function (e) {
            return e.changeHealth(40, e)
        },
        scale: 27,
        holdOffset: 15
    }, {
        age: 7,
        name: "pizza",
        desc: "restores 30 health and another 50 over 5 seconds",
        req: ["food", 30],
        consume: function (e) {
            return !!(e.changeHealth(30, e) || e.health < 100) && (e.dmgOverTime.dmg = -10, e.dmgOverTime.doer = e, e.dmgOverTime.time = 5, !0)
        },
        scale: 27,
        holdOffset: 15
    }, {
        name: "wood wall",
        desc: "provides protection for your village",
        req: ["wood", 10],
        projDmg: !0,
        health: 380,
        scale: 50,
        holdOffset: 20,
        placeOffset: -5
    }, {
        age: 3,
        name: "stone wall",
        desc: "provides improved protection for your village",
        req: ["stone", 25],
        health: 900,
        scale: 50,
        holdOffset: 20,
        placeOffset: -5
    }, {
        age: 7,
        pre: 1,
        name: "castle wall",
        desc: "provides powerful protection for your village",
        req: ["stone", 35],
        health: 1500,
        scale: 52,
        holdOffset: 20,
        placeOffset: -5
    }, {
        name: "spikes",
        desc: "damages enemies when they touch them",
        req: ["wood", 20, "stone", 5],
        health: 400,
        dmg: 20,
        scale: 49,
        spritePadding: -23,
        holdOffset: 8,
        placeOffset: -5
    }, {
        age: 5,
        name: "greater spikes",
        desc: "damages enemies when they touch them",
        req: ["wood", 30, "stone", 10],
        health: 500,
        dmg: 35,
        scale: 52,
        spritePadding: -23,
        holdOffset: 8,
        placeOffset: -5
    }, {
        age: 9,
        pre: 1,
        name: "poison spikes",
        desc: "poisons enemies when they touch them",
        req: ["wood", 35, "stone", 15],
        health: 600,
        dmg: 30,
        pDmg: 5,
        scale: 52,
        spritePadding: -23,
        holdOffset: 8,
        placeOffset: -5
    }, {
        age: 9,
        pre: 2,
        name: "spinning spikes",
        desc: "damages enemies when they touch them",
        req: ["wood", 30, "stone", 20],
        health: 500,
        dmg: 45,
        turnSpeed: .003,
        scale: 52,
        spritePadding: -23,
        holdOffset: 8,
        placeOffset: -5
    }, {
        name: "windmill",
        desc: "generates gold over time",
        req: ["wood", 50, "stone", 10],
        health: 400,
        pps: 1,
        turnSpeed: .0016,
        spritePadding: 25,
        iconLineMult: 12,
        scale: 45,
        holdOffset: 20,
        placeOffset: 5
    }, {
        age: 5,
        pre: 1,
        name: "faster windmill",
        desc: "generates more gold over time",
        req: ["wood", 60, "stone", 20],
        health: 500,
        pps: 1.5,
        turnSpeed: .0025,
        spritePadding: 25,
        iconLineMult: 12,
        scale: 47,
        holdOffset: 20,
        placeOffset: 5
    }, {
        age: 8,
        pre: 1,
        name: "power mill",
        desc: "generates more gold over time",
        req: ["wood", 100, "stone", 50],
        health: 800,
        pps: 2,
        turnSpeed: .005,
        spritePadding: 25,
        iconLineMult: 12,
        scale: 47,
        holdOffset: 20,
        placeOffset: 5
    }, {
        age: 5,
        type: 2,
        name: "mine",
        desc: "allows you to mine stone",
        req: ["wood", 20, "stone", 100],
        iconLineMult: 12,
        scale: 65,
        holdOffset: 20,
        placeOffset: 0
    }, {
        age: 5,
        type: 0,
        name: "sapling",
        desc: "allows you to farm wood",
        req: ["wood", 150],
        iconLineMult: 12,
        colDiv: .5,
        scale: 110,
        holdOffset: 50,
        placeOffset: -15
    }, {
        age: 4,
        name: "pit trap",
        desc: "pit that traps enemies if they walk over it",
        req: ["wood", 30, "stone", 30],
        trap: !0,
        ignoreCollision: !0,
        hideFromEnemy: !0,
        health: 500,
        colDiv: .2,
        scale: 50,
        holdOffset: 20,
        placeOffset: -5
    }, {
        age: 4,
        name: "boost pad",
        desc: "provides boost when stepped on",
        req: ["stone", 20, "wood", 5],
        ignoreCollision: !0,
        boostSpeed: 1.5,
        health: 150,
        colDiv: .7,
        scale: 45,
        holdOffset: 20,
        placeOffset: -5
    }, {
        age: 7,
        doUpdate: !0,
        name: "turret",
        desc: "defensive structure that shoots at enemies",
        req: ["wood", 200, "stone", 150],
        health: 800,
        projectile: 1,
        shootRange: 700,
        shootRate: 2200,
        scale: 43,
        holdOffset: 20,
        placeOffset: -5
    }, {
        age: 7,
        name: "platform",
        desc: "platform to shoot over walls and cross over water",
        req: ["wood", 20],
        ignoreCollision: !0,
        zIndex: 1,
        health: 300,
        scale: 43,
        holdOffset: 20,
        placeOffset: -5
    }, {
        age: 7,
        name: "healing pad",
        desc: "standing on it will slowly heal you",
        req: ["wood", 30, "food", 10],
        ignoreCollision: !0,
        healCol: 15,
        health: 400,
        colDiv: .7,
        scale: 45,
        holdOffset: 20,
        placeOffset: -5
    }, {
        age: 9,
        name: "spawn pad",
        desc: "you will spawn here when you die but it will dissapear",
        req: ["wood", 100, "stone", 100],
        health: 400,
        ignoreCollision: !0,
        spawnPoint: !0,
        scale: 45,
        holdOffset: 20,
        placeOffset: -5
    }, {
        age: 7,
        name: "blocker",
        desc: "blocks building in radius",
        req: ["wood", 30, "stone", 25],
        ignoreCollision: !0,
        blocker: 300,
        health: 400,
        colDiv: .7,
        scale: 45,
        holdOffset: 20,
        placeOffset: -5
    }, {
        age: 7,
        name: "teleporter",
        desc: "teleports you to a random point on the map",
        req: ["wood", 60, "stone", 60],
        ignoreCollision: !0,
        teleport: !0,
        health: 200,
        colDiv: .7,
        scale: 45,
        holdOffset: 20,
        placeOffset: -5
    }];

var allContainers = [accessories, hats, objects, weapons, activeObjects];

document.msgpack = msgpack;
function n(){
    this.buffer = new Uint8Array([0]);
    this.buffer.__proto__ = new Uint8Array;
    this.type = 0;
}

WebSocket.prototype.oldSend = WebSocket.prototype.send;
WebSocket.prototype.send = function(m){
    if (!ws){
        document.ws = this;

        ws = this;
        socketFound(this);
    }
    this.oldSend(m);
};
var run,food;

function socketFound(socket){
    socket.addEventListener('message', function(message){
        handleMessage(message);
    });
}
var yes;
function handleMessage(m){
    let temp = msgpack5.decode(new Uint8Array(m.data));
    let data;
    if(temp.length > 1) {
        data = [temp[0], ...temp[1]];
        if (data[1] instanceof Array){
            data = data;
        }
    } else {
        data = temp;
    }
    let item = data[0];
    if(!data) {return};

    if(item === "io-init") {
        let cvs = document.getElementById("gameCanvas");
        width = cvs.clientWidth;
        height = cvs.clientHeight;
        $(window).resize(function() {
            width = cvs.clientWidth;
            height = cvs.clientHeight;
        });
        cvs.addEventListener("mousemove", e => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });
    }

    if (item == "1" && myPlayer.id == null){
        myPlayer.id = data[1];
    }

    if (item == "33") {
        enemiesNear = [];
        for(let i = 0; i < data[1].length / 13; i++) {
            let playerInfo = data[1].slice(13*i, 13*i+13);
            if(playerInfo[0] == myPlayer.id) {
                myPlayer.x = playerInfo[1];
                myPlayer.y = playerInfo[2];
                myPlayer.dir = playerInfo[3];
                myPlayer.object = playerInfo[4];
                myPlayer.weapon = playerInfo[5];
                myPlayer.clan = playerInfo[7];
                myPlayer.isLeader = playerInfo[8];
                myPlayer.hat = playerInfo[9];
                myPlayer.accessory = playerInfo[10];
                myPlayer.isSkull = playerInfo[11];
            } else if(playerInfo[7] != myPlayer.clan || playerInfo[7] === null) {
                enemiesNear.push(playerInfo);
            }
        }
    }

    isEnemyNear = false;
    if(enemiesNear) {
        nearestEnemy = enemiesNear.sort((a,b) => dist(a, myPlayer) - dist(b, myPlayer))[0];
    }


    if(nearestEnemy) {
        nearestEnemyAngle = Math.atan2(nearestEnemy[2]-myPlayer.y, nearestEnemy[1]-myPlayer.x);
        if(!bot&&!autokill){
            if(Math.sqrt(Math.pow((myPlayer.y-nearestEnemy[2]), 2) + Math.pow((myPlayer.x-nearestEnemy[1]), 2)) < 205) {
                isEnemyNear = true;
                if(autoaim == false && myPlayer.hat != 7 && myPlayer.hat != 53) {
                    normalHat = 6;
                    if(primary != 8) {
                        normalAcc = 21
                    }
                };
            }
        }else{
            if(!atk){
                isEnemyNear = true;
                autoaim=false;
                if(autoaim == false && myPlayer.hat != 7 && myPlayer.hat != 53) {
                    normalHat = 6;
                    if(primary != 8) {
                        normalAcc = 19
                    }
                };
            }}
    }



    if(isEnemyNear == false && autoaim == false) {
        normalAcc = 11;
        if (myPlayer.y < 2400){
            normalHat = 15;
        } else if (myPlayer.y > 6850 && myPlayer.y < 7550){
            normalHat = 31;
        } else {
            normalHat = 12;
        }
    }
    if (!nearestEnemy) {
        nearestEnemyAngle = myPlayer.dir;
    }
    if(item == "h" && data[1] == myPlayer.id) {
        if(data[2] < 100 && data[2] > 0 && healToggle == 1) {
            setTimeout( () => {
                place(foodType, null);
                place(foodType)
            }, healSpeed);

        }
    }
    update();
}

function id(n){return document.getElementById(n);};
function doNewSend(sender){
    ws.send(new Uint8Array(Array.from(msgpack5.encode(sender))));
}

function acc(id) {
    doNewSend(["13c", [0, 0, 1]]);
    doNewSend(["13c", [0, id, 1]]);
}

function hat(id) {
    doNewSend(["13c", [0, id, 0]]);
}


function place(id, angle = Math.atan2(mouseY - height / 2, mouseX - width / 2)) {
    doNewSend(["5", [id, null]]);
    doNewSend(["c", [1, angle]]);
    doNewSend(["c", [0, angle]]);
    doNewSend(["5", [myPlayer.weapon, true]]);
}

function boostSpike() {
    if(boostDir == null) {
        boostDir = nearestEnemyAngle;
    }
    boostDir = nearestEnemyAngle;
    place(spikeType, boostDir + toRad(90));
    place(spikeType, boostDir - toRad(90));
    place(boostType, boostDir);
    doNewSend(["33", [boostDir]]);
}
function boostWall() {
    if(boostDir == null) {
        boostDir = nearestEnemyAngle;
    }
    place(wallType, boostDir + toRad(90));
    place(wallType, boostDir - toRad(90));
    place(boostType, boostDir);
    doNewSend(["33", [boostDir]]);
}
function fourSpike() {
    place(spikeType, myPlayer.dir + toRad(0));
    place(spikeType, myPlayer.dir - toRad(90));
    place(spikeType, myPlayer.dir + toRad(90));
    place(spikeType, myPlayer.dir - toRad(180));
    place(spikeType, myPlayer.dir + toRad(45));
    place(spikeType, myPlayer.dir - toRad(45));
    place(spikeType, myPlayer.dir + toRad(135));
    place(spikeType, myPlayer.dir - toRad(135));
    place(spikeType, myPlayer.dir + toRad(60));
    place(spikeType, myPlayer.dir - toRad(60));
    place(spikeType, myPlayer.dir + toRad(150));
    place(spikeType, myPlayer.dir - toRad(150));
    place(spikeType, myPlayer.dir + toRad(30));
    place(spikeType, myPlayer.dir - toRad(30));
    place(spikeType, myPlayer.dir + toRad(120));
    place(spikeType, myPlayer.dir - toRad(120));
}

//lol
var repeater = function(key, action, interval) {
    let _isKeyDown = false;
    let _intervalId = undefined;

    return {
        start(keycode) {
            if(keycode == key && document.activeElement.id.toLowerCase() !== 'chatbox') {
                _isKeyDown = true;
                if(_intervalId === undefined) {
                    _intervalId = setInterval(() => {
                        action();
                        if(!_isKeyDown){
                            clearInterval(_intervalId);
                            _intervalId = undefined;
                            console.log("claered");
                        }
                    }, interval);
                }
            }
        },

        stop(keycode) {
            if(keycode == key && document.activeElement.id.toLowerCase() !== 'chatbox') {
                _isKeyDown = false;
            }
        }
    };


}
var again=true;
const healer = repeater(81, () => {place(foodType)}, 0);
const boostPlacer = repeater(70, () => {place(boostType)}, 0);
const spikePlacer = repeater(86, () => {place(spikeType)}, 0);
const millPlacer = repeater(78, () => {place(millType)}, 0);
const turretPlacer = repeater(56, () => {place(turretType)}, 0);
const wallPlacer = repeater(52, () => {place(wallType)}, 0);
const boostSpiker = repeater(71, boostSpike, 0);
const boostWaller = repeater(191, boostWall, 0);
const fourSpiker = repeater(66, fourSpike, 0);
var autokill=false
var a=true;
var autoinsta = setInterval(function () {
    if (autokill) {
        if(yes){
            if (run) {
                boostDir = nearestEnemyAngle;
                doNewSend(["33", [-boostDir]]);
            }
            else {
                if (!atk) {
                    if (a) {
                        a = false;
                        autoaim = true;
                        doNewSend(["5", [primary, true]]);
                        doNewSend(["13c", [0, 7, 0]]);
                        doNewSend(["13c", [0, 0, 1]]);
                        doNewSend(["13c", [0, 18, 1]]);
                        doNewSend(["c", [1]]);
                        setTimeout(() => {
                            doNewSend(["13c", [0, 53, 0]]);
                            doNewSend(["5", [secondary, true]]);
                        }, instaSpeed - 130);

                        setTimeout(() => {
                            doNewSend(["5", [primary, true]]);
                            doNewSend(["c", [0, null]]);
                            doNewSend(["13c", [0, 0, 0]]);
                            doNewSend(["13c", [0, 6, 0]]);
                            doNewSend(["13c", [0, 19, 1]]);
                            autoaim = false;
                            setTimeout(function () {
                                doNewSend(["5", [secondary, true]]);
                                setTimeout(function () { setTimeout(function(){a = true ;},300);doNewSend(["5", [primary, true]]);}, stuff.SS + 100)
                            }, stuff.PS + 100);
                        }, instaSpeed);
                    }
                }
                else {
                    boostDir = nearestEnemyAngle;
                    doNewSend(["33", [boostDir]]);
                    if(boost){place(boostType, boostDir);}
                }
            }
        }
    }
}, 0);
document.addEventListener('keydown', (e)=>{
    spikePlacer.start(e.keyCode);
    healer.start(e.keyCode);
    boostPlacer.start(e.keyCode);
    boostWaller.start(e.keyCode);
    fourSpiker.start(e.keyCode);
    boostSpiker.start(e.keyCode);
    millPlacer.start(e.keyCode);
    wallPlacer.start(e.keyCode);
    turretPlacer.start(e.keyCode);
    if (e.keyCode == 186 && document.activeElement.id.toLowerCase() !== 'chatbox'){
        autokill=!autokill;
        if(autokill){if(!a){a=!a;}}
    }

    if (e.keyCode == 79 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        for (let i=0;i<5;i++){
            let angle = myPlayer.dir + toRad(i * 72);
            place(millType, angle)
        }
    }
    if (e.keyCode == 80 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        for (let i=0;i<4;i++){
            let angle = myPlayer.dir + toRad(i * 90);
            place(wallType, angle)
        }
    }
    if (e.keyCode == 72 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        place(turretType, myPlayer.dir + toRad(45));
        place(turretType, myPlayer.dir - toRad(45));
    }
    if (e.keyCode == 188 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        place(wallType, myPlayer.dir + toRad(90));
        place(spikeType, myPlayer.dir + toRad(180));
        place(boostType, myPlayer.dir + toRad(270));
        place(millType, myPlayer.dir + toRad(0));
    }
    if (e.keyCode == 33 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        place(boostType, myPlayer.dir + toRad(45));
        place(boostType, myPlayer.dir - toRad(45));
        place(spikeType, myPlayer.dir + toRad(135));
        place(spikeType, myPlayer.dir + toRad(225));
    }
    if (e.keyCode == 73 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        place(boostType, myPlayer.dir + toRad(45));
        place(boostType, myPlayer.dir - toRad(45));
        place(boostType, myPlayer.dir + toRad(135));
        place(boostType, myPlayer.dir + toRad(225));
    }

    if(e.keyCode == 113 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        doNewSend(["6", [8]]);
        doNewSend(["6", [17]]);
        doNewSend(["6", [31]]);
        doNewSend(["6", [23]]);
        doNewSend(["6", [10]]);
        doNewSend(["6", [33]]);
        doNewSend(["6", [28]]);
        doNewSend(["6", [25]]);
        doNewSend(["5", [1]]);
        doNewSend(["c", [1]]);
        doNewSend(["c", [0]]);//wtf xD
    }
    if(e.keyCode == 118 && document.activeElement.id.toLowerCase() !== 'chatbox') {

        doNewSend(["6", [3]]);
        doNewSend(["6", [17]]);
        doNewSend(["6", [31]]);
        doNewSend(["6", [23]]);
        doNewSend(["6", [9]]);
        doNewSend(["6", [33]]);
        doNewSend(["6", [4]]);
        doNewSend(["6", [15]]);
    }
    if(e.keyCode == 119 && document.activeElement.id.toLowerCase() !== 'chatbox') {

        doNewSend(["6", [1]]);
        doNewSend(["6", [17]]);
        doNewSend(["6", [31]]);
        doNewSend(["6", [23]]);
        doNewSend(["6", [9]]);
        doNewSend(["6", [33]]);
        doNewSend(["6", [2]]);
        doNewSend(["6", [15]]);
    }
    if(e.keyCode == 121 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        doNewSend(["6", [5]]);
        doNewSend(["6", [17]]);
        doNewSend(["6", [31]]);
        doNewSend(["6", [23]]);
        doNewSend(["6", [9]]);
        doNewSend(["6", [33]]);
        doNewSend(["6", [12]]);
        doNewSend(["6", [15]]);

    }
    if (e.keyCode == 16 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        if (myPlayer.y < 2400){
            hat(15);
        } else if (myPlayer.y > 6850 && myPlayer.y < 7550){
            hat(31);
        } else {
            hat(12);
        }
        acc(11);
    }

    if (e.keyCode == 84 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        hat(7);
        acc(18);
    }


    if (e.keyCode == 89 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        hat(6);
        acc(19);
    }
    if (e.keyCode == 192 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        hat(0);
        acc(0);
    }

    if(e.keyCode == 82 && document.activeElement.id.toLowerCase() !== 'chatbox') { //insta
        a=false;
        autoaim = true;
        doNewSend(["5", [primary, true]]);
        doNewSend(["13c", [0, 7, 0]]);
        doNewSend(["13c", [0, 0, 1]]);
        doNewSend(["13c", [0, 18, 1]]);
        doNewSend(["c", [1]]);
        setTimeout( () => {
            doNewSend(["13c", [0, 53, 0]]);
            doNewSend(["13c", [0, 0, 1]]);
        doNewSend(["13c", [0, 11, 1]]);
            doNewSend(["5", [secondary, true]]);
        }, instaSpeed - 130);

        setTimeout( () => {
        doNewSend(["5", [primary, true]]);
            doNewSend(["c", [0, null]]);
            doNewSend(["13c", [0, 6, 0]]);;//who the fuck did this shit
            autoaim = false;
        }, instaSpeed);
    }


    if(e.keyCode == 85 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        autoaim = true;
        doNewSend(["5", [primary, true]]);
        doNewSend(["13c", [0, 7, 0]]);
        doNewSend(["13c", [0, 0, 1]]);
        doNewSend(["13c", [0, 18, 1]]);
        doNewSend(["c", [1]]);

        setTimeout( () => {
            doNewSend(["6", [5]]);
        }, 100);

        setTimeout( () => {
            doNewSend(["13c", [0, 53, 0]]);
            place(spikeType, myPlayer.dir + toRad(0));
        }, 200);

        setTimeout( () => {
            doNewSend(["5", [primary, true]]);
            doNewSend(["c", [0, null]]);
            doNewSend(["13c", [0, 0, 0]]);
            doNewSend(["13c", [0, 6, 0]]);
            doNewSend(["13c", [0, 19, 1]]);
            autoaim = false;
        }, 300);
    }

    if(e.keyCode == 32 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        autoaim = true;
        doNewSend(["5", [primary, true]]);
        doNewSend(["13c", [0, 7, 0]]);
        doNewSend(["13c", [0, 0, 1]]);
        doNewSend(["13c", [0, 19, 1]]);
        place(spikeType, myPlayer.dir + toRad(45));
        place(spikeType, myPlayer.dir - toRad(45));
        doNewSend(["c", [1]]);

        setTimeout( () => {
            doNewSend(["13c", [0, 53, 0]]);
        }, 100);

        setTimeout( () => {
            doNewSend(["c", [0, null]]);
            doNewSend(["13c", [0, 0, 0]]);
            doNewSend(["13c", [0, 6, 0]]);
            autoaim = false;
        }, 200);
    }

    if(e.keyCode == 120 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        autoaim = false;
        doNewSend(["5", [primary, true]]);
        doNewSend(["13c", [0, 7, 0]]);
        doNewSend(["13c", [0, 0, 1]]);
        doNewSend(["13c", [0, 18, 1]]);
        doNewSend(["c", [1]]);

        setTimeout( () => {
            doNewSend(["13c", [0, 53, 0]]);
        }, 120);

        setTimeout( () => {
            doNewSend(["c", [0, null]]);
            doNewSend(["13c", [0, 0, 0]]);
            doNewSend(["13c", [0, 11, 1]]);
            doNewSend(["13c", [0, 12, 0]]);
            autoaim = false;
        }, 220);
    }
    if(e.keyCode == 76 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        autoaim = true;
        doNewSend(["5", [secondary, true]]);
        doNewSend(["13c", [0, 53, 0]]);
        doNewSend(["c", [1]]);

        setTimeout( () => {
            doNewSend(["13c", [0, 10, 0]]);
            doNewSend(["6", [12]]);

        }, 100);

        setTimeout( () => {
            doNewSend(["6", [15]]);

        }, 200);

        setTimeout( () => {
            doNewSend(["c", [0]]);
            doNewSend(["5", [primary, true]]);
            autoaim = false;
        }, 300);
    }


    if(e.keyCode == 106 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        healToggle = (healToggle + 1) % 2;
        if(healToggle == 0) {
            if(hatToggle == 0) {
                document.title = "Heal: OFF | Hat: OFF"
            } else {
                document.title = "Heal: OFF | Hat: ON"
            }
        } else {
            if(hatToggle == 0) {
                document.title = "Heal: ON | Hat: OFF"
            } else {
                document.title = "Heal: ON | Hat: ON"
            }
        }
    }

    if(e.keyCode == 115 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        if (healSpeed == 150) {
            healSpeed = 1;
        document.title = "anti insta on";
        } else {
        document.title = "anti insta off";
            healSpeed = 150;
    }
    }
    if(e.keyCode == 76 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        autoaim = true;
        doNewSend(["5", [secondary, true]]);
        doNewSend(["13c", [0, 53, 0]]);
        doNewSend(["c", [1]]);

        setTimeout( () => {
            doNewSend(["13c", [0, 10, 0]]);
            doNewSend(["6", [12]]);

        }, 100);

        setTimeout( () => {
            doNewSend(["6", [15]]);

        }, 200);

        setTimeout( () => {
            doNewSend(["c", [0]]);
            doNewSend(["5", [primary, true]]);
            autoaim = false;
        }, 300);
    }

    if(e.keyCode == 97 && document.activeElement.id.toLowerCase() !== 'chatbox') { ///num1 katana [age 8]
        doNewSend(["6", [4]]);
    }

    if(e.keyCode == 98 && document.activeElement.id.toLowerCase() !== 'chatbox') { ///num2 musket [age 9]
        doNewSend(["6", [15]]);
    }
    if(e.keyCode == 98 && document.activeElement.id.toLowerCase() !== 'chatbox') { ///num2 crossbow [age 8]
        doNewSend(["6", [12]]);
    }
    if(e.keyCode == 105 && document.activeElement.id.toLowerCase() !== 'chatbox') { ///num9 max mill [age 8]
        doNewSend(["6", [28]]);
    }
    if(e.keyCode == 104 && document.activeElement.id.toLowerCase() !== 'chatbox') { ///num8 max wall [age 7]
        doNewSend(["6", [21]]);
    }
    if(e.keyCode == 101 && document.activeElement.id.toLowerCase() !== 'chatbox') { ///num5 spin spike [age 9]
        doNewSend(["6", [25]]);
    }
    if(e.keyCode == 102 && document.activeElement.id.toLowerCase() !== 'chatbox') { ///num6 fast crossbow [age 9]
        doNewSend(["6", [13]]);
    }
    if(e.keyCode == 99 && document.activeElement.id.toLowerCase() !== 'chatbox') { ///num3 great axe [age 8]
        doNewSend(["6", [2]]);
    }
    if(e.keyCode == 9 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        hatToggle = (hatToggle + 1) % 2;
        if(healToggle == 0) {
            if(hatToggle == 0) {
                document.title = "Heal: OFF | Hat: OFF"
            } else {
                document.title = "Heal: OFF | Hat: ON"
            }
        } else {
            if(hatToggle == 0) {
                document.title = "Heal: ON | Hat: OFF"
            } else {
                document.title = "Heal: ON | Hat: ON"
            }
        }
    }
})

document.addEventListener('keyup', (e)=>{console.log([stuff,run,autokill,myPlayer,yes,boost,atk,matk])
                                         spikePlacer.stop(e.keyCode);
                                         boostPlacer.stop(e.keyCode);
                                         boostWaller.stop(e.keyCode);
                                         fourSpiker.stop(e.keyCode);
                                         boostSpiker.stop(e.keyCode);
                                         millPlacer.stop(e.keyCode);
                                         turretPlacer.stop(e.keyCode);
                                         wallPlacer.stop(e.keyCode);
                                         healer.stop(e.keyCode);
                                         if(e.keyCode == 71 && document.activeElement.id.toLowerCase() !== 'chatbox') {
                                             setTimeout( () => {
                                                 doNewSend(["33", [null]]);
                                                 boostDir = null;
                                             }, 10);
                                         }
                                         if(e.keyCode == 221 && document.activeElement.id.toLowerCase() !== 'chatbox') {
                                             setTimeout( () => {
                                                 doNewSend(["33"]);
                                             }, 1);
                                         }
                                         if(e.keyCode == 191 && document.activeElement.id.toLowerCase() !== 'chatbox') {
                                             setTimeout( () => {
                                                 doNewSend(["33", [null]]);
                                                 boostDir = null;
                                             }, 10);
                                         }
                                        })

function animate(space, chance) {
    let result = '';
    let characters;
    if(space) {
        characters = '>>RUN<< or die noob';
    } else {
        characters = 'CRASH';
    }
    if(space) {
        characters = characters.padStart((30 - characters.length) / 2 + characters.length)
        characters = characters.padEnd(30);
    }
    let count = 0;
    for (let i = 0; i < characters.length; i++ ) {
        if(Math.floor(Math.random() * chance) == 1 && characters.charAt(i) != "-" && count < 2 && characters.charAt(i) != " ") {
            result += "w1";
            count++
        } else {
            result += characters.charAt(i);
        }
    }
    return result;
}

document.title = "Hi!"

function update() {
    for (let i=0;i<9;i++){
        if (isElementVisible(document.getElementById("actionBarItem" + i.toString()))){
            primary = i;
        }
    }

    for (let i=9;i<16;i++){
        if (isElementVisible(document.getElementById("actionBarItem" + i.toString()))){
            secondary = i;
        }
    }

    for (let i=16;i<19;i++){
        if (isElementVisible(document.getElementById("actionBarItem" + i.toString()))){
            foodType = i - 16;
        }
    }

    for (let i=19;i<22;i++){
        if (isElementVisible(document.getElementById("actionBarItem" + i.toString()))){
            wallType = i - 16;
        }
    }

    for (let i=22;i<26;i++){
        if (isElementVisible(document.getElementById("actionBarItem" + i.toString()))){
            spikeType = i - 16;
        }
    }

    for (let i=26;i<29;i++){
        if (isElementVisible(document.getElementById("actionBarItem" + i.toString()))){
            millType = i - 16;
        }
    }

    for (let i=29;i<31;i++){
        if (isElementVisible(document.getElementById("actionBarItem" + i.toString()))){
            mineType = i - 16;
        }
    }

    for (let i=31;i<33;i++){
        if (isElementVisible(document.getElementById("actionBarItem" + i.toString()))){
            boostType = i - 16;
        }
    }

    for (let i=33;i<39;i++){
        if (isElementVisible(document.getElementById("actionBarItem" + i.toString())) && i != 36){
            turretType = i - 16;
        }
    }
    food=id('foodDisplay').innerText*1
    run=(food<50)
    if(document.domain.includes('sanbox')){run=false}
    for(let i=0;i<weapons.length;i++){
        if(weapons[i].id==primary){
            stuff.PN=weapons[i].name;
            stuff.PR=weapons[i].range;
            stuff.PS=weapons[i].speed}
        if(weapons[i].id==secondary){
            stuff.SS=weapons[i].speed;
            stuff.SN=weapons[i].name;
        }
    }

    spawnpadType = 36;
}
document.addEventListener('keyup', (e)=>{
    spikePlacer.stop(e.keyCode);
    boostPlacer.stop(e.keyCode);
    boostSpiker.stop(e.keyCode);
    millPlacer.stop(e.keyCode);
    turretPlacer.stop(e.keyCode);
    healer.stop(e.keyCode);
    if(e.keyCode == 71 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        setTimeout( () => {
            doNewSend(["33", [null]]);
            boostDir = null;
        }, 10);
    }
})
