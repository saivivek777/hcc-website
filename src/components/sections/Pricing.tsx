import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import { Card } from '../Card';
import { Button } from '../Button';

export const Pricing = () => {
  const plans = [
    {
      name: 'Basic',
      price: '$499',
      period: '/month',
      description: 'Perfect for small businesses starting their AI journey',
      features: [
        'AI Chatbot (up to 1,000 conversations/month)',
        'Basic analytics dashboard',
        'Email automation',
        '2 custom workflows',
        'Email support',
        'Monthly performance reports'
      ],
      popular: false,
      cta: 'Get Started'
    },
    {
      name: 'Pro',
      price: '$1,299',
      period: '/month',
      description: 'Ideal for growing businesses ready to scale',
      features: [
        'AI Chatbot (up to 10,000 conversations/month)',
        'Advanced predictive analytics',
        'Full business automation suite',
        '10 custom workflows',
        'Custom AI model development',
        'Priority support & dedicated account manager',
        'Weekly insights & optimization',
        'API access'
      ],
      popular: true,
      cta: 'Most Popular'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for established organizations',
      features: [
        'Unlimited AI chatbot conversations',
        'Enterprise-grade analytics & BI tools',
        'Comprehensive automation platform',
        'Unlimited custom workflows',
        'Multiple custom AI models',
        'White-label options',
        '24/7 dedicated support team',
        'On-premise deployment options',
        'Custom integrations & APIs',
        'Quarterly business reviews'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
            Simple, <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Transparent</span> Pricing
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Choose the plan that fits your business needs. Scale up or down anytime.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}
              <Card
                className={`h-full flex flex-col ${
                  plan.popular
                    ? 'ring-2 ring-blue-600 dark:ring-cyan-500'
                    : ''
                }`}
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">
                    {plan.name}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                      {plan.price}
                    </span>
                    <span className="text-slate-600 dark:text-slate-300 ml-2">
                      {plan.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="w-5 h-5 text-blue-600 dark:text-cyan-400 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600 dark:text-slate-300 text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.popular ? 'primary' : 'outline'}
                  className="w-full"
                  onClick={() => {
                    const element = document.querySelector('#contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {plan.cta}
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
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
            <h3 className="text-2xl font-bold mb-3">Not sure which plan is right for you?</h3>
            <p className="mb-6 opacity-90">
              Book a free 30-minute consultation with our AI experts. We'll analyze your needs and
              recommend the perfect solution.
            </p>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Book Free Consultation
            </Button>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
