import React, { useState } from 'react'

function MainContent(props) {

    const [status, setStatus] = useState(true);

    // Thay đổi trạng thái
    const isChangeStatus = () => {
        setStatus(!status);
    }

    // Component nút
    const componentButton = () => {
        return (
            <div className="btn-group mb-3">
                <div className="btn btn-info" onClick={() => isChangeStatus()}>Đổi trạng thái</div>
            </div>
        )
    }

    // Component input
    const componentInput = () => {
        return (
            <div className='mb-1'>
                <input defaultValue={props.title} name='ten' type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                <div className='btn btn-success' onClick={() => isChangeStatus()}>Lưu</div>
            </div>
        )
    }

    // Kiểm tra trạng thái
    const checkStatus = () => {
        if (status === true) {
            return componentButton();
        } else {
            return componentInput();
        }
    }


    return (
        <div className='col-lg-4'>
            <div className='row justify-content-center mb-5'>
                <div className={`col-lg-4 ${props.order}`}>
                    <div className="p-3">
                        <img className="img-fluid rounded-circle" src={props.image} alt="..." />
                    </div>
                </div>
                <div className="col-lg-6 order-lg-1">
                    <div className="py-0 ps-0">
                        <p>{props.title}</p>
                        {checkStatus()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainContent