import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Register = () => {
    const {createUser, updateUserProfile} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleCreateUser = (e) =>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;

    console.log(name, email, photoURL, password);

    createUser(email, password)
    .then((result) => {
      const user = result.user;
      console.log(user);
      handleUpdateProfile(name, photoURL);
      navigate("/home");
      form.reset();
    })
    .catch((error) => console.error(error));
    }

    const handleUpdateProfile = (name, photoURL) => {
        const profile = { displayName: name, photoURL: photoURL };
        updateUserProfile(profile)
          .then((result) => console.log(result))
          .catch((error) => console.error(error));
      };
    return (
        <div className="flex items-center justify-center min-h-screen">
        <div className="px-8 py-6 mx-4 mt-4 text-left shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
            <div className="flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 text-blue-600" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path
                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
            </div>
            <h3 className="text-2xl font-bold text-center">Join us</h3>
            <form onSubmit={handleCreateUser} action="">
                <div className="mt-4">
                    <div>
                        <label className="block" htmlFor="Name">Name</label>
                                <input type="text" placeholder="Full Name"
                                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" name='name' required/>
                    </div>
                    <div className="mt-4">
                        <label className="block" htmlFor="image">Photo URL</label>
                                <input type="text" placeholder="Photo URL"
                                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" name='photoURL' required/>
                    </div>
                    <div className="mt-4">
                        <label className="block" htmlFor="email">Email</label>
                                <input type="email" placeholder="Email"
                                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" name='email'  required/>
                    </div>
                    <div className="mt-4">
                        <label className="block">Password</label>
                                <input type="password" placeholder="Password"
                                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                                    name='password'  required/>
                    </div>
               
                    <div className="flex">
                        <button type="submit" className="w-full px-6 py-2 mt-4 bg-blue-600 rounded-lg hover:bg-blue-900">Create
                            Account</button>
                    </div>
                    <div className="mt-6 text-grey-dark">
                        Already have an account? 
                        <Link className="text-blue-600 hover:underline ml-1" to={'/login'}>
                            Log in
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    </div>
    );
};

export default Register;