// import style from './app.module.css';
import Header from '../header/header';
// import Button from '../button/button';
import WorkSection from '../work-section/work-section';
import InfoSection from '../info-sections/info-section';
import PortfolioSection from '../portfolio-section/portfolio-section';
import RatesSection from '../rates-section/rates-section';

function App() {
  return (
    <>
      <Header />
      <InfoSection />
      <WorkSection />
      <PortfolioSection />
      <RatesSection />
    </>
  );
}

export default App;
