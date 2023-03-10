const BACKEND_URL = 'http://localhost:5050';
const COLLECTION_URL = 'api/collection/';
const CONTENT_URL = 'api/content/';

const getAllCollectionData = () => {
  return {
    baseURL: BACKEND_URL,
    url: COLLECTION_URL + 'all',
    method: 'get'
  };
};

const getContentOfASingleCollection = (collection_id) => {
  return {
    baseURL: BACKEND_URL,
    url: COLLECTION_URL + 'content',
    method: 'post',
    data: { collection_id }
  };
};

const deleteContentFromASingleCollection = (collection_id, content_id) => {
  return {
    baseURL: BACKEND_URL,
    url: COLLECTION_URL + 'delete',
    method: 'delete',
    data: {
      collection_id,
      content_id
    }
  };
};

const getAllContentTypes = () => {
  return {
    baseURL: BACKEND_URL,
    url: CONTENT_URL+'all',
    method: 'get'
  };
};

const getContentTypeById = (id) => {
  return {
    baseURL: BACKEND_URL,
    url: CONTENT_URL + 'id',
    method: 'post',
    data: {
      id
    }
  };
};

export { getAllCollectionData, getContentOfASingleCollection,deleteContentFromASingleCollection,getAllContentTypes, getContentTypeById };