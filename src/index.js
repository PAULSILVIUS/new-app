import React from 'react'
import ReactDom from 'react-dom/client'

import './index.css'

const AlbumList = () => {
  return (
    <section className="albumList">
      <Album />
      <Album />
      <Album />
      <Album />
    </section>
  )
}

const Album = () => {
  return (
    <article className="album">
      <Image />
      <Title />
      <Artist />
    </article>
  )
}

const Image = () => (
  <img
    src="https://content.discogs.com/media/Lana-Del-Rey-%E2%80%93-Did-You-Know-That-Theres-A-Tunnel-Under-Ocean-Blvd.jpeg"
    alt="Did You Know That There’s A Tunnel..."
  />
)

const Title = () => <h2>Did You Know That There's A Tunnel Under Ocean Blvd</h2>
const Artist = () => {
  const inLineHeadingStyles = {
    color: '#617d98',
    fontSize: '0.75rem',
    marginTop: '0.5rem',
  }
  return <h4 style={inLineHeadingStyles}>Lana Del Rey</h4>;
};

const root = ReactDom.createRoot(document.getElementById('root'))

root.render(<AlbumList />)
