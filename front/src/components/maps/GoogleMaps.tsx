import React, { Component, useState } from 'react';
import GoogleMapReact from 'google-map-react';

const GoogleMap = () => {

    const center = {
        lat: -6.77137,
        lng: -79.84088
    };

    const zoom = 15;

    const [mapState, setMapState] = useState({
      mapsApiLoaded: false,
      mapInstance: null,
      mapsapi: null,
    });

    const apiLoaded= (map : any, maps : any) => {
      setMapState({
        mapsApiLoaded: true,
        mapInstance: map,
        mapsapi: maps,
      });
    }

        return (
          // Important! Always set the container height explicitly
          <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: process ? (process.env.REACT_APP_GOOGLE_PLACES_KEY as string) : '' }}
              defaultCenter={center}
              defaultZoom={zoom}
              yesIWantToUseGoogleMapApiInternals
              onGoogleApiLoaded={({ map, maps }) => {
                apiLoaded(map, maps);
              }}
            >
              {mapState.mapsApiLoaded}
            </GoogleMapReact>
          </div>
        );
}

export default GoogleMap;