import React, { useEffect, useState } from 'react';
import { makeRequest } from '../../utils';
import { getAllContentTypes } from '../../constants/apiEndPoints';
import { useNavigate } from 'react-router-dom';
import searchIcon from '../../assets/icon-search-dark.png';
import './ContentTypesBar.css';

function ContentTypesBar() {
  const navigate = useNavigate();
  const [ contentTypes, setContentTypes ] = useState([]);
  useEffect(() => {
    makeRequest(getAllContentTypes(), navigate)
      .then((response) => {
        setContentTypes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className='contenttypesbar'>
      <div className='contenttypebar-search'>
        <p>{contentTypes.length} Types</p>
        <img src={searchIcon} alt='search icon' />
      </div>
      <button>+ New Type</button>
      <div>
        {
          contentTypes.length === 0 ? <div>Loading...</div> 
            : 
            <div>
              {
                contentTypes.map((contentType) => {
                  return ( 
                    <div key={contentType.id} className='contenttypebar-content' onClick={() => navigate(`/content/${contentType.id}`)}>
                      <p>{contentType.name}</p>
                      <p>{Object.keys(contentType.field).length}</p>
                    </div>
                  );
                })
              }
            </div>
        }
      </div>
    </div>
  );
}

export default ContentTypesBar;
