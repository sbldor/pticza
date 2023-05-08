// import style from './app.module.css';
import Header from '../header/header';
// import Button from '../button/button';
import WorkSection from '../work-section/work-section';
import InfoSection from '../info-sections/info-section';
import PortfolioSection from '../portfolio-section/portfolio-section';
import RatesSection from '../rates-section/rates-section';
import PublicSection from '../public-section/public-section';
import ContactsSection from '../contacts-section/contacts-section';
import Footer from '../footer/footer';

function App() {
  return (
    <>
      <Header />
      <InfoSection />
      <WorkSection />
      <PortfolioSection />
      <RatesSection />
      <PublicSection />
      <ContactsSection />
      <Footer />
    </>
  );
}

export default App;
