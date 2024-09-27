import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { BrowserRouter } from 'react-router-dom'
import { Components } from './Components/Components'
import { RoutesComponents } from './Routes/Routes'
import { LoadingFullScreen } from './Components/Layout/LoadingFullScreen/LoadingFullScreen'
import './assets/css/index.min.css'
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <Suspense fallback={<LoadingFullScreen />}>
        <BrowserRouter>
          <App Route={RoutesComponents} Components={Components} />
        </BrowserRouter>
    </Suspense>
  </>
)
