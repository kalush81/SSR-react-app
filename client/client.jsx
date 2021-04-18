import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return (
        <div>
            <p>I am react app component !</p>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('react-client'))