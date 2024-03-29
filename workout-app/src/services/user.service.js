import Cookies from 'js-cookie';
import { $axios } from '../api';
const USERS = '/users';
class UserService {
  async getProfile() {
    return await $axios.get(`${USERS}/profile`);
  }
}
export default new UserService();
