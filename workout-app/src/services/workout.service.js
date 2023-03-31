import Cookies from 'js-cookie';
import { $axios } from '../api';
const WORKOUTS = '/workouts';
class WorkoutService {
  async getAll() {
    return await $axios.get(`${WORKOUTS}`);
  }
  async getById(id) {
    return $axios.get(`${WORKOUTS}/${id}`);
  }
  async create(body) {
    return await $axios.post(WORKOUTS, body);
  }

  async update(id, body) {
    return await $axios.put(`${WORKOUTS}/${id}`, body);
  }

  async delete(id, body) {
    return await $axios.delete(`${WORKOUTS}/${id}`, body);
  }
}
export default new WorkoutService();
