import React from 'react'

import { toPersian } from '../../utils/toPersian'

import './posts.css'

const Posts = ({ title, summary, time }) => {

    const persianTime = toPersian(time)

    return (
        <div className='box'>
            <div className='card-title'>
                <h3> {title} </h3>
            </div>
            <div className='card-description'>
                <p> {summary} </p>
            </div>
            <div className='card-footer'>
                <span>خواندن {persianTime} دقیقه </span>
            </div>
        </div>
    )
}

export default Posts;