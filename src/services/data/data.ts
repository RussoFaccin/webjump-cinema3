import { api, API_CONFIG } from 'services/api';

export class DataService {
    static async getMovieList(urlKey: string) {
        const movieList = await api.get(`/${urlKey}`, API_CONFIG);

        return movieList.data.results;
    }
}