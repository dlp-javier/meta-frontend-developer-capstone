import React, { useState } from 'react'

const BookingForm = () => {
    const [date, setDate] = useState("");
    const [times, setTimes] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        props.SubmitForm(e);
    }
    const handleChange = (e) => {
        setDate(e);
        props.dispatch(e);
    }


  return (
    <header>
        <section>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <div>
                        <label htmlFor='book-date'>Choose Date</label>
                        <input id='book-date' onChange={(e) => handleChange(e.target.value)} value={date} type='date' required />
                    </div>

                    {/* for time selectrion */}

                    <div>
                        <label htmlFor='book-time'>Choose Time</label>
                        <select id='book-time' value={times} onChange={(e) => setTimes(e.target.value)}>
                            <option value="">Select option</option>
                            {
                                props.availableTimes.availableTimes.map(availableTimes =>
                                {return <option key={availableTimes}>{availableTimes}</option>})
                            }

                        </select>
                    </div>

                    {/* For number of guest */}
                    <div>
                        <label htmlFor='book-guests'>Number of guests</label>
                        <input id='book-guests' min='1' value={guests} onChange={(e) => setGuests(e.target.value)} />
                    </div>

                    {/* For occasion  */}
                    <div>
                        <label htmlFor='book-occasion'>Occasion:</label>
                        <select id='book-occasion' key={occasion} value={occasion} onChange={(e) => setOccasion(e.target.value)} >
                            <option>Birthday</option>
                            <option>Aniversary</option>
                        </select>
                    </div>

                    {/* For submit button */}

                    <div className='btnReceive'>
                        <input aria-label='On Click' type='submit' value={"Make your reservation"} />

                    </div>

                </fieldset>
            </form>
        </section>
    </header>
  )
}

export default BookingForm