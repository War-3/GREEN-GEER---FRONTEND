import React, { useState } from "react";
import "./faq.scss";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questionsAnswers = [
    {
      question: "What type of equipment can I rent?",
      answer:
        "GreenGear offers a diverse range of agricultural equipment to meet your farming noods You can rent items such as tractors, ploughs, harvesters, irrigation systems, tillers, and more. Each equipment listing provides detailed descriptions, images, specifications, pricing, and availability to help you choose the right tools for your operations.",
    },
    {
      question: "How does the booking process work?",
      answer:
        "Booking equipment on GreenGear is straightforward, Search & Select: Use the search bar or filters to find the equipment you need based on type, location, price range, and availability. Check Avallability: View the real-time availability calendar for your selected equipment. Rent. Click the Rent Now button, choose your rental dates, and proceed to payment. Confirm: Complete the secure payment process through our integrated Flutterwave API. Receive Confirmation: You'll receive a booking confirmation via email or SMS with all the necessary details.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "GreenGear accepts multiple secure payment methods to ensure convenience and safety:Credit/Debit Cards: Visa, MasterCard, and other major card providers.Mobile Payments: You can pay easily using mobile bank transfer..",
    },
    {
      question: "Is there a minimum rental period?",
      answer:
        "Yes, the minimum rental period varies depending on the type of equipment. Typically, rentals start at one day, but some specialised equipment may have different minimum durations. For detailed information, please refer to the specific rental terms listed on each equipment's page.",
    },
    {
      question: "What type of equipment can I rent?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      question: "How can I contact customer support?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div id="FAQ">
      <div className="section">
        <div className="top">
          <h2>Frequently Asked Questions</h2>
          <p>
            Find answers to common queries about our rental services, equipment
            availability, and booking process to help you make informed
            decisions.
          </p>
        </div>

        <div className="faq">
          <ul className="faq__list">
            {questionsAnswers.map((item, index) => (
              <li
                className={`faq__item ${
                  activeIndex === index ? "faq__item--active" : ""
                }`}
                key={index}
              >
                <button
                  className="faq__question"
                  onClick={() => toggleQuestion(index)}
                >
                  {item.question}
                  <span
                    className={`faq__icon ${
                      activeIndex === index ? "faq__icon--open" : ""
                    }`}
                  >
                    {activeIndex === index ? ">" : "v"}
                  </span>
                </button>
                {activeIndex === index && (
                  <p className="faq__answer">{item.answer}</p>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="bottom">
          <h2>Need More Help?</h2>
          <p>
            Contact us for any additional questions or support regarding our
            services.
          </p>
          <div>
            {" "}
            <button>Get Support</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
