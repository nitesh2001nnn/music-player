let audio = new Audio("songs/1.mp3");
let sngindex = 0;
let play = document.getElementById("play");
let plays = document.getElementById("plays");
let gif = document.getElementById("gif");
let progbar = document.getElementById("pgbar");
let songlists = Array.from(document.getElementsByClassName("losong"));
let snglist = [
  {
    songname: "chidiya",
    songpath: "songs/Chidiya(PagalWorld).mp3",
    covers: "covers/chidiya.jpg",
  },
  {
    songname: "ekraat",
    songpath: "songs/Ek-Raat(PagalWorld).mp3",
    covers: "covers/ekraat.jpg",
  },
  {
    songname: "Baller",
    songpath: "songs/Baller(PagalWorldl).mp3",
    covers: "covers/baller.jpg",
  },
  {
    songname: "295",
    songpath: "songs/two95(PagalWorld).mp3",
    covers: "covers/two95.jpg",
  },
  {
    songname: "tere naino",
    songpath: "songs/Dekha-Hai-Tere-Naino-Mein(PagalWorldl) (1).mp3",
    covers: "covers/biliz.jpg",
  },
  {
    songname: "slowly",
    songpath:
      "songs/Let Me Down Slowly x Aaja Ve Mahiya_320(PagalWorld.com.se).mp3",
    covers: "covers/ltd.jpg",
  },
  {
    songname: "tere ishq",
    songpath: "songs/Tere-Ishq-Mein-Main-Tha-Jiya(PagalWorld).mp3",
    covers: "covers/tsq.jpg",
  },
  {
    songname: "adhdi",
    songpath: "songs/Adhi-Adhi-Raat(PagalWorld).mp3",
    covers: "covers/adhiadhi.jpg",
  },
  {
    songname: "chidiya",
    songpath: "songs/Chidiya(PagalWorld).mp3",
    covers: "covers/chidiya.jpg",
  },
];

songlists.forEach((e, i) => {
  e.getElementsByTagName("img")[0].src = snglist[i].covers;
  e.getElementsByClassName("songname")[0].innerText = snglist[i].songname;
});

//handle audio play/pause

play.addEventListener("click", () => {
  if (audio.paused || audio.currentTime <= 0) {
    audio.play();
    play.classList.remove("fa-solid", "fa-play", "fa-xl");
    play.classList.add("fa-solid", "fa-stop", "fa-xl");

    gif.style.opacity = "1";
  } else {
    audio.pause();
    play.classList.remove("fa-solid", "fa-stop", "fa-xl");
    play.classList.add("fa-solid", "fa-play", "fa-xl");
    gif.style.opacity = "0";
  }
});

audio.addEventListener("timeupdate", () => {
  progress = parseInt((audio.currentTime / audio.duration) * 100);
  progbar.value = progress;
});

progbar.addEventListener("change", () => {
  audio.currentTime = (progbar.value * audio.duration) / 100;
});
const allplay = () => {
  Array.from(document.getElementsByClassName("sngimg")).forEach((ele) => {
    ele.classList.remove("fa-circle-stop"); // Reset all buttons to play state
    ele.classList.add("fa-circle-play");
  });
};

// Array.from(document.querySelectorAll(".sngimg")).forEach((ele) => {
//   ele.addEventListener("click", (e) => {
//     var parentSpan = e.target.parentElement;
//     var plays = parentSpan.querySelector("#plays");
//     let index = parseInt(e.target.id);

//     if (plays.src.includes("play")) {
//       // Switch the current button to pause state
//       allplay();
//       // Reset all buttons to play state

//       plays.src = "icons8-pause-30.png";
//       plays.style.width = "25px";
//       audio.src = `songs/${index}.mp3`;
//       audio.currentTime = 0;
//       audio.play();
//     } else {
//       // Switch the current button to play state
//       plays.src = "icons8-play-50.png";
//       plays.style.width = "25px";
//       audio.pause()
//     }
//   });
// });

Array.from(document.getElementsByClassName("sngimg")).forEach((ele) => {
  ele.addEventListener("click", (e) => {
    allplay();
    sngindex = parseInt(e.target.id);
    e.target.classList.remove("fa-circle-play");
    e.target.classList.add("fa-circle-stop");
    audio.src = `songs/${sngindex + 1}.mp3`;
    document.getElementById("nameofsong").innerText =
      snglist[sngindex].songname;
    gif.style.opacity = "1";
    audio.currentTime = 0;
    audio.play();
    play.classList.remove("fa-play");
    play.classList.add("fa-stop");
  });
});

document.getElementById("forw").addEventListener("click", () => {
  if (sngindex >= 8) {
    sngindex = 0
  } else {
    sngindex += 1;
  }
  audio.src = `songs/${sngindex + 1}.mp3`;
  document.getElementById("nameofsong").innerText = snglist[sngindex].songname;
  gif.style.opacity = "1";
  audio.currentTime = 0;
  audio.play();
  play.classList.remove("fa-play");
  play.classList.add("fa-stop");
});

document.getElementById("back").addEventListener("click", () => {
  if (sngindex<=0) {
    sngindex = 8
  } else {
    sngindex -= 1;
  }
  audio.src = `songs/${sngindex + 1}.mp3`;
  document.getElementById("nameofsong").innerText = snglist[sngindex].songname;
  gif.style.opacity = "1";
  audio.currentTime = 0;
  audio.play();
  play.classList.remove("fa-play");
  play.classList.add("fa-stop");
});
