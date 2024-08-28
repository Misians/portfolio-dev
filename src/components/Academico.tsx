import React from 'react';
import { useLanguage } from '../LanguageContext';

export const Academico: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className='info-acad'>
      <h3>{language === 'en' ? 'Projects' : 'Projetos'}</h3>
      
      <div className="formacao">
        <div className="ano"><h5>Gelato On Ice</h5></div>
        <h4>●</h4>
        <p>
          {language === 'en' ? 'Online ice cream shop for selling ice cream, e-commerce.' : 'Sorveteria online para venda de sorvetes, e-commerce.'}
        </p>
      </div>

      <div className="formacao">
        <div className="ano"><h5>NanaBaby</h5></div>
        <h4>●</h4>
        <p>
          {language === 'en' ? 'E-commerce for selling children\'s and baby products.' : 'E-commerce de venda de artigos para crianças e nenês.'}
        </p>
      </div>
      
      <div className="formacao">
        <div className="ano"><h5>Future-Fox</h5></div>
        <h4>●</h4>
        <p>
          {language === 'en' ? 'Cryptocurrency listing site with the ability to add currencies to the list.' : 'Site de listagem de criptomoedas e adicionar moedas na listagem.'}
        </p>
      </div>

      <div className="formacao">
        <div className="ano"><h5>Web Scraping Linkedin</h5></div>
        <h4>●</h4>
        <p>
          {language === 'en' ? 'A scraper for job vacancies on LinkedIn, transforming data into CSV format.' : 'Um scraper de vagas de emprego do LinkedIn transformando em CSV.'}
        </p>
      </div>
      
      <div className="formacao">
        <div className="ano"><h5>FinanceiroPHP</h5></div>
        <h4>●</h4>
        <p>
          {language === 'en' ? 'A site for managing vendors, clients, and payments.' : 'Um site para controle de vendedores, clientes e pagamentos.'}
        </p>
      </div>
      
      <div className="formacao">
        <div className="ano"><h5>Yodadex</h5></div>
        <h4>●</h4>
        <p>
          {language === 'en' ? 'Binance platform for the Jedals cryptocurrency.' : 'Plataforma Binance da moeda Jedals.'}
        </p>
      </div>

      <div className="formacao">
        <div className="ano"><h5>Maxxi buscas veiculares</h5></div>
        <h4>●</h4>
        <p>
          {language === 'en' ? 'A platform for vehicle searches and PDF generation based on vehicle license plates and chassis numbers, client reserved project.' : 'Uma plataforma de buscas e geração de PDF baseado na placa e chassi dos veículos, projeto reservado do cliente.'}
        </p>
      </div>
    </div>
  );
}
