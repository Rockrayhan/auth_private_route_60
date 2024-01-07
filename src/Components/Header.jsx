import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const Header = () => {
    const {user, logout} = useContext(AuthContext) ;

    const handleLogOut = () => {
        logout().then(() => {
            // Sign-out successful.
          }).catch((error) => {
            console.log(error);
          });
    }
    
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
                    <Link to='orders'> Orders </Link>
                </div>
                <div>
                    {
                        user ? 
                        <>
                        {user.email}
                        <button onClick={handleLogOut} className="btn btn-outline btn-error">Sign Out</button>
                        </> 
                        :
                        <>
                        <Link to='login' className="btn btn-outline btn-error"> <button >Login</button> </Link>

                        </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;