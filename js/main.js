// document.write("hello JS");

// var hello = "hello Illya_64536";

// const hello = "hello Illya_64536";

// console.log("ADMIN >>> " + hello + ".");

var num_1 = 1.555;

var num_2 = 100;

num_2 += -100;

console.log("Math: " + (num_1 + num_2))


function createTrackItem(index,name,duration){
    var trackItem = document.createElement('div');
    trackItem.setAttribute("class", "playlist-track-ctn");
    trackItem.setAttribute("id", "ptc-"+index);
    trackItem.setAttribute("data-index", index);
    document.querySelector(".playlist-ctn").appendChild(trackItem);

    var playBtnItem = document.createElement('div');
    playBtnItem.setAttribute("class", "playlist-btn-play");
    playBtnItem.setAttribute("id", "pbp-"+index);
    document.querySelector("#ptc-"+index).appendChild(playBtnItem);

    var btnImg = document.createElement('i');
    btnImg.setAttribute("class", "fas fa-play");
    btnImg.setAttribute("height", "40");
    btnImg.setAttribute("width", "40");
    btnImg.setAttribute("id", "p-img-"+index);
    document.querySelector("#pbp-"+index).appendChild(btnImg);

    var trackInfoItem = document.createElement('div');
    trackInfoItem.setAttribute("class", "playlist-info-track");
    trackInfoItem.innerHTML = name
    document.querySelector("#ptc-"+index).appendChild(trackInfoItem);

    var trackDurationItem = document.createElement('div');
    trackDurationItem.setAttribute("class", "playlist-duration");
    trackDurationItem.innerHTML = duration
    document.querySelector("#ptc-"+index).appendChild(trackDurationItem);
}

var listAudio = [
{
    name:"worship - Используй Меня Бог",
    file:"audio/ARK WORSHIP - Используй Меня Бог (HolyChords).mp3",
    duration:"06:57"
},
{
    name:"worship - Любовь Твоя Велика",
    file:"audio/ARK WORSHIP - Любовь Твоя Велика (HolyChords).mp3",
    duration:"05:56"
},
{
    name:"worship - Тебя ожидаю",
    file:"audio/ARK WORSHIP - Тебя ожидаю (HolyChords).mp3",
    duration:"07:10"
},
{
    name:"Bethel Music - Closer",
    file:"audio/Bethel Music - Closer (HolyChords).mp3",
    duration:"06:53"
},
{
    name:"Bible My Love - Не умру я, но буду жить истиной Твоей!",
    file:"audio/BibleMyLove - Не умру я, но буду жить истиной Твоей! (HolyChords).mp3",
    duration:"03:19"
},
{
    name:"Big Daddy Weave - The Lion and the Lamb",
    file:"audio/Big Daddy Weave - The Lion and the Lamb (HolyChords).mp3",
    duration:"05:06"
},
{
    name:"Crest Music - Милость",
    file:"audio/Crest Music - Милость (HolyChords).mp3",
    duration:"08:15"
},
{
    name:"Crest Music - Мы поём Аллилуйя",
    file:"audio/Crest Music - Мы поём Аллилуйя (HolyChords).mp3",
    duration:"05:24"
},
{
    name:"Crowder - Crushing Snakes",
    file:"audio/Crowder - Crushing Snakes (HolyChords).mp3",
    duration:"05:02"
},
{
    name:"Crowder - Good God Almighty",
    file:"audio/Crowder - Good God Almighty (HolyChords).mp3",
    duration:"03:11"
},
{
    name:"Elevation Worship - Graves Into Gardens",
    file:"audio/Elevation Worship - Graves Into Gardens (HolyChords).mp3",
    duration:"07:32"
},
{
    name:"Elevation Worship - RATTLE",
    file:"audio/Elevation Worship - RATTLE! (HolyChords).mp3",
    duration:"07:12"
},
{
    name:"Hillsong Ukraine - Любви послание",
    file:"audio/Hillsong Ukraine - Любви послание (HolyChords).mp3",
    duration:"05:25"
},
{
    name:"Housefires - Build My Life",
    file:"audio/Housefires - Build My Life (HolyChords).mp3",
    duration:"08:11"
},
{
    name:"IFound Worship - Нужен мне лишь Ты",
    file:"audio/IFound Worship - Нужен мне лишь Ты (HolyChords).mp3",
    duration:"03:55"
},
{
    name:"IFound Worship - Один путь",
    file:"audio/IFound Worship - Один путь (HolyChords).mp3",
    duration:"03:06"
},
{
    name:"IFound Worship - Чудо",
    file:"audio/IFound Worship - Чудо (HolyChords).mp3",
    duration:"04:52"
},
{
    name:"Iulia Fridrik - Пусть бушует море",
    file:"audio/Iulia Fridrik - Пусть бушует море (HolyChords).mp3",
    duration:"05:43"
},
{
  name:"Jake Hamilton - Beautiful Rider",
  file:"audio/Jake Hamilton - Beautiful Rider (HolyChords).mp3",
  duration:"05:39"
},
{
  name:"Jake Hamilton - Behold God Is Great",
  file:"audio/Jake Hamilton - Behold God Is Great (HolyChords).mp3",
  duration:"04:24"
},
{
  name:"Jake Hamilton - Convinced",
  file:"audio/Jake Hamilton - Convinced (HolyChords).mp3",
  duration:"05:26"
},
{
  name:"Jake Hamilton - Drink in Deep",
  file:"audio/Jake Hamilton - Drink in Deep (HolyChords).mp3",
  duration:"08:41"
},
{
  name:"Jake Hamilton - Embrace",
  file:"audio/Jake Hamilton - Embrace (HolyChords).mp3",
  duration:"06:53"
},
{
  name:"Jake Hamilton - I Love Your Presence",
  file:"audio/Jake Hamilton - I Love Your Presence (HolyChords).mp3",
  duration:"04:31"
},
{
  name:"Jake Hamilton - Just Beyond the Breaking",
  file:"audio/Jake Hamilton - Just Beyond the Breaking (HolyChords).mp3",
  duration:"03:42"
},
{
  name:"Jake Hamilton - Life Redefined",
  file:"audio/Jake Hamilton - Life Redefined (HolyChords).mp3",
  duration:"05:18"
},
{
  name:"Jake Hamilton - Marked",
  file:"audio/Jake Hamilton - Marked (HolyChords).mp3",
  duration:"07:14"
},
{
  name:"Jake Hamilton - My Ballad to the Church of Laodicea",
  file:"audio/Jake Hamilton - My Ballad to the Church of Laodicea (HolyChords).mp3",
  duration:"03:21"
},
{
  name:"Jake Hamilton - Never Let Me Down",
  file:"audio/Jake Hamilton - Never Let Me Down (HolyChords).mp3",
  duration:"04:01"
},
{
  name:"Jake Hamilton - Sacred Obsession",
  file:"audio/Jake Hamilton - Sacred Obsession (HolyChords).mp3",
  duration:"04:46"
},
{
  name:"Jake Hamilton - Save Me",
  file:"audio/Jake Hamilton - Save Me (HolyChords).mp3",
  duration:"02:33"
},
{
  name:"Jake Hamilton - Slow Down",
  file:"audio/Jake Hamilton - Slow Down (HolyChords).mp3",
  duration:"04:35"
},
{
  name:"Jake Hamilton - Thank You",
  file:"audio/Jake Hamilton - Thank You (HolyChords).mp3",
  duration:"03:25"
},
{
  name:"Jake Hamilton - The anthem",
  file:"audio/Jake Hamilton - The anthem (HolyChords).mp3",
  duration:"05:42"
},
{
  name:"Jake Hamilton - The Fathers Song",
  file:"audio/Jake Hamilton - The Fathers Song (HolyChords).mp3",
  duration:"04:11"
},
{
  name:"Jake Hamilton - The Great I Am",
  file:"audio/Jake Hamilton - The Great I Am (HolyChords).mp3",
  duration:"05:18"
},
{
  name:"Jake Hamilton - The Next Great Awakening",
  file:"audio/Jake Hamilton - The Next Great Awakening (HolyChords).mp3",
  duration:"04:24"
},
{
  name:"Jake Hamilton - Watch out Heaven",
  file:"audio/Jake Hamilton - Watch out Heaven (HolyChords).mp3",
  duration:"05:26"
},
{
  name:"Jake Hamilton - Дух Святой приди",
  file:"audio/Jake Hamilton - Дух Святой приди (HolyChords).mp3",
  duration:"06:27"
},

{
  name:"JG Youth Worship - Атмосфера",
  file:"audio/JG Youth Worship - Атмосфера (HolyChords).mp3",
  duration:"06:37"
},

{
  name:"M.Worship - Духом наполняй",
  file:"audio/M.Worship - Духом наполняй (HolyChords).mp3",
  duration:"06:29"
},

{
  name:"M.Worship - Муж скорбей",
  file:"audio/M.Worship - Муж скорбей (HolyChords).mp3",
  duration:"05:32"
},

{
  name:"Meredith Mauldin - Yeshua",
  file:"audio/Meredith Mauldin - Yeshua (HolyChords).mp3",
  duration:"09:43"
},

{
  name:"New Beginnings Church - Буду я восклицать",
  file:"audio/New Beginnings Church - Буду я восклицать (HolyChords).mp3",
  duration:"06:06"
},

{
  name:"New Beginnings Church - Преклоняюсь",
  file:"audio/New Beginnings Church - Преклоняюсь (HolyChords).mp3",
  duration:"06:03"
},

{
  name:"Not An Idol - Близко как никогда",
  file:"audio/Not An Idol - Близко как никогда (HolyChords).mp3",
  duration:"03:39"
},

{
  name:"Not An Idol - Бог (О Боже мой, благодарю)",
  file:"audio/Not An Idol - Бог (О Боже мой, благодарю) (HolyChords).mp3",
  duration:"03:59"
},

{
  name:"Not An Idol - Достоин славы",
  file:"audio/Not An Idol - Достоин славы (HolyChords).mp3",
  duration:"07:05"
},

{
  name:"Not An Idol - Иисус-мой друг",
  file:"audio/Not An Idol - Иисус - мой друг (HolyChords).mp3",
  duration:"04:51"
},

{
  name:"Not An Idol - Когда умолкнут все звуки",
  file:"audio/Not An Idol - Когда умолкнут все звуки (HolyChords).mp3",
  duration:"05:03"
},

{
  name:"Not An Idol - Лишь для Тебя",
  file:"audio/Not An Idol - Лишь для Тебя (HolyChords).mp3",
  duration:"05:02"
},

{
  name:"Not An Idol - Любовь с небес",
  file:"audio/Not An Idol - Любовь с небес (HolyChords).mp3",
  duration:"05:36"
},

{
  name:"Not An Idol - Не боюсь",
  file:"audio/Not An Idol - Не боюсь (HolyChords).mp3",
  duration:"04:46"
},

{
  name:"Not An Idol - Преклоняюсь",
  file:"audio/Not An Idol - Преклоняюсь (HolyChords).mp3",
  duration:"03:26"
},

{
  name:"Not An Idol - Ты моя Скала",
  file:"audio/Not An Idol - Ты моя Скала (HolyChords).mp3",
  duration:"04:13"
},

{
  name:"Not An Idol - Ты со мной навсегда",
  file:"audio/Not An Idol - Ты со мной навсегда (HolyChords).mp3",
  duration:"05:38"
},

{
  name:"Oles Miro - Божий огонь",
  file:"audio/Oles Miro - Божий огонь (HolyChords).mp3",
  duration:"05:55"
},

{
  name:"Planetboom - Kamsahamnida",
  file:"audio/Planetboom - Kamsahamnida (HolyChords).mp3",
  duration:"03:44"
},

{
  name:"Planetboom - Lemme Tellya",
  file:"audio/Planetboom - Lemme Tellya (HolyChords).mp3",
  duration:"03:25"
},

{
  name:"Planetboom - New Levels",
  file:"audio/Planetboom - New Levels (HolyChords).mp3",
  duration:"04:07"
},

{
  name:"Planetboom - Saints",
  file:"audio/Planetboom - Saints (HolyChords).mp3",
  duration:"03:39"
},

{
  name:"Real Ivanna - Меня Ты возлюбил",
  file:"audio/Real Ivanna - Меня Ты возлюбил (HolyChords).mp3",
  duration:"04:09"
},

{
  name:"Reallife band - Излей от Духа",
  file:"audio/Reallife band - Излей от Духа (HolyChords).mp3",
  duration:"06:00"
},

{
  name:"Reallife band - Ты Один Святой",
  file:"audio/Reallife band - Ты Один Святой (HolyChords).mp3",
  duration:"04:50"
},

{
  name:"Reyer - God's Great Dance Floor",
  file:"audio/Reyer - God's Great Dance Floor (Remix) (HolyChords).mp3",
  duration:"03:50"
},

{
  name:"Skinia Music - Держись за любовь",
  file:"audio/Skinia Music - Держись за любовь (HolyChords).mp3",
  duration:"05:31"
},

{
  name:"Sokolov Brothers - Буду доверять",
  file:"audio/SokolovBrothers - Буду доверять (HolyChords).mp3",
  duration:"04:03"
},

{
  name:"Sokolov Brothers - Если не Ты то кто же",
  file:"audio/SokolovBrothers - Если не Ты то кто же (HolyChords).mp3",
  duration:"04:46"
},

{
  name:"Sokolov Brothers - Имя Твоё",
  file:"audio/SokolovBrothers - Имя Твоё (HolyChords).mp3",
  duration:"04:12"
},

{
  name:"Sokolov Brothers - Имя Твоё слаще мёда",
  file:"audio/SokolovBrothers - Имя Твоё слаще мёда (HolyChords).mp3",
  duration:"05:22"
},

{
  name:"Sokolov Brothers - Лети",
  file:"audio/SokolovBrothers - Лети (HolyChords).mp3",
  duration:"05:42"
},

{
  name:"Sokolov Brothers - Лицом к лицу",
  file:"audio/SokolovBrothers - Лицом к лицу (HolyChords).mp3",
  duration:"03:49"
},

{
  name:"Sokolov Brothers - Молитва",
  file:"audio/SokolovBrothers - Молитва (HolyChords).mp3",
  duration:"05:06"
},

{
  name:"Sokolov Brothers - Не бойся, Бог с тобой",
  file:"audio/SokolovBrothers - Не бойся, Бог с тобой (HolyChords).mp3",
  duration:"03:17"
},

{
  name:"Sokolov Brothers - Не угаснуть мне дай",
  file:"audio/SokolovBrothers - Не угаснуть мне дай (HolyChords).mp3",
  duration:"03:19"
},

{
  name:"Sokolov Brothers - Небо за нас",
  file:"audio/SokolovBrothers - Небо за нас (HolyChords).mp3",
  duration:"04:07"
},

{
  name:"Sokolov Brothers - Нет подобного Тебе",
  file:"audio/SokolovBrothers - Нет подобного Тебе (HolyChords).mp3",
  duration:"04:25"
},

{
  name:"Sokolov Brothers - Отче наш",
  file:"audio/SokolovBrothers - Отче наш (HolyChords).mp3",
  duration:"04:57"
},

{
  name:"Sokolov Brothers - Рождён нам Спаситель",
  file:"audio/SokolovBrothers - Рождён нам Спаситель (HolyChords).mp3",
  duration:"04:56"
},

{
  name:"Sokolov Brothers - Ты мой Бог",
  file:"audio/SokolovBrothers - Ты мой Бог (HolyChords).mp3",
  duration:"06:20"
},

{
  name:"Sokolov Brothers - Ты со мной",
  file:"audio/SokolovBrothers - Ты со мной (HolyChords).mp3",
  duration:"03:52"
},

{
  name:"Sokolov Brothers - Уходя к Отцу",
  file:"audio/SokolovBrothers - Уходя к Отцу (HolyChords).mp3",
  duration:"04:33"
},

{
  name:"Sokolov Brothers - Я стану ветром",
  file:"audio/SokolovBrothers - Я стану ветром (HolyChords).mp3",
  duration:"04:56"
},

{
  name:"Spasinnya Music - Пусть поёт душа",
  file:"audio/Spasinnya Music - Пусть поёт душа (HolyChords).mp3",
  duration:"03:55"
},

{
  name:"Steiger Worship - Звон монет",
  file:"audio/Steiger Worship - Звон монет (HolyChords).mp3",
  duration:"11:24"
},

{
  name:"Supernatural Worship - Кровь Христа",
  file:"audio/Supernatural Worship - Кровь Христа (HolyChords).mp3",
  duration:"07:06"
},

{
  name:"Toby Mac - Til the Day",
  file:"audio/Til the Day.mp3",
  duration:"03:47"
},

{
  name:"Worship Church - Все источники в Тебе",
  file:"audio/Worship Church - Все источники в Тебе (HolyChords).mp3",
  duration:"08:02"
},

{
  name:"Андрей Николайчик - Он никогда не играл в любовь",
  file:"audio/Андрей Николайчик - Он никогда не играл в любовь (HolyChords).mp3",
  duration:"03:46"
},

{
  name:"Виктор Лавриненко - О, эта радость",
  file:"audio/Виктор Лавриненко - О, эта радость (HolyChords).mp3",
  duration:"04:16"
},

{
  name:"Виктор Лавриненко - Пусть горит твой огонь",
  file:"audio/Виктор Лавриненко - Пусть горит твой огонь (HolyChords).mp3",
  duration:"04:44"
},

{
  name:"Виталии Ефремочкин - Адонаи",
  file:"audio/виталии-ефремочкин-адонаи.mp3",
  duration:"05:26"
},

{
  name:"Виталии Ефремочкин - Благословлю тебя",
  file:"audio/виталии-ефремочкин-благословлю-тебя.mp3",
  duration:"03:56"
},

{
  name:"Виталии Ефремочкин - Божии дождь",
  file:"audio/виталии-ефремочкин-божии-дождь.mp3",
  duration:"04:29"
},

{
  name:"Виталии Ефремочкин - Воплощение добра",
  file:"audio/виталии-ефремочкин-воплощение-добра.mp3",
  duration:"07:46"
},

{
  name:"Виталии Ефремочкин - Выше солнца выше неба",
  file:"audio/виталии-ефремочкин-выше-солнца-выше-неба.mp3",
  duration:"06:29"
},

{
  name:"Виталии Ефремочкин - Не умру я но буду",
  file:"audio/виталии-ефремочкин-не-умру-я-но-буду.mp3",
  duration:"06:21"
},

{
  name:"Виталии Ефремочкин - Святои",
  file:"audio/виталии-ефремочкин-святои.mp3",
  duration:"10:04"
},

{
  name:"Виталии Ефремочкин - Танцуи",
  file:"audio/виталии-ефремочкин-танцуи.mp3",
  duration:"10:05"
},

{
  name:"Виталии Ефремочкин - Царь цареи",
  file:"audio/виталии-ефремочкин-царь-цареи.mp3",
  duration:"04:23"
},

{
  name:"Виталии Ефремочкин - Адонай",
  file:"audio/Виталий Ефремочкин - Адонай (HolyChords).mp3",
  duration:"05:27"
},

{
  name:"Виталии Ефремочкин - Аллилуйя",
  file:"audio/Виталий Ефремочкин - Аллилуйя (www.hotplayer.ru).mp3",
  duration:"08:47"
},

{
  name:"Виталии Ефремочкин - Благославлю тебя",
  file:"audio/Виталий Ефремочкин - Благославлю тебя (www.hotplayer.ru).mp3",
  duration:"04:43"
},

{
  name:"Виталии Ефремочкин - Блажен Народ",
  file:"audio/Виталий Ефремочкин - Блажен Народ (www.hotplayer.ru).mp3",
  duration:"09:35"
},

{
  name:"Виталии Ефремочкин - Ближе к Тебе",
  file:"audio/Виталий Ефремочкин - Ближе к Тебе (HolyChords).mp3",
  duration:"08:31"
},

{
  name:"Виталии Ефремочкин - Бог Израиля",
  file:"audio/Виталий Ефремочкин - Бог Израиля (www.hotplayer.ru).mp3",
  duration:"06:10"
},

{
  name:"Виталии Ефремочкин - Бог мой",
  file:"audio/Виталий Ефремочкин - Бог мой (HolyChords).mp3",
  duration:"06:30"
},

{
  name:"Виталии Ефремочкин - Божий Дождь",
  file:"audio/Виталий Ефремочкин - Божий Дождь (www.hotplayer.ru).mp3",
  duration:"05:42"
},

{
  name:"Виталии Ефремочкин - Будем петь",
  file:"audio/Виталий Ефремочкин - Будем петь (www.hotplayer.ru).mp3",
  duration:"04:24"
},

{
  name:"Виталии Ефремочкин - Будем танцевать",
  file:"audio/Виталий Ефремочкин - Будем танцевать (www.hotplayer.ru).mp3",
  duration:"04:17"
},

{
  name:"Виталии Ефремочкин - Буду танцевать",
  file:"audio/Виталий Ефремочкин - Буду танцевать (www.hotplayer.ru).mp3",
  duration:"04:33"
},

]

for (var i = 0; i < listAudio.length; i++) {
    createTrackItem(i,listAudio[i].name,listAudio[i].duration);
}
var indexAudio = 0;

function loadNewTrack(index){
    var player = document.querySelector('#source-audio')
    player.src = listAudio[index].file
    document.querySelector('.title_m').innerHTML = listAudio[index].name
    this.currentAudio = document.getElementById("myAudio");
    this.currentAudio.load()
    this.toggleAudio()
    this.updateStylePlaylist(this.indexAudio,index)
    this.indexAudio = index;
}

var playListItems = document.querySelectorAll(".playlist-track-ctn");

for (let i = 0; i < playListItems.length; i++){
    playListItems[i].addEventListener("click", getClickedElement.bind(this));
}

function getClickedElement(event) {
    for (let i = 0; i < playListItems.length; i++){
        if(playListItems[i] == event.target){
            var clickedIndex = event.target.getAttribute("data-index")
            if (clickedIndex == this.indexAudio ) { // alert('Same audio');
                this.toggleAudio()
        }else{
            loadNewTrack(clickedIndex);
        }
        }
    }
}

document.querySelector('#source-audio').src = listAudio[indexAudio].file
document.querySelector('.title_m').innerHTML = listAudio[indexAudio].name


var currentAudio = document.getElementById("myAudio");

currentAudio.load()

currentAudio.onloadedmetadata = function() {
    document.getElementsByClassName('duration')[0].innerHTML = this.getMinutes(this.currentAudio.duration)
}.bind(this);

var interval1;

function toggleAudio() {

  if (this.currentAudio.paused) {
    document.querySelector('#icon-play').style.display = 'none';
    document.querySelector('#icon-pause').style.display = 'block';
    document.querySelector('#ptc-'+this.indexAudio).classList.add("active-track");
    this.playToPause(this.indexAudio)
    this.currentAudio.play();
  }else{
    document.querySelector('#icon-play').style.display = 'block';
    document.querySelector('#icon-pause').style.display = 'none';
    this.pauseToPlay(this.indexAudio)
    this.currentAudio.pause();
  }
}

function pauseAudio() {
  this.currentAudio.pause();
  clearInterval(interval1);
}

var timer = document.getElementsByClassName('timer')[0]

var barProgress = document.getElementById("myBar");


var width = 0;

function onTimeUpdate() {
  var t = this.currentAudio.currentTime
  timer.innerHTML = this.getMinutes(t);
  this.setBarProgress();
  if (this.currentAudio.ended) {
    document.querySelector('#icon-play').style.display = 'block';
    document.querySelector('#icon-pause').style.display = 'none';
    this.pauseToPlay(this.indexAudio)
    if (this.indexAudio < listAudio.length-1) {
        var index = parseInt(this.indexAudio)+1
        this.loadNewTrack(index)
    }
  }
}


function setBarProgress(){
  var progress = (this.currentAudio.currentTime/this.currentAudio.duration)*100;
  document.getElementById("myBar").style.width = progress + "%";
}


function getMinutes(t){
  var min = parseInt(parseInt(t)/60);
  var sec = parseInt(t%60);
  if (sec < 10) {
    sec = "0"+sec
  }
  if (min < 10) {
    min = "0"+min
  }
  return min+":"+sec
}

var progressbar = document.querySelector('#myProgress')
progressbar.addEventListener("click", seek.bind(this));


function seek(event) {
  var percent = event.offsetX / progressbar.offsetWidth;
  this.currentAudio.currentTime = percent * this.currentAudio.duration;
  barProgress.style.width = percent*100 + "%";
}

function forward(){
  this.currentAudio.currentTime = this.currentAudio.currentTime + 5
  this.setBarProgress();
}

function rewind(){
  this.currentAudio.currentTime = this.currentAudio.currentTime - 5
  this.setBarProgress();
}


function next(){
  if (this.indexAudio <listAudio.length-1) {
      var oldIndex = this.indexAudio
      this.indexAudio++;
      updateStylePlaylist(oldIndex,this.indexAudio)
      this.loadNewTrack(this.indexAudio);
  }
}

function previous(){
  if (this.indexAudio>0) {
      var oldIndex = this.indexAudio
      this.indexAudio--;
      updateStylePlaylist(oldIndex,this.indexAudio)
      this.loadNewTrack(this.indexAudio);
  }
}

function updateStylePlaylist(oldIndex,newIndex){
  document.querySelector('#ptc-'+oldIndex).classList.remove("active-track");
  this.pauseToPlay(oldIndex);
  document.querySelector('#ptc-'+newIndex).classList.add("active-track");
  this.playToPause(newIndex)
}

function playToPause(index){
  var ele = document.querySelector('#p-img-'+index)
  ele.classList.remove("fa-play");
  ele.classList.add("fa-pause");
}

function pauseToPlay(index){
  var ele = document.querySelector('#p-img-'+index)
  ele.classList.remove("fa-pause");
  ele.classList.add("fa-play");
}
