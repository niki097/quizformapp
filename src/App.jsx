import { useState } from 'react';
import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import { ToastContainer } from 'react-toastify';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <ToastContainer />
            <Dashboard />
        </div>
    );
}

export default App;
