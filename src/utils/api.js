import { BASE_URL } from "./config";

const apiURL = BASE_URL;

export const indexAPI = `${apiURL}/`; //GET
export const projectsAPI = `${apiURL}/projects`; //GET
export const singleProjectAPI = `${apiURL}/projects/`; //GET
export const teamAPI = `${apiURL}/team`; //GET/
export const volunteerPostAPI = `${apiURL}/volunteer`; //POST
export const donorRegisterAPI = `${apiURL}/bloodPortal/donor`; //POST
export const bloodRequestAPI = `${apiURL}/bloodPortal/requestBlood`; //POST
export const donationConfirmAPI = `${apiURL}/donate`; //POST
export const donationSuccessAPI = `${apiURL}/donate/payment`; //POST
export const loginAPI = `${apiURL}/users/login`; //POST
export const getDonorsListAPI = `${apiURL}/admin/bloodDonors`; //POST with auth
export const getBloodRequestsListAPI = `${apiURL}/admin/bloodRequests`; //GET with auth
export const volunteerApplicationsAPI = `${apiURL}/admin/volunteers`; //GET with auth
export const moneyDonationsAPI = `${apiURL}/admin/donations`; //GET with auth
export const getUsersAPI = `${apiURL}/users`; //GET with auth
export const addUsersAPI = `${apiURL}/users/add`; //POST with auth
export const deleteUsersAPI = `${apiURL}/users/delete`; //GET with auth and id
export const addProjectsAPI = `${apiURL}/projects/add`; //POST with auth
export const deleteProjectsAPI = `${apiURL}/projects/delete`; //GET with auth and id
export const addTeamsAPI = `${apiURL}/team/add`; //POST with auth
export const deleteTeamsAPI = `${apiURL}/team/delete`; //GET with auth and id
export const contactAPI = `${apiURL}/contact`; //POST
export const messagesAPI = `${apiURL}/admin/messages`; //POST with auth
