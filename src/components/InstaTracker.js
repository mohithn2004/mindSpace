import React, { useEffect } from 'react';
import axios from 'axios';
// var cors =require('cors')
function App() {

  useEffect(() => {
    const user_input = 'Your user input here'; // Replace with the actual user input

    const fetchData = async () => {
      try {
        const response = await axios.post('http://127.0.0.1:5000/chat', {
          user_input: user_input,
           // Send user_input in the request body
        });

        // Axios automatically checks for response.ok
        const data = response.data;
        console.log(data); // You can handle the response data as needed here
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      {/* Your React components */}
    </div>
  );
}

export default App;