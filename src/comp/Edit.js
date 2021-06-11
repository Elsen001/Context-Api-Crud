import React, { useContext, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../context/State'

const Edit = () => {
    const history = useHistory()
    const { infos, editInfo } = useContext(GlobalContext);
    const { id } = useParams()
    const [data, setData] = useState({
        id: null,
        firstname: "",
        lastname: "",
        job: "",
        number: "",
    })
    const currentInfo = id

    useEffect(() => {
        const infoId = currentInfo;
        const dataInfo = infos.find(info => info.id === parseInt(infoId))
        setData(dataInfo)
    }, [])


    const onHandleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        editInfo(data)
        history.push("/")
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center page">
                    <h1>Edit Page</h1>
                    <form onSubmit={onSubmit} action="">
                        <input value={data.firstname} name="firstname" onChange={onHandleChange} className="form-control" type="text" placeholder="firstname" />
                        <input value={data.lastname} name="lastname" onChange={onHandleChange} className="form-control" type="text" placeholder="lastname" />
                        <input value={data.job} name="job" onChange={onHandleChange} className="form-control" type="text" placeholder="job" />
                        <input value={data.number} name="number" onChange={onHandleChange} className="form-control" type="text" placeholder="number" />
                        <button type="submit" className="btn btn-primary">Save Changes</button>
                        <Link to="/" ><button className="btn btn-danger" >Cancel</button></Link> 
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Edit
