import React, {useState} from 'react'

export default function BTChonXe(props) {

    const [imgColor, setImgColor] = useState('./img/products/black-car.jpg');

    const changeColor = (color) => {
        setImgColor(`./img/products/${color}-car.jpg`)
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-8">
                    <img className="img-fluid" src={imgColor} alt="" /> 
                </div>
                <div className="col-4">
                    <h4>Chọn màu</h4>
                    <ul className="navbar-nav">
                        <li>
                            <button className="btn btn-dark mt-2" onClick={() => {
                                changeColor('black')
                            }}>Black</button>
                        </li>
                        <li>
                            <button className="btn btn-danger mt-2" onClick={() => {
                                changeColor('red')
                            }}>Red</button>
                        </li>
                        <li>
                            <button className="btn btn-outline-dark mt-2" onClick={() => {
                                changeColor('silver')
                            }}>Silver</button>
                        </li>
                        <li>
                            <button className="btn btn-secondary mt-2" onClick={() => {
                                changeColor('steel')
                            }}>Steel</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
