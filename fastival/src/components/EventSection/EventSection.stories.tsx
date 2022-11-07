/* eslint-disable */
import EventSection from "./EventSection";

import imgShow1 from "../../assets/imgShow1.jpg";
import imgShow2 from "../../assets/imgShow2.png";
import imgShow3 from "../../assets/imgShow3.jpg";

export default {
  title: "EventSection",
};

export const Default = () => (
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
);

Default.story = {
  name: "default",
};
