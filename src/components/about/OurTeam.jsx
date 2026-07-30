import { motion } from "framer-motion";

const team = [
  {
    name: "Alex Johnson",
    role: "Founder & CEO",
    image: "https://i.pravatar.cc/300?img=12",
  },
  {
    name: "Sophia Williams",
    role: "UI/UX Designer",
    image: "https://i.pravatar.cc/300?img=5",
  },
  {
    name: "Daniel Brown",
    role: "Lead Developer",
    image: "https://i.pravatar.cc/300?img=8",
  },
];

function OurTeam() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">
            Meet Our Team
          </h2>

          <p className="text-gray-600 mt-4">
            Passionate people working together to simplify hiring.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {team.map((member, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-36 h-36 rounded-full mx-auto object-cover"
              />

              <h3 className="mt-6 text-2xl font-bold">
                {member.name}
              </h3>

              <p className="text-blue-600 font-medium mt-2">
                {member.role}
              </p>

              <p className="text-gray-500 mt-4 leading-7">
                Dedicated to building a modern recruitment platform that connects
                talented professionals with amazing opportunities.
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default OurTeam;