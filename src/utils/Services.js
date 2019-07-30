import axios from "axios";
import { indexAPI, teamAPI, projectsAPI, singleProjectAPI, volunteerPostAPI } from "./api";

export const getIndexData = () => axios.get(indexAPI).then(res => res.data);
export const getProjectsData = () => axios.get(projectsAPI).then(res => res.data);
export const getTeamData = () => axios.get(teamAPI).then(res => res.data);
export const getSingleProject = (id) => axios.get(singleProjectAPI + id).then(res => res.data);
export const addVolunteerData = (data) => axios.post(volunteerPostAPI, data).then(res => res.data);