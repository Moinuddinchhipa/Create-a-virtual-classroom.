import React, { useEffect, useState } from 'react';
import api from '../api';

function ClassList() {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        const fetchClasses = async () => {
            const response = await api.get('/classes');
            setClasses(response.data);
        };
        fetchClasses();
    }, []);

    return (
        <div>
            <h2>Classes</h2>
            <ul>
                {classes.map((cls) => (
                    <li key={cls._id}>{cls.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default ClassList;
