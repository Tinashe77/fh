import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';
import Screen3 from './screens/Screen3';
import Screen4 from './screens/Screen4';
import Screen5 from './screens/Screen5';
import FaqPage from './screens/FaqPage';
import SignUpPage from './screens/SignUpPage';
import DocumentPage from './screens/DocumentPage';
import SupportPage from './screens/SupportPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Home */}
          <Route index element={<Screen1 />} />

          {/* Service Plans */}
          <Route path="service-plans" element={<Screen3 />} />
          <Route path="service-plans/:type" element={<Screen3 />} />

          {/* Installation */}
          <Route path="installation" element={<Screen2 />} />
          <Route path="installation/:type" element={<Screen2 />} />

          {/* Network Status */}
          <Route path="network-status" element={<Screen5 />} />
          <Route path="network-status/:type" element={<Screen5 />} />

          {/* Southview Project */}
          <Route path="southview" element={<Screen4 />} />

          {/* Client Portal & Sign Up */}
          <Route path="portal" element={<SignUpPage mode="portal" />} />
          <Route path="sign-up" element={<SignUpPage />} />

          {/* Support, Legal & Documents */}
          <Route path="faq" element={<FaqPage />} />
          <Route path="support" element={<SupportPage />} />
          <Route path="documents/:slug" element={<DocumentPage />} />
          <Route path="terms" element={<Navigate to="/documents/terms" replace />} />
          <Route path="privacy" element={<Navigate to="/documents/privacy" replace />} />
          <Route path="fair-use" element={<Navigate to="/documents/fair-use" replace />} />
          <Route path="sla/residential" element={<Navigate to="/documents/residential-sla" replace />} />
          <Route path="sla/business" element={<Navigate to="/documents/business-sla" replace />} />

          {/* Legacy routes */}
          <Route path="screen-1" element={<Navigate to="/" replace />} />
          <Route path="screen-2" element={<Navigate to="/installation" replace />} />
          <Route path="screen-3" element={<Navigate to="/service-plans" replace />} />
          <Route path="screen-4" element={<Navigate to="/southview" replace />} />
          <Route path="screen-5" element={<Navigate to="/network-status" replace />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
