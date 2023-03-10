import axios from 'axios';

const makeRequest = async (configObj, navigate) => {
  try {
    const { data } = await axios(configObj);
    return data;
  } catch (error) {
    if(navigate) {
      navigate('/error');
    }
  }
};

export default makeRequest;