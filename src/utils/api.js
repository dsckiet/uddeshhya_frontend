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
