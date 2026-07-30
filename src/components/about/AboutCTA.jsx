import { Link } from "react-router-dom";
import Button from "../common/Button";

function AboutCTA() {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="max-w-5xl mx-auto text-center px-6">

        <h2 className="text-5xl font-bold">
          Ready to Build Your Career?
        </h2>

        <p className="mt-6 text-blue-100 text-lg">
          Discover exciting opportunities, connect with top companies,
          and take the next step toward your dream career.
        </p>

        <div className="mt-10">
          <Link to="/jobs">
            <Button
              variant="secondary"
              size="lg"
            >
              Browse Jobs
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
}

export default AboutCTA;