import { Target, Eye } from "lucide-react";

function MissionVision() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">

        <div className="bg-white rounded-3xl p-8 shadow-lg">
          <Target className="text-blue-600 mb-5" size={40} />

          <h2 className="text-3xl font-bold mb-4">
            Our Mission
          </h2>

          <p className="text-gray-600 leading-8">
            Our mission is to simplify hiring by connecting skilled candidates
            with trusted employers through an intuitive and reliable platform.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-lg">
          <Eye className="text-purple-600 mb-5" size={40} />

          <h2 className="text-3xl font-bold mb-4">
            Our Vision
          </h2>

          <p className="text-gray-600 leading-8">
            We envision becoming one of India's leading job platforms where
            opportunities meet talent and careers grow every day.
          </p>
        </div>

      </div>
    </section>
  );
}

export default MissionVision;