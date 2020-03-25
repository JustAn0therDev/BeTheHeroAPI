import sessionService from '../services/sessionService';

export default {
  createSession: async request => {
    return await sessionService.createSession(request);
  }
};
