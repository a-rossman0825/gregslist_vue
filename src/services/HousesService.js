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
  
  async unlistHouse(houseId) {
    const res = await api.delete(`api/houses/${houseId}`);
    logger.log(`🏠🗑️ Deleted House`, res.data);
    const houses = AppState.houses;
    const index = houses.findIndex((house) => house.id == houseId);
    houses.splice(index, 1);
  }
  
  async createHouse(houseData) {
    const res = await api.post(`api/houses`, houseData);
    logger.log('🏠🦮Created House!', res.data);
    const house = new House(res.data);
    AppState.houses.push(house);
  }
}

export const housesService = new HousesService();