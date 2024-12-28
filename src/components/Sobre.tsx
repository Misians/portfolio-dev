import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';
import reactImage from '../components/assets/icons/react.png';
import jsImage from '../components/assets/icons/js.png';
import nodejsImage from '../components/assets/icons/nodejs.png';
import phpImage from '../components/assets/icons/php.png';
import typescriptImage from '../components/assets/icons/typescript.png';
import adobeXDImage from '../components/assets/icons/adobe-xd.png';
import arduinoImage from '../components/assets/icons/arduino.png';
import bloggerImage from '../components/assets/icons/blogger.png';
import canvaImage from '../components/assets/icons/canva.png';
import chakraUIImage from '../components/assets/icons/chakra-ui.png';
import cssImage from '../components/assets/icons/css.png';
import djangoImage from '../components/assets/icons/django.png';
import dockerImage from '../components/assets/icons/docker.png';
import expoImage from '../components/assets/icons/expo.png';
import figmaImage from '../components/assets/icons/figma.png';
import firebaseImage from '../components/assets/icons/firebase.png';
import flutterImage from '../components/assets/icons/flutter.png';
import gitImage from '../components/assets/icons/git.png';
import githubImage from '../components/assets/icons/github.png';
import htmlImage from '../components/assets/icons/html.png';
import jwtImage from '../components/assets/icons/jwt.png';
import mysqlImage from '../components/assets/icons/mysql.png';
import npmImage from '../components/assets/icons/npm.png';
import photoshopImage from '../components/assets/icons/photoshop.png';
import postgresImage from '../components/assets/icons/postgres.png';
import prismaImage from '../components/assets/icons/prisma.png';
import sqliteImage from '../components/assets/icons/sqlite.png';
import trelloImage from '../components/assets/icons/trello.png';
import viteImage from '../components/assets/icons/vite.png';
import vueImage from '../components/assets/icons/vue.png';
import windowsImage from '../components/assets/icons/windows.png';
import ZorinOsImage from '../components/assets/icons/zorinos.png';
import ubuntuImage from '../components/assets/icons/ubuntu.png';

import gelatoOnIce from './assets/prints/6.jpeg';
import nanababy from './assets/prints/9.jpeg';
import telaPadraoLogin from './assets/prints/asdasdas.jpeg';
import LoginMaxxi from './assets/prints/3.jpeg';
import planilhaMaxxi from './assets/prints/4.jpeg';
import IrSolar from './assets/prints/8.jpeg';

import TypingEffect from './typing';
import FotoLogin from './iconfoto.jpeg'

const Sobre: React.FC = () => {
  const { language } = useLanguage();

  type Technology = {
    name: string;
    imagem: string;
    experience: string;
    color: string;
  };

  const [hoveredTech, setHoveredTech] = useState<string | null>(null);


  const handleMouseEnter = (tech: string) => {
    setHoveredTech(tech);
  };

  const handleMouseLeave = () => {
    setHoveredTech(null);
  };

  const technologies = {
    languages: [
      { name: 'JavaScript', imagem: jsImage, experience: language === 'en' ? '3 years' : '3 anos', color: '#F7DF1E' },
      { name: 'TypeScript', imagem: typescriptImage, experience: language === 'en' ? '2 years' : '2 anos', color: '#007ACC' },
      { name: 'PHP', imagem: phpImage, experience: language === 'en' ? '3 years' : '3 anos', color: '#4F5B93' },
      { name: 'HTML', imagem: htmlImage, experience: language === 'en' ? '3 years' : '3 anos', color: '#E34F26' },
      { name: 'CSS', imagem: cssImage, experience: language === 'en' ? '3 years' : '3 anos', color: '#2965F1' },
    ],
    frameworks: [
      { name: 'React', imagem: reactImage, experience: language === 'en' ? '2 years' : '2 anos', color: '#61DAFB' },
      { name: 'Node.js', imagem: nodejsImage, experience: language === 'en' ? '2 years' : '2 anos', color: '#339933' },
      { name: 'Django', imagem: djangoImage, experience: language === 'en' ? '1 year' : '1 ano', color: '#092E20' },
      { name: 'Flutter', imagem: flutterImage, experience: language === 'en' ? '1 year' : '1 ano', color: '#02569B' },
      { name: 'Vue.js', imagem: vueImage, experience: language === 'en' ? '1 year' : '1 ano', color: '#42B883' },
      { name: 'Chakra UI', imagem: chakraUIImage, experience: language === 'en' ? '1 year' : '1 ano', color: '#319795' },
      { name: 'Expo', imagem: expoImage, experience: language === 'en' ? '1 year' : '1 ano', color: '#000020' },
      { name: 'Vite', imagem: viteImage, experience: language === 'en' ? '1 year' : '1 ano', color: '#646CFF' },
    ],
    databases: [
      { name: 'MySQL', imagem: mysqlImage, experience: language === 'en' ? '3 years' : '3 anos', color: '#4479A1' },
      { name: 'Postgres', imagem: postgresImage, experience: language === 'en' ? '2 years' : '2 anos', color: '#336791' },
      { name: 'SQLite', imagem: sqliteImage, experience: language === 'en' ? '1 year' : '1 ano', color: '#003B57' },
      { name: 'Firebase', imagem: firebaseImage, experience: language === 'en' ? '1 year' : '1 ano', color: '#FFCA28' },
      { name: 'Prisma', imagem: prismaImage, experience: language === 'en' ? '1 year' : '1 ano', color: '#2D3748' },
    ],
    tools: [
      { name: 'Git', imagem: gitImage, experience: language === 'en' ? '3 years' : '3 anos', color: '#F05032' },
      { name: 'GitHub', imagem: githubImage, experience: language === 'en' ? '3 years' : '3 anos', color: '#181717' },
      { name: 'Docker', imagem: dockerImage, experience: language === 'en' ? '1 year' : '1 ano', color: '#2496ED' },
      { name: 'Figma', imagem: figmaImage, experience: language === 'en' ? '2 years' : '2 anos', color: '#F24E1E' },
      { name: 'Adobe XD', imagem: adobeXDImage, experience: language === 'en' ? '1 year' : '1 ano', color: '#FF61F6' },
      { name: 'Photoshop', imagem: photoshopImage, experience: language === 'en' ? '2 years' : '2 anos', color: '#31A8FF' },
      { name: 'Trello', imagem: trelloImage, experience: language === 'en' ? '2 years' : '2 anos', color: '#0079BF' },
      { name: 'Canva', imagem: canvaImage, experience: language === 'en' ? '2 years' : '2 anos', color: '#00C4CC' },
      { name: 'Blogger', imagem: bloggerImage, experience: language === 'en' ? '1 year' : '1 ano', color: '#FF5722' },
      { name: 'JWT', imagem: jwtImage, experience: language === 'en' ? '1 year' : '1 ano', color: '#000000' },
      { name: 'NPM', imagem: npmImage, experience: language === 'en' ? '3 years' : '3 anos', color: '#CB3837' },
      { name: 'Arduino', imagem: arduinoImage, experience: language === 'en' ? '1 year' : '1 ano', color: '#00979D' },
    ],
    operatingSystems: [
      { name: 'Windows', imagem: windowsImage, experience: language === 'en' ? '3 years' : '3 anos', color: '#0078D6' },
      { name: 'Ubuntu', imagem: ubuntuImage, experience: language === 'en' ? '3 years' : '3 anos', color: '#FF4500' },
      { name: 'Zorin', imagem: ZorinOsImage, experience: language === 'en' ? '3 years' : '3 anos', color: '#0078D6' },

    ],
  };
  const renderTechCategory = (categoryName: string, techList: Technology[]) => (
    
    
    <div>  
    <div className='alinhar'>
    <h4 className='categoryname'>{categoryName}</h4>  
    

    
      <div className="tech-grid">
        {techList.map((tech, index) => (
          <div
            key={index}
            className="tech-card"
            onMouseEnter={() => handleMouseEnter(tech.name)}
            onMouseLeave={handleMouseLeave}
            style={{
              backgroundColor: hoveredTech === tech.name ? tech.color : '#f9f9f9',
              transition: 'background-color 0.3s ease',
            }}
          >
            <img 
              src={tech.imagem} 
              alt={tech.name} 
              className="tech-emoji"
              style={{ width: '25px', height: '25px' }}
            />
            <div className="tech-name">{tech.name}</div>
            {hoveredTech === tech.name && (
              <div className="tooltip">
                <p>{tech.experience}</p>
              </div>
            )}
          </div>
        ))}
      </div></div>
    </div>
  );

  return (
    <div className='div-sobre'>
        <TypingEffect/>
      
      
      <div className="dividirdois">
        <div className='maior'>
          {renderTechCategory(language === 'en' ? 'Languages' : 'Linguagens', technologies.languages)}
          {renderTechCategory(language === 'en' ? 'Frameworks' : 'Frameworks', technologies.frameworks)}
          {renderTechCategory(language === 'en' ? 'Databases' : 'Bancos de Dados', technologies.databases)}
          {renderTechCategory(language === 'en' ? 'Tools' : 'Ferramentas', technologies.tools)}
          {renderTechCategory(language === 'en' ? 'Operating Systems' : 'Sistemas Operacionais', technologies.operatingSystems)}
        </div>
      
      
      <div>
        
        
       {/*  <h3>{language === 'en' ? 'Projects:' : 'Projetos:'}</h3>

      <div className="divproj">
        

       
  <div className="projetos"> 
    <img src={gelatoOnIce} alt="gelato is nice" />
    <div className="ano2">
      <h5>{language === 'en' ? 'Gelato On Ice' : 'Gelato On Ice'}</h5>
    </div>
    
  </div>
  <div className="projetos">
    <img src={IrSolar} alt="IR Solar" />
    <div className="ano2">
      <h5>{language === 'en' ? 'IR Solar' : 'IR Solar'}</h5>
    </div>
    
  </div><div className="projetos">
    <img src={LoginMaxxi} alt="Tela de Login Maxxi " />
    <div className="ano2">
      <h5>{language === 'en' ? 'Login Screen Maxxi' : 'Tela de login MAXXI'}</h5>
    </div>
    
  </div><div className="projetos">
    <img src={planilhaMaxxi} alt="MAXXI" />
    <div className="ano2">
      <h5>{language === 'en' ? 'MAXXI' : 'MAXXI'}</h5>
    </div>
    
  </div><div className="projetos">
    <img src={nanababy} alt="nanababy" />
    <div className="ano2">
      <h5>{language === 'en' ? 'Nanababy' : 'Nanababy'}</h5>
    </div>
    
  </div>
  <div className="projetos">
    <img src={telaPadraoLogin} alt="nanababy" />
    <div className="ano2">
      <h5>{language === 'en' ? 'Login Screen' : 'Tela de login padronizada'}</h5>
    </div>
  </div>


   </div>*/}
</div></div>
    </div>
  );
}

export default Sobre;
