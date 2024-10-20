import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { CookiesProvider } from 'react-cookie'
import { Components } from './Components/Components'
import { RoutesComponents } from './Routes/Routes'
import { App } from './App'
import { LoadingFullScreen } from './Components/Layout/LoadingFullScreen/LoadingFullScreen'
import './assets/css/index.min.css'
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <Suspense fallback={<LoadingFullScreen />}>
        <BrowserRouter>
          <CookiesProvider>
              <App Route={RoutesComponents} Components={Components} />
          </CookiesProvider>
        </BrowserRouter>
    </Suspense>
  </>
)
