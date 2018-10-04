import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons';
import Header from './components/fixed/Header';
import routes from './routes';

library.add(faBars, faLock, faLockOpen);

function App() {
  return (
    <div className="App">
      <Header />
      {routes}
    </div>
  );
}

export default App;
