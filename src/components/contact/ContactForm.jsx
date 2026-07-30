import { useState } from "react";
import { Send } from "lucide-react";
import Button from "../common/Button";
import { toast } from "react-toastify";

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success("Application submitted successfully!");

    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6">

        <div className="bg-white rounded-3xl shadow-xl p-10">

          <h2 className="text-3xl font-bold mb-8 text-center">
            Send Us a Message
          </h2>

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <input
              className="w-full border rounded-xl p-4"
              placeholder="Your Name"
              name="name"
              value={form.name}
              onChange={handleChange}
            />

            <input
              className="w-full border rounded-xl p-4"
              placeholder="Email Address"
              name="email"
              value={form.email}
              onChange={handleChange}
            />

            <input
              className="w-full border rounded-xl p-4"
              placeholder="Subject"
              name="subject"
              value={form.subject}
              onChange={handleChange}
            />

            <textarea
              rows="6"
              className="w-full border rounded-xl p-4"
              placeholder="Your Message"
              name="message"
              value={form.message}
              onChange={handleChange}
            />

            <Button type="submit" className="w-full">
              Send Message

              <Send
                size={18}
                className="ml-2"
              />

            </Button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default ContactForm;