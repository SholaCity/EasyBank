import React from 'react'
import './feature.css'
import imgFone from '../../assets/icon-online.svg'
import Content from './content'


const feature = () => {

  const FeatureCards = (props) => {
    return (
          <div className='eazi__feature-container_item' key={props.id}>
            <img src={props.img}/>
            <h3>{props.title}</h3>
            <p className='p__text'>{props.description}
            </p>
          </div>  )
  }
  
  

const CreateCards = (Content)=>{
  return <FeatureCards
      key= {Content.id}
      img={Content.img}
      title= {Content.title}
      description={Content.description}
  />
}



  return (
    <div className='eazi__feature section__padding'>
      <div className='eazi__feature-header'>
        <h2>Why choose Easybank?</h2>
        <p className='p__text'>
          We leverage Open Banking to turn your bank account into your financial hub. Control 
          your finances like never before.</p>
      </div>
      <div className='eazi__feature-container'>
        {Content.map(CreateCards)}
      </div>
    </div>
  )
}

export default feature