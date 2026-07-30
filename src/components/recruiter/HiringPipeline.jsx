const pipeline = [
  {
    title: "Pending Review",
    count: 86,
    percentage: 80,
    color: "bg-yellow-500",
  },
  {
    title: "Shortlisted",
    count: 41,
    percentage: 55,
    color: "bg-blue-600",
  },
  {
    title: "Interview",
    count: 18,
    percentage: 35,
    color: "bg-purple-600",
  },
  {
    title: "Hired",
    count: 9,
    percentage: 20,
    color: "bg-green-600",
  },
];

const HiringPipeline = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6">

      <div className="flex justify-between items-center mb-6">

        <div>
          <h2 className="text-2xl font-bold">
            Hiring Pipeline
          </h2>

          <p className="text-gray-500 mt-1">
            Track candidates through every hiring stage.
          </p>
        </div>

        <button className="text-blue-600 hover:underline">
          View Report
        </button>

      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">

        {pipeline.map((item) => (

          <div
            key={item.title}
            className="border rounded-xl p-5 hover:shadow-lg transition-all"
          >

            <div className="flex justify-between items-center mb-3">

              <h3 className="font-semibold text-gray-700">
                {item.title}
              </h3>

              <span className="text-2xl font-bold">
                {item.count}
              </span>

            </div>

            <div className="w-full bg-gray-200 rounded-full h-3">

              <div
                className={`${item.color} h-3 rounded-full`}
                style={{ width: `${item.percentage}%` }}
              ></div>

            </div>

            <p className="text-sm text-gray-500 mt-3">
              {item.percentage}% of hiring target
            </p>

          </div>

        ))}

      </div>

    </div>
  );
};

export default HiringPipeline;