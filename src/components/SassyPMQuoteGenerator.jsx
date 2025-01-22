import React, { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Quote, ThermometerSun } from 'lucide-react';

const SassyPMQuoteGenerator = () => {
  const [sassLevel, setSassLevel] = useState(-1);
  const [currentQuote, setCurrentQuote] = useState('');
  const [hasStarted, setHasStarted] = useState(false);

  const sassQuotes = [
    // Level 0 - Professional
    [
      "We'll need to evaluate this request within our current sprint capacity.",
      "This is an interesting proposal that requires further analysis.",
      "We're currently assessing our resource allocation for Q3.",
      "Let me align this with our strategic roadmap initiatives.",
      "We should schedule a discovery workshop to explore this concept further."
    ],
    // Level 1 - Slightly Sassy
    [
      "Have you tried turning it off and on again? No? Well, that's still not going to get this feature built any faster.",
      "Oh, what a... unique request. I'll add it to our 'someday maybe never' list.",
      "Let me pencil that in right between 'inventing time travel' and 'teaching cats to code'.",
      "That's a very creative interpretation of 'must-have' versus 'nice-to-have'.",
      "I see you've discovered our 'feature suggestion box', also known as /dev/null."
    ],
    // Level 2 - Definitely Sassy
    [
      "Wow, another feature request! Let me just sprinkle some fairy dust and make it magically appear.",
      "Sure thing! Right after we finish building that rocket ship to Mars in the parking lot.",
      "Have you considered that maybe, just maybe, the feature you want isn't the feature you need?",
      "I'll add this to our 'When Pigs Fly' milestone in Jira.",
      "Our AI-powered prioritization algorithm says *checks notes* 'lol, nope'."
    ],
    // Level 3 - Extra Sassy
    [
      "Oh honey, that's not going in the backlog, that's going in the 'back-of-the-back-of-the-backlog'.",
      "Did you just... did you just ask for ANOTHER feature? While we're still building the last 47 you requested?",
      "Let me translate that into PM speak: No❤️",
      "I just ran this by my rubber duck, and even it's laughing.",
      "Your feature request has been successfully promoted to my 'Things to Think About in the Shower' list."
    ],
    // Level 4 - Maximum Sass
    [
      "Look, I'm going to need you to take this feature request and... *dramatically throws it into the void*",
      "Dear stakeholder, I regret to inform you that my last shred of diplomatic PM-speak has left the building. Try again never.",
      "🎵 Let it go, let it gooo, this feature ain't happening anymoooore! 🎵",
      "ERROR 404: PM's Patience Not Found. Please reinstall coffee and try again.",
      "Breaking news: Local PM Discovers New State of Matter Called 'Not Gonna Happen'"
    ]
  ];

  const getQuoteAtCurrentLevel = () => {
    const level = hasStarted ? sassLevel : 0;
    const levelQuotes = sassQuotes[level];
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * levelQuotes.length);
    } while (levelQuotes[newIndex] === currentQuote && levelQuotes.length > 1);
    setCurrentQuote(levelQuotes[newIndex]);
    if (!hasStarted) {
      setSassLevel(0);
      setHasStarted(true);
    }
  };

  const increaseSassLevel = () => {
    const nextLevel = Math.min(sassLevel + 1, sassQuotes.length - 1);
    setSassLevel(nextLevel);
    const levelQuotes = sassQuotes[nextLevel];
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * levelQuotes.length);
    } while (levelQuotes[newIndex] === currentQuote && levelQuotes.length > 1);
    setCurrentQuote(levelQuotes[newIndex]);
  };

  const resetSass = () => {
    setSassLevel(-1);
    setCurrentQuote('');
    setHasStarted(false);
  };

  const getSassColor = () => {
    const colors = ['bg-blue-500', 'bg-yellow-500', 'bg-orange-500', 'bg-red-500', 'bg-purple-500'];
    return colors[Math.max(0, Math.min(sassLevel, colors.length - 1))];
  };

  return (
    <Card className="w-full max-w-xl mx-auto">
      <CardContent className="pt-6">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <Button
              onClick={getQuoteAtCurrentLevel}
              className={`${getSassColor()} hover:opacity-90 active:scale-95 transform transition-transform text-white font-semibold`}
            >
              Generate PM Response
            </Button>
            <Button
              onClick={increaseSassLevel}
              className="bg-red-500 hover:bg-red-600 active:scale-95 transform transition-transform text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!hasStarted || sassLevel >= sassQuotes.length - 1}
            >
              Increase Sass Level
            </Button>
            <Button
              onClick={resetSass}
              variant="outline"
              className="text-gray-500 active:scale-95 transform transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!hasStarted}
            >
              Reset Sass
            </Button>
          </div>

          {currentQuote && (
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-2">
                <Quote className="text-gray-400"     size={24} />
                <ThermometerSun
                  className="text-red-500"
                  size={24}
                  style={{
                    transform: `rotate(${sassLevel * 45}deg)`,
                    transition: 'transform 0.3s ease-in-out'
                  }}
                />
                <Quote className="text-gray-400" size={24} />
              </div>
              <p className="text-lg text-gray-700 italic">
                {currentQuote}
              </p>
              <p className="text-sm text-gray-500">
                Sass Level: {sassLevel + 1} of {sassQuotes.length}
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default SassyPMQuoteGenerator;