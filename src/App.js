import React, { useState } from "react";
import { ChevronRight, ChevronDown, Menu } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInbox,
  faBolt,
  faChartLine,
  faComments,
  faPuzzlePiece,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

const features = [
  {
    icon: faInbox,
    title: "Share team inboxes",
    description:
      "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
  },
  {
    icon: faBolt,
    title: "Deliver instant answers",
    description:
      "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
  },
  {
    icon: faChartLine,
    title: "Manage your team with reports",
    description:
      "Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
  },
  {
    icon: faComments,
    title: "Connect with customers",
    description:
      "Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.",
  },
  {
    icon: faPuzzlePiece,
    title: "Connect the tools you already use",
    description:
      "Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.",
  },
  {
    icon: faUsers,
    title: "Our people make the difference",
    description:
      "We're an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.",
  },
];

const companies = [
  { name: "Boltshift", src: "./assets/boltshift.png" },
  { name: "LightBox", src: "./assets/lightbox.png" },
  { name: "FeatherDev", src: "./assets/featherdev.png" },
  { name: "Spherula", src: "./assets/spherula.png" },
  { name: "GlobalBank", src: "./assets/globalbank.png" },
  { name: "Nietzsche", src: "./assets/nietzsche.png" },
];
 const ViewAllButton = () => (
   <a
     href="#"
     className="text-xs md:text-sm text-white bg-red-500 px-3 md:px-4 py-1.5 md:py-2 rounded-full hover:bg-red-600 transition-colors inline-block text-center"
   >
     View all posts →
   </a>
 );
const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);

  return (
    <div className="min-h-screen bg-white">
      <nav className="py-4 px-6">
        <div className="flex justify-between items-center">
          <img src="./assets/zysk.png" alt="Logo" className="h-8" />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-600">
              Home
            </a>
            <a href="#" className="text-gray-600">
              Products
            </a>
            <a href="#" className="text-gray-600">
              Resources
            </a>
            <a href="#" className="text-gray-600">
              Pricing
            </a>
            <img
              src="./assets/user.png"
              alt="Profile"
              className="w-8 h-8 rounded-full cursor-pointer"
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <a href="#" className="block text-gray-600 py-2">
              Home
            </a>
            <a href="#" className="block text-gray-600 py-2">
              Products
            </a>
            <a href="#" className="block text-gray-600 py-2">
              Resources
            </a>
            <a href="#" className="block text-gray-600 py-2">
              Pricing
            </a>
            <div className="py-2">
              <img
                src="/api/placeholder/32/32"
                alt="Profile"
                className="w-8 h-8 rounded-full"
              />
            </div>
          </div>
        )}
      </nav>
      <hr></hr>
      <div className="max-w-4xl mx-auto px-4 pt-12 pb-16 text-center">
        <div className="inline-flex items-center text-sm text-red-500 mb-2 bg-red-50 rounded-full px-3 py-1">
          Fun feature • Check out this new component →
        </div>
        <h1 className="text-5xl font-bold mb-4">
          Beautiful analytics to grow smarter
        </h1>
        <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </p>
        <div className="flex justify-center gap-3">
          <button className="px-6 py-2.5 rounded-full bg-gray-100 text-gray-900 hover:bg-gray-200 transition-colors">
            Demo
          </button>
          <button className="px-6 py-2.5 rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors">
            Sign up
          </button>
        </div>
      </div>

      {/* Product Demo Section */}
      <div className="max-w-5xl mx-auto px-4 mb-16">
        <img
          src="./assets/desktop.png"
          alt="Product Demo"
          className="w-full rounded-2xl shadow-lg"
        />
      </div>

      {/* Company Logos Section */}
      <div className="max-w-5xl mx-auto px-4">
        <p className="text-gray-600 text-center text-sm mb-8">
          Join 4,000+ companies already growing
        </p>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 md:gap-12 mb-16">
          {companies.map((company) => (
            <div
              key={company.name}
              className="flex justify-center items-center"
            >
              <img
                src={company.src}
                alt={company.name}
                className="h-8 w-auto "
              />
            </div>
          ))}
        </div>
      </div>
      <hr></hr>
      {/* Features Section */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <p className="text-red-500 text-center text-sm mb-4 font-medium">
          Features
        </p>
        <h2 className="text-4xl font-bold text-center mb-4 tracking-tight">
          Analytics that feels like it's from the future
        </h2>
        <p className="text-gray-600 text-center mb-20 max-w-2xl mx-auto text-lg leading-relaxed">
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </p>
        <div className="grid md:grid-cols-3 gap-x-8 gap-y-16">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="mb-4">
                <FontAwesomeIcon
                  icon={feature.icon}
                  className="text-3xl text-gray-900"
                />
              </div>
              <h3 className="font-semibold text-lg mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-8">
            <img
              src="./assets/sisyphus.png"
              alt="Sisyphus logo"
              className="h-8"
            />
          </div>
          <blockquote className="text-3xl font-medium mb-10 tracking-tight leading-tight">
            "We've been using Untitled to kick start every new project and can't
            imagine working without it."
          </blockquote>
          <div className="flex items-center justify-center">
            <img
              src="./assets/candice.png"
              alt="Candice Wu"
              className="w-10 h-10 rounded-full mr-3"
            />
            <div className="text-left">
              <div className="font-medium text-base">Candice Wu</div>
              <div className="text-gray-600 text-sm">
                Product Manager, Sisyphus
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto px-4 py-24">
        <h2 className="text-3xl font-bold text-center mb-3">
          Frequently asked questions
        </h2>
        <p className="text-gray-600 text-center mb-12">
          Everything you need to know about the product and billing.
        </p>

        <div className="space-y-4">
          {[
            {
              question: "Is there a free trial available?",
              answer:
                "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
            },
            {
              question: "Can I change my plan later?",
              answer: "",
            },
            {
              question: "What is your cancellation policy?",
              answer: "",
            },
            {
              question: "Can other info be added to an invoice?",
              answer: "",
            },
            {
              question: "How does billing work?",
              answer: "",
            },
            {
              question: "How do I change my account email?",
              answer: "",
            },
          ].map((faq, index) => (
            <div
              key={faq.question}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-gray-50"
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              >
                <span className="font-medium text-gray-900">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transform transition-transform ${
                    openFAQ === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openFAQ === index && (
                <div className="px-6 pb-5 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
        {/* Team Support Section */}

        <div className="max-7xl mx-auto px-4 py-12">
          <div className="bg-gray-50 rounded-2xl text-center py-16 px-4">
            <div className="flex justify-center mb-4">
              <div className="flex -space-x-2">
                <img
                  src="./assets/Avatar1.png"
                  alt="Team member"
                  className="w-8 h-8 rounded-full ring-2 ring-white"
                />
                <img
                  src="./assets/user.png"
                  alt="Team member"
                  className="w-8 h-8 rounded-full ring-2 ring-white"
                />
                <img
                  src="./assets/Avatar.png"
                  alt="Team member"
                  className="w-8 h-8 rounded-full ring-2 ring-white"
                />
              </div>
            </div>
            <h3 className="font-semibold mb-2">Still have questions?</h3>
            <p className="text-gray-600 text-sm mb-4">
              Can't find the answer you're looking for? Please chat to our
              friendly team.
            </p>
            <button className="px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors">
              Get in touch
            </button>
          </div>
        </div>
      </div>

      {/* Blog Section */}
      <div className="max-w-5xl mx-auto px-4 py-24">
        <div className="flex justify-between items-center mb-8">
          <div>
            <p className="text-red-500 text-sm font-medium mb-1">Our blog</p>
            <h2 className="text-2xl font-bold">Latest blog posts</h2>
            <p className="text-gray-600 mt-2">
              Tool and strategies modern teams need to help their companies
              grow.
            </p>
          </div>
          <div className="hidden md:block">
            <ViewAllButton />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "UX review presentations",
              image: "./assets/image0.png",
              author: {
                name: "Olivia Rhye",
                image: "/api/placeholder/32/32",
              },
              date: "20 Jan 2024",
              category: "Design",
              arrow: true,
            },
            {
              title: "Migrating to Linear 101",
              image: "./assets/image1.png",
              author: {
                name: "Phoenix Baker",
                image: "/api/placeholder/32/32",
              },
              date: "19 Jan 2024",
              category: "Product",
              arrow: true,
            },
            {
              title: "Building your API stack",
              image: "./assets/image2.png",
              author: {
                name: "Lana Steiner",
                image: "/api/placeholder/32/32",
              },
              date: "18 Jan 2024",
              category: "Software Engineering",
              arrow: true,
            },
          ].map((post) => (
            <div key={post.title} className="group cursor-pointer">
              <img
                src={post.image}
                alt={post.title}
                className="rounded-2xl mb-5 w-full aspect-[4/3] object-cover"
              />
              <div className="text-sm font-medium text-red-500 mb-3">
                {post.category}
              </div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-xl group-hover:text-red-500 transition-colors">
                  {post.title}
                </h3>
                {post.arrow && (
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-red-500 transition-colors" />
                )}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <img
                  src={post.author.image}
                  alt={post.author.name}
                  className="w-6 h-6 rounded-full"
                />
                <span>{post.author.name}</span>
                <span className="mx-2">·</span>
                <span>{post.date}</span>
              </div>
            </div>
          ))}
        </div>
        {/* Mobile view button */}
        <div className="md:hidden mt-8 text-center">
          <ViewAllButton />
        </div>
      </div>

      {/* CTA Section */}
      <div className=" bg-gray-50 rounded text-center py-24">
        <h2 className="text-3xl font-bold mb-4">Start your free trial</h2>
        <p className="text-gray-600 mb-8">
          Join over 4,000+ startups growing with Untitled
        </p>
        <div className="flex justify-center gap-4">
          <button className="px-4 py-2 text-gray-600 hover:text-gray-900 font-medium">
            Learn more
          </button>
          <button className="px-4 py-2 rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors font-medium">
            Get started
          </button>
        </div>
      </div>
      <footer className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <div>Overview</div>
              <div>Features</div>
              <div className="flex items-center">
                Solutions
                <span className="ml-1 text-xs px-1.5 py-0.5 bg-green-100 text-green-700 rounded">
                  New
                </span>
              </div>
              <div>Tutorials</div>
              <div>Pricing</div>
              <div>Releases</div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <div>About us</div>
              <div>Careers</div>
              <div>Press</div>
              <div>News</div>
              <div>Media kit</div>
              <div>Contact</div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <div>Blog</div>
              <div>Newsletter</div>
              <div>Events</div>
              <div>Help centre</div>
              <div>Tutorials</div>
              <div>Support</div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Use cases</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <div>Startups</div>
              <div>Enterprise</div>
              <div>Government</div>
              <div>SaaS centre</div>
              <div>Marketplaces</div>
              <div>Ecommerce</div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Social</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <div>Twitter</div>
              <div>LinkedIn</div>
              <div>Facebook</div>
              <div>GitHub</div>
              <div>AngelList</div>
              <div>Dribbble</div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <div>Terms</div>
              <div>Privacy</div>
              <div>Cookies</div>
              <div>Licenses</div>
              <div>Settings</div>
              <div>Contact</div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t flex justify-between items-center w-full">
          <div className="flex-shrink-0">
            <img src="./assets/zysk.png" alt="Logo" className="h-6 md:h-8" />
          </div>
          <div className="text-xs md:text-sm text-gray-600 text-center md:text-left">
            © 2077 zysktechnologies. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
