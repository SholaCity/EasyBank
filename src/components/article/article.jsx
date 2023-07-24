import React from 'react'
import '../feature/feature.css'
import './article.css'
import Content from './articlecontent'


const Article = () => {

    const ArticleCards = (props) => {
      return (
            <div className='eazi__article-container_item' key={props.id}>
              <img src={props.img}/>
              <div className='eazi__article-container_item-text'>
                  <p className='p__text'>{props.name}</p>
                  <h3>{props.title}</h3>
                  <p className='p__text'>{props.description}</p>
              </div>
            </div>  )
    }
    
    
  
  const CreateCards = (Content)=>{
    return <ArticleCards
        key= {Content.id}
        img={Content.img}
        title= {Content.title}
        name= {Content.name}
        description={Content.description}
    />
  }


  return (
    <div className='eazi__article section__padding'>
      <div className='eazi__article-header'>
        <h2>Latest Articles</h2>
      </div>
      <div className='eazi__article-container'>
        {Content.map(CreateCards)}
      </div>
    </div>  )
}

export default Article

