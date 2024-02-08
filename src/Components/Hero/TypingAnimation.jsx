import React, { useState, useEffect } from 'react';

const TypingAnimation = ({ phrases, speed }) => {
  const [displayText, setDisplayText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const currentPhrase = phrases[phraseIndex];

  useEffect(() => {
    let charIndex = 0;
    const interval = setInterval(() => {
      if (charIndex < currentPhrase.length) {
        setDisplayText((prev) => prev + currentPhrase[charIndex]);
        charIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setDisplayText('');
          setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }, 1000); // Delay between phrases
      }
    }, speed);

    return () => clearInterval(interval);
  }, [phraseIndex]);

  return (
    <h2 className="text-xl md:text-2xl lg:text-4xl xl:text-3xl 2xl:text-4xl font-semibold mb-6">
      {displayText}
      <span className="animate-pulse">|</span>
    </h2>
  );
};

export default TypingAnimation;
