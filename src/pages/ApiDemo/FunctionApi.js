import axios from 'axios';
import React, { useState, useEffect } from 'react'

export default function FunctionApi() {

    const [mangND, setMangND] = useState([])

    useEffect(async () => {
        try {
            let result = await axios({
                url: "http://movieapi.cyberlearn.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01",
                method: 'GET'
            });
            setMangND(result.data.content)

        } catch (error) {
            console.log(error)
        }
    }, [])

    const renderND = () => {
        return mangND.map((nguoiDung, index) => {
            return <div className="col-3" key={index}>
                <div className="card">
                    <img src={`https://i.pravatar.cc/150?u= ${nguoiDung.email} `} alt="" />
                    <div className="card-body">
                        <p>Họ tên: {nguoiDung.hoTen} </p>
                        <p>Sđt: {nguoiDung.soDt} </p>
                    </div>
                </div>
            </div>
        })
    }

    return (
        <div className="container">
            <div className="display-4 text-center">
                Danh sách người dùng
            </div>
            <div className="row">
                {renderND()}
            </div>
        </div>
    )
}
