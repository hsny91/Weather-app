import config from '../config'
import axios from 'axios'
// import urlService from './URLService'

class ForecastService {

  static async getWeatherForecastService(pCity) {
    let response = await axios.get(`${config.backendURL}/search-location-weather/${pCity}`)
    return response.data
  }

}
export default ForecastService;