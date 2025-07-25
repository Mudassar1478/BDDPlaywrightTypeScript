import dotenv from 'dotenv';
dotenv.config();

export const Config = {
    baseurl: process.env.BASE_URL || 'http://localhost:3000',
    username: process.env.USER_NAME || 'defaultUser',
    password: process.env.PASSWORD || 'defaultPass'
}