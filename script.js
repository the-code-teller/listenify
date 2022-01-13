console.log("Welcome to Listenify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let progressBar = document.getElementById('progressBar')
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {
        songName: "Its always Blue",
        filePath: "songs/song1.mp3",
        coverPath: "covers/1.jpg"
    },
    {
        songName: "Cartel Trap",
        filePath: "songs/song2.mp3",
        coverPath: "covers/2.jpg"
    },
    {
        songName: "They Mad - Lowkey Pesci",
        filePath: "songs/song3.mp3",
        coverPath: "covers/3.jpg"
    },
    {
        songName: "Rich The Kid - Plug Walk",
        filePath: "songs/song4.mp3",
        coverPath: "covers/4.jpg"
    },
    {
        songName: "Fifth Song - Fifth Singer",
        filePath: "songs/song5.mp3",
        coverPath: "covers/5.jpg"
    },
    {
        songName: "The Safety Dance - Sleeping at last",
        filePath: "songs/song6.mp3",
        coverPath: "covers/6.jpg"
    },
    {
        songName: "Backing it up - Author unknown",
        filePath: "songs/song7.mp3",
        coverPath: "covers/7.jpg"
    },
    {
        songName: "Black Lady with Orange Background",
        filePath: "songs/song8.mp3",
        coverPath: "covers/8.jpg"
    },
    {
        songName: "Potrait of a lady in orange",
        filePath: "songs/song9.mp3",
        coverPath: "covers/9.jpg"
    },
    {
        songName: "True Love - If you don't then don't",
        filePath: "songs/song10.mp3",
        coverPath: "covers/10.jpg"
    },
]

songItems.forEach((element, i) => {
    element.querySelector('img').src = songs[i].coverPath;
    element.querySelector('span.songName').innerHTML = songs[i].songName;
})



// Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('bi-play-circle');
        masterPlay.classList.add('bi-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('bi-pause-circle');
        masterPlay.classList.add('bi-play-circle');
        gif.style.opacity = 0;
    }
})

// Listen to Events
audioElement.addEventListener('timeupdate', () => {
    // Update Seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration * 100))
    // console.log(progress);
    progressBar.value = progress;
})

progressBar.addEventListener('change', () => {
    audioElement.currentTime = progressBar.value * audioElement.duration / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('bi-pause-circle')
        element.classList.add('bi-play-circle')
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('bi-play-circle')
        e.target.classList.add('bi-pause-circle')
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        audioElement.currentTime = 0
        audioElement.play()
        masterPlay.classList.remove('bi-play-circle')
        masterPlay.classList.add('bi-pause-circle')
    })
})
