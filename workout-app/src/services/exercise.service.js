import Cookies from 'js-cookie';
import { $axios } from '../api';
const EXERCISES = '/exercises';
class ExercisesService {
  async getAll() {
    return await $axios.get(`${EXERCISES}`);
  }
  async create(body) {
    return await $axios.post(EXERCISES, body);
  }

  async update(id, body) {
    return await $axios.put(`${EXERCISES}/${id}`, body);
  }

  async delete(id, body) {
    return await $axios.delete(`${EXERCISES}/${id}`, body);
  }
}
export default new ExercisesService();
