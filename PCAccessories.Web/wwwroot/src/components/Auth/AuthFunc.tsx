import React from 'react';
import axios from 'axios'
import {IUser} from "./interface/interface";

export const API_URL = 'http://localhost:3161/api/v1'

export async function login(username, email, password, confirmPassword) {
    try {
        const response = await axios.post<IUser>(`${API_URL}/auth/login`)
        console.log(response)
    } catch (e) {
        console.log(e)
    }
}