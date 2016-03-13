import React from 'react'

import LoadingOrderAnimation from 'react-loading-order-with-animation'

export default function Home() {
    return (
        <LoadingOrderAnimation animation="fade-in" move="from-right-to-left" distance={30} speed={500} wait={200}>
            <h1>Home</h1>
        </LoadingOrderAnimation>
    )
}