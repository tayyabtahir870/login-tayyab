import React, {useState} from 'react'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {FaCamera} from 'react-icons/fa'
function Upload() {
    const [fileUrl, setFileUrl] = useState(null);
    const [progress, setprogress] = useState(0);
    
    const handleFileChange =(e)=>{
      const storage = getStorage();
    
    // Upload file and metadata to the object 'images/mountains.jpg'
    const storageRef = ref(storage, 'images/');
    const uploadTask = uploadBytesResumable(storageRef, e.target.files[0]);
    
    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on('state_changed',
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        setprogress(progress)
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      }, 
      (error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case 'storage/unauthorized':
            // User doesn't have permission to access the object
            break;
          case 'storage/canceled':
            // User canceled the upload
            break;
    
          // ...
    
          case 'storage/unknown':
            // Unknown error occurred, inspect error.serverResponse
            break;
        }
      }, 
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
          setFileUrl(downloadURL)
        });
      }
    );
    
    }
  return (
    <label>
    {progress < 100 ? (
      <>
        <input
          type='file'
          id='input-file'
          className='form-control '
          onChange={handleFileChange}
        />
        <FaCamera size={30} /> <br />
        <progress value={progress} max='100' />
      </>
    ) : (
      <img src={fileUrl} alt='...' />
    )}
  </label>
  )
}

export default Upload