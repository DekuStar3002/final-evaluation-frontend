import React from 'react';
import { Header, LeftSide, ContentTypesBar, SingleContent } from '../../components';
import { useParams } from 'react-router-dom';
function ContentTypePage() {
  const { content_id } = useParams();
  return (
    <div>
      <Header pageName='Content Types'/>
      <div style={{'display':'flex'}}>
        <LeftSide />
        <ContentTypesBar />
        <SingleContent content_id={content_id}/>
      </div>
    </div>
  );
}

export default ContentTypePage;
