import React from 'react';
import { useLanguage } from '../LanguageContext';
import laboratorio from './assets/IMG_1991.jpg';
import abner from './assets/IMG_2036.jpg';

const Projetos: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className='pjt-img'>
      <h3>{language === 'en' ? 'Projects' : 'Projetos'}</h3>
      
      <div className="divproj">
        <div className="projetos">
          <div className="ano2">
            <h5>{language === 'en' ? 'Maria Bonita nas Ciências - Extensão' : 'Maria Bonita nas Ciências - Extensão'}</h5>
          </div>
          <p>
            {language === 'en'
              ? 'Assist students from the public high school system in learning the fundamentals of information technology and computing.'
              : 'Auxiliar alunos da rede pública do ensino médio a aprenderem fundamentos da informática e computação.'}
          </p>
        </div>
        <div className="projetos">
          <div className="ano2">
            <h5>{language === 'en' ? 'Roboldo: Social Robot for Inclusion of Children with ASD - Pesquisa' : 'Roboldo: Robô Social para Inclusão de Crianças com TEA - Pesquisa'}</h5>
          </div>
          <p>
            {language === 'en'
              ? 'Developed a robot using the ESP32 microcontroller, capable of moving arms, making facial expressions, and communicating with children with Autism Spectrum Disorder (ASD). The robot uses artificial intelligence to generate speech and interactions, aiming to improve communication and learning for these children in the school environment.'
              : 'Desenvolvi um robô utilizando o microcontrolador ESP32, capaz de movimentar braços, fazer expressões faciais e se comunicar com crianças com Transtorno do Espectro Autista (TEA). O robô utiliza inteligência artificial para gerar falas e interações, visando melhorar a comunicação e o aprendizado dessas crianças no ambiente escolar.'}
          </p>
        </div>
        <div className="projetos">
          <div className="ano2">
            <h5>{language === 'en' ? 'Intuitive Interfaces for Mobile Robot Control - Pesquisa' : 'Interfaces Intuitivas para Controle de Robôs Móveis - Pesquisa'}</h5>
          </div>
          <p>
            {language === 'en'
              ? 'Conducted research based on the OpenBot project, which aims to simplify the implementation of mobile robotics at affordable prices. Identified that some application screens were difficult for lay users to understand. The research evaluated which interface was simpler and whether experiences with games helped users utilize the platform more efficiently.'
              : 'Realizei uma pesquisa baseada no projeto OpenBot, que visa facilitar a implementação da robótica móvel a preços acessíveis. Identificamos que algumas telas do aplicativo eram difíceis de entender para usuários leigos. A pesquisa avaliou qual interface era mais simples e se experiências com jogos ajudavam os usuários a utilizar a plataforma de forma mais eficiente.'}
          </p>
        </div>
      </div>
      
      <h3>LAR (LABORATÓRIO DE APRENDIZAGEM E ROBÓTICA)</h3>
      <div className="images">
        <img src={laboratorio} alt="" />
        <img src={abner} alt="" />
      </div>
    </div>
  );
}

export default Projetos;
