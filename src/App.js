import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { CollectionPage, CollectionsPage, ContentTypePage, ContentTypesPage, ErrorPage, LoginPage, NotFoundPage, RegisterPage } from './pages';
import { ProtectedRoute } from './helpers';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/content' element={<ProtectedRoute><ContentTypesPage /></ProtectedRoute>} />
          <Route path='/content/:content_id' element={<ProtectedRoute><ContentTypePage /></ProtectedRoute>} />
          <Route path='/collection/:collection_id' element={<ProtectedRoute><CollectionPage /></ProtectedRoute>}/>
          <Route path='/collection' element={<ProtectedRoute><CollectionsPage /></ProtectedRoute>}/>
          <Route path='/error' element={<ErrorPage />}/>
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
