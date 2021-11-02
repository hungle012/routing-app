import React,{useEffect,useState} from 'react'

export default function UseEffectDemo(props) {

    const [number, setNumber] = useState(1);
    const [like, setLike] = useState(1)

    // useEffect(() => {
    //     // useEffect nhận vào tham số là 1 callback function thì thay thế 2 lifecycle didmout & didupdate
    //     // Hàm callback sẽ chạy sau khi render hoặc sau mỗi lần cập nhật state hoặc props
    //     console.log("didmout & didupdate");
    // })

    // useEffect(() => {
    //     console.log('didmount')
    // }, [])
    // useEffect(() => {
    //     console.log('didupdate')
    // }, [like])
    useEffect(() => {
        // có thể định nghĩa trong bất kỳ useEffect nào
        return () => {
            // hàm này sẽ gọi trước khi component biến mất khỏi UI (Willunmount)
            console.log('willunmount')
        }
    }, [])

    console.log('render');

    return (
        <div>
            Use Effect Demo
            <h1>{number}</h1>
            <button className="btn btn-outline-danger" onClick={() => {
                setNumber(number + 1);
            }}>+</button>
            <br />
            <br />
            <h1>{like}</h1>
            <button className="btn btn-outline-danger" onClick={() => {
                setLike(like + 1);
            }}>Like</button>
        </div>
    )
}
