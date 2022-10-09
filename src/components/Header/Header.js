import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h1>Welcome to my fency Routing website!</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/friend">Friend</Link>
                <Link to="/about">About</Link>
            </nav>
        </div>
    );
};

export default Header;