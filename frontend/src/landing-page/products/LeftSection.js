import React from 'react';


function LeftSection({ imageURL,
    productName,
    productDesription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore, }) {
    return (<div className="container mt-5">
        <div className="row">
            <div className="col-6">
                <img src={imageURL} />
            </div>
            <div className="col-6 p-5 mt-5">
                <h1>{productName}</h1>
                <p>{productDesription}</p>
                <div>
                    <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo<i style={{marginLeft:"10px"}} class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    <a href={learnMore} style={{ marginLeft: "50px" ,textDecoration:"none" }}>
                        Learn More<i style={{marginLeft:"10px"}}class="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </a>
                </div>
                <div className="mt-3">
                    <a href={googlePlay}>
                        <img src="Images/googlePlayBadge.svg" />
                    </a>
                    <a href={appStore}>
                        <img
                            src="Images/appstoreBadge.svg"
                            style={{ marginLeft: "50px" }}
                        />
                    </a>
                </div>
            </div>
        </div>
    </div>);
}

export default LeftSection;