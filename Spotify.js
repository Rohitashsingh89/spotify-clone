console.log("Welcome to Spotify");

// initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName : 'Warriyo - Mortals (feat. Laura Brehm)', filePath: "songs/1.mp3", coverpath : "covers/1.jpg"},
    {songName : 'Ciolo - Huma-Huma', filePath: "songs/2.mp3", coverpath : "covers/2.jpg"},
    {songName : 'DEAF KEY - Invincible [NCS Release]', filePath: "songs/3.mp3", coverpath : "covers/3.jpg"},
    {songName : 'Different Heaven & EHIDE - My Heart', filePath: "songs/4.mp3", coverpath : "covers/4.jpg"},
    {songName : 'Janji-Heroes-Tonight-feat-johning-NCS', filePath: "songs/5.mp3", coverpath : "covers/5.jpg"},
    {songName : 'Rabba Salam-e-Ishq', filePath: "songs/6.mp3", coverpath : "covers/6.jpg"},
    {songName : 'BAMP A GAYA - Punjavi', filePath: "songs/7.mp3", coverpath : "covers/7.jpg"},
    {songName : 'Raflan - Haryanvi', filePath: "songs/8.mp3", coverpath : "covers/8.jpg"},
    {songName : 'Saklaka bum bum - Punjabi', filePath: "songs/9.mp3", coverpath : "covers/9.jpg"},
]

songItems.forEach((element, i) => {
    // console.log(element, i);
    element.getElementsByTagName("img")[0].src=songs[i].coverpath;
    element.getElementsByClassName('songName')[0].innerText=songs[i].songName;
})


// audioElement.play()

// Handle play/pause click 
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime <=0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause()
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

// listen to events 
audioElement.addEventListener('timeupdate', () => {
    // console.log('timeupdate');
    // update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration) * 100);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', ()=> {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('singItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
})
}
Array.from(document.getElementsByClassName('singItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        // console.log(e.target);
        makeAllPlays();
        index = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = 'songs/${index+1}.mp3';
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    });
})