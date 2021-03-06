import React from 'react'
import Teaser from './Teaser'
import Feature from './Feature'
import Grid from './Grid'
import BlogPost from './BlogPost'
import Slide from './Slide'
import Placeholder from './Placeholder'
import ArticleTeaser from './ArticleTeaser'
import FeaturedArticles from './FeaturedArticles'

const Components = {
  'teaser': Teaser,
  'grid': Grid,
  'feature': Feature,
  'blogpost': BlogPost,
  'slide': Slide,
  'article-teaser': ArticleTeaser,
  'featured-articles': FeaturedArticles
}

const DynamicComponent = ({blok}) => {
  if (typeof Components[blok.component] !== 'undefined') {
    const Component = Components[blok.component]
    return <Component blok={blok} key={blok._uid}/>
  }
  return <Placeholder componentName={blok.component}/>
}

export default DynamicComponent
