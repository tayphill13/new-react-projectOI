import React from 'react';
import '../../App.css';

function ImageUpload() {
  return (
    <div className='upload'>
      <h1>This is where the user would upload their media</h1>
      <p>This page would contain a well centered form.</p>
      <form>
        <label>Give photo a name</label>
        <input placeholder='Enter name'></input>
        <br/>
        <label>Upload your photo</label>
        <input type='file' class='form-control'></input>
        <br/>
        <button type='button' class='btn btn-sm'>Submit</button>
      </form>
    </div>
  )
}

export default ImageUpload;