import {BASE_URL} from "./config";

const apiURL = BASE_URL;

export const indexAPI = `${apiURL}/`; //GET
export const projectsAPI = `${apiURL}/projects` //GET
export const singleProjectAPI = `${apiURL}/projects/` //GET
export const teamAPI = `${apiURL}/team` //GET/
export const volunteerPostAPI = `${apiURL}/volunteer` //POST