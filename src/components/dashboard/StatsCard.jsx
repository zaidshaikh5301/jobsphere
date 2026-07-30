import React from "react";


const StatsCard = ()=>{


const stats=[

{
title:"Active Jobs",
value:"18",
growth:"+12%"
},

{
title:"Applications",
value:"248",
growth:"+24%"
},

{
title:"Interviews",
value:"16",
growth:"+9%"
},

{
title:"Hired",
value:"9",
growth:"+4%"
}

];


return (

<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">


{
stats.map((item,index)=>(


<div 
key={index}
className="
bg-white
rounded-2xl
p-6
shadow-sm
border
">


<p className="text-gray-500">
{item.title}
</p>


<h2 className="text-4xl font-bold mt-3">
{item.value}
</h2>


<p className="text-green-600 mt-2 text-sm">
↑ {item.growth} this month
</p>


</div>


))
}


</div>

)


}


export default StatsCard;