import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { connect } from 'react-redux'


export default function DemoFakeBook(props) {

    const [userContent, setUserContent] = useState({ name: '', content: '' })

    //dispatch thay thế cho this.props.dispatch hoặc mapdispatchtoprops
    const dispatch = useDispatch();

    //useSelector giống mapStateToProps của redux => Lấy dữ liệu từ store về
    const arrContent = useSelector((rootReducer) => rootReducer.FakeBookReducer
    );
    console.log('userContent', userContent);

    const handleChange = (event) => {
        let { name, value } = event.target;
        // phải có bước lưu giá trị cũ
        setUserContent({
            ...userContent,
            [name]: value
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault(); // cản trở sự kiện submit

        const action = {
            type: 'COMMENT',
            userContent
        }

        await dispatch(action)

        setUserContent({
            name: '',
            content: ''
        })
    }


    const renderContent = () => {
        return arrContent.map((user, index) => {
            return <div className="row" key={index}>
                <div className="col-2">
                    <img src={`https://i.pravatar.cc/150?${user.name}`} alt="" width={50} height={50} />
                </div>
                <div className="col-10">
                    <p className="font-weight-bold text-danger"> {user.name} </p>
                    <p>{user.content}</p>
                </div>
            </div>

        })
    }

    console.log('arrContent', arrContent)


    return (
        <div className="container mt-3">
            <div className="card">
                <div className="card-header">
                    {renderContent()}
                </div>
                <form className="card-body" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <p>Name</p>
                        <input className="form-control" name="name" onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <p>Content</p>
                        <input className="form-control" name="content" onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-success" type="submit">Send</button>
                    </div>

                </form>
            </div>
        </div>
    )
}



// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

// export default connect (mapStateToProps)(DemoFakeBook)