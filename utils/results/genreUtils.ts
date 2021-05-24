import { popularSongsGenreMap } from "./data/popularSongsGenreMap";

const allGenres = [
  "Pop",
  "Rock",
  "Dance",
  "Metal",
  "Latin",
  "House",
  "Electro",
  "EDM",
  "Country",
  "Indie",
  "Alt-Rock",
  "Reggae",
  "Hardcore",
  "Folk",
  "Soul",
  "Punk",
  "Funk",
  "Emo",
  "CantoPop",
  "Chicago-House",
  "Grunge",
  "Chill",
  "Death-Metal",
  "Trance",
  "Groove",
  "Industrial",
  "Disco",
  "Dub",
  "German",
  "Garage",
  "British",
  "French",
  "K-Pop",
];

export function getAllGenres() {
  return allGenres;
}

export function getNGenres(n: number) {
  return allGenres.slice(0, n);
}

// * This function can support multiple genres, however, currently only one is used
// * Chooses random songs for the chosen genres. Currently only choses 1 random song per genre selected as a seed
export function getSeedSongsFromGenres(genres: string[], max: number) {
  const chosenGenres: string[] = [];
  const genresCopy = [...genres];

  // Chooses up to max # of genres from genres and puts them into chosenGenres
  while (chosenGenres.length < max && genresCopy.length > 0) {
    const randomGenreInd = Math.floor(Math.random() * genresCopy.length);
    const removedGenre = genresCopy.splice(randomGenreInd, 1)[0];
    chosenGenres.push(removedGenre);
  }

  // Chooses 1 seed song per genre
  const seedSongs = chosenGenres.map((genre) => {
    const songsForGenre = popularSongsGenreMap.get(genre);
    if (songsForGenre === undefined) {
      return "";
    }
    const randomInd = Math.floor(Math.random() * songsForGenre.length);
    return songsForGenre[randomInd];
  });

  // returns up min(genres, max) # of seed songs
  return seedSongs;
}
