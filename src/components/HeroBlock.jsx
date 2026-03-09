import React from 'react';
import CTABlock from './CTABlock';

/**
 * Hero section unifié basé sur le modèle Hyperthermie.
 * Structure : image de fond + gradient + h1 + subtitle + text + CTA (optionnel)
 */
const HeroBlock = ({
  imageSrc,
  h1,
  subtitle,
  text,
  ctaVariant = 'requestConsultation',
  showCta = true,
  compact = false,
  ctaReason,
}) => {
  return (
    <section
      className={`relative flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 overflow-hidden ${
        compact
          ? 'min-h-[30vh] sm:min-h-[35vh] py-12 sm:py-16 md:py-20'
          : 'min-h-[50vh] sm:min-h-[55vh] lg:min-h-[60vh] py-16 sm:py-20 md:py-24 lg:py-32'
      }`}
    >
      <div className="absolute inset-0 z-0">
        <img
          src={imageSrc}
          alt=""
          className="w-full h-full object-cover object-right md:object-center"
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/40 md:from-white/95 md:via-white/75 md:to-white/30" />
      </div>
      <div className="max-w-4xl mx-auto relative z-10 w-full">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 sm:mb-6">
          {h1}
        </h1>
        {subtitle && (
          <p className="text-lg sm:text-xl text-primary/90 font-medium mb-3 sm:mb-4">
            {subtitle}
          </p>
        )}
        <p className="text-base sm:text-lg text-text/80 mb-8 sm:mb-10 leading-relaxed">
          {text}
        </p>
        {showCta && <CTABlock variant={ctaVariant} size="default" reason={ctaReason} />}
      </div>
    </section>
  );
};

export default HeroBlock;
