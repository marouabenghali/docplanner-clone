import React from 'react';
//import js
import Navmenu from './Navmenu';
import Paragraphe from './Paragraphe.js'
import Country from './Country.js'
import Company from './Company.js'
import Bloc from './Bloc.js'
//import css
import './App.css';
 //import Image
 import Logo from './images/logo.png';

 import Star from './images/star.png';
 import Doctors from './images/Icons/doctors.png';
 import Flag from './images/Icons/flag.png';
 import Patients from './images/Icons/patients.png';
 import Visits from './images/Icons/visits.png';
 
 import {menu,para,blocountry,menucompany,patidoc} from './data.js'
 

//Import JS

function App() {
  return (
    <div className="App">
      <div className='menuPrin'>
          <img className='imglogo' src={Logo} alt='logo'/>
          <Navmenu tomate={menu} />
      </div>
        <div>
           <img className='imgstar' src={Star} alt='star'/>
           <h1 className='title'>Making the healthcare experience more human</h1>
           <Paragraphe textepara={para} />
        </div>
        <Bloc tom={patidoc} />
        <div className='globalcompany'>
          <p className='globaltext' >We are a global<br/> company <br/>with local culture </p>
          <Company complink={menucompany} />
        </div>

        <div className="blocbleu">
                <div className="blocbleu-texte">
                        <h2 className='world'>The world's <br/> biggest healthcare platform</h2>
                        <p className='sworld' > We work from 6 offices all over the world, bringing Docplanner <br/> Group to life in almost 20 countries.</p>
                        <img className="etoileimage" src={Star}/>
                </div>
                <div className="leader1et2">
                    <div className="leader" >
                        <img className='imageleader' scr={Flag}   srcset="https://www.docplanner.com/img/flag.png 1x, https://www.docplanner.com/img/flag@2x.png 2x" />
                        <p className="texteleader"> Leader in <br/> 10 countries</p>
                        <p className="stexteleader"> Poland, Turkey, Spain, Italy, <br/> Czech Republic, Mexico, Brazil,<br/> Colombia, Argentina and Chile</p>
                    </div>
                    <div className="visitus">
                            <img className="imageleader" scr={Patients} srcset="https://www.docplanner.com/img/patients.png 1x, https://www.docplanner.com/img/patients@2x.png 2x" />
                            <p className="texteleader">30 million unique <br/> patients</p>
                            <p className="stexteleader">visit us every month</p>
                    </div>

                   
                </div>
                <div className="leader3et4">
                                     
                    <div className="appointments">
                         <img className="imageleader" scr={Visits} srcset="https://www.docplanner.com/img/visits.png 1x, https://www.docplanner.com/img/visits@2x.png 2x" />
                        <p className="texteleader">1.5 million <br/> appointments</p>
                        <p className="stexteleader">booked last month</p>
                    </div>
                    <div className="trustin">
                            <img className="imageleader" scr={Doctors} srcset="https://www.docplanner.com/img/doctors.png 1x, https://www.docplanner.com/img/doctors@2x.png 2x" />
                            <p className="texteleader">2 million active<br/> doctors</p>
                            <p className="stexteleader">trust in our solutions</p>
                    </div>
                </div>
            </div>


        <div className="change">
                        <h1 className="changetitre">Improve the lives of millions.<br/> Change yours forever</h1>
                        <p className="changetexte">More than 1000 team mates share our same vision, goals and passion.<br/>
                            With offices in Warsaw, Barcelona, Istanbul, Rome, Mexico City and <br/>
                            Curitiba, our search for great talent never stops.</p>
        </div>

        <div className='box_cadres'>
          <Country countr={blocountry} />
        </div>

        <div className="textfooter">
        <p className="contryfooter">We are leaders in 10 countries: 
            <a href="https://www.znanylekarz.pl/?_ga=2.80869463.1317337784.1560781174-210685609.1560781174">Poland</a>,
            <a href="https://www.doktortakvimi.com/?_ga=2.76714453.1317337784.1560781174-210685609.1560781174">Turkey</a>,
             <a href="https://www.doctoralia.es/">Spain</a>,
             <a href="https://www.miodottore.it/?_ga=2.17865209.1317337784.1560781174-210685609.1560781174">Italy</a> ,
             <a href="https://www.znamylekar.cz/"> Czech Republic</a>,
             <a href="https://www.doctoralia.com.mx/">Mexico</a> ,
             <a href="https://www.doctoralia.co/" >Colombia</a>,
             <a href="https://www.doctoralia.com.br/">Brazil</a> , 
             <a href="https://www.doctoraliar.com/">Argentina</a> and 
             <a href="https://www.doctoralia.cl/">Chile</a></p>
        <p>This site uses cookies to deliver services in accordance with this Privacy Policy. You can specify the conditions for storing or accessing cookies on your browser.<br/> www.docplanner.com © 2019</p>
      </div>
      
    </div>
  );
}

export default App;
