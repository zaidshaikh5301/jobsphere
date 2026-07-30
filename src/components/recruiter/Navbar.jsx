import React from "react";


const Navbar = () => {


  return (

    <header className="h-20 bg-white flex items-center justify-between px-8 border-b">


      <h2 className="text-xl font-bold">
        Recruiter Dashboard
      </h2>


      <div className="flex items-center gap-5">


        <span>
          🔔
        </span>


        <div className="flex items-center gap-3">


          <div className="h-12 w-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
            R
          </div>


          <div>

            <p className="font-semibold">
              Recruiter
            </p>

            <p className="text-xs text-gray-500">
              Company Admin
            </p>

          </div>


        </div>


      </div>


    </header>

  )

}


export default Navbar;