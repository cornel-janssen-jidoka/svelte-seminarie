import React from 'react';
import './Layout.css';

// @ts-ignore
function Layout({children}) {
  return (
    <div className="container">
      <div className="content">
        {children}
      </div>
    </div>

  );
}

export default Layout;
