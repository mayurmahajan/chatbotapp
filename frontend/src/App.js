
import React, { useState } from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';
import axios from 'axios';


function App() {
  const [question, setQuestion] = useState('');
  const [result, setResult] = useState('');

  const handleChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleButtonClick = async () => {
    try {
      const response = await axios.get('http://localhost:3001/', {
        question,
      });

      setResult(response.data); // Assuming the API returns { result: '...' }
    } catch (error) {
      console.error('There was a problem with the axios request:', error);
    }
  };

  return (
    <div>
      <InputGroup>
        <InputGroup.Text>What's your Question?</InputGroup.Text>
        <Form.Control
          as="textarea"
          aria-label="With textarea"
          value={question}
          onChange={handleChange}
        />
      </InputGroup>
      <Button variant="primary" onClick={handleButtonClick}>
        Get Results
      </Button>
      {result && <div>Result: {result}</div>}

    </div>
  );
}

export default App;
