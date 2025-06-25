import { logger } from "@/utils/Logger.js";
import { api } from "./AxiosService.js";
import { House } from "@/models/House.js";
import { AppState } from "@/AppState.js";




class HousesService {
  async getAllHouses() {
    const res = await api.get('api/houses');
    logger.log("🏠🦮Got Houses!", res.data);
    const houses = res.data.map(pojo => new House(pojo));
    AppState.houses = houses;
  }


}

export const housesService = new HousesService();