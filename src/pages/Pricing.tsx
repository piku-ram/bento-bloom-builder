
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X } from "lucide-react";

const Pricing = () => {
  const pricingPlans = [
    {
      name: "Free",
      description: "Perfect for trying out BentoBloom.",
      price: 0,
      features: [
        "1 website",
        "Basic templates",
        "SEO essentials",
        "Mobile responsive",
        "Community support",
      ],
      limitations: [
        "BentoBloom branding",
        "Limited storage (100MB)",
        "No custom domain",
        "Basic analytics",
      ],
      cta: "Start for Free",
      popular: false,
    },
    {
      name: "Pro",
      description: "For small businesses serious about growth.",
      price: 12,
      features: [
        "5 websites",
        "All templates",
        "All SEO features",
        "Custom domain",
        "1GB storage",
        "Removal of BentoBloom branding",
        "Priority support",
        "Advanced analytics",
        "E-commerce (10 products)",
      ],
      limitations: [
        "Limited integrations",
      ],
      cta: "Start Pro Plan",
      popular: true,
    },
    {
      name: "Business",
      description: "For established businesses and agencies.",
      price: 29,
      features: [
        "Unlimited websites",
        "All Pro features",
        "10GB storage",
        "API access",
        "White-label option",
        "All integrations",
        "Unlimited E-commerce",
        "Dedicated account manager",
        "Custom template development",
      ],
      limitations: [],
      cta: "Start Business Plan",
      popular: false,
    },
  ];

  const frequentlyAskedQuestions = [
    {
      question: "Can I upgrade or downgrade my plan later?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. When upgrading, you'll be charged the prorated difference. When downgrading, you'll receive credit toward your next billing cycle.",
    },
    {
      question: "Do you offer a free trial of paid plans?",
      answer: "Yes, we offer a 14-day free trial of our Pro plan. No credit card is required to start your trial.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers for annual plans.",
    },
    {
      question: "Is there a discount for annual billing?",
      answer: "Yes, you can save 20% by choosing annual billing for any of our paid plans.",
    },
    {
      question: "Can I request a refund?",
      answer: "We offer a 30-day money-back guarantee for first-time purchases of our paid plans if you're not satisfied.",
    },
    {
      question: "Do you offer special pricing for non-profits or educational institutions?",
      answer: "Yes, we offer a 50% discount for verified non-profit organizations and educational institutions. Contact our support team to apply.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Pricing | BentoBloom</title>
        <meta name="description" content="Simple, transparent pricing for BentoBloom website builder." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto py-16 px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold mb-6">Pricing Plans</h1>
            <p className="text-xl text-muted-foreground">
              Choose the plan that fits your business needs. All plans include our core features.
            </p>
            <div className="flex items-center justify-center mt-8">
              <span className="text-sm mr-2">Monthly</span>
              <div className="relative inline-flex h-6 w-12 items-center rounded-full bg-muted transition-colors cursor-pointer">
                <span className="absolute mx-1 h-4 w-4 rounded-full bg-white transition-transform translate-x-0" />
              </div>
              <span className="text-sm ml-2">Annually <span className="text-green-500 font-medium">Save 20%</span></span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {pricingPlans.map((plan, index) => (
              <Card 
                key={index} 
                className={`flex flex-col ${
                  plan.popular ? 'border-primary shadow-lg relative' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-primary text-primary-foreground text-xs py-1 px-3 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="text-muted-foreground ml-2">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="font-medium mb-2">Features included:</p>
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {plan.limitations.length > 0 && (
                    <>
                      <p className="font-medium mb-2">Limitations:</p>
                      <ul className="space-y-2">
                        {plan.limitations.map((limitation, i) => (
                          <li key={i} className="flex items-start">
                            <X className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>{limitation}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </CardContent>
                <CardFooter>
                  <Button 
                    variant={plan.popular ? "default" : "outline"} 
                    className="w-full"
                  >
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="max-w-3xl mx-auto mt-24">
            <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {frequentlyAskedQuestions.map((faq, index) => (
                <div key={index} className="border-b pb-6">
                  <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">
                Have more questions? We're here to help.
              </p>
              <Button variant="outline" asChild>
                <a href="/support">Contact Support</a>
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Pricing;
