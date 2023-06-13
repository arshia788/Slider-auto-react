import React, { useState } from 'react'
import people from './data'

import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";


function App() {

  const [item, setItem]= useState(people);
  const [index, setIndex]= useState(0);

  return (
    <div className='container'>
        <h2 className='title'> 
          <span>our customers voices</span>
        </h2>
        
        <div className='section'>
          {
            item.map((person , personIndex)=>{

              let position= 'nextSlide';

              if(personIndex === index){
                position= 'activeSlide'
              }

              if(personIndex === index -1){
                position= 'lastSlide'
              }
              return(
                <article className={position}>
                  <img src={person.image} alt='person'/>
                  <div className='info'>
                    <p className='name'>{person.name}</p>
                    <p className='job'>{person.title}</p>
                    <p className='qoute'>{person.qoute}</p>
                  </div>
                </article>
              )
            })
          }

          <div className='holder-btn'>  

              <button>
                <FaArrowAltCircleLeft onClick={()=> setIndex(index -1)}/>
              </button>

              <button>
                <FaArrowAltCircleRight onClick={()=> setIndex(index + 1)}/>
              </button>
          </div>
        </div>

    </div>
    
  )
}

export default App