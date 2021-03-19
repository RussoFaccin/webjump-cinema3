export class Movie {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  overview: string;

  constructor({ id, title, poster_path, backdrop_path, overview }: Movie) {
    this.id = id;
    this.title = title;
    this.poster_path = poster_path;
    this.backdrop_path = backdrop_path;
    this.overview = overview;
  }
}
