import React from 'react';
import SassyPMQuoteGenerator from './components/SassyPMQuoteGenerator';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="w-full max-w-3xl">
        <SassyPMQuoteGenerator />
      </div>
    </div>
  );
}

export default App;