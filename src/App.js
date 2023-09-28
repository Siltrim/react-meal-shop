import About from './components/About';
import Category from './components/Category';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Recipe from './components/Recipe';

function App() {
  return (
    <BrowserRouter basename="/react-meal-shop">
      <Header />
      <main className="container content">
        <Routes>
          <Route path="/" element={<Home />} />;
          <Route path="/about" element={<About />} />;
          <Route path="/contacts" element={<Contact />} />;
          <Route path="/category/:name" element={<Category />} />;
          <Route path="/meal/:id" element={<Recipe />} />;
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
