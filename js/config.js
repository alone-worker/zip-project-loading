/*    _           _    _                     _ 
     | |         | |  | |                   | |
  ___| | ___  ___| | _| |     ___   __ _  __| |
 / __| |/ _ \/ _ \ |/ / |    / _ \ / _` |/ _` |
 \__ \ |  __/  __/   <| |___| (_) | (_| | (_| |
 |___/_|\___|\___|_|\_\______\___/ \__,_|\__,_|
    version 2.05
*/

/*URL for the server logo
Leave it blank to use text instead*/
var l_serverImage = "";

/*Custom server name configuration
Leave it blank for automatic server name*/
var l_serverName = "";

/*Use a video for the background?
Otherwise it will just use images*/
var l_bgVideo = false;

/*Video background
Avaiable options:
"backgrounds/videos/aurora.webm"
"backgrounds/videos/bluefall.webm"
"backgrounds/videos/bluetilefloor.webm"
"backgrounds/videos/bluewhitecircles.webm"
"backgrounds/videos/bokehlens.webm"
"backgrounds/videos/cleanbokeh.webm"
"backgrounds/videos/coldnight.webm"
"backgrounds/videos/colorfulburst.webm"
"backgrounds/videos/dancingstars.webm"
"backgrounds/videos/dropsflares.webm"
"backgrounds/videos/focusorangebokeh.webm"
"backgrounds/videos/glimmering.webm"
"backgrounds/videos/glowingrings.webm"
"backgrounds/videos/greencircles.webm"
"backgrounds/videos/hues.webm"
"backgrounds/videos/inthedeep.webm"
"backgrounds/videos/modernflourish.webm"
"backgrounds/videos/orangeaura.webm"
"backgrounds/videos/warminside.webm"
"backgrounds/videos/yellowgreen.webm"

You can add custom backgrounds
Just make sure it is at webm VP8 format */
var l_background = "backgrounds/videos/glimmering.webm";

/*(Image-background only)
Place one or more images
Multiple images will automatically shuffle between them*/
var l_bgImages = [
	"backgrounds/images/loading_1.jpg",
	"backgrounds/images/loading_2.jpg",
	"backgrounds/images/loading_3.jpg",
	"backgrounds/images/loading_4.jpg",
	"backgrounds/images/loading_5.jpg",
	"backgrounds/images/loading_6.jpg",
	"backgrounds/images/loading_7.jpg",
	"backgrounds/images/loading_8.jpg",
	"backgrounds/images/loading_9.jpg",
	"backgrounds/images/loading_10.jpg",
	"backgrounds/images/loading_11.jpg",
];

/*Random background images order?*/
var l_bgImagesRandom = true;

/*(Image-background only)
Delay between background images changes
in milliseconds*/
var l_bgImageDuration = 5000;

/*(Image-background only)
Image background fade velocity
in milliseconds*/
var l_bgImageFadeVelocity = 2000;

/*Enable background overlay?*/
var l_bgOverlay = false;

/*Background darkening amount
0 for none (0%), 100 for pitch black (100%)*/
var l_bgDarkening = 0;

/*Music player
'true' or 'false' to enable music in the background*/
var l_music = false;

/*Display actual song's name?*/
var l_musicDisplay = false;

/*Music playlist
Place how much Youtube IDs/.ogg you want*/
var l_musicPlaylist = [
	{ogg: "songs/Lullaby of Deserted Hell.ogg", name: "Lullaby of Deserted Hell"},
	{youtube: "j0PA0PX7lKo", name: "セプテットはディナーと共に"},
	{youtube: "yHZfHPhNjXo", name: "いざオペラ座へ"},
	{youtube: "-7VeTkLKdDw", name: "Departure"}
];

/*Random music order?*/
var l_musicRandom = true;

/*Music volume
Choose a value between 0 and 100*/
var l_musicVolume = 25;

/*Enable custom messages?*/
var l_messagesEnabled = true;

/*Enter your custom messages below*/
var l_messages = [
"Прежде чем лутать заброшенный ящик, проверь есть ли за спиной другой игрок.",
"Самое опасное место - это Любич, прежде чем туда идти вооружись хорошим стволом и возьми с собой пару брусниковок.",
"Почти вся полезная информация находится в !wiki.",
"Самый ценный лут в метро!",
"Бинты — дешёвая альтернатива аптечки и самый доступный способ повысить своё здоровье.",
"Чтобы починить костюм или шлем, необходимо найти ремонтника и, выбрав нужный предмет в окне улучшений, нажать на кнопке ремонта.",
"Хорошие ресурсы лучше всего искать в Любиче или метро.",
"Чтобы не издавать лишнего шума, можно передвигаться сидя, нажав «Ctrl».",
"Дробовик — оружие малых дистанций: чем дальше находится цель, тем менее эффективным будет его использование.",
"Чтобы не носить с собой лишний груз, можно оставить свои вещи в камере хранения на территории вокзала.",
"Проверяй аукцион почаще, ведь там может быть что-то полезное.",
"Это не BaseWars, в городе RP территория.",
"Чтобы подать жалобу, напишите в чат @.",
"По слухам, существует тайный торговец, но где и когда он появляется никто не знает...",
"Иногда стоит вспомнить о заработке денег, ведь в один момент у тебя не хватит на покупку патронов.",
];

/*Random message order?*/
var l_messagesRandom = true;

/*Delay between message changes
in milliseconds*/
var l_messagesDelay = 5000;

/*Messages fade time
in milliseconds*/
var l_messagesFade = 1000;