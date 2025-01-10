import { TypeAnimation } from "react-type-animation";

const TypingAnim = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed once, initially
        "Explain this code snippet",
        1000,
        "Generate a Python script",
        1500,
        "How do I solve this error message?",
        1200,
        "Give me a step-by-step guide",
        1000,
        "What are the best tools or libraries?",
        1500,
        "Translate into another language.",
        1200,
        "Summarize this article or book.",
        1000,
        "Can you provide sone tips on this",
        1500,
        "Write an essay or document",
        1200,
      ]}
      speed={50}
      style={{ fontSize: "40px", color:"#079be6",display: "inline-block",textShadow:"1px 1px 20px #000"}}
      repeat={Infinity}
    />
  );
};

export default TypingAnim;
