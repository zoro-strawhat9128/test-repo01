import { useState } from 'react';
import './App.css'

function App() {
  return (
    <>
      <StoryTeller/>
    </>
  )
}

const stories = [
  {
    title: "The Lost Star",
    text: "One night, a tiny star fell from the sky and landed in a quiet forest. A curious rabbit found it glowing between the trees."
  },
  {
    title: "The Rabbit's Journey",
    text: "The rabbit decided to return the star to the sky. Along the way, it met a wise owl who showed it the tallest hill."
  },
  {
    title: "Back to the Sky",
    text: "From the top of the hill, the rabbit tossed the star into the sky. It sparkled brightly and found its way home."
  }
];

 function StoryTeller() {
  const [index, setIndex] = useState(0);

  const nextStory = () => {
    if (index < stories.length - 1) setIndex(index + 1);
  };

  const prevStory = () => {
    if (index > 0) setIndex(index - 1);
  };

  const progress = ((index + 1) / stories.length) * 100;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-[400px] bg-white rounded-2xl shadow-lg p-6">
        
        {/* Progress Bar */}
        <div className="w-full bg-gray-200 h-2 rounded mb-4">
          <div
            className="bg-indigo-500 h-2 rounded transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Story Content */}
        <h2 className="text-xl font-bold mb-3">{stories[index].title}</h2>
        <p className="text-gray-600 mb-6">{stories[index].text}</p>

        {/* Controls */}
        <div className="flex justify-between">
          <button
            onClick={prevStory}
            disabled={index === 0}
            className="px-4 py-2 bg-gray-300 rounded-lg disabled:opacity-50"
          >
            Previous
          </button>

          <button
            onClick={nextStory}
            disabled={index === stories.length - 1}
            className="px-4 py-2 bg-indigo-500 text-white rounded-lg disabled:opacity-50"
          >
            Next
          </button>
        </div>

        {/* Step indicator */}
        <p className="text-sm text-gray-400 mt-4 text-center">
          Story {index + 1} of {stories.length}
        </p>
      </div>
    </div>
  );
}

export default App
