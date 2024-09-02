import React, { useEffect, useState } from 'react';

const VisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiUrl = 'https://waqme3i9e4.execute-api.us-east-1.amazonaws.com/prod/incrementCounter';

    const fetchVisitorCount = async () => {
      try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        // Parse the response as JSON
        const data = await response.json();
        console.log('API response:', data); // Debugging line

        // Parse the 'body' field, which is a string
        const body = JSON.parse(data.body);

        if (body.visitor_count !== undefined) {
          setVisitorCount(body.visitor_count);
        } else {
          throw new Error('Visitor count not found in response');
        }
      } catch (error) {
        console.error('Error fetching visitor count:', error);
        setError('Error fetching visitor count');
      } finally {
        setLoading(false);
      }
    };

    fetchVisitorCount();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div>
      <h1>Visitor Counter</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <p>Current Visitor Count: {visitorCount}</p>
      )}
    </div>
  );
};

export default VisitorCounter;
