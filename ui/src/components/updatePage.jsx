import React, { useState } from 'react';
import axios from 'axios';

const UpdatePage = () => {
    const [formData, setFormData] = useState({
        id: '',
        toan: '',
        ngu_van: '',
        ngoai_ngu: '',
        vat_ly: '',
        hoa_hoc: '',
        sinh_hoc: '',
        lich_su: '',
        dia_ly: '',
        gdcd: '',
        ma_ngoai_ngu: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put('http://localhost:5000/edit-data', formData);
            alert('Data updated successfully');
        } catch (err) {
            alert('Updating data failed');
            console.error('Error updating data', err);
        }
    };

    return (
        <div>
            <h1>Update Page</h1>
            <form onSubmit={handleSubmit}>
                {Object.keys(formData).map((key) => (
                    <div key={key}>
                        <label>{key}</label>
                        <input
                            type="text"
                            name={key}
                            value={formData[key]}
                            onChange={handleChange}
                        />
                    </div>
                ))}
                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default UpdatePage;