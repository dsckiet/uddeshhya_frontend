import axios from "axios";
import {
  indexAPI,
  teamAPI,
  projectsAPI,
  singleProjectAPI,
  volunteerPostAPI,
  donorRegisterAPI,
  bloodRequestAPI
} from "./api";

export const getIndexData = () => axios.get(indexAPI).then(res => res.data);
export const getProjectsData = () =>
  axios.get(projectsAPI).then(res => res.data);
export const getTeamData = () => axios.get(teamAPI).then(res => res.data);
export const getSingleProject = id =>
  axios.get(singleProjectAPI + id).then(res => res.data);
export const addVolunteerData = data =>
  axios.post(volunteerPostAPI, data).then(res => res.data);
export const addDonor = data =>
  axios.post(donorRegisterAPI, data).then(res => res.data);
export const addBloodRequest = data =>
  axios.post(bloodRequestAPI, data).then(res => res.data);
