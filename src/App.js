import React from 'react'
import './App.css'
import Carousel from './components/Carousel';
import Swimlane from './components/Swimlane';
import { banners, sections , cards } from './JsonData';

export default function App() {
  return (
  <div id='root'>
    <Carousel banners={banners} />

    <div id='section'>
    {sections.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <Swimlane cards={cards} />
        </div>
      ))}
    </div>

  </div>
  )
}



