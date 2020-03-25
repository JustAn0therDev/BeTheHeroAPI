import incidentService from "../services/incidentService";

export default {
  selectAllIncidents: async request => {
    return await incidentService.selectAllIncidents(request);
  },
  insertIncident: async request => {
    return await incidentService.insertIncident(request);
  },
  deleteIncident: async request => {
    return await incidentService.deleteIncident(request);
  }
};
