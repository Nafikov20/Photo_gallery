import { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import './location-photo.css';
// const TOKEN = 'pk.eyJ1IjoibmFmaWtvdmlpIiwiYSI6ImNsajhiemhkYTBncTQzbXMzZm1kYnV4dzMifQ.EAkjkcxwd2zNP67t3YWY8w';
const TOKEN = 'kcxwd2zNP67t3YWY8w';
interface ViewportProps {
  width: number | string;
  height: number | string;
  latitude: number;
  longitude: number;
  zoom: number;
}
export const Map = () => {
  const initialViewport: ViewportProps = {
    width: '100%',
    height: '100%',
    latitude: 55.78874, // Replace with your desired initial latitude
    longitude: 49.12214, // Replace with your desired initial longitude
    zoom: 10, // Replace with your desired initial zoom level
  };
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className=' h-[50%] w-[50%]  shadow-[0px_22px_70px_4px_rgba(0,0,0,0.56)] shadow-blue-500/50'>
        <ReactMapGL
          {...initialViewport}
          mapboxAccessToken={TOKEN}
          mapStyle='mapbox://styles/nafikovii/clj8iuy8o008z01qzh66f6v00'
        />
      </div>
    </div>
  );
};
