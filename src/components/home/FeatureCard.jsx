function FeatureCard({ feature }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-8 text-center border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

      <div className="text-5xl mb-5">
        {feature.icon}
      </div>

      <h3 className="text-2xl font-bold mb-3">
        {feature.title}
      </h3>

      <p className="text-gray-600">
        {feature.description}
      </p>

    </div>
  );
}

export default FeatureCard;