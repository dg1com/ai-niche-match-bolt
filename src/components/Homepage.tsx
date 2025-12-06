"use client";

import { motion } from "framer-motion";
import {
  Heart,
  Sparkles,
  Users,
  Zap,
  Shield,
  Star,
  ArrowRight,
  Play,
} from "lucide-react";

interface HomepageProps {
  onGetStarted: () => void;
}

export default function Homepage({ onGetStarted }: HomepageProps) {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-pink-100 bg-white/80 backdrop-blur-lg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-purple-600">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-2xl font-bold text-transparent">
                AI Niche Match
              </span>
            </div>
            <div className="hidden items-center space-x-8 md:flex">
              <a
                href="#features"
                className="text-gray-700 transition-colors hover:text-pink-600"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-gray-700 transition-colors hover:text-pink-600"
              >
                How It Works
              </a>
              <a
                href="#testimonials"
                className="text-gray-700 transition-colors hover:text-pink-600"
              >
                Success Stories
              </a>
              <button
                onClick={onGetStarted}
                className="bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-2 text-white transition-all duration-200 hover:from-pink-600 hover:to-purple-700 rounded-full"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="mb-6 text-5xl font-bold leading-tight text-gray-900 lg:text-7xl">
                Find Your
                <span className="block bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  Perfect Match
                </span>
              </h1>
              <p className="mb-8 text-xl leading-relaxed text-gray-600">
                Experience the future of dating with AI-powered matching,
                stunning avatars, and engaging games designed to create
                meaningful connections.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onGetStarted}
                  className="flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-4 text-lg font-semibold text-white transition-all duration-200 hover:from-pink-600 hover:to-purple-700"
                >
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center rounded-full border-2 border-pink-300 px-8 py-4 text-lg font-semibold text-pink-600 transition-all duration-200 hover:bg-pink-50"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-96 w-full overflow-hidden rounded-3xl bg-gradient-to-br from-pink-200 to-purple-300 lg:h-[500px]">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-400/20 to-purple-600/20"></div>
                <div className="absolute left-8 top-8 flex h-16 w-16 items-center justify-center rounded-full bg-white/30 backdrop-blur-sm">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <div className="absolute bottom-8 right-8 flex h-20 w-20 items-center justify-center rounded-full bg-white/30 backdrop-blur-sm">
                  <Sparkles className="h-10 w-10 text-white" />
                </div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="flex h-32 w-32 items-center justify-center rounded-full border-4 border-white/30"
                  >
                    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white/40 backdrop-blur-sm">
                      <Users className="h-12 w-12 text-white" />
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold text-gray-900 lg:text-5xl">
              Why Choose AI Niche Match?
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Our cutting-edge platform combines artificial intelligence with
              human psychology to create the most effective dating experience
              ever built.
            </p>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {[
              {
                icon: Sparkles,
                title: "AI-Powered Matching",
                description:
                  "Advanced algorithms analyze compatibility across 50+ dimensions to find your perfect match.",
                gradient: "from-yellow-400 to-orange-500",
              },
              {
                icon: Users,
                title: "Stunning AI Avatars",
                description:
                  "Express yourself with beautiful, customizable AI-generated avatars that capture your essence.",
                gradient: "from-pink-400 to-rose-500",
              },
              {
                icon: Zap,
                title: "Interactive Games",
                description:
                  "Break the ice with fun, engaging games designed to reveal compatibility and spark conversations.",
                gradient: "from-purple-400 to-indigo-500",
              },
              {
                icon: Shield,
                title: "Safe & Secure",
                description:
                  "Your privacy and safety are our top priorities with end-to-end encryption and verification.",
                gradient: "from-green-400 to-emerald-500",
              },
              {
                icon: Heart,
                title: "Meaningful Connections",
                description:
                  "Focus on quality over quantity with matches based on deep compatibility and shared values.",
                gradient: "from-red-400 to-pink-500",
              },
              {
                icon: Star,
                title: "Premium Experience",
                description:
                  "Enjoy an ad-free, premium experience with exclusive features and priority matching.",
                gradient: "from-blue-400 to-cyan-500",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group rounded-2xl border border-gray-100 bg-gradient-to-br from-gray-50 to-white p-8 transition-all duration-300 hover:shadow-xl"
              >
                <div
                  className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-r ${feature.gradient} transition-transform duration-300 group-hover:scale-110`}
                >
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="mb-4 text-xl font-bold text-gray-900">
                  {feature.title}
                </h3>
                <p className="leading-relaxed text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        id="how-it-works"
        className="bg-gradient-to-br from-pink-50 to-purple-50 py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold text-gray-900 lg:text-5xl">
              How It Works
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Getting started is simple. Follow these three easy steps to begin
              your journey to finding love.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Create Your Profile",
                description:
                  "Sign up and create your unique profile with AI-generated avatars and personality insights.",
                color: "pink",
              },
              {
                step: "02",
                title: "Enter the Arena",
                description:
                  "Join our interactive dating arena where you can discover and connect with potential matches.",
                color: "purple",
              },
              {
                step: "03",
                title: "Find Your Match",
                description:
                  "Play our compatibility games and let our AI find your perfect match based on deep connections.",
                color: "indigo",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div
                  className={`mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-${item.color}-400 to-${item.color}-600`}
                >
                  <span className="text-2xl font-bold text-white">
                    {item.step}
                  </span>
                </div>
                <h3 className="mb-4 text-2xl font-bold text-gray-900">
                  {item.title}
                </h3>
                <p className="leading-relaxed text-gray-600">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold text-gray-900 lg:text-5xl">
              Success Stories
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Join thousands of happy couples who found their perfect match
              through AI Niche Match.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                name: "Sarah & Mike",
                story:
                  "We matched through the compatibility game and instantly clicked. The AI really understood what we were looking for!",
                rating: 5,
                image:
                  "https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
              },
              {
                name: "Emma & David",
                story:
                  "The AI avatars helped us connect on a deeper level before meeting. It felt like we already knew each other!",
                rating: 5,
                image:
                  "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
              },
              {
                name: "Lisa & James",
                story:
                  "After trying other dating apps, AI Niche Match was refreshingly different. We're getting married next month!",
                rating: 5,
                image:
                  "https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-gray-100 bg-gradient-to-br from-gray-50 to-white p-8"
              >
                <div className="mb-4 flex items-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-current text-yellow-400"
                    />
                  ))}
                </div>
                <p className="mb-6 italic text-gray-600">
                  &quot;{testimonial.story}&quot;
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="mr-4 h-12 w-12 rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">Happy Couple</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-pink-500 to-purple-600 py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 text-4xl font-bold text-white lg:text-5xl">
              Ready to Find Your Perfect Match?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-pink-100">
              Join thousands of singles who have already discovered meaningful
              connections through our AI-powered platform.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onGetStarted}
              className="inline-flex items-center rounded-full bg-white px-10 py-4 text-lg font-bold text-pink-600 transition-all duration-200 hover:bg-pink-50"
            >
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="mb-4 flex items-center">
                <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-purple-600">
                  <Heart className="h-4 w-4 text-white" />
                </div>
                <span className="text-xl font-bold">AI Niche Match</span>
              </div>
              <p className="text-gray-400">
                The future of dating is here. Find your perfect match with AI.
              </p>
            </div>
            <div>
              <h3 className="mb-4 font-semibold">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    Success Stories
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-semibold">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-semibold">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    Safety
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 AI Niche Match. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}