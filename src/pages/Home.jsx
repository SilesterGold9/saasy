import { motion } from "framer-motion";
import Section from "../components/Section";
import cubeIcon from "../assets/cube.png";
import chartIcon from "../assets/chart.png";
import cloudIcon from "../assets/cloud.png";
import { Check } from "lucide-react";
import { Github, Twitter, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const features = [
    {
      title: "Seamless Integration",
      desc: "Connect your favorite tools with just a few clicks.",
      icon: cubeIcon,
    },
    {
      title: "Real-Time Analytics",
      desc: "Get instant insights with interactive dashboards.",
      icon: chartIcon,
    },
    {
      title: "Scalable Infrastructure",
      desc: "Grow without limits thanks to our elastic cloud.",
      icon: cloudIcon,
    },
  ];

  const pricing = [
    {
      plan: "Free",
      price: "$0",
      desc: "Perfect to get started.",
      features: ["1 project", "Community support", "Basic analytics"],
    },
    {
      plan: "Pro",
      price: "$19/mo",
      desc: "For growing teams.",
      features: [
        "Unlimited projects",
        "Priority support",
        "Advanced analytics",
      ],
    },
    {
      plan: "Enterprise",
      price: "Custom",
      desc: "Tailored to your needs.",
      features: ["Account manager", "Custom integrations", "24/7 support"],
    },
  ];

  return (
    <div className="bg-white text-gray-900">
      {/* HERO */}
      <Section className="text-center px-4 sm:px-6 lg:px-8 py-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
        >
          Supercharge your workflow with{" "}
          <span className="text-blue-600">FlowSync</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="max-w-2xl mx-auto text-base sm:text-lg text-gray-600 mb-8 px-2"
        >
          The all-in-one SaaS platform to manage, analyze, and grow your
          business faster.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <button className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition">
            Start Free Trial
          </button>
          <button className="px-6 py-3 border border-gray-300 rounded-xl font-semibold hover:border-gray-400 transition">
            Learn More
          </button>
        </motion.div>
      </Section>

      {/* FEATURES */}
      <Section className="py-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why choose FlowSync?
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="p-6 rounded-2xl shadow-md bg-white border text-center"
            >
              <img src={f.icon} alt={f.title} className="w-20 mx-auto mb-6" />
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* PRICING */}
      <Section className="py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Simple Pricing</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {pricing.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="p-8 rounded-2xl shadow-lg border bg-white text-center"
            >
              <h3 className="text-2xl font-semibold mb-2">{p.plan}</h3>
              <p className="text-4xl font-bold mb-4">{p.price}</p>
              <p className="text-gray-600 mb-6">{p.desc}</p>
              <ul className="mb-6 text-gray-700 space-y-2">
                {p.features.map((f, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 justify-start"
                  >
                    <Check className="w-5 h-5 text-blue-600" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition">
                Choose {p.plan}
              </button>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      {/* CTA */}
      <Section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center rounded-2xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl  font-bold text-center mb-12"
        >
          Ready to transform the way you work?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="max-w-2xl mx-auto mb-8 text-lg text-blue-900"
        >
          Start your free trial today and see why thousands of teams rely on
          FlowSync.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center gap-4"
        >
          <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition">
            Start Free Trial
          </button>
          <button className="px-8 py-4 bg-blue-500 text-white border border-white rounded-xl font-semibold hover:bg-blue-400 transition">
            Book a Demo
          </button>
        </motion.div>
      </Section>

      {/* FOOTER */}
      <footer className="bg-gray-50 border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo + small text */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-blue-600">FlowSync</h2>
            <p className="text-gray-500 text-sm mt-1">
              Empowering your workflow with simplicity ✨
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6">
            <Link
              to="https://github.com/SilesterGold9"
              target="_blank"
              className="text-gray-500 hover:text-blue-600 transition"
            >
              <Github className="w-6 h-6" />
            </Link>

            <Link
              to="https://twitter.com/"
              target="_blank"
              className="text-gray-500 hover:text-blue-600 transition"
            >
              <Twitter className="w-6 h-6" />
            </Link>

            <Link
              to="https://linkedin.com/"
              target="_blank"
              className="text-gray-500 hover:text-blue-600 transition"
            >
              <Linkedin className="w-6 h-6" />
            </Link>
          </div>
        </div>

        {/* Bottom note */}
        <div className="border-t border-gray-200 text-center py-4 text-sm text-gray-500">
          © {new Date().getFullYear()} FlowSync. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;
