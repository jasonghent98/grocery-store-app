// ES6
import ReactMapboxGl, { Layer, Feature, Marker } from 'react-mapbox-gl';
import {useEffect, useRef, useState} from 'react'
import 'mapbox-gl/dist/mapbox-gl.css';
const mapboxgl = require('mapbox-gl');

export default function MapRender({latitude, longitude}: {latitude: string, longitude: string}) {
    const ref = useRef(null);
    const [map, setMap] = useState(null);
    useEffect(() => {
      if (ref.current && !map) {
        mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_KEY
        const map = new mapboxgl.Map({
          container: ref.current,
          style: "mapbox://styles/mapbox/streets-v11",
          center: [0, 0],
          zoom: 1
        });
        const marker = new mapboxgl.Marker().setLngLat([longitude, latitude]).addTo(map)
        setMap(map);
      }
    }, [ref, map]);
    
    return (
    <div className='h-full'>
        <div className="map-container h-full" ref={ref} />
    </div>
    )
  }