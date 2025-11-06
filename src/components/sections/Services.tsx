import { motion } from 'framer-motion';
import { MessageSquare, TrendingUp, Cog, Brain, BarChart } from 'lucide-react';
import { Card } from '../Card';
import { Button } from '../Button';

export const Services = () => {
  const services = [
    {
      icon: MessageSquare,
      title: 'AI Chatbots & Customer Support',
      description:
        'Deploy intelligent conversational AI that handles customer queries 24/7, learns from interactions, and seamlessly escalates complex issues to human agents.',
      features: ['Natural language processing', '24/7 availability', 'Multi-language support', 'CRM integration'],
      color: 'from-blue-600 to-cyan-500'
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description:
        'Harness the power of machine learning to forecast trends, identify opportunities, and make data-driven decisions that keep you ahead of the competition.',
      features: ['Sales forecasting', 'Customer behavior analysis', 'Risk assessment', 'Market trend prediction'],
      color: 'from-cyan-500 to-teal-500'
    },
    {
      icon: Cog,
      title: 'Business Automation Tools',
      description:
        'Streamline repetitive tasks and workflows with intelligent automation. Free your team to focus on strategic work while AI handles the routine.',
      features: ['Process automation', 'Workflow optimization', 'Email automation', 'Inventory management'],
      color: 'from-teal-500 to-emerald-500'
    },
    {
      icon: Brain,
      title: 'Custom AI Model Development',
      description:
        'Get bespoke AI solutions tailored to your unique business challenges. Our experts build, train, and deploy custom models that solve your specific problems.',
      features: ['Custom algorithms', 'Model training', 'Performance optimization', 'Ongoing refinement'],
      color: 'from-blue-600 to-cyan-500'
    },
    {
      icon: BarChart,
      title: 'Data Dashboard Solutions',
      description:
        'Transform complex data into actionable insights with beautiful, interactive dashboards. Real-time metrics at your fingertips, accessible anywhere.',
      features: ['Real-time analytics', 'Custom visualizations', 'Mobile responsive', 'Export capabilities'],
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
            Our <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Comprehensive AI solutions designed to transform every aspect of your business operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                <div className={`p-3 bg-gradient-to-r ${service.color} rounded-lg w-fit mb-4`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-slate-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4 flex-grow">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-sm text-slate-600 dark:text-slate-300"
                    >
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  onClick={() => {
                    const element = document.querySelector('#contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Learn More
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
            Don't see what you need? We create custom solutions for unique challenges.
          </p>
          <Button
            size="lg"
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Request Custom Solution
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
