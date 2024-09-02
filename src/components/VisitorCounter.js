import React, { useEffect, useState } from 'react';
import axios from 'axios';

const VisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState(0);
  
  useEffect(() => {
    // Replace with your actual API endpoint
    const apiUrl = 'https://{api-id}.execute-api.{region}.amazonaws.com/{stage-name}/visitor-counter';

    const fetchVisitorCount = async () => {
      try {
        const response = await axios.get(apiUrl);
        setVisitorCount(response.data.visitor_count);  // Update with your actual response format
      } catch (error) {
        console.error('Error fetching visitor count:', error);
      }
    };

    fetchVisitorCount();
  }, []);  // Empty dependency array means this effect runs once when the component mounts

  return (
    <div>
      <h1>Visitor Counter</h1>
      <p>Current Visitor Count: {visitorCount}</p>
    </div>
  );
};

export default VisitorCounter;
