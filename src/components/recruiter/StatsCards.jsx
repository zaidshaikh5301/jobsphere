import React from "react";


const StatsCard = () => {


  const data = [

    ["Active Jobs", "18", "↑ 12%"],
    ["Applications", "248", "↑ 24%"],
    ["Interviews", "16", "↑ 9%"],
    ["Hired", "9", "↑ 4%"]

  ];


  return (

    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">


      {
        data.map((item, index) => (


          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-sm border hover:shadow-md transition">


            <p className="text-gray-500">
              {item[0]}
            </p>


            <h1 className="text-4xl font-bold mt-3">

              {item[1]}

            </h1>


            <p className="text-green-600 mt-2">

              {item[2]} this month

            </p>


          </div>


        ))
      }


    </div>

  )


}


export default StatsCard;