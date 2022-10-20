// ES6
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const RenderMap = ({latitude, longitude}: {latitude: number, longitude: number}) => {
    const Map = ReactMapboxGl({
        accessToken: `${process.env.NEXT_PUBLIC_MAPBOX_KEY}`
    });

    console.log(latitude, longitude)
  return (
    <div className='bottom-28 h-full w-full'>
        <Map
            style="mapbox://styles/mapbox/streets-v9"
            containerStyle={{
            height: '100%',
            width: '100%'
            }}
        >
            <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
            <Feature coordinates={[latitude, longitude]} />
            </Layer>
        </Map>
    </div>
  )
}

export default RenderMap