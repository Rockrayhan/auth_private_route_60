import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>

            <div className=''>

            </div>

            <div className="navbar bg-primary text-primary-content flex justify-around gap-8">
                <button className="btn btn-ghost text-xl">daisyUI</button>
                <div className='flex gap-8'>                
                    <Link to='/'> Home </Link>
                    <Link to='login'> Login </Link>
                    <Link to='register'> Register </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;