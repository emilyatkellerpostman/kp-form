import React from 'react';

function Stepper() {
  const steps = ['YOUR INFO', 'SELECT PLAN', 'ADD-ONS', 'SUMMARY'];

  return (
    <div style={{backgroundColor: '#0A1D40', color: '#FFFFFF', width: '20%', padding: '2em', borderRadius: '15px', height: '500px'}}>
      {steps?.map((step, i) => (
        <div key={i}>
          <div>{(i + 1) + (" ") + "STEP " + (i + 1)}</div>
          <p>{step}</p>
        </div>
      ))}
    </div>
  );
}

export default Stepper;
