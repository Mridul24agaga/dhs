import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import exclusiveBenefitsBg from "@/assets/exclusive-benefits-bg.jpg";
import accountingGuidance from "@/assets/accounting-guidance.jpg";
import bankingAssistance from "@/assets/banking-assistance.jpg";
import businessVentures from "@/assets/business-ventures.jpg";
import productLine from "@/assets/product-line.jpg";
import legalSupport from "@/assets/legal-support.jpg";
import discountedFlights from "@/assets/discounted-flights.jpg";

const ExclusiveBenefitsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 80, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8
      }
    }
  };

  const scaleVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  const slideInUp = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8
      }
    }
  };

  const benefits = [
    {
      icon: "💵",
      title: "Pay Nothing Upfront",
      description: "We only earn when you do. No fees, no fluff, just a performance based partnership built on results."
    },
    {
      icon: "📈",
      title: "Your Growth = Our Growth", 
      description: "We don't win unless you do. Our incentives are aligned, our systems are proven, and we're in this with you."
    },
    {
      icon: "🚀",
      title: "We Reinvest in Your Brand",
      description: "We put our own skin in the game, reinvesting a portion of our earnings into scaling your success."
    }
  ];

  const businessServices = [
    { image: accountingGuidance, title: "ACCOUNTING GUIDANCE" },
    { image: bankingAssistance, title: "BANKING ASSISTANCE" },
    { image: businessVentures, title: "BUSINESS VENTURES SETUP" },
    { image: productLine, title: "PRODUCT LINE DEVELOPMENT" },
    { image: legalSupport, title: "LEGAL SUPPORT" },
    { image: discountedFlights, title: "DISCOUNTED FLIGHTS ACCESS" }
  ];

  // Auto-scroll functionality
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollStep = 280; // Width of each card + gap
    let scrollPosition = 0;
    const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;

    const autoScroll = () => {
      if (scrollPosition >= maxScroll) {
        scrollPosition = 0;
      } else {
        scrollPosition += scrollStep;
      }
      
      scrollContainer.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    };

    const interval = setInterval(autoScroll, 3000); // Scroll every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="relative py-32 overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${exclusiveBenefitsBg})`
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-luxury"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div variants={containerVariants} className="text-center mb-16">
          <motion.div variants={itemVariants} className="uppercase tracking-[0.2em] text-primary font-display font-bold text-sm mb-8">
            WHAT ELSE DO WE OFFER?
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight text-white mb-8 px-4">
            WE ONLY WIN <br />
            <span className="text-primary">WHEN YOU DO</span>
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-white/80 font-body text-base sm:text-lg leading-relaxed mb-12 max-w-3xl mx-auto px-4">
            This is not a paid service. We invest in your growth and only get paid when you do. Our 50/50 performance model means:
          </motion.p>
        </motion.div>

        {/* Value Propositions */}
        <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-20 px-4">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              variants={scaleVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-luxury p-6 sm:p-8 text-center hover:bg-black/50 transition-all duration-300"
            >
              <motion.div 
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
                className="text-4xl mb-4"
              >
                {benefit.icon}
              </motion.div>
              <h3 className="font-display font-bold text-lg sm:text-xl text-white mb-4">{benefit.title}</h3>
              <p className="text-white/80 font-body text-sm sm:text-base leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Exclusive Benefits */}
        <motion.div variants={slideInUp} className="text-center mb-12 px-4">
          <h3 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-white mb-8">
            WHAT ELSE DO WE OFFER?
          </h3>
        </motion.div>

        {/* Business Services Carousel */}
        <motion.div 
          variants={slideInUp}
          ref={scrollRef} 
          className="flex gap-6 overflow-x-auto pb-8 mb-12 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {businessServices.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex-shrink-0 relative"
            >
              <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-luxury overflow-hidden relative group">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="font-display font-bold text-white text-lg uppercase tracking-wide drop-shadow-lg">
                    {service.title}
                  </h4>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div 
          variants={slideInUp}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-center px-4"
        >
          <Button 
            variant="outline" 
            size="lg" 
            className="bg-primary text-white border-primary hover:bg-primary/90 hover:shadow-primary/20 text-sm sm:text-base px-8 sm:px-10 lg:px-12 py-4 h-auto font-display uppercase tracking-wide transition-all duration-300 w-full sm:w-auto max-w-xs sm:max-w-none"
            asChild
          >
            <a href="/apply">Apply Now →</a>
          </Button>
        </motion.div>
      </div>

    </motion.section>
  );
};

export default ExclusiveBenefitsSection;