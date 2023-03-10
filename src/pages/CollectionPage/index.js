import React from 'react';
import { useParams } from 'react-router-dom';
import { Header, LeftSide, SingleCollection } from '../../components';
import './CollectionPage.css';

export default function CollectionPage() {
  const { collection_id } = useParams();
  return (
    <div>
      <Header pageName='Collection Page'/>
      <div className='collectionpage-content'>
        <LeftSide id={collection_id}/>
        <SingleCollection collection_id={collection_id}/>
      </div>
    </div>
  );
}
