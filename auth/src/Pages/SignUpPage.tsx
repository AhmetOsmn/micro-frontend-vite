import { Link } from "react-router-dom";

const SignUpPage = () => {
  return (
    <div className="h-screen p-3 flex flex-col items-center justify-center bg-gray-200">
      <p className="font-bold text-4xl mb-6">Sign Up</p>
      <form className="w-1/4 bg-green-300 p-16 rounded">
        <div className="flex flex-col mb-2">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            className="border-2 p-2 rounded-xl focus:outline-slate-600 font-semibold disabled:text-gray-400 cursor-pointer transition-all duration-300"
            placeholder="Username"
          />
        </div>
        <div className="flex flex-col mb-2">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="border-2 p-2 rounded-xl focus:outline-slate-600 font-semibold disabled:text-gray-400 cursor-pointer transition-all duration-300"
            placeholder="First Name"
          />
        </div>
        <div className="flex flex-col mb-2">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="border-2 p-2 rounded-xl focus:outline-slate-600 font-semibold disabled:text-gray-400 cursor-pointer transition-all duration-300"
            placeholder="Last Name"
          />
        </div>
        <div className="flex flex-col mb-2">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="border-2 p-2 rounded-xl focus:outline-slate-600 font-semibold disabled:text-gray-400 cursor-pointer transition-all duration-300"
            placeholder="Password"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="passwordConfirm">Password Confirm</label>
          <input
            type="password"
            id="passwordConfirm"
            name="passwordConfirm"
            className="border-2 p-2 rounded-xl focus:outline-slate-600 font-semibold disabled:text-gray-400 cursor-pointer transition-all duration-300"
            placeholder="Password Confirm"
          />
        </div>
        <div className="flex items-center justify-between">
          <button className="p-2 bg-blue-600 text-white rounded">
            Sign Up
          </button>
          <Link to="/" className="p-2 bg-slate-600 text-white rounded">
            Return Sign In 
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
