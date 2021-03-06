import React from 'react'

function Carousel() {

    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                <li data-target="#carouselExampleIndicators" data-slide-to={2} />
            </ol>
            <div className="carousel-inner"  style={{maxHeight:'90vh'}}>
                <div className="carousel-item active">
                    <img className="d-block w-100" src="https://img.bandung.go.id/images/slider/2022/02/02/header/164378848699-rumah-sakit-khusus-jantung-dan-pembuluh-darah-resmi-hadir-di-kota-bandung-desktop.jpg" alt="First slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="https://img.bandung.go.id/images/slider/2022/02/02/header/164378848699-rumah-sakit-khusus-jantung-dan-pembuluh-darah-resmi-hadir-di-kota-bandung-desktop.jpg" alt="Second slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="https://img.bandung.go.id/images/slider/2022/02/02/header/164378848699-rumah-sakit-khusus-jantung-dan-pembuluh-darah-resmi-hadir-di-kota-bandung-desktop.jpg" alt="Third slide" />
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
            </a>
        </div>


    )
}

export default Carousel