"use client";

import { useEffect, useState } from "react";

interface TypewriterEffectProps {
	words: string[];
	className?: string;
	cursorClassName?: string;
}

export const TypewriterEffect = ({
	words,
	className = "",
	cursorClassName = "",
}: TypewriterEffectProps) => {
	const [currentWordIndex, setCurrentWordIndex] = useState(0);
	const [currentText, setCurrentText] = useState("");
	const [isDeleting, setIsDeleting] = useState(false);
	const [typingSpeed, setTypingSpeed] = useState(150);

	useEffect(() => {
		const timeout = setTimeout(() => {
			const currentWord = words[currentWordIndex];

			if (isDeleting) {
				setCurrentText(
					currentWord.substring(0, currentText.length - 1)
				);
				setTypingSpeed(50); // Faster when deleting
			} else {
				setCurrentText(
					currentWord.substring(0, currentText.length + 1)
				);
				setTypingSpeed(150);
			}

			if (!isDeleting && currentText === currentWord) {
				setTimeout(() => setIsDeleting(true), 1500);
			}

			if (isDeleting && currentText === "") {
				setIsDeleting(false);
				setCurrentWordIndex(
					(prevIndex) => (prevIndex + 1) % words.length
				);
				setTypingSpeed(150);
			}
		}, typingSpeed);

		return () => clearTimeout(timeout);
	}, [currentText, currentWordIndex, isDeleting, typingSpeed, words]);

	return (
		<span className={`inline-block ${className}`}>
			{currentText}
			<span className={`animate-blink ${cursorClassName}`}>|</span>
		</span>
	);
};

export default TypewriterEffect;
