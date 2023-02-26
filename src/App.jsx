import { useState, useEffect } from 'react';
import Copied from './Copied';
import Dark from './Dark';
import Footer from './Footer';
import Header from './Header';
import Light from './Light';
import Random from './Random';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Specific from './Specific';
import ReactLoading from 'react-loading';
import Theme from './Theme';

function App() {
  const [c, setC] = useState(false);

  const copied = () => {
    setC(true);
    setTimeout(() => {
      setC(false);
    }, 1500);
  };
  useEffect(() => {
    if (localStorage.getItem('t') === 'd') {
      document.documentElement.classList.add('dark');
    }
  }, []);
  return (
    <>
      <Header />
      <Theme />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Random copied={copied} />
                <Light copied={copied} />
                <Dark copied={copied} />
              </>
            }
          />
          <Route path="/color" element={<Specific copied={copied} />} />
          <Route
            path="*"
            element={
              <h1 className="font-extrabold font-VarelaRound text-3xl m-[10vh]">
                Page not Found
              </h1>
            }
          />
        </Routes>
      </BrowserRouter>
      {c ? <Copied /> : null}
      <Footer />
    </>
  );
}

export default App;
