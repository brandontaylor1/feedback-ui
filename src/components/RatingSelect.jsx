import { useState } from 'react';
import React from "react";

const RatingSelect = ({select}) => {
    const [selected, setSelected] = useState(0)

    const handleChange = (e) => {
        setSelected(parseInt(e.currentTarget.value))  
        select(parseInt(e.currentTarget.value));
    }


    return (
        <ul className='rating'>
            <li>
                <input
                    type='radio'
                    id='rating-1'
                    name='rating'
                    value='1'
                    onChange={handleChange}
                    checked={selected === 1} />
                <label htmlFor='rating-1'>1</label>
            </li>
            <li>
                <input
                    type='radio'
                    id='rating-2'
                    name='rating'
                    value='2'
                    onChange={handleChange}
                    checked={selected === 2} />
                <label htmlFor='rating-2'>2</label>
            </li>
            <li>
                <input
                    type='radio'
                    id='rating-3'
                    name='rating'
                    value='3'
                    onChange={handleChange}
                    checked={selected === 3} />
                <label htmlFor='rating-3'>3</label>
            </li>
            <li>
                <input
                    type='radio'
                    id='rating-4'
                    name='rating'
                    value='4'
                    onChange={handleChange}
                    checked={selected === 4} />
                <label htmlFor='rating-4'>4</label>
            </li>
            <li>
                <input
                    type='radio'
                    id='rating-5'
                    name='rating'
                    value='5'
                    onChange={handleChange}
                    checked={selected === 1} />
                <label htmlFor='rating-5'>5</label>
            </li>
            <li>
                <input
                    type='radio'
                    id='rating-6'
                    name='rating'
                    value='6'
                    onChange={handleChange}
                    checked={selected === 6} />
                <label htmlFor='rating-6'>6</label>
            </li>
            <li>
                <input
                    type='radio'
                    id='rating-7'
                    name='rating'
                    value='7'
                    onChange={handleChange}
                    checked={selected === 7} />
                <label htmlFor='rating-7'>7</label>
            </li>
            <li>
                <input
                    type='radio'
                    id='rating-8'
                    name='rating'
                    value='8'
                    onChange={handleChange}
                    checked={selected === 8} />
                <label htmlFor='rating-8'>8</label>
            </li>
            <li>
                <input
                    type='radio'
                    id='rating-9'
                    name='rating'
                    value='9'
                    onChange={handleChange}
                    checked={selected === 9} />
                <label htmlFor='rating-9'>9</label>
            </li>
            <li>
                <input
                    type='radio'
                    id='rating-10'
                    name='rating'
                    value='10'
                    onChange={handleChange}
                    checked={selected === 10} />
                <label htmlFor='rating-10'>10</label>
            </li>
        </ul>
    )
}

export default RatingSelect;