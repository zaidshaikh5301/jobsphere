import { Star } from "lucide-react";

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Software Engineer at Google",
      image: "👩‍💼",
      text: "JobSphere helped me land my dream job at Google! The application process was smooth and I got hired within 3 months. Highly recommended!",
      rating: 5,
    },
    {
      id: 2,
      name: "Amit Patel",
      role: "Product Manager at Microsoft",
      image: "👨‍💼",
      text: "Amazing platform! I found the perfect opportunity that matched my skills and career goals. The job listings are verified and authentic.",
      rating: 5,
    },
    {
      id: 3,
      name: "Sarah Johnson",
      role: "UX Designer at Netflix",
      image: "👩‍🎨",
      text: "Great experience using JobSphere. The interface is user-friendly and I was able to track my applications easily. Got multiple job offers!",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
            Success Stories
          </span>

          <h2 className="text-5xl font-bold text-slate-900 mt-4">
            Hear from Our <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Success Stories</span>
          </h2>

          <p className="text-slate-600 text-lg mt-4 max-w-2xl mx-auto">
            Join thousands of professionals who have found their dream jobs through JobSphere.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-600 mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="text-4xl">
                  {testimonial.image}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-blue-600">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;
