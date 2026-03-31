import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';
import Screen3 from './screens/Screen3';
import Screen4 from './screens/Screen4';
import Screen5 from './screens/Screen5';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Screen1 />} />
          <Route path="screen-1" element={<Screen1 />} />
          <Route path="screen-2" element={<Screen2 />} />
          <Route path="screen-3" element={<Screen3 />} />
          <Route path="screen-4" element={<Screen4 />} />
          <Route path="screen-5" element={<Screen5 />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;