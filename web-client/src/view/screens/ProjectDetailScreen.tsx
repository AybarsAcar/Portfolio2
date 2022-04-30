import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ProjectDetailScreen() {
  const [message, setMessage] = useState('');
  const { number } = useParams();

  useEffect(() => {
    if (number) {
      setMessage(`This is number ${number}`);
    } else {
      setMessage('No number');
    }
  }, []);

  return (
    <div>
      <h1>About Page</h1>
      <p>{message}</p>
    </div>
  );
}

export default ProjectDetailScreen;
