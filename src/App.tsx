import React from 'react';
import './App.css';
import Stepper from './components/Stepper';
import Info from './components/Info';


// I'll be rendering all out here
function App() {
  return (
    <div style={{backgroundColor: '#EFF5F7', borderRadius: '15px', padding: '1em 0', display: 'flex', justifyContent: 'center', width: '50%'}}>
      <Stepper />
      <Info 
      name='Name'
      email='Email Address'
      phone='Phone Number'
      />
    </div>
  );
}

export default App;
