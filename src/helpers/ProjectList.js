import bethereImage from "../assets/image3.jpg";
import tiktokImage from "../assets/image4.png";

export const ProjectList = [
  {
    id: "fitbuddy",
    number: "01",
    name: "FitBuddy",
    type: "AI application · NTU final year project",
    date: "Jan–Dec 2024",
    summary: "An adaptive exercise-coaching system that used LLMs, persistent conversation state, and feedback-weighted persuasion strategies.",
    outcome: "19-participant evaluation",
    technologies: ["NestJS", "React Native", "Next.js", "PostgreSQL", "OpenAI API"],
    focusAreas: ["LLM orchestration", "Stateful conversations", "Prompt design", "Model evaluation"],
    overview: "FitBuddy explored how conversational AI could encourage patients to maintain regular physical activity through personalised dialogue and adaptive persuasion. I designed a modular full-stack prototype spanning a patient mobile app, a healthcare-professional portal, and an LLM-enabled backend.",
    architecture: [
      { title: "Patient app", detail: "React Native", note: "Chat, preferences, schedules" },
      { title: "Application layer", detail: "NestJS", note: "APIs, rules, strategy selection" },
      { title: "Intelligence", detail: "OpenAI API", note: "Classification + response generation" },
      { title: "State", detail: "PostgreSQL", note: "Profiles, sessions, conversation history" },
    ],
    contributions: [
      { title: "Adaptive persuasion", text: "Integrated GPT models with a Model for Adaptive Persuasion, classifying user motivation and selecting a strategy informed by prior responses." },
      { title: "Stateful dialogue", text: "Persisted conversation history, user context, and strategy state in PostgreSQL so interactions could remain coherent across sessions." },
      { title: "Prompt engineering", text: "Applied few-shot and contextual prompting, then varied model parameters to compare response quality across representative scenarios." },
      { title: "End-to-end product", text: "Connected the NestJS backend to a React Native patient app, Next.js web portal, Supabase, and Firebase Cloud Messaging." },
    ],
    results: [
      { value: "84.2%", label: "preferred GPT-4 for persuasiveness" },
      { value: "89.5%", label: "preferred GPT-4’s motivational tone" },
      { value: "19", label: "participants in the user evaluation" },
    ],
    disclaimer: "FitBuddy was a university prototype evaluated with 19 participants. It was not clinically validated or deployed as a production healthcare system.",
  },
  {
    id: "tiktokpay",
    number: "02",
    name: "TikTokPay",
    type: "FinTech · TikTok Hackathon",
    date: "Sep 2023",
    summary: "A mobile wallet prototype supporting debit and credit accounts, internal transfers, and external merchant payments.",
    outcome: "Hackathon prototype",
    technologies: ["React Native", "JavaScript", "Mobile UI", "FinTech"],
    focusAreas: ["Mobile development", "Payment flows", "Rapid prototyping"],
    overview: "TikTokPay was developed during a TikTok hackathon challenge. The team created a digital-wallet concept covering account management, peer-to-peer transfers, and merchant payment flows.",
    image: tiktokImage,
    imageAlt: "TikTokPay mobile application title screen",
    contributions: [
      { title: "Mobile interface", text: "Contributed React Native components and wallet interfaces for the working demonstration." },
      { title: "Product flow", text: "Helped translate the payment concept into a coherent mobile journey under hackathon time constraints." },
      { title: "Team delivery", text: "Collaborated on implementation and presentation to deliver a complete prototype by the deadline." },
    ],
    disclaimer: "TikTokPay was a hackathon prototype, not a production financial platform.",
  },
  {
    id: "bethereai",
    number: "03",
    name: "BethereAI",
    type: "Human-centred AI · UC Berkeley AI Hackathon",
    date: "Jun 2023",
    summary: "An accessible communication concept combining emotion recognition, speech interfaces, and a tabletop device for older adults.",
    outcome: "AI + IoT concept",
    technologies: ["HumeAI", "Speech-to-text", "Text-to-speech", "IoT"],
    focusAreas: ["Human-centred AI", "Accessible design", "Emotion-aware interfaces"],
    overview: "BethereAI explored how emotionally aware, speech-based interaction could make remote family communication more engaging and accessible for elderly users.",
    image: bethereImage,
    imageAlt: "BethereAI tabletop assistant and companion mobile interface concept",
    contributions: [
      { title: "Emotion-aware interaction", text: "Integrated HumeAI capabilities to explore how emotional signals could inform a more empathetic experience." },
      { title: "Conversational interface", text: "Combined speech-to-text and text-to-speech concepts to reduce dependence on conventional screen interactions." },
      { title: "Accessible hardware", text: "Designed BTAssist, a tabletop device concept focused on familiarity, legibility, and ease of use." },
    ],
    disclaimer: "BethereAI was a concept prototype developed for an academic hackathon.",
  },
];

export function getProject(id) {
  return ProjectList.find((project) => project.id === id);
}
