import React from 'react'
import CardComponent from './components/CardComponent'
import Categories from './components/Categories'
import FoodSection from './components/FoodSection'
import Hero from './components/Hero'
import Navbar from './components/Navbar'



function App() {
  return (
    <div className="App">
       <Navbar />
      <Hero />
      <CardComponent />
          <FoodSection />
      <Categories />
    </div>
  );
};

      export default App 
