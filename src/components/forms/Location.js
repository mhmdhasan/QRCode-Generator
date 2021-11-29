import React, { useEffect } from 'react';
import 'leaflet/dist/leaflet.js';
import 'esri-leaflet-geocoder/dist/esri-leaflet-geocoder.css';
import 'esri-leaflet-geocoder/dist/esri-leaflet-geocoder.js';
import { createMap } from '../../utils/helpers';
import { FaMapMarkerAlt } from 'react-icons/fa';

function Location() {
    useEffect(() => {
        createMap();
    }, []);

    return (
        <div className='card pt-4 mb-5'>
            <div className='card-body'>
                <header className='d-flex align-items-center mb-4 form-header'>
                    <div className='icon me-2'>
                        <FaMapMarkerAlt size='0.9rem' />
                    </div>
                    <h5 className='mb-0'>Location</h5>
                </header>
                <form className='mb-4'>
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
                                    placeholder='Longitude'
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
