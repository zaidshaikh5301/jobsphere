import { ShieldCheck, BriefcaseBusiness, Users, Zap } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Verified Companies",
    description:
      "Every employer is carefully verified to provide safe and trustworthy job opportunities.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Thousands of Jobs",
    description:
      "Explore opportunities across multiple industries and experience levels.",
  },
  {
    icon: Users,
    title: "Growing Community",
    description:
      "Join thousands of candidates and recruiters already using JobSphere.",
  },
  {
    icon: Zap,
    title: "Fast & Easy",
    description:
      "Apply to jobs within minutes using our modern and user-friendly platform.",
  },
];

function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-slate-900">
            Why Choose JobSphere?
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Everything you need to find your dream job or hire the perfect
            candidate — all in one place.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="bg-slate-50 rounded-3xl p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mb-6">
                  <Icon className="text-blue-600" size={32} />
                </div>

                <h3 className="text-xl font-bold mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-7">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;