import React, { useState } from 'react';
import './Quiz.css'
import Header from '../Header/Header';

export default function Quiz() {
   
    
	const questions = [
		{
			questionText: 'How many months do we have in a year?',
			answerOptions: [
				{ answerText: '11', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '12', isCorrect: true },
				{ answerText: '15', isCorrect: false },
			],
		},
		{
			questionText: 'How many months do we have in a year?',
			answerOptions: [
				{ answerText: '11', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '12', isCorrect: true },
				{ answerText: '15', isCorrect: false },
			],
		},{
			questionText: 'What is 2+2??',
			answerOptions: [
				{ answerText: '4', isCorrect: true },
				{ answerText: '6', isCorrect: false },
				{ answerText: '12', isCorrect: false },
				{ answerText: '15', isCorrect: false },
			],
		},{
			questionText: 'Which number comes after 6?',
			answerOptions: [
				{ answerText: '11', isCorrect: false },
				{ answerText: '7', isCorrect: true },
				{ answerText: '12', isCorrect: false },
				{ answerText: '15', isCorrect: false },
			],
		},{
			questionText: 'How many colors are there in a rainbow?',
			answerOptions: [
				{ answerText: '7', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '1', isCorrect: true },
				{ answerText: '5', isCorrect: false },
			],
		},{
			questionText: 'Which day comes after Friday?',
			answerOptions: [
				{ answerText: 'Monday', isCorrect: false },
				{ answerText: 'tuesday', isCorrect: false },
				{ answerText: 'sunday', isCorrect: false },
				{ answerText: 'Saturday', isCorrect: true },
			],
		},{
			questionText: 'We use our eyes to — see, hear, feel, eat?',
			answerOptions: [
				{ answerText: 'See', isCorrect: true },
				{ answerText: 'Hear', isCorrect: false },
				{ answerText: 'feel', isCorrect: false},
				{ answerText: 'eat', isCorrect: false },
			],
		},{
			questionText: ' What is 5+3?',
			answerOptions: [
				{ answerText: '11', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '8', isCorrect: true },
				{ answerText: '15', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];
   
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='navbar'>
        <Header />
		<div className='appq'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
                            <div className='but'>
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                            </div>
						))}
					</div>
				</>
			)}
		</div>
		</div>

	);
 
}
