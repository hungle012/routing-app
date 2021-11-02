import React, { useState } from 'react'
import BTChonXe from './BTChonXe';

export default function UseStateDemo(props) {

    let [state, setState] = useState(1);
    // let [state, setState] = useState({
    //     like:1
    // });
    const [like, setLike] = useState(1)

    return (
        <div className="container">
            <div className="card w-25 mt-2">
                <img className="card-img-top" src="https://picsum.photos/200" alt="Card image cap" />
                <div className="card-body">
                    <h4 className="card-title">ABC</h4>
                    <p className="card-text">{like} ❤</p>
                    <button className="btn btn-danger" onClick={() => {
                        // setState(like + 1)
                        setLike(like + 1)
                    }}>Like</button>
                </div>
            </div>
            <hr />
            <h3>Bài Tập chọn xe</h3>
            <BTChonXe/>

        </div>
    )
}
