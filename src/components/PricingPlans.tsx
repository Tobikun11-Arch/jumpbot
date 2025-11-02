import React from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Beginner Plan',
    price: 199,
    description: 'Individuals new to blockchain',
    features: [
      'Access to basic blockchain guides',
      'Community support',
      'Monthly newsletters',
      'Basic tutorials',
    ],
    popular: false,
  },
  {
    name: 'Intermediate Plan',
    price: 349,
    description: 'Users with some blockchain knowledge',
    features: [
      'Everything in Beginner',
      'Access to advanced tutorials',
      'Priority support',
      'Exclusive webinars',
      'Code examples & templates',
    ],
    popular: true,
  },
  {
    name: 'Advanced Plan',
    price: 495,
    description: 'Professionals looking for advanced insights',
    features: [
      'Everything in Intermediate',
      'Expert consultation',
      '1-on-1 mentorship sessions',
      'Custom solutions',
      'API access',
      'Dedicated support',
    ],
    popular: false,
  },
];

export default function PricingPlans() {
  return (
    <section id="pricing" className="relative py-24 bg-slate-950 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-white mb-4">
            Pricing <span className="text-cyan-400">Plans</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose the plan that fits your needs and start a journey into the world of blockchain today.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              {plan.popular && (
                <div className="absolute -top-4 right-6 bg-cyan-500 text-white px-4 py-1 rounded-full transform rotate-12 shadow-lg z-10">
                  Popular
                </div>
              )}
              
              <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
              
              <div className={`relative bg-slate-900/50 backdrop-blur-sm border rounded-2xl p-8 h-full flex flex-col animated-border-box ${
                plan.popular ? 'border-cyan-500/40' : 'border-cyan-500/20'
              } hover:border-cyan-500/60 transition-all duration-300`}>
                <div className="mb-6">
                  <h3 className="text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400">{plan.description}</p>
                </div>

                <div className="mb-6">
                  <span className="text-cyan-400">$</span>
                  <span className="text-white">{plan.price}</span>
                  <span className="text-gray-400">/month</span>
                </div>

                <div className="flex-grow">
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 bg-cyan-500/20 rounded-full flex items-center justify-center mt-0.5">
                          <Check className="text-cyan-400" size={14} />
                        </div>
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-auto">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-3 rounded-full transition-all duration-300 flex items-center justify-center ${
                      plan.popular
                        ? 'bg-cyan-500 hover:bg-cyan-600 text-white shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50'
                        : 'border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10'
                    }`}
                  >
                    Get Started
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
