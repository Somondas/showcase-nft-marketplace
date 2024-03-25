import { Download, Features, SectionWrapper } from "./components";
import assets from "./assets";
const App = () => {
  return (
    <>
      <SectionWrapper
        title="Your own store of Nifty NFTs. Start Selling & Growing"
        description="Buy, store, collect NFTs, exchange & earn erypto. Join 25+ million people using ProNef Marketplace."
        showBtn
        mockupImg={assets.homeCards}
        banner="banner"
      />
    </>
  );
};

export default App;
