import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../context/State'

const Add = () => {
    const history = useHistory()
    const { createInfo, infos } = useContext(GlobalContext)
    console.log(infos);

    const [data, setData] = useState({
        id: infos.length + 1,
        firstname: "",
        lastname: "",
        job: "",
        number: ""
    })

    const onHandleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }


    const onSubmit = (e) => {
        e.preventDefault()
        createInfo(data)
        console.log(infos);
        history.push("/")
    }
    useEffect(() => {

    }, [onSubmit])

    return (
        <div className="container">
            <div className="row">

                <div className="col-md-12 text-center page">
                    <h1>Add User Info</h1>
                    <form onSubmit={onSubmit} action="">
                        <input name="firstname" onChange={onHandleChange} className="form-control" type="text" placeholder="firstname" />
                        <input name="lastname" onChange={onHandleChange} className="form-control" type="text" placeholder="lastname" />
                        <input name="job" onChange={onHandleChange} className="form-control" type="text" placeholder="job" />
                        <input name="number" onChange={onHandleChange} className="form-control" type="text" placeholder="number" />
                        <button type="submit" className="btn btn-primary">Save Info</button>
                        <Link to="/" ><button className="btn btn-danger" >Cancel</button></Link> 
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Add
