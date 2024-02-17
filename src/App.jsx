import React, { useState } from 'react';

const App = () => {
    const [url, setUrl] = useState('https://api.dictionaryapi.dev/api/v2/entries/en/hello');
    const [method, setMethod] = useState('GET');
    const [response, setResponse] = useState('');

    const handleRequest = async () => {
        try {
            const res = await fetch(url, { method: method });
            const data = await res.json();
            setResponse(JSON.stringify(data, null, 2));
        } catch (error) {
            setResponse(Error (error));
        }
    };

    return (
        <div className='container'>
            <input value={url} type="text" placeholder="URLni kiriting..." onChange={(e) => setUrl(e.target.value)} />
            <select value={method} onChange={(e) => setMethod(e.target.value)}>
                <option value="GET">GET</option>
                <option value="POST">POST</option>
                <option value="PUT">PUT</option>
                <option value="DELETE">DELETE</option>
            </select>
            <button onClick={handleRequest}>Send Request</button>
            <p><pre>{response}</pre></p>
        </div>
    );
};

export default App;
