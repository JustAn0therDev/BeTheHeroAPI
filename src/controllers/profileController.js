import profileService from "../services/profileService";

export default {
  selectAllIncidentsFromAnSpecificOng: async (request, response) => {
    return await profileService.selectAllIncidentsFromAnSpecificOng(request, response);
  }
};
