import React, { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.js';
import 'esri-leaflet-geocoder/dist/esri-leaflet-geocoder.css';
import 'esri-leaflet-geocoder/dist/esri-leaflet-geocoder.js';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { useAppContext } from '../../context/app_context';
import L, { Marker } from 'leaflet';
import * as ELG from 'esri-leaflet-geocoder';

function Location() {
    const { form_fields, updateState } = useAppContext();
    const [latitude, setLatitude] = useState(51.441767);
    const [longitude, setLongitude] = useState(5.480247);

    useEffect(() => {
        var leafletIcon = L.icon({
            iconUrl: 'img/location.png',
            shadowUrl: 'img/map-shadow.png',
            shadowAnchor: [20, -15],
            shadowSize: [40, 15],
            iconSize: [46, 46],
        });
        Marker.prototype.options.icon = leafletIcon;

        function createMap() {
            var tileLayer = new L.TileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
                attribution:
                    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
            });

            var map = new L.Map('map', {
                center: [51.441767, 5.480247],
                zoom: 12,
                layers: [tileLayer],
            });

            var marker = L.marker([51.441767, 5.470247], {
                draggable: true,
            }).addTo(map);

            marker.on('dragend', function (e) {
                document.getElementById('latitude').value = marker.getLatLng().lat;
                document.getElementById('longitude').value = marker.getLatLng().lng;
                setLatitude(marker.getLatLng().lat);
                setLongitude(marker.getLatLng().lng);
                updateState(e);
            });

            const searchControl = new ELG.Geosearch().addTo(map);

            var results = new L.LayerGroup().addTo(map);

            searchControl.on('results', function (data) {
                results.clearLayers();
                for (var i = data.results.length - 1; i >= 0; i--) {
                    results.addLayer(L.marker(data.results[i].latlng));
                }
            });
        }

        createMap();
    }, []);

    form_fields.map_latitude = latitude;
    form_fields.map_longitude = longitude;

    return (
        <div className='card rounded-lg bdr-top-start-0 bdr-top-end-0 mb-5'>
            <div className='card-body'>
                <header className='d-flex align-items-center mb-4 form-header'>
                    <div className='icon me-2'>
                        <FaMapMarkerAlt size='0.9rem' />
                    </div>
                    <h5 className='mb-0'>Location</h5>
                </header>
                <form className='needs-validation mb-4' novalidation='true'>
                    <div className='row gy-3'>
                        <div className='col-lg-6'>
                            <div className='form-floating'>
                                <input
                                    className='form-control'
                                    id='latitude'
                                    type='number'
                                    name='map_latitude'
                                    autoComplete='off'
                                    placeholder='Latitude'
                                    onInput={updateState}
                                    value={latitude}
                                    required={true}
                                />
                                <label htmlFor='latitude'>Latitude</label>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='form-floating'>
                                <input
                                    className='form-control'
                                    id='longitude'
                                    type='number'
                                    name='map_longitude'
                                    autoComplete='off'
                                    value={longitude}
                                    onInput={updateState}
                                    placeholder='Longitude'
                                    required={true}
                                />
                                <label htmlFor='longitude'>Longitude</label>
                            </div>
                        </div>
                    </div>
                </form>
                <div id='map' style={{ height: '400px' }}></div>
            </div>
        </div>
    );
}

export default Location;
