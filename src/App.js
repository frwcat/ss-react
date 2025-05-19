import React from 'react';
import './App.css';
import R006_LifecycleEx from './react/part1/R006_LifecycleEx';

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>HTML 적용하기</p>
      <R006_LifecycleEx prop_value = 'FromApp.js'/>
    </div>
  );
}

export default App;
