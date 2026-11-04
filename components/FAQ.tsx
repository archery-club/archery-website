import { SUPPORT_EMAIL } from "@/lib/site";
import Reveal from "./Reveal";

const questions = [
  { question: "Do I need to take a photo?", answer: "No. Once you finish an end, point your phone at the target. ArrowMind detects arrow positions and scores in real time, without taking a photo or waiting for a result." },
  { question: "What happens after my arrows are detected?", answer: "Your arrows are plotted on a virtual target, with scores recorded for review. Training analysis helps you explore horizontal and vertical bias, grouping size, and trends over time." },
  { question: "Which languages does ArrowMind support?", answer: "ArrowMind supports English, Cantonese, and Chinese, so you can train in the language that works for you." },
  { question: "Where can I download ArrowMind?", answer: "ArrowMind is available on the App Store and Google Play in more than 170 countries and regions. Availability can differ between stores. Follow the download links to check your local listing." },
  { question: "Does ArrowMind offer in-app purchases?", answer: "Yes, ArrowMind offers in-app purchases. Check the App Store or Google Play listing for the current options and pricing in your region." },
];

export default function FAQ() {
  return (
    <section className="faq-section container section" id="faq" aria-labelledby="faq-heading">
      <Reveal className="faq-intro"><p className="eyebrow">GOOD TO KNOW</p><h2 id="faq-heading">A few things<br />before you shoot.</h2><p>Still have a question?<br /><a href={`mailto:${SUPPORT_EMAIL}`}>We’re here to help ↗</a></p></Reveal>
      <Reveal className="faq-list" delay={0.1}>
        {questions.map(item => <details key={item.question}><summary>{item.question}<span aria-hidden="true">+</span></summary><p>{item.answer}</p></details>)}
      </Reveal>
    </section>
  );
}
