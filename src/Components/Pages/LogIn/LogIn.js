import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

const LogIn = () => {
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { signInWithGoogle, signInWithGithub, signIn } = useContext(AuthContext);

  //  sign in mathod
  const handleSignIn = (event)=>{
    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password)
    signIn(email, password)
    .then(result =>{
        const user = result.user;
        console.log(user);
        form.reset()
        navigate(from, { replace: true });
       
       
    })
    .catch(error => {
      console.error(error);
    });
}

  // google sign in mathod
  const handleGoogleSignIn = () => {
    signInWithGoogle(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  // github sign in mathod
  const handleGithubSignIn = () => {
    signInWithGithub(githubProvider)
      .then((result) => {
        console.log(result.user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const message = error.message;
        console.log(message);
      });
  };
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="px-8 py-6 mt-4 text-left shadow-lg">
        <div className="flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-20 h-20 text-blue-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-center">
          Login to your account
        </h3>
        <form onSubmit={handleSignIn} action="">
          <div className="mt-4">
            <div>
              <label className="block" htmlFor="email">
                Email
              </label>
              <input
              name="email"
                type="text"
                placeholder="Email"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                required
              />
              {/* <span className="text-xs tracking-wide text-red-600">Email field is required </span> */}
            </div>
            <div className="mt-4">
              <label className="block">Password</label>
              <input name="password"
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                required
              />
            </div>
            <div className="flex items-baseline justify-between">
              <button type="submit" className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">
                Login
              </button>
              <span className="text-sm ml-2">
                Don't have account?
                <Link
                  to={"/register"}
                  className="text-sm text-blue-600 hover:underline"
                >
                  Register now!
                </Link>
              </span>
            </div>
            <div className="flex items-baseline justify-around m-3">
              <Link onClick={handleGoogleSignIn}>
                <FaGoogle className="text-4xl ml-1"></FaGoogle>Google
              </Link>
              <Link onClick={handleGithubSignIn}>
                <FaGithub className="text-4xl ml-1"></FaGithub>Github
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
