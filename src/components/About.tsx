import { motion } from 'framer-motion';
import { Award, Eye, Heart, Target } from 'lucide-react';

const values = [
  {
    icon: Eye,
    title: 'Vision',
    description: 'We see beyond the surface to capture the true essence of identity',
  },
  {
    icon: Heart,
    title: 'Passion',
    description: 'Every shot is infused with love for the art of storytelling',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Unwavering commitment to the highest standards of quality',
  },
  {
    icon: Target,
    title: 'Purpose',
    description: 'Creating meaningful visual narratives that last forever',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              The Story Behind<br />
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Qissat Al Hawiya
              </span>
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                In Arabic, "Qissat Al Hawiya" translates to "The Story of Identity" — a name that embodies our mission
                to capture the unique essence of every person, every moment, and every brand.
              </p>
              <p>
                We believe that photography is more than just capturing images; it's about preserving emotions,
                celebrating individuality, and telling stories that resonate across time.
              </p>
              <p>
                Founded with a passion for artistry and a deep respect for cultural identity, our studio combines
                technical excellence with creative vision to deliver photographs that are not just seen, but felt.
              </p>
              <p className="font-semibold text-green-700">
                Your story deserves to be told beautifully. Let us help you create visual memories that last forever.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="bg-gradient-to-br from-green-500/10 to-blue-500/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-4">
                    <value.icon className="w-7 h-7 text-green-700" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="absolute -bottom-6 -right-6 w-64 h-64 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full blur-3xl -z-10"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>

        <motion.div
          className="mt-20 bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-12 text-center text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-4xl font-bold mb-4">Ready to Tell Your Story?</h3>
          <p className="text-xl mb-8 opacity-90">
            Let's create something extraordinary together
          </p>
          <motion.button
            className="px-8 py-4 bg-white text-green-700 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Get in Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
