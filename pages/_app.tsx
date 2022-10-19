import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {store} from '../redux/store'
import {Provider} from 'react-redux'
import GetGeolocation from '../components/wrappers/GetGeolocation'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <GetGeolocation>
        <Component {...pageProps} />
      </GetGeolocation>
    </Provider>
  )
}

export default MyApp
