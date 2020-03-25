import ongService from "../services/ongService";

export default {
  selectAllOngs: async () => {
    return await ongService.selectAllOngs();
  },
  insertOng: async request => {
    return ongService.insertOng(request);
  }
};
