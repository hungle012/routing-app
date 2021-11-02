import axios from 'axios'
import React, { Component } from 'react'

export default class ClassApi extends Component {

    state = {
        mangND: []
    }

    getApi = async () => {
        try {
            let result = await axios({
                url: "http://movieapi.cyberlearn.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01",
                method: 'GET'
            });
    
            console.log('result', result.data.content);
    
            this.setState({
                mangND:result.data.content
            })
        } catch (errors) {
            console.log(errors)
        }
        
        // // xử lí thành công
        // // C1 :promise
        // promise.then((result) => {
        //     this.setState({
        //         mangND:result.data.content
        //     })
        //     console.log("123")
        // })
        // // xử lí thất bại
        // promise.catch((errors) => {
        //     console.log(errors)
        // })
        // console.log('abc')
    }

    renderND = () => {
        return this.state.mangND.map((nguoiDung,index) => {
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

    render() {
        return (
            <div className="container">
                
                <div className="display-4 text-center">
                    Danh sách người dùng
                </div>
                <div className="row">
                    {this.renderND()}
                </div>
            </div>
        )
    }

    componentDidMount(){
        // gọi sau khi render xong
        this.getApi();
    }
}
