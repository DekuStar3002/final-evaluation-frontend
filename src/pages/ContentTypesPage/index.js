import React from 'react';
import { Header, LeftSide, ContentTypesBar } from '../../components';

function ContentTypesPage() {
  return (
    <div>
      <Header pageName='Content Types'/>
      <div style={{'display': 'flex'}}>
        <LeftSide />
        <ContentTypesBar />
      </div>
    </div>
  );
}

export default ContentTypesPage;
