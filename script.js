let audio;

function playAudio(audioName) {
  if (audio) audio.pause();
  audio = new Audio(`./sounds/${audioName}`);
  audio.play();
}

const giftsArray = [
  {
    element: document.querySelector(".audio1"),
    audioName: "1.mp3",
  },
  {
    element: document.querySelector(".audio2"),
    audioName: "2.mp3",
  },
  {
    element: document.querySelector(".audio3"),
    audioName: "3.mp3",
  },
  {
    element: document.querySelector(".audio4"),
    audioName: "4.mp3",
  },
  {
    element: document.querySelector(".audio5"),
    audioName: "5.mp3",
  },
];

giftsArray.forEach((gift) => {
  gift.element.addEventListener("click", () => {
    playAudio(gift.audioName);
  });
});
