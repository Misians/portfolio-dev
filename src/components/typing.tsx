import React, { useEffect, useState } from 'react';
import ImagePhoto from './iconfoto.jpeg';
const TypingEffect: React.FC = () => {
  const words = ['FRONTEND', 'BACKEND', 'FULLSTACK']; // Palavras que irão alternar
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(200); // Velocidade de digitação (ms)

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    const handleTyping = () => {
      if (isDeleting) {
        // Apagar texto letra por letra
        setDisplayText((prev) => currentWord.substring(0, prev.length - 1));
      } else {
        // Adicionar texto letra por letra
        setDisplayText((prev) => currentWord.substring(0, prev.length + 1));
      }

      // Ajusta velocidade para digitar e apagar
      setTypingSpeed(isDeleting ? 100 : 200);

      if (!isDeleting && displayText === currentWord) {
        // Pausa antes de apagar
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === '') {
        // Avança para a próxima palavra ao apagar completamente
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    const timeout = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, typingSpeed, words, currentWordIndex]);

  return (
    <div className='divide'>
      <div className="divide-esquerda">
        <img src={ImagePhoto} alt="" />
      </div>
      <div className="divide-direita">
        <h1 className="typing">
          Hy, I'm Artemisia! 
          <br></br>I'm{' '}
          <span className="gradient-text">{displayText}</span>
          <span className="cursor" style={{ borderLeft: '2px solid black', marginLeft: '2px' }} />
        </h1>

      </div>
      
    
    
    
    </div>
  );
};

export default TypingEffect;
