import axios from 'axios';

export const Api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL || "https://randomuser.me/api",
});