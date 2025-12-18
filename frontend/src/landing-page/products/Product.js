import React from 'react';
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';



function Product() {
    return (<>
        <Hero/>
        <LeftSection imageURL="Images/kite.png" productName="Kite" productDesription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." tryDemo="" learnMore="" googlePlay="" appStore=""/>
        <RightSection productName="Console" productDesription="The central dashboard fro your Zerodha account. Gain insights into your trades and investments with in-depth reports and visulizations." LearnMore="" imageURL="Images/console.png"/>
        <LeftSection imageURL="Images/coin.png" productName="Coin" productDesription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." tryDemo="" learnMore="" googlePlay="" appStore=""/>
        <RightSection productName="Kite Connect API" productDesription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." LearnMore="" imageURL="Images/kiteconnect.png"/>
        <LeftSection imageURL="Images/varsity.png" productName="Varsity mobile" productDesription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." tryDemo="" learnMore="" googlePlay="" appStore=""/>
        <p className='text-center mt-5'>Want to know more about our technology stack? Check out the Zerodha.tech blog.</p>
        <Universe />
    </>);
}

export default Product;