import {
  Heart,
  ShieldCheck,
  Lightbulb,
} from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "People First",
    description:
      "Every decision we make focuses on helping candidates and recruiters succeed.",
  },
  {
    icon: ShieldCheck,
    title: "Trust & Transparency",
    description:
      "Verified companies, genuine opportunities, and a secure hiring experience.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We continuously improve our platform to make job searching faster and easier.",
  },
];

function CoreValues() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">
            Our Core Values
          </h2>

          <p className="text-gray-600 mt-4">
            These principles guide everything we do at JobSphere.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mb-6">
                  <Icon
                    className="text-blue-600"
                    size={30}
                  />
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  {value.title}
                </h3>

                <p className="text-gray-600 leading-8">
                  {value.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default CoreValues;