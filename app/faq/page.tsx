"use client";

import { Body, H1 } from "../design-system/formatting";
import QA from "./QA";
import Card from "@/components/JoinNow/join-now";

const dataQA = [
    {
        question: "What kinds of workouts are available on Fitster.co?",
        answer: "Fitster.co offers diverse workouts targeting different goals, from strength training to cardio and yoga.",
    },
    {
        question: "Are Fitster.co workouts suitable for all fitness levels?",
        answer: "Yes, our workouts are designed for everyone, with modifications for beginners and challenges for the experienced.",
    },
    {
        question: "What nutritional guidance does Fitster.co provide?",
        answer: "Fitster.co offers meal plans, recipes, and advice for balanced eating to complement your fitness journey.",
    },
]

const FAQ = () => {
    return (
        <Body>
            <H1>FAQ</H1>
            {dataQA.map((data, i) =>
                <div key={i}>
                    <QA
                        question={data.question}
                        answer={data.answer}
                    />
                </div>
            )}
            <div className="flex justify-center"> {/* Centering the Card */}
                <Card/>
            </div>
        </Body>
    )
}

export default FAQ
