import {
  GoogleMap, Marker, withGoogleMap, withScriptjs,
} from 'react-google-maps';

export default function HomeUtility() {
  const MyMap = withScriptjs(withGoogleMap((props) => (
    <GoogleMap
      defaultZoom={8}
      center={{ lat: -6.8752827, lng: 109.0457387 }}
      zoom={15}
      options={{
        zoomControl: false,
        draggable: false,
        clickableIcons: false,
        disableDoubleClickZoom: true,
        fullscreenControl: false,
      }}
    >
      {props.children}
    </GoogleMap>
  )));
  return (
    <div className="row">
      <div className="col-sm-8 my-2">
        <h2 className="fw-bold">Lokasi Maps</h2>
        <h6 className="color-palette-2">Satlantas Polres Brebes</h6>
        <div className="row mt-4">
          <MyMap
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDedruBgccZ-c95jD_fT3vIHK0mXrO4Nzo"
            loadingElement={<div style={{ height: '100%' }} />}
            containerElement={<div style={{ height: '341px' }} />}
            mapElement={<div className="rounded-news overflow-hidden" style={{ height: '100%' }} />}
          >
            <Marker
              position={{ lat: -6.8752917, lng: 109.0458647 }}
              title="Satlantas Polres Brebes"
            />
          </MyMap>
        </div>
      </div>
      <div className="col-sm-4 my-2">
        <div className="card background-color-phone rounded-news w-100 h-100">
          <div className="card-body">
            <h2 className="fw-bold color-palette-6">Visitor</h2>
            <p className="text-sm color-palette-6">Website</p>
          </div>
        </div>
      </div>
    </div>
  );
}
