import Cookies from 'js-cookie';
import { $axios } from '../api';
const EXERCISES = '/exercises';
const LOG = `${EXERCISES}/log`;
class ExerciseLogService {
  async getById(exerciseLogId) {
    return await $axios.get(`${LOG}/${exerciseLogId}`);
  }
  async create(exerciseId) {
    return await $axios.post(`${LOG}/${exerciseId}`);
  }

  async updateTime(timeId, body) {
    return await $axios.put(`${LOG}/time/${timeId}`, body);
  }

  async complete(exerciseLogId, body) {
    return await $axios.patch(`${LOG}/completed/${exerciseLogId}`, body);
  }
}
export default new ExerciseLogService();
