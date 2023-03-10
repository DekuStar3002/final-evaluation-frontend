import React, { useEffect } from 'react';
import { useNavigate } from'react-router-dom';
import searchIcon from '../../assets/icon-search-dark.png';
import { makeRequest } from '../../utils';
import { getAllCollectionData } from '../../constants/apiEndPoints';
import PropTypes from 'prop-types';
import './LeftSide.css';

function LeftSide({id}) {
  console.log(id);
  const navigate = useNavigate();
  const [ collection, setCollection ] = React.useState([]);
  useEffect(() => {
    makeRequest(getAllCollectionData())
      .then((response) => {
        setCollection(response.data);
      })
      .catch((error) => {
        console.log(error);
        navigate('/error');
      });
  }, []);
  return (
    <div className='leftside'>
      <div className='leftside-header'>
        <p>COLLECTION TYPES</p>
        <img src={searchIcon} alt='search icon'/>
      </div>
      {
        collection && collection.map((item) => {
          return (
            <div key={item.id} className='leftside-item'>
              <li onClick={() => navigate(`/collection/${item.id}`)} style={{ 'cursor': 'pointer', 'color': id === item.id ? 'white' : '', 'fontWeight': id === item.id ? 'bold' : ''}}>{item.name}</li>
            </div>
          );
        })
      }
    </div>
  );
}

LeftSide.propTypes = {
  id: PropTypes.number
};

export default LeftSide;
