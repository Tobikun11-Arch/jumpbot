import React from 'react';
import {motion} from 'motion/react';
import {ImageWithFallback} from './fallback/ImageWithFallback';

export default function WhyBlockchainMatters() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{opacity: 0, x: -50}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true}}
            transition={{duration: 0.8}}
          >
            <h2 className="text-white mb-6">
              Why Blockchain <span className="text-cyan-400">Matters</span>
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Blockchain is revolutionizing how we handle data, transactions,
              and trust by eliminating intermediaries and creating secure,
              transparent systems. By providing a decentralized ledger that is
              immutable and accessible to all network participants, it ensures
              data integrity while reducing costs and increasing efficiency
              across various industries.
            </p>
            <motion.button
              whileHover={{scale: 1.05}}
              whileTap={{scale: 0.95}}
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-full transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50"
            >
              Read More
            </motion.button>
          </motion.div>

          {/* Right Illustration */}
          <motion.div
            initial={{opacity: 0, x: 50}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true}}
            transition={{duration: 0.8, delay: 0.2}}
            className="relative"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-500/20 rounded-lg blur-3xl"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1620570625542-194933f7639a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwc2VydmVycyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYyMDgwMjExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Blockchain Network Servers"
                className="relative rounded-lg shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
