import { Download, Features, SectionWrapper } from "./components/index";
import assets from "./assets";
const App = () => {
  return (
    <>
      <SectionWrapper
        title="Your own store of Nifty NFTs. Start Selling & Growing"
        description="Buy, store, collect NFTs, exchange & earn erypto. Join 25+ million people using ProNef Marketplace."
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper
        title="Smart User Interface Marketplace"
        description="Experience a buttery UI of ProNef NFT MarketPlace. Smooth constant colors of a fluent UI design"
        mockupImg={assets.homeCards}
        reverse
      />
    </>
  );
};

export default App;
