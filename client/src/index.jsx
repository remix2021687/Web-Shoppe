import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { BrowserRouter } from 'react-router-dom'
import { Components } from './Components/Components'
import { RoutesComponents } from './Routes/Routes'
import './assets/css/index.min.css'
import 'swiper/css';
import 'swiper/css/pagination';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <StrictMode>
      <BrowserRouter>
        <App Route={RoutesComponents} Components={Components} />
      </BrowserRouter>
    </StrictMode>
  </>,
)
