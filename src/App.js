import React from 'react';
import Kursus from './state/state';
import Materi from './props/prop';
import './props/style.css';


function App() {
  return (
    <div className="wrapperapp">
      <Kursus/>
      <p>contoh state </p>
      <hr/>
      <center>
      <Materi img={require('./props/Capture1.PNG')} des="belajar seo" harga="Rp.120000"/>
      <Materi img={require('./props/Capture2.PNG')} des="belajar google adword" harga="Rp.400000"/>
      <Materi img={require('./props/Capture1.PNG')} des="belajar react js" harga="Rp.50000"/>
      </center>    
    </div>
  );
}

export default App;