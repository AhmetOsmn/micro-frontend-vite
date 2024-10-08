import { Link } from "react-router-dom";

const SignInPage = () => {
  return (
    <div className="h-screen p-3 flex flex-col items-center justify-center bg-gray-200">
      <p className="font-bold text-4xl mb-6">Sign In</p>
      <form className="w-1/4 bg-blue-300 p-16 rounded">
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
        <div className="flex flex-col mb-4">
          <label htmlFor="username">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="border-2 p-2 rounded-xl focus:outline-slate-600 font-semibold disabled:text-gray-400 cursor-pointer transition-all duration-300"
            placeholder="Password"
          />
        </div>
        <div className="flex items-center justify-between">
          <button className="p-2 bg-blue-600 text-white rounded">
            Sign In
          </button>
          <Link to="/auth/signup" className="p-2 bg-green-400 text-white rounded">
            Create Account
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignInPage;
