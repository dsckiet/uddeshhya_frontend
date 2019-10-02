import axios from "axios";
import {
  indexAPI,
  teamAPI,
  projectsAPI,
  singleProjectAPI,
  volunteerPostAPI,
  donorRegisterAPI,
  bloodRequestAPI,
  donationConfirmAPI,
  donationSuccessAPI,
  loginAPI,
  getDonorsListAPI,
  getBloodRequestsListAPI,
  volunteerApplicationsAPI,
  moneyDonationsAPI,
  getUsersAPI,
  addUsersAPI,
  deleteUsersAPI
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
export const donationConfirm = data =>
  axios.post(donationConfirmAPI, data).then(res => res.data);
export const donationSuccess = data =>
  axios.post(donationSuccessAPI, data).then(res => res.data);
export const login = data => axios.post(loginAPI, data).then(res => res);
export const getDonorsList = (data, headers) =>
  axios.post(getDonorsListAPI, data, headers).then(res => res.data);
export const getBloodRequestsList = headers =>
  axios.get(getBloodRequestsListAPI, headers).then(res => res.data);
export const volunteerApplications = headers =>
  axios.get(volunteerApplicationsAPI, headers).then(res => res.data);
export const moneyDonations = headers =>
  axios.get(moneyDonationsAPI, headers).then(res => res.data);
export const getUsers = headers =>
  axios.get(getUsersAPI, headers).then(res => res.data);
export const addUsers = (data, headers) =>
  axios.post(addUsersAPI, data, headers).then(res => res);
export const deleteUser = (id,headers) =>
  axios.get(`${deleteUsersAPI}/${id}`, headers).then(res => res);

