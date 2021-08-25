const playlist = document.getElementById("playlist-right");
const playlistShow = document.querySelector("#playlist");
const slideDown = document.getElementById("downoff")

playlistShow.onclick = function() {
    playlist.style.display = "block";
    playlist.classList.add("main-slide");
}
slideDown.onclick = function() {
    playlist.classList.remove("main-slide");
    playlist.style.display= "none"
}





const headerArtist = document.getElementById("artist");
const headerimg = document.getElementById("header-img");
const trackImg = document.getElementById("track-img");

let index_no = 0;
let play_song = false;
let updateTimer;

let album = document.createElement("audio");

// arrays of songs
let songs = [
    {
      image: "images/music lady.jpg",
      path: "songs/song1 (4).mp3",
      track_name: "Mona lisa",
      singer: "Lil Wayne-Kendrick Lamar"
    },
    {
        image: "images/music guy.jpg",
        path: "songs/song1 (5).mp3",
        track_name: "Loyal",
        singer: "Kizz Daniel"
    },
    {
        image: "images/jamaica.jpg",
        path: "songs/song1 (6).mp3",
        track_name: "I'm not alone",
        singer: "Alan Walker"
     },
    {
        image: "images/cassette.jpg",
        path: "songs/song1 (7).mp3",
        track_name: "Ase se",
        singer: "Bharry Jay"
    },
    {
      image: "images/guitarist.jpg",
      path: "songs/song1 (8).mp3",
      track_name: "I wanna marry you",
      singer: "Bruno Mars"
    },
    {
      image: "images/club bear.jpg",
      path: "songs/song1 (9).mp3",
      track_name: "Can we kiss",
      singer: "Saddist"
    },
    {
      image: "images/feelingvibes.jpg",
      path: "songs/song1 (10).mp3",
      track_name: "Feeling good",
      singer: "Drake (feat. Future)"
    },
    {
      image: "images/inspirit.jpg",
      path: "songs/song1 (11).mp3",
      track_name: "Halleluyah",
      singer: "Pentatonix"
    },
    {
      image: "images/reading.jpg",
      path: "songs/song1 (12).mp3",
      track_name: "Juliet & Romeo",
      singer: "Jhonny Drille"
    }
];

const playMusic = document.getElementById("play");
const songTitle = document.getElementById("song-title");
const singerName = document.getElementById("singer");

//loading track
function loadTrack(index_no) {
    album.src = songs[index_no].path;
    clearInterval(updateTimer);
    resetValues();
    trackImg.src = songs[index_no].image;
    headerimg.src = songs[index_no].image;
    headerArtist.innerText = songs[index_no].singer;
    singerName.innerText = songs[index_no].singer;
    songTitle.innerText = songs[index_no].track_name;
    album.load();
    updateTimer = setInterval(timerChange, 1000);
}


function resetValues() {
    durationChange.value = 0;
}

playMusic.onclick = function() {
    if(play_song === false) {
        playSong();
    }else {
        pauseSong();
    }
}

function playSong() {
    album.play();
    play_song = true
    playMusic.classList.remove("fa-play");
    playMusic.classList.add("fa-pause");

}
function pauseSong() {
    album.pause();
    play_song = false
    playMusic.classList.add("fa-play");
    playMusic.classList.remove("fa-pause");
}

const next = document.getElementById("frontPlay");
const back = document.getElementById("backPlay");

next.onclick = function() {
    if(index_no < songs.length-1) {
        index_no += 1;
        loadTrack(index_no);
        playSong();
    }else {
        index_no = 0;
        loadTrack(index_no);
        playSong();
    }
};
back.onclick = function() {
    if(index_no > 0) {
        index_no -= 1;
        loadTrack(index_no);
        playSong();
    }else {
        index_no = songs.length-1;
        loadTrack(index_no);
        playSong();
    }
}


const volumeChange = document.getElementById("volumeChange");
const volume_no = document.getElementById("volume-no");

volumeChange.onchange = function() {
    volume_no.innerText = volumeChange.value;
    album.volume = volumeChange.value / 100;
}


//duration
const durationChange = document.getElementById("duration");

function updateChange() {
    Change = album.duration * (durationChange.value / 100);
    album.currentTime = Change;
}

function timerChange() {
    let position = 0;
    if(!isNaN(album.duration)) {
        position = album.currentTime * (100 / album.duration);
        durationChange.value = position
    }
}


//playlist player
const playerList = document.getElementById("play-list");
console.log(playerList)

playerList.onclick = function() {
    if(play_song === false) {
        playList(songs[1]);
    }else {
        pauseList(songs[1]);
    }
}

function playList() {
    album.play(songs[1]);
    play_song = true
    playMusic.classList.remove("fa-play");
    playMusic.classList.add("fa-pause");
    playerList.classList.remove("fa-play");
    playerList.classList.add("fa-pause");

}
function pauseList() {
    album.pause(songs[1]);
    play_song = false
    playMusic.classList.add("fa-play");
    playMusic.classList.remove("fa-pause");
    playerList.classList.add("fa-play");
    playerList.classList.remove("fa-pause");
}




loadTrack(index_no);



