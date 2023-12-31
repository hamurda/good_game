import APIClient from "./APIClient";

export interface Genre {
    id: number,
    name: string,
    slug: string,
    background_image: string,
}

const apiClient = new APIClient<Genre>("/genres");

class GenreController{
    getAllGenres = () => {
        return apiClient.getAll();
    }
}

export default new GenreController;