import React from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Slogan from "./components/Slogan/Slogan";
import EventSwipper from "./components/EventSwipper/EventSwipper";
import EventSection from "./components/EventSection/EventSection";
import Footer from "./components/Footer/Footer";

import imgShow1 from "./assets/imgshow1.jpg";
import imgShow2 from "./assets/imgshow2.png";
import imgShow3 from "./assets/imgshow3.jpg";

import imgPal1 from "./assets/palestra1.jpg";
import imgPal2 from "./assets/palestra2.jpeg";
import imgPal3 from "./assets/palestra3.png";

import imgPas1 from "./assets/passeio1.jpg";
import imgPas2 from "./assets/passeio2.jpg";
import imgPas3 from "./assets/passeio3.jpg";

function App() {
  return (
    <div>
      <Header />
      <div className="mainDiv">
        <Slogan />
        <EventSwipper />
        <EventSection
          name="Shows e Eventos"
          img1={imgShow1}
          img2={imgShow2}
          img3={imgShow3}
          date1="Sáb 10, Dez - Dom 11, Dez"
          date2="Sáb 17, Dez - Dom 18, Dez"
          date3="Sáb 24, Dez - Dom 24, Dez"
          show1="Show Wesley Safadão"
          show2="Show Ed Sheeran"
          show3="Show Justin Bieber"
          place1="Parque Municpal - RJ"
          place2="Complexo Anhembi - SP"
          place3="Dunas de Jericoacoara - CE"
        />
        <EventSection
          name="Palestras e Congressos"
          img1={imgPal1}
          img2={imgPal2}
          img3={imgPal3}
          date1="Sáb 10, Dez - Dom 11, Dez"
          date2="Sáb 17, Dez - Dom 18, Dez"
          date3="Sáb 24, Dez - Dom 24, Dez"
          show1="Automive Business Experience"
          show2="Seminário Internacional"
          show3="BHack Conference 2022"
          place1="São Paulo Expo - RJ"
          place2="Centro Universitário Senac - SP"
          place3="Dayrell Hotel - CE"
        />
        <EventSection
          name="Passeios e Tour"
          img1={imgPas1}
          img2={imgPas2}
          img3={imgPas3}
          date1="Sáb 10, Dez - Dom 11, Dez"
          date2="Sáb 17, Dez - Dom 18, Dez"
          date3="Sáb 24, Dez - Dom 24, Dez"
          show1="Farol Santander São Paulo"
          show2="Sampa Sky"
          show3="Allianz Parque Experience"
          place1="Farol Santander - SP"
          place2="Sampa Sky - SP"
          place3="Allianz Parque - SP"
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
