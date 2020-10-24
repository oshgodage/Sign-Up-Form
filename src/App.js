import React , {useState, useEffect }from 'react';

import './App.css';

function App() {
 
  return (
   
    <div className ="container">
      <form id="Form1"> 
        <h3>CREATE ACCOUNT</h3>
        <input type="text" placeholder="Email" required></input>
        <input type="password" placeholder="Password" required></input>
        <input type="password" placeholder="Confirm Password" required></input>

        <div class="btn-box">
          <button type="button" id="Next1" >Next</button>
        </div>
      </form>

      <form id="Form2">
        <h3>SOCIAL LINKS</h3>
        <input type="text" placeholder="Medium" required></input>
        <input type="text" placeholder="Github" required></input>
        <input type="text" placeholder="Linkedin" required></input>
        <div class="btn-box">
          <button type="button" id="Back1" >Back</button>
          <button type="button" id="Next2" >Next</button>
        </div>
      </form>

      <form id="Form3">
        <h3>PERSONAL INFO</h3>
        <input type="text" placeholder="First Name" required></input>
        <input type="text" placeholder="Last Name" required></input>
        <input type="text" placeholder="Mobile No" required></input>
        <div class="btn-box">
          <button type="button" id="Back2" >Back</button>
          <button type="Submit" id="Submit" >Submit</button>
        </div>
      </form>

      <div class="step-row">
        <div id="progress"></div>
        <div class="step-col"><small>Step 1</small></div>
        <div class="step-col"><small>Step 2</small></div>
        <div class="step-col"><small>Step 3</small></div>
        </div>
        
    </div>
      
  );
}

export default App;
