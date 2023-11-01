import APIClient from "./APIClient";

export interface Genre {
    id: number,
    name: string,
    slug: string,
}

const apiClient = new APIClient<Genre>("/genres");

class GenreController{
    getAllGenres = () => {
        return apiClient.getAll();
    }

    addNewGenre = (newGenre:Genre)  => {
        return apiClient.post(newGenre);
    }

    deleteGame = (genre: Genre) => {
        return apiClient.delete(genre.id);
    }
}

export default new GenreController;