import React, { useEffect, useState } from 'react';
import './SingleCollection.css';
import PropTypes from 'prop-types';
import { makeRequest } from '../../utils';
import { deleteContentFromASingleCollection, getContentOfASingleCollection } from '../../constants/apiEndPoints';
import editIcon from '../../assets/user-edit-text-message-note.png';
import deleteIcon from '../../assets/trash-delete-recycle-bin-bucket-waste.png';

function SingleCollection({ collection_id }) {
  const [ contents, setContents ] = useState([]);
  const [ headers, setHeaders ] = useState([]);
  useEffect(() => {
    makeRequest(getContentOfASingleCollection(collection_id))
      .then((response) => {
        setContents(response.data);
        if(response.data.length !== 0) {
          setHeaders(Object.keys(response.data[0].values));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const handleDelete = async (index) => {
    await makeRequest(deleteContentFromASingleCollection(collection_id, contents[index].id));
    let newContent = [ ...contents ];
    newContent = newContent.filter((content, idx) => idx !== index);
    setContents(newContent);
  };
  return (
    <div className='singlecollection'>
      <div className='singlecollection-header'>
        <h2>{contents.length} Entries Found</h2>
        <p>Add a new entry</p>
      </div>
      <div>
        <div className='singlecollection-fields'>
          {
            headers.map((header, index) => index <= 3 && <div key={index} className='element'>{header}</div>)
          }
        </div>
        <div className='singlecollection-rowcontainer'>
          {
            contents.map((content, index) => 
              <div className='singlecollection-row' key={content.id}>
                <div className='singlecollection-row-content'>
                  {
                    headers.map((header, index) => <div key={index} className='element'>  {content.values[header] ? content.values[header] : 'NULL' }</div>)
                  }
                </div>
                <div className='singlecollection-button'>
                  <img src={editIcon} alt='edit icon' onClick={() => {}}/>
                  <img src={deleteIcon} alt='edit icon' onClick={() => handleDelete(index)} style={{'cursor': 'pointer'}}/>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
}

SingleCollection.propTypes = {
  collection_id: PropTypes.number.isRequired
};

export default SingleCollection;
