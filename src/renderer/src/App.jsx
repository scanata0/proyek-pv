// import Versions from './components/Versions'
// import electronLogo from './assets/electron.svg'
import React, { useState } from 'react';
import { Container, Paper, Button } from '@mui/material';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Carousel from 'react-material-ui-carousel'

function App() {
   const [route, setRoute] = useState('home')
   const imgCarousel = [
      {
          src: 'https://images.tokopedia.net/img/cache/1208/NsjrJu/2024/7/22/6d79d227-67fe-497a-a904-af990882e2ee.jpg.webp?ect=4g'
      },
      {
          src: 'https://images.tokopedia.net/img/NsjrJu/2020/9/25/ea701ee6-f36b-473d-b429-4d2a1da0713d.jpg?ect=4g'
      },
      {
         src: 'https://images.tokopedia.net/img/NsjrJu/2020/9/25/b1d2ed1e-ef80-4d7a-869f-a0394f0629be.jpg?ect=4g'
     }
  ]

  return (
    <>
      <Navbar />
      <div style={{marginTop: '80px'}}>
         isi
         <Container>
            <Carousel>
               {
                  imgCarousel.map( (item, i) => <img key={i} src={item.src} style={{height: '100%'}}/> )
               }
            </Carousel>
         </Container>
      </div>
      <Footer />
    </>
  )
}

export default App

