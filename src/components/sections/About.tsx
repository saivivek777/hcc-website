import { motion } from 'framer-motion';
import { Target, Users, TrendingUp, Award } from 'lucide-react';
import { Card } from '../Card';

export const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description:
        'To democratize AI technology and make intelligent automation accessible to businesses of all sizes.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description:
        'A diverse team of AI engineers, data scientists, and business strategists committed to your success.'
    },
    {
      icon: TrendingUp,
      title: 'Proven Results',
      description:
        'Track record of helping businesses achieve 200-400% ROI through smart AI implementation.'
    },
    {
      icon: Award,
      title: 'Industry Leaders',
      description:
        'Award-winning solutions recognized by leading technology and business publications.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
            About <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">HCC</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            We're not just another tech company. We're your strategic partner in the AI revolution.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
              Who We Are
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Founded in 2020, Hyper Creative Coders (HCC) emerged from a simple observation: small
              and medium-sized businesses were being left behind in the AI revolution. While
              enterprise companies had access to sophisticated automation, SMBs struggled with
              complex, expensive solutions.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              We changed that. Our team of AI experts, data scientists, and business strategists
              developed accessible, affordable AI solutions specifically designed for growing
              businesses. Today, we've helped over 500 companies transform their operations through
              intelligent automation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
              What We Do
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              We specialize in AI and machine learning solutions that deliver real business value.
              Our expertise spans intelligent chatbots, predictive analytics, business process
              automation, custom AI model development, and interactive data dashboards.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Every solution we build is tailored to your specific needs, scalable as you grow, and
              backed by ongoing support. We don't just deliver technology—we ensure you understand
              it, can use it effectively, and see measurable ROI.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h4 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">
                  {value.title}
                </h4>
                <p className="text-slate-600 dark:text-slate-300">{value.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
