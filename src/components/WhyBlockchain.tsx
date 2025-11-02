import React from 'react';
import { motion } from 'motion/react';
import { Network, Shield, Eye, Zap } from 'lucide-react';

const features = [
  {
    icon: Network,
    title: 'Decentralization',
    description: 'No single entity controls the system.',
  },
  {
    icon: Shield,
    title: 'Security',
    description: 'Encrypted and tamper-proof data.',
  },
  {
    icon: Eye,
    title: 'Transparency',
    description: 'Public, accountable transactions.',
  },
  {
    icon: Zap,
    title: 'Efficiency',
    description: 'Faster, cost-effective processes.',
  },
];

export default function WhyBlockchain() {
  return (
    <section id="why-blockchain" className="relative py-24 bg-slate-950 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
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
            Why <span className="text-cyan-400">Blockchain?</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Blockchain is redefining trust in the digital world.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative group h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-transparent rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                <div className="relative bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/40 transition-all duration-300 h-full flex flex-col animated-border-box">
                  <div className="w-14 h-14 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-colors duration-300">
                    <Icon className="text-cyan-400" size={28} />
                  </div>
                  <h3 className="text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
