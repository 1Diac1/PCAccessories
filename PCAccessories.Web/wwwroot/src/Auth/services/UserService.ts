import { AxiosResponse } from "axios";
import $api from "../http";
import { IUSER } from "../models/IUSER";
import { AuthResponse } from "../models/response/AuthResponse";

export default class UserService {
    static fetchUsers() {
        return $api.get<IUSER[]>('/products')
    }
}