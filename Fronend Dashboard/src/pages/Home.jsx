import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/dashboard");
    }
  }, [navigate]);

  return (
    <div className="h-screen w-full bg-slate-100 flex flex-col justify-center items-center text-white text-center">
      <div className="bg-black bg-opacity-10 p-10 md:p-[200px] rounded-lg duration-300">
        <h1 className="text-3xl font-bold">This is Home Page</h1>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-5 mt-[20px]">
          <Link to="/login">
            <button className="w-[100px] py-2 px-5 bg-white rounded-lg text-black font-bold hover:bg-green-500 hover:text-white duration-300 border border-green-500 border-3 shadow-lg">
              Login
            </button>
          </Link>
          <Link to="/register">
            <button className="w-[100px] py-2 px-5 bg-white rounded-lg text-black font-bold hover:bg-green-500 hover:text-white duration-300 border border-green-500 border-3 shadow-lg">
              Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
