import {
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    value: "Surat, Gujarat, India",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 98765 43210",
  },
  {
    icon: Mail,
    title: "Email",
    value: "support@jobsphere.com",
  },
  {
    icon: Clock,
    title: "Working Hours",
    value: "Mon - Fri | 9:00 AM - 6:00 PM",
  },
];

function ContactInfo() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {contactInfo.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 transition-all"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <Icon className="text-blue-600" size={30} />
                </div>

                <h3 className="text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-600">
                  {item.value}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default ContactInfo; 