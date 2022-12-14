import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const fetchContactsApi = () => {
  return axios
    .get('/contacts')
    .then(resp =>
      resp.data.map(({ id, name, number }) => ({ id, name, number }))
    );
};

export const addContactApi = contact => {
  return axios
    .post('/contacts', contact)
    .then(resp => ({ ...contact, id: resp.data.id }));
};

export const removeContactApi = id => {
  return axios.delete(`/contacts/${id}`);
};
