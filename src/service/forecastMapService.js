import config from '../config'
import axios from 'axios'

class ForecastMapService {

  static async getMapForecastService(pLat, pLng) {
    let response = await axios.get(`${config.backendURL}/search-map-weather/${pLat}/${pLng}`)
    return response.data
  }

}
export default ForecastMapService;