console.log("Welcome to spotify")

//Initialize Variables
let index = 0
audioElement = new Audio('songs/1.mp3')
let playButton = document.getElementById('playButton')
let myProgressBar = document.getElementById('myProgressBar')
let gif = document.getElementById('gif')
let masterSongName = document.getElementById('masterSongName')
let songItems = Array.from(document.getElementsByClassName('songItem'))

//Songs List
let songs = [
    {songName: "Taaron Ke Shehar - Neha Kakkar", filePath:"songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Temporary Pyar - Adaab Kharoud", filePath:"songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Tere Bare-Karan Randhawa", filePath:"songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Tere Te - Guru Randhawa", filePath:"songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Teri-Kami-Akhil", filePath:"songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Thodi Jagah - Marjaavaan", filePath:"songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Titliaan__Harrdy_Sandhu", filePath:"songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Tora-Sumit Goswami", filePath:"songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Tungevaag Raaban Bad Boy Official", filePath:"songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Unchi Haveli", filePath:"songs/10.mp3", coverPath: "covers/10.jpg"},
]

songItems.forEach((element, i)=>{
    console.log(element, i)
    element.getElementsByTagName("img")[0].src = songs[i].coverPath
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName
})

//listen to the events
playButton.addEventListener('click', ()=>{
    if (audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        playButton.classList.remove('fa-play-circle');
        playButton.classList.add('fa-pause-circle');
        gif.style.opacity = 1
    }
    else{
        audioElement.pause();
        playButton.classList.remove('fa-pause-circle');
        playButton.classList.add('fa-play-circle');
        gif.style.opacity = 0
    }
})

audioElement.addEventListener('timeupdate', ()=>{
    //update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100)
    myProgressBar.value = progress
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100
})

const makeAllPlay = () => {
    Array.from(document.getElementsByClassName('songItemButton')).forEach(element => {
        element.classList.remove('fa-pause-circle')
        element.classList.add('fa-play-circle')
    })
}

Array.from(document.getElementsByClassName('songItemButton')).forEach(element => {
    element.addEventListener('click', (e) => {
        makeAllPlay();
        index = parseInt(e.target.id)
        e.target.classList.remove('fa-play-circle')
        e.target.classList.add('fa-pause-circle')
        audioElement.src = `songs/${index}.mp3`
        masterSongName.innerText = songs[index].songName
        audioElement.currentTime = 0
        audioElement.play()
        playButton.classList.remove('fa-play-circle')
        playButton.classList.add('fa-pause-circle')
        gif.style.opacity = 1
    })
});

document.getElementById('next').addEventListener('click', ()=>{
    index += 1
    if (index > 10){
        index = 1
    }
    audioElement.src = `songs/${index}.mp3`
    masterSongName.innerText = songs[index].songName
    audioElement.currentTime = 0
    audioElement.play()
    playButton.classList.remove('fa-play-circle')
    playButton.classList.add('fa-pause-circle')
})

document.getElementById('previous').addEventListener('click', ()=>{
    index -= 1
    if (index < 1){
        index = 10
    }
    audioElement.src = `songs/${index}.mp3`
    masterSongName.innerText = songs[index].songName
    audioElement.currentTime = 0
    audioElement.play()
    playButton.classList.remove('fa-play-circle')
    playButton.classList.add('fa-pause-circle')
})