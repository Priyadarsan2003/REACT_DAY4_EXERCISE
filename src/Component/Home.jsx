import React from 'react'

export default function Home() {
  return (
    <div>
        <h1>Select your Favourite Fruit</h1><br />
        <h4>Your Name : </h4>
        <input type={Text} id='name'></input>
        <br></br>
        <select id='fruit'> 
          <option selected disabled hidden>select</option>
          <option>Apple</option>
          <option>Banana</option>
          <option>Grapes</option>
          <option>Orange</option>
          <option>Mango</option>
          <option>Others...</option>
        </select>
        <button type='submit' onClick={Greet}>Submit</button>
    </div>
  )
}

function Greet()
{
  let name = document.getElementById('name').value;
  let fruit = document.getElementById('fruit').value;
  alert("Hi, " + name + " Your favourite Fruit is " + fruit + " .");
}