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
//new
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


function toggleMute(){
  var btnMute = document.querySelector('#toggleMute');
  var volUp = document.querySelector('#icon-vol-up');
  var volMute = document.querySelector('#icon-vol-mute');
  if (this.currentAudio.muted == false) {
     this.currentAudio.muted = true
     volUp.style.display = "none"
     volMute.style.display = "block"
  }else{
    this.currentAudio.muted = false
    volMute.style.display = "none"
    volUp.style.display = "block"
  }
}




