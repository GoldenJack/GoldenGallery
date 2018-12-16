import ApiCall from 'services/ApiCall';

const endpoint = 'http://localhost:3000/api/home';

export default {
  home: {
    getHome: () => ApiCall.get(endpoint),
  }
};
