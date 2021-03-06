import React from 'react'
import { render } from "storyblok-rich-text-react-renderer"
import SbEditable from 'storyblok-react'
import DynamicComponent from "./DynamicComponent"

const Teaser = ({ blok }) => { 
  const body = blok &&
  blok.body &&
  blok.body.map(childBlok => <DynamicComponent blok={childBlok} key={childBlok._uid}/>)
  const introText = typeof blok.intro_text === 'string' ? blok.intro_text : render(blok.intro_text)
  return (
  <SbEditable content={blok} key={blok._uid}>
    <div className="bg-white-half">
      <div className="pb-6 pt-16 container mx-auto">
        <h1 className="text-6xl font-bold font-serif text-primary">{ blok.headline }</h1>
        <p className="text-gray-700 text-lg max-w-lg">{ introText }</p>
      </div>
      <div className="container mx-auto overflow-x-scroll flex w-full my-8 snap-x">
        { body }                
      </div>
    </div>
  </SbEditable>
)
}

export default Teaser
