import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/State'

const Infos = () => {
    const { infos, deleteInfo,editInfo } = useContext(GlobalContext)
    console.log(infos);

    return (
        <div className="container">

            <div className="row">
                <div className="col-md-12">
                    <h1>Infolist </h1>
                    <table className="table table-hover">
                        <thead className="table-dark">
                            <tr>
                                <th>FirstName</th>
                                <th>LastName</th>
                                <th>Job</th>
                                <th>Number</th>
                                <th></th>
                                <Link to="/add"><th><button className="btn btn-primary"><i className="fas fa-plus"></i>Add User</button></th></Link></tr>
                        </thead>
                        <tbody >
                            {infos.map(info => {
                                return (
                                    <tr key={info.id} >
                                        <th>{info.firstname}</th>
                                        <th>{info.lastname}</th>
                                        <th>{info.job}</th>
                                        <th>{info.number}</th>
                                        <th><i onClick={() => deleteInfo(info.id)} class="fas fa-trash-alt"></i></th>
                                        <th><Link to={`/edit/${info.id}`} ><i onClick={()=>editInfo(info.id)} class="fas fa-user-edit"></i></Link></th>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default Infos
