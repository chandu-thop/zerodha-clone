import React from 'react';


function Hero() {
    return ( <div className='container border-bottom mb-5'>
        <div className='row text-center mt-5 p-3 '>
            <h1>Technology</h1>
            <h5 className='mt-3 text-muted fs-4'>Sleek,modern and intuitive trading platforms</h5>
            <p className='mt-3 mb-5' >Check out our <a href='' style={{textDecoration:"none"}}>investment offerings<i style={{marginLeft:"10px"}} class="fa fa-long-arrow-right" aria-hidden="true"></i></a></p>
        </div>
    </div> );
}

export default Hero;