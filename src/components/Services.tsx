import { motion } from 'framer-motion';
import { Camera, Users, Briefcase, Package, Heart, Sparkles } from 'lucide-react';

const services = [
  {
    icon: Camera,
    title: 'Portrait Photography',
    description: 'Capture your unique essence with professional portrait sessions that reveal your authentic identity.',
    color: 'from-green-500 to-green-700',
    iconBg: 'bg-green-500/10',
  },
  {
    icon: Heart,
    title: 'Event Coverage',
    description: 'From weddings to celebrations, we preserve your most precious moments with artistic excellence.',
    color: 'from-blue-500 to-blue-700',
    iconBg: 'bg-blue-500/10',
  },
  {
    icon: Briefcase,
    title: 'Corporate Branding',
    description: 'Elevate your business image with professional corporate photography and brand identity visuals.',
    color: 'from-green-600 to-blue-600',
    iconBg: 'bg-green-600/10',
  },
  {
    icon: Package,
    title: 'Product Photography',
    description: 'Showcase your products in their best light with stunning commercial photography.',
    color: 'from-blue-600 to-green-600',
    iconBg: 'bg-blue-600/10',
  },
  {
    icon: Users,
    title: 'Family Sessions',
    description: 'Create lasting memories with beautiful family portraits that tell your story.',
    color: 'from-green-500 to-blue-500',
    iconBg: 'bg-green-500/10',
  },
  {
    icon: Sparkles,
    title: 'Creative Direction',
    description: 'Complete creative services including concept development and artistic guidance.',
    color: 'from-blue-500 to-green-500',
    iconBg: 'bg-blue-500/10',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive photography services tailored to your unique needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300"
                style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}
              />

              <motion.div
                className={`${service.iconBg} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                whileHover={{ rotate: 5 }}
              >
                <service.icon className="w-8 h-8 text-green-700" />
              </motion.div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>

              <motion.div
                className={`mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r ${service.color} rounded-full transition-all duration-500`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
