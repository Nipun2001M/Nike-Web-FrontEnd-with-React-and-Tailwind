import React from 'react';
import './index.css'
import Hero from './sections/Hero';
import PopulerProducts from './sections/PopulerProducts';
import SuperQulity from './sections/SuperQulity';
import Services from './sections/Services';
import SpecialOffer from './sections/SpecialOffer';
import CustomerReveiwed from './sections/CustomerReveiwed';
import Subscribe from './sections/Subscribe';
import Footer from './sections/Footer';
import Nav from './Components/Nav';


const App = () => {
  return (
  <main className='realative'>
    <Nav/>
<section className='xl:padding-l wide:padding-r padding-b'>
<Hero/>
</section>

<section className='padding'>
  <PopulerProducts/>

</section>
<section className='padding'>
  <SuperQulity/>

</section>
<section className='padding-x py-10'>
    <Services/>
    
</section>
<section className='padding'>
    <SpecialOffer/>
</section>
<section className='padding bg-pale-blue'>

    <CustomerReveiwed/>
</section>
<section className='padding-x sm:py-32  py-16 '>
  <Subscribe/>

</section>
<section className='bg-black padding-x padding-t pb-8'>
 <Footer/>
</section>


  </main>
  );
};

export default App;
