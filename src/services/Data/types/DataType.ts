import { Movie } from "models";

export type DataType = {
  getMovieList: (urlKey: string) => Promise<Movie[]>;
  formatDataAPI: (dataEntry: Movie[], qtyLimit?: number) => Movie[];
};
