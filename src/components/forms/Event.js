import React from 'react';
import { AiTwotoneCalendar } from 'react-icons/ai';
import { useAppContext } from '../../context/app_context';

function Event() {
    const { updateState, form_fields } = useAppContext();
    const { event_title, event_location, event_start_time, event_end_time, event_reminder, event_link, event_notes } =
        form_fields;

    return (
        <div className='card rounded-lg bdr-top-start-0 bdr-top-end-0 mb-5'>
            <div className='card-body'>
                <header className='d-flex align-items-center mb-4 form-header'>
                    <div className='icon me-2'>
                        <AiTwotoneCalendar size='0.9rem' />
                    </div>
                    <h5 className='mb-0'>Event</h5>
                </header>

                <form className='mb-4'>
                    <div className='row gy-3'>
                        <div className='col-lg-6'>
                            <div className='form-floating'>
                                <input
                                    className='form-control'
                                    id='eventTitle'
                                    type='text'
                                    name='event_title'
                                    autoComplete='off'
                                    placeholder='Event Title'
                                    value={event_title}
                                    onChange={updateState}
                                />
                                <label htmlFor='eventTitle'>Event Title</label>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='form-floating'>
                                <input
                                    className='form-control'
                                    id='eventLocation'
                                    type='text'
                                    name='event_location'
                                    autoComplete='off'
                                    placeholder='Location'
                                    value={event_location}
                                    onChange={updateState}
                                />
                                <label htmlFor='eventLocation'>Location</label>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='form-floating'>
                                <input
                                    className='form-control'
                                    id='eventStartTime'
                                    type='date'
                                    name='event_start_time'
                                    autoComplete='off'
                                    placeholder='Start Time'
                                    value={event_start_time}
                                    onChange={updateState}
                                />
                                <label htmlFor='eventStartTime'>Start Time</label>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='form-floating'>
                                <input
                                    className='form-control'
                                    id='eventEndTime'
                                    type='date'
                                    name='event_end_time'
                                    autoComplete='off'
                                    placeholder='End Time'
                                    value={event_end_time}
                                    onChange={updateState}
                                />
                                <label htmlFor='eventEndTime'>End Time</label>
                            </div>
                        </div>

                        <div className='col-lg-12'>
                            <div className='form-floating'>
                                <select
                                    className='form-select'
                                    id='eventReminder'
                                    name='event_reminder'
                                    autoComplete='off'
                                    placeholder='Reminder before event'
                                    value={event_reminder}
                                    onChange={updateState}
                                >
                                    <option value='PT0M'>When the event starts</option>
                                    <option value='-PT5M'>5 minutes</option>
                                    <option value='-PT10M'>10 minutes</option>
                                    <option value='-PT15M'>15 minutes</option>
                                    <option value='-PT30M'>30 minutes</option>
                                    <option value='-PT1H'>1 hour</option>
                                    <option value='-PT2H'>2 hours</option>
                                    <option value='-PT3H'>3 hours</option>
                                    <option value='-PT4H'>4 hours</option>
                                    <option value='-PT5H'>5 hours</option>
                                    <option value='-PT6H'>6 hours</option>
                                    <option value='-PT12H'>12 hours</option>
                                    <option value='-PT24H'>24 hours</option>
                                    <option value='-PT48H'>48 hours</option>
                                    <option value='-PT168H'>1 week</option>
                                </select>
                                <label htmlFor='eventReminder'>Reminder before event</label>
                            </div>
                        </div>

                        <div className='col-lg-12'>
                            <div className='form-floating'>
                                <input
                                    className='form-control'
                                    id='eventLink'
                                    type='text'
                                    name='event_link'
                                    autoComplete='off'
                                    placeholder='Link'
                                    value={event_link}
                                    onChange={updateState}
                                />
                                <label htmlFor='eventLink'>Link</label>
                            </div>
                        </div>

                        <div className='col-lg-12'>
                            <div className='form-floating'>
                                <textarea
                                    className='form-control'
                                    id='eventNotes'
                                    name='event_notes'
                                    autoComplete='off'
                                    placeholder='Notes'
                                    value={event_notes}
                                    onChange={updateState}
                                ></textarea>
                                <label htmlFor='eventNotes'>Notes</label>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Event;
