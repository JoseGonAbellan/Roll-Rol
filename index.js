const data = [
  {
    id: 1,
    src: "https://www.youtube.com/embed/videoseries?list=PLqbdKc6gkI0TE2CCfoqehLyVtWJMTmKj0",
  },
  {
    id: 2,
    src: "https://www.youtube.com/embed/videoseries?list=PLqbdKc6gkI0TXDgi888_6Fe5aSB8_bWul",
  },
  {
    id: 3,
    src: "https://www.youtube.com/embed/videoseries?list=PLqbdKc6gkI0QCNxbuTGk8__GmtwYaCe75",
  },
  {
    id: 4,
    src: "https://www.youtube.com/embed/videoseries?list=PLqbdKc6gkI0S-yt3YuLxs9CuA1yYRsXYz",
  },
  {
    id: 5,
    src: "https://www.youtube.com/embed/videoseries?list=PLqbdKc6gkI0TxGnanPwXgkSfRjI2tdDgJ",
  },
];

const playListSection = document.getElementsByClassName("play-list-frames");

const videos = () => {
  const videosData = data.map((e) => {
    return `<iframe
        class="playlist-frame"
        id=${e.id}
        width="380"
        height="213.75"
        src=${e.src}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>`;
  });
  playListSection[0].innerHTML = videosData;
};
videos();
