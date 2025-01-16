// src/debug/DebugApp.jsx
import React from 'react';
import DebugHeader from './DebugHeader';

function DebugApp() {
  return (
    <div>
      <DebugHeader />
      <div style={{ height: '2000px', padding: '1rem' }}>
        <p>Scroll down, then click the hamburger menu. The header is not fixed.</p>
        <p>Check the browser console to see if the dropdown items get logged on click.</p>
      </div>
    </div>
  );
}

export default DebugApp;
