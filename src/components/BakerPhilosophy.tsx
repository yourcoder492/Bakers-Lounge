import React from 'react';
import { Scale, Thermometer, Wind, Award, Quote } from 'lucide-react';

export const BakerPhilosophy: React.FC = () => {
  const testimonials = [
    {
      quote:
        'The croissant lamination formula in The Baker’s Legend is the most reliable I have taught in 15 years. The cooling intervals prevent butter fracture every single time.',
      author: 'Chef Marcus Vance',
      role: 'Master Baker & Instructor',
      location: 'Lyon, France'
    },
    {
      quote:
        'Finally a recipe compendium that respects baker math. Flour is measured in grams, water is calibrated for steam release, and the step timers make timing effortless.',
      author: 'Sarah Lindholm',
      role: 'Founder, Nordic Sourdough Guild',
      location: 'Copenhagen, Denmark'
    },
    {
      quote:
        'The chocolate fudge cake with hot coffee bloom is now our bakery’s bestselling weekend slice. Simple, repeatable, and extraordinary crumb moisture.',
      author: 'David Chen',
      role: 'Pastry Director, Golden Grain Bakery',
      location: 'San Francisco, CA'
    }
  ];

  return (
    <section id="craft" className="py-20 px-6 lg:px-12 bg-white border-t border-[#E6DFC5]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#9C3218]">
            The Baker’s Code
          </span>
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-[#281E19] mt-2">
            The Three Invariants of Baking Craft
          </h2>
          <p className="text-sm text-[#655347] mt-3 leading-relaxed">
            Baking is culinary chemistry mastered through patience. These 70 formulas are rooted in three foundational principles that guarantee success in home ovens.
          </p>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="p-8 rounded-2xl bg-[#FAF8F5] border border-[#DDD5C2] text-left">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center mb-5">
              <Scale className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#281E19] mb-2">
              1. Gram-Weight Precision
            </h3>
            <p className="text-xs text-[#655347] leading-relaxed">
              Measuring flour by volume (cups) creates density variances up to 25% depending on aeration. Every formula in this book is calibrated in metric grams for absolute repeatability.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-[#FAF8F5] border border-[#DDD5C2] text-left">
            <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-900 flex items-center justify-center mb-5">
              <Thermometer className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#281E19] mb-2">
              2. Thermal Equilibrium
            </h3>
            <p className="text-xs text-[#655347] leading-relaxed">
              Butter melts at 32°C. Yeast slows below 20°C. Our step-by-step instructions specify exact chilling intervals and water warmth so butter stays solid during lamination and yeast thrives.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-[#FAF8F5] border border-[#DDD5C2] text-left">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-900 flex items-center justify-center mb-5">
              <Wind className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#281E19] mb-2">
              3. Steam & Oven Spring
            </h3>
            <p className="text-xs text-[#655347] leading-relaxed">
              Steam keeps the dough skin supple during the initial 10-minute oven spring, allowing maximum expansion and blistered crusts before caramelization locks in color.
            </p>
          </div>
        </div>

        {/* Testimonials */}
        <div className="border-t border-[#E6DFC5] pt-16">
          <div className="text-center mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#9C3218]">
              Community Voice
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#281E19] mt-1">
              Endorsed by Artisan Bakers & Pâtissiers
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E6DFC5] flex flex-col justify-between"
              >
                <Quote className="w-5 h-5 text-[#E25C38] opacity-60 mb-3" />
                <p className="text-xs text-[#48372D] leading-relaxed italic mb-5">
                  "{t.quote}"
                </p>
                <div className="pt-3 border-t border-[#EDE6D7]">
                  <p className="font-serif font-bold text-sm text-[#281E19]">
                    {t.author}
                  </p>
                  <p className="text-[11px] text-[#786457]">
                    {t.role} · {t.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
