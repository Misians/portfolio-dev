import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';
import Emoji from 'react-emoji-render';

const Sobre: React.FC = () => {
  const { language } = useLanguage();

  type Technology = {
    name: string;
    emoji: string;
    experience: string;
    color: string;
  };

  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const technologies: Technology[] = [
    { name: 'React', emoji: '🟦', experience: language === 'en' ? '2 years' : '2 anos', color: '#61DAFB' },
    { name: 'Node', emoji: '🌳', experience: language === 'en' ? '2 years' : '2 anos', color: '#339933' },
    { name: 'Php', emoji: '🐘', experience: language === 'en' ? '3 years' : '3 anos', color: '#4F5B93' },
    { name: 'Javascript', emoji: '🟨', experience: language === 'en' ? '3 years' : '3 anos', color: '#F7DF1E' },
    { name: 'Flutter', emoji: '📱', experience: language === 'en' ? '1 year' : '1 ano', color: '#02569B' },
    { name: 'Mysql', emoji: '🐬', experience: language === 'en' ? '3 years' : '3 anos', color: '#00758F' },
    { name: 'Vuejs', emoji: '🟩', experience: language === 'en' ? '1.5 years' : '1,5 anos', color: '#42B883' },
  ];

  const handleMouseEnter = (tech: string) => {
    setHoveredTech(tech);
  };

  const handleMouseLeave = () => {
    setHoveredTech(null);
  };



  return (
    <div>
      <div className="dividirdois">
        <div>
          <h3>{language === 'en' ? 'Technologies' : 'Tecnologias'}</h3>
          <div className="interesses">
            {technologies.map((tech, index) => (
              <div
              key={index}
              className="tech-item"
              onMouseEnter={() => handleMouseEnter(tech.name)}
              onMouseLeave={handleMouseLeave}
              
            >
              <h4 style={{
                backgroundColor: hoveredTech === tech.name ? tech.color : 'transparent', // Muda a cor de fundo quando hover
                transition: 'background-color 0.3s ease',
              }}>
                <Emoji text={tech.emoji} /> {tech.name}
              </h4>
              {hoveredTech === tech.name && (
                <div className="tooltip">
                  <p>{tech.experience}</p>
                </div>
              )}
            </div>
            ))}
          </div>
        </div>
      <div><h3>{language === 'en' ? 'Work experiences:' : 'Experiências:'}</h3>

      <div className="divproj">
        

       
  <div className="projetos">
    <div className="ano2">
      <h5>{language === 'en' ? 'STI UERN, UERN NATAL - Support Analyst Intern' : 'STI UERN, UERN NATAL - Estagiário Analista de Suporte'}</h5>
    </div>
    <p>
      {language === 'en'
        ? '● Responded to the demands and needs of the UERN-NATAL campus, developing tools to assist in demand control and intern schedules, such as timesheets and demand managers.\n Provided technical support for infrastructure and maintenance.\n Assisted in the implementation of SIGS systems.\n Fixed issues with the campus\' online tools.'
        : '● Atendendo as demandas e necessidades do campus da UERN-NATAL, foram desenvolvidas ferramentas para ajudar no controle de demandas e de horários dos estagiários, como folhas de ponto e gerenciador de demandas.\n Suporte técnico de infraestrutura e manutenção.\n Auxiliar na implementação dos sistemas SIGS.\n Corrigir problemas nas ferramentas online do campus.'}
    </p>
  </div>

  <div className="projetos">
    <div className="ano2">
      <h5>{language === 'en' ? 'Freelancer - Web and Mobile Developer' : 'Freelancer - Desenvolvedor Web e Mobile'}</h5>
    </div>
    <p>
      {language === 'en'
        ? 'NodeJS, ReactJS, Flutter, VueJs, PHP, and Typescript\n https://github.com/rscirilo/yodadex\n https://github.com/Misians/yodadex\n https://github.com/Misians/Future-Fox\n https://github.com/Misians/FinanceiroPHP'
        : 'NodeJS, ReactJS, Flutter, VueJs, PHP e Typescript\n https://github.com/rscirilo/yodadex\n https://github.com/Misians/yodadex\n https://github.com/Misians/Future-Fox\n https://github.com/Misians/FinanceiroPHP'}
    </p>
  </div>

  <div className="projetos">
    <div className="ano2">
      <h5>{language === 'en' ? 'Olá Soft App and Payment Solutions - Full-Stack Developer [11/2023 - 03/2024]' : 'Olá Soft App e Meios de Pagamento - Desenvolvedor Pleno [11/2023 - 03/2024]'}</h5>
    </div>
    <p>
      {language === 'en'
        ? '● Created and maintained company systems, both web and mobile. Developed solutions to problems in the systems.'
        : '● Criar e dar manutenção a sistemas da empresa, sendo eles web e mobile. Desenvolver soluções para problemas nos sistemas.'}
    </p>
  </div>

  <div className="projetos">
    <div className="ano2">
      <h5>{language === 'en' ? 'Maxxi Vehicle Tracking - Full-Stack Developer [03/2024 - Present]' : 'Maxxi Rastreamento Veicular - Desenvolvedor Pleno [03/2024 - Atualmente]'}</h5>
    </div>
    <p>
      {language === 'en'
        ? '● Created and maintained company systems, both web and mobile. Developed solutions to problems in the systems.'
        : '● Criar e dar manutenção a sistemas da empresa, sendo eles web e mobile. Desenvolver soluções para problemas nos sistemas.'}
    </p>
  </div> </div>
</div></div>
    </div>
  );
}

export default Sobre;
