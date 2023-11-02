import APIClient from "./APIClient";

export interface Platform {
    id: number,
    name: string,
    slug: string,
}

const apiClient = new APIClient<Platform>("/platforms");

class PlatformController{
    getAllPlatforms = () => {
        return apiClient.getAll();
    }
}

export default new PlatformController;