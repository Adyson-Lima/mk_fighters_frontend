import {Link, useNavigate, useParams} from 'react-router-dom';
import React,{useState, useEffect} from 'react';
import api from '../../services/api';

export default function Fighters(){

  const[my_fighters, setFighters] = useState([]);
  const navigate = useNavigate();

  // READ, carrega dados da api
  useEffect(() => {
    api.get("api/v1/fighters",{})
    .then(response => {setFighters(response.data)})
  },[]);

  return(
    <div data-testid="mycard" className="card border-primary" style={{marginTop: '20px'}} >
      <div className="card-header bg-primary" style={{color: '#fff'}}>
        Fighters Crud
      </div>
      <div className="card-body">

      <Link data-testid="mylink" className="btn btn-success" 
      style={{marginBottom: '10px'}} to="/newupdate/0">Novo</Link>
      
      <table data-testid="mytable" className="table table-hover">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nome</th>
            <th scope="col">Descrição</th>
            <th scope="col">Ações</th>
          </tr>
        </thead>
        <tbody>
          {my_fighters.map(fighter => (
            <tr key={fighter.id}>
            <th scope="row">{fighter.id}</th>
              <td>{fighter.name}</td>
              <td>{fighter.description}</td>
              <td>

              <button data-testid="mybtn1" type="button"
              className="btn btn-outline-info" style={{margin: '2px'}}
              >Editar</button>

              <button data-testid="mybtn2" type="button"
              className="btn btn-outline-danger" style={{margin: '2px'}}
              >Excluir</button>

              </td>
          </tr>
          ))}
          
        </tbody>
      </table>

      </div>
    </div>
  );
}