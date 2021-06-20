import { api, API_CONFIG } from "services/api";
import { Movie } from "shared/types";
import { DataType } from "./types";

export const Data: DataType = {
  async getMovieList(urlKey) {
    const movieList = await api.get(`/movie/${urlKey}`, API_CONFIG);
    return movieList.data.results;
  },
  formatDataAPI(dataEntry, qtyLimit = 0): Movie[] {
    enum ImageSizes {
      BACKDROP = "w780",
      POSTER = "w342",
    }

    const BACKDROP_URL = `${process.env.REACT_APP_TMDB_IMAGE_URL}/${ImageSizes.BACKDROP}`;
    const POSTER_URL = `${process.env.REACT_APP_TMDB_IMAGE_URL}/${ImageSizes.POSTER}`;

    const tmpList = dataEntry.map((movie: Movie) => {
      movie.backdrop_path = `${BACKDROP_URL}${movie.backdrop_path}`;
      movie.poster_path = `${POSTER_URL}${movie.poster_path}`;

      return movie;
    });

    return qtyLimit === 0 ? dataEntry : tmpList.slice(0, qtyLimit);
  },
};
