import React, { useState } from "react";
import axios from "axios";

const UploadPage = () => {
    const [file, setFile] = useState(null);

    const handleUpload = async () => {
        const formData = new FormData();
        formData.append('file', file);
        try {
            await axios.post('http://localhost:5000/upload-file', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            alert('File uploaded successfully');
        } catch (e) {
            console.error('Error uploading file', e);
        }
    }

    return (
        <div>
            <h1>Upload Page</h1>
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
}

export default UploadPage;
