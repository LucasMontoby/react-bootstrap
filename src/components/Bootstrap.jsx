// import 'bootstrap/dist/css/bootstrap.min.css';


function Bootstrap (){
    return(
<>
        {/* Tajeta */}
        <div className="container mt-5">
        <div className="card" style={{ width: '18rem' }}>
          <img src="https://via.placeholder.com/150" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Título de la Tarjeta</h5>
            <p className="card-text">Este es un ejemplo de una tarjeta simple con Bootstrap en React.</p>
            <a href="#" className="btn btn-primary">Ir a algún lugar</a>
          </div>
        </div>
        </div>

    {/* Carrusel */}
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
    <div className="carousel-item active">
    <img src="https://via.placeholder.com/800x400" className="d-block w-100" alt="Slide 1" />
     </div>
    <div className="carousel-item">
    <img src="https://via.placeholder.com/800x400" className="d-block w-100" alt="Slide 2" />
    </div>
    <div className="carousel-item">
    <img src="https://via.placeholder.com/800x400" className="d-block w-100" alt="Slide 3" />
    </div>
        </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
    </button>
    </div>
</>
    )
}

export default Bootstrap;