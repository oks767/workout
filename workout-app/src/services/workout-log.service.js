import Cookies from 'js-cookie';
import { $axios } from '../api';
const WORKOUTS = '/workouts';
const LOG = `${WORKOUTS}/log`;
class WorkoutLogService {
  async getById(id) {
    return await $axios.get(`${LOG}/${id}`);
  }
  async create(workoutId) {
    return await $axios.post(`${LOG}/${workoutId}`);
  }

  async complete(id) {
    return await $axios.patch(`${LOG}/completed/${id}`);
  }
}
export default new WorkoutLogService();
