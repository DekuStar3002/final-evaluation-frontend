import React, { useEffect, useState } from 'react';
import './SingleContent.css';
import { makeRequest } from '../../utils';
import { getContentTypeById } from '../../constants/apiEndPoints';
import editIcon from '../../assets/user-edit-text-message-note.png';
import PropTypes from 'prop-types';

function SingleContent({ content_id }) {
  const [ contentDetail, setContentDetail ] = useState({});
  useEffect(() => {
    makeRequest(getContentTypeById(content_id))
      .then((response) => {
        const numberOfFields = Object.keys(response.data.field).length;
        setContentDetail({ ...response.data, numberOfFields });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      {
        contentDetail === {} ? <div>Loading ...</div> 
          : 
          <>
            <div className='singleContent'>
              <div className='singleContent-header'>
                <p>{contentDetail.name}</p>
                <img src={editIcon} alt='edit icon'/>
              </div>
              <div className='singleContent-subheading'>
                <p>{contentDetail.numberOfFields} Fields</p>
              </div>
              <button>Add another field</button>
            </div>
          </>
      }
    </>
  );
}

SingleContent.propTypes = {
  content_id: PropTypes.number.isRequired
};

export default SingleContent;
