const playlistSongs = document.getElementById("playlist-songs");
const playButton = document.getElementById("play");
const nextButton = document.getElementById("next");
const previousButton = document.getElementById("previous");
const shuffleButton = document.getElementById("shuffle");
const playIcon = document.getElementById("play-icon");

const allSongs = [
  {
    id: 0,
    title: "Scratching The Surface",
    artist: "Quincy Larson",
    duration: "4:25",
    src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/scratching-the-surface.mp3",
  },
  {
    id: 1,
    title: "Can't Stay Down",
    artist: "Quincy Larson",
    duration: "4:15",
    src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/cant-stay-down.mp3",
  },
  {
    id: 2,
    title: "Still Learning",
    artist: "Quincy Larson",
    duration: "3:51",
    src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/still-learning.mp3",
  },
  {
    id: 3,
    title: "Cruising for a Musing",
    artist: "Quincy Larson",
    duration: "3:34",
    src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/cruising-for-a-musing.mp3",
  },
  {
    id: 4,
    title: "Never Not Favored",
    artist: "Quincy Larson",
    duration: "3:35",
    src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/never-not-favored.mp3",
  },
  {
    id: 5,
    title: "From the Ground Up",
    artist: "Quincy Larson",
    duration: "3:12",
    src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/from-the-ground-up.mp3",
  },
  {
    id: 6,
    title: "Walking on Air",
    artist: "Quincy Larson",
    duration: "3:25",
    src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/walking-on-air.mp3",
  },
  {
    id: 7,
    title: "Can't Stop Me.",
    artist: "Quincy Larson",
    duration: "3:52",
    src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/cant-stop-me-cant-even-slow-me-down.mp3",
  },
  {
    id: 8,
    title: "The Surest Way Out",
    artist: "Quincy Larson",
    duration: "3:10",
    src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/the-surest-way-out-is-through.mp3",
  },
  {
    id: 9,
    title: "Chasing That Feeling",
    artist: "Quincy Larson",
    duration: "2:43",
    src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/chasing-that-feeling.mp3",
  },
];

const audio = new Audio();
let userData = {
  songs: [...allSongs],
  currentSong: null,
  songCurrentTime: 0,
};

const playSong = (id) => {
  const song = userData?.songs.find((song) => song.id === id);
  if (!song) return;

  audio.src = song.src;
  audio.title = song.title;

  if (userData?.currentSong === null || userData?.currentSong.id !== id) {
    audio.currentTime = 0;
  } else {
    audio.currentTime = userData?.songCurrentTime;
  }

  userData.currentSong = song;

  // UI Updates
  updatePlayIcon(true);
  highlightCurrentSong();
  setPlayerDisplay();

  audio.play();
};

const pauseSong = () => {
  userData.songCurrentTime = audio.currentTime;
  updatePlayIcon(false);
  audio.pause();
};

const updatePlayIcon = (isPlaying) => {
  if (isPlaying) {
    playIcon.setAttribute("data-lucide", "pause");
  } else {
    playIcon.setAttribute("data-lucide", "play");
  }
  lucide.createIcons(); // Refresca iconos
};

const playNextSong = () => {
  if (userData?.currentSong === null) {
    playSong(userData?.songs[0].id);
  } else {
    const currentSongIndex = getCurrentSongIndex();
    const nextSong =
      userData?.songs[currentSongIndex + 1] || userData?.songs[0];
    playSong(nextSong.id);
  }
};

const playPreviousSong = () => {
  if (userData?.currentSong === null) return;
  const currentSongIndex = getCurrentSongIndex();
  const previousSong =
    userData?.songs[currentSongIndex - 1] ||
    userData?.songs[userData.songs.length - 1];
  playSong(previousSong.id);
};

const shuffle = () => {
  userData?.songs.sort(() => Math.random() - 0.5);
  userData.currentSong = null;
  userData.songCurrentTime = 0;
  renderSongs(userData?.songs);
  pauseSong();
  setPlayerDisplay();
};

const deleteSong = (id) => {
  if (userData?.currentSong?.id === id) {
    userData.currentSong = null;
    userData.songCurrentTime = 0;
    pauseSong();
    setPlayerDisplay();
  }
  userData.songs = userData?.songs.filter((song) => song.id !== id);
  renderSongs(userData?.songs);
  highlightCurrentSong();
};
const setPlayerDisplay = () => {
  const playingSong = document.getElementById("player-song-title");
  const songArtist = document.getElementById("player-song-artist");
  playingSong.textContent =
    userData?.currentSong?.title || "Selecciona una canción";
  songArtist.textContent = userData?.currentSong?.artist || "---";
};

const highlightCurrentSong = () => {
  const playlistSongElements = document.querySelectorAll(".playlist-song");
  const songToHighlight = document.getElementById(
    `song-${userData?.currentSong?.id}`,
  );

  playlistSongElements.forEach((songEl) =>
    songEl.removeAttribute("aria-current"),
  );
  if (songToHighlight) songToHighlight.setAttribute("aria-current", "true");
};

const renderSongs = (array) => {
  const songsHTML = array
    .map((song) => {
      return `
            <li id="song-${song.id}" class="playlist-song" data-song-id="${song.id}">
                <div class="song-meta-info">
                    <span class="song-title">${song.title}</span>      
                    <span class="song-artist">${song.artist}</span>
                </div>
                <div class="song-right">
                    <span class="song-duration">${song.duration}</span>
                    <button class="btn-delete" aria-label="Delete ${song.title}" data-delete-id="${song.id}">
                        <i data-lucide="trash-2" size="16"></i>
                    </button>
                </div>
            </li>`;
    })
    .join("");

  playlistSongs.innerHTML = songsHTML;
  lucide.createIcons();
};

const getCurrentSongIndex = () =>
  userData?.songs.indexOf(userData?.currentSong);

// --- EVENT DELEGATION PARA PLAYLIST ---
playlistSongs.addEventListener("click", (e) => {
  const deleteBtn = e.target.closest(".btn-delete");
  const songRow = e.target.closest(".playlist-song");

  if (deleteBtn) {
    e.stopPropagation();
    deleteSong(Number(deleteBtn.dataset.deleteId));
    return;
  }

  if (songRow) {
    playSong(Number(songRow.dataset.songId));
  }
});

playButton.addEventListener("click", () => {
  if (audio.paused) {
    if (userData?.currentSong === null) {
      playSong(userData?.songs[0].id);
    } else {
      playSong(userData?.currentSong.id);
    }
  } else {
    pauseSong();
  }
});

nextButton.addEventListener("click", playNextSong);

previousButton.addEventListener("click", playPreviousSong);

shuffleButton.addEventListener("click", shuffle);

audio.addEventListener("ended", () => {
  const currentSongIndex = getCurrentSongIndex();
  const nextSongExists = userData?.songs[currentSongIndex + 1] !== undefined;
  if (nextSongExists) playNextSong();
  else {
    userData.currentSong = null;
    userData.songCurrentTime = 0;
    pauseSong();
    setPlayerDisplay();
    highlightCurrentSong();
  }
});

// Inicialización
lucide.createIcons();
renderSongs(userData?.songs);
