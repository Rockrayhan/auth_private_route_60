import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';

const Home = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <h1 className='text-teal-500'> Welcome Home </h1>


            <div className='bg-red-400'>
                <h1 className='text-teal-700'> Kire </h1>
            </div>

            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>

            <button class="btn btn-primary">Button</button>
        </div>
    );
};

export default Home;