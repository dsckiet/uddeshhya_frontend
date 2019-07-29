import axios from "axios";
import { indexAPI, teamAPI, projectsAPI, singleProjectAPI } from "./api";

export const getIndexData = () => axios.get(indexAPI).then(res => res.data);
export const getProjectsData = () => axios.get(projectsAPI).then(res => res.data);
export const getTeamData = () => axios.get(teamAPI).then(res => res.data);
export const getSingleProject = (id) => axios.get(singleProjectAPI + id).then(res => res.data);