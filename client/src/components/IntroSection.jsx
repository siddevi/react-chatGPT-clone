import React from "react";
import BotResponse from "./BotResponse";

const IntroSection = () => {
  return (
    <div id="introsection">
      <h1>
        Introducing Imoogle 3.0
        <BotResponse response=" - The Ultimate AI Assistant" />
      </h1>
      <h2>
        A cutting-edge AI-powered app that provides instant answers to any
        question you may have. With Imoogle AI, you'll never be left searching for
        answers again. Whether you need information for school or work, or just
        want to know the latest news, Imoogle AI has you covered.
      </h2>
      <p>
        Features:
        <ul>
          <li>Instant answers to any question</li>
          <li>Deep learning technology that improves with usage</li>
          <li>Continuously Learning</li>
          <li>User-friendly interface</li>
          <li>Available 24/7</li>
        </ul>
      </p>
      <p>
        Say goodbye to endless searching and typing, and say hello to Imoogle 3.0,
        your personal AI assistant. Try it now and see for yourself how Imoogle AI
        can make your life easier.
      </p>
    </div>
  );
};

export default IntroSection;
