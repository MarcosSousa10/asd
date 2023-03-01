
import './style.css';
import { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import React from 'react';
import { QrReader } from 'react-qr-reader';
import Header from '../../componentes/Header';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Table from 'react-bootstrap/Table'



function FaleConosco() {
  const [cod, setCod] = useState('');
  const [data, setData] = useState('No result');
  const [descricao, setDescricao] = useState([]);
  const [codprod, setCodprod] = useState([]);
  const [unidade, setUnidade] = useState([]);
  const [produtopai, setProdutopai] = useState([]);
  const [estoquecd, setEstoquecd] = useState([]);
  const [estoqueothon, setEstoqueothon] = useState([]);
  const [estoquedispothon, setEstoquedispothon] = useState([]);
  const [qtachegar, setQtachegar] = useState([]);
  const [giromes, setGiromes] = useState([]);
  const [qtvendida3meses, setQtvendida3meses] = useState([]);
 
  const Task = async (cod) => {
  
    await axios.get(` http://192.168.2.181:8090/java/codauxiliar/${cod}`).then(Response => {
      setCodprod(Response.data.codprod);
      setUnidade(Response.data.unidade);
      setProdutopai(Response.data.produtopai);
      setEstoquecd(Response.data.estoquecd);
      setEstoqueothon(Response.data.estoqueothon);
      setEstoquedispothon(Response.data.estoquedispothon);
      setQtachegar(Response.data.qtachegar);
      setGiromes(Response.data.giromes);
      setQtvendida3meses(Response.data.qtvendida3meses);
      setDescricao(Response.data.descricao);
    })
  }


  const saveTask = async (cod) => {
    await axios.get(`http://192.168.2.181:8090/java/codigo/${cod}`).then(Response => {
      setCodprod(Response.data.codprod);
      setUnidade(Response.data.unidade);
      setProdutopai(Response.data.produtopai);
      setEstoquecd(Response.data.estoquecd);
      setEstoqueothon(Response.data.estoqueothon);
      setEstoquedispothon(Response.data.estoquedispothon);
      setQtachegar(Response.data.qtachegar);
      setGiromes(Response.data.giromes);
      setQtvendida3meses(Response.data.qtvendida3meses);
      setDescricao(Response.data.descricao);

    });

  }


  return (
    
    <div style={{display:"flex", alignItems: "center", justifyContent: "center"}}>
  
   
    <Header titulo='Othon De Carvalho'>

    <Table striped style={{ textAlign:"left"} } >
      <thead>
        <tr>
          <th>Nome</th>
          <th>Descricao</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          
          <td><label for=""><h6>Codigo: </h6></label></td>
          <td><div > {codprod}   </div></td>
          
        </tr>
        <tr>
          <td><label for=""><h6>Descricao: </h6></label></td>
          <td><div style={{whiteSpace: "nowrap" }}>{descricao}</div></td>
          
        </tr>
        <tr>
          <td><label for=""><h6>GiroMes: </h6></label></td>
          <td><div >{giromes}</div></td>
        </tr>
        <tr>
          <td><label for=""><h6>QTD Chegar: </h6></label></td>
          <td><div >{qtachegar}</div></td>
        </tr>
        <tr>
          <td><label for=""><h6>Produto Pai: </h6></label></td>
          <td><div>{produtopai}</div></td>
        </tr>
        <tr>
          <td><label for=""><h6>Estoque CD: </h6></label></td>
          <td><div >{estoquecd}</div></td>
        </tr>
        <tr>
          <td><label for=""><h6>Estoque Othon: </h6></label></td>
          <td><div >{estoqueothon}</div></td>
        </tr>
        <tr>
          <td><label for=""><h6>Unidade: </h6></label></td>
          <td><div >{unidade}</div></td>
        </tr>
        <tr>
          <td><label for=""><h6>Estoque Disponivel Othon: </h6></label></td>
          <td><div >{estoquedispothon}</div></td>
        </tr>
        <tr>
          <td><label for=""><h6>qtvendida3meses: </h6></label></td>
          <td><div >{qtvendida3meses}</div></td>
        </tr>
    
      </tbody>
    </Table>

        <InputGroup size="lg">
        <InputGroup.Text id="inputGroup-sizing-lg"  onChange={(txt) => setCod(txt.target.value)}>Codigo</InputGroup.Text>
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          onChange={(txt) => setCod(txt.target.value)&& setData(txt.target.value)}
          placeholder='Codigo Produto'
        />
      </InputGroup>
      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
          }

          if (!!error) {
            alert(error);
          }
        }}
        style={{ width: '100%' }}
        delay={300}
        facingMode="environment"
  />
      <p>{data}</p>

      {/* </div>  */}
       
        {cod.length > 4 ?
          <Button className='btn btn-outline-dark salvar' onClick={() => { Task(cod ) }}>codauxiliar</Button> :
          <Button className='btn btn-outline-dark salvar' onClick={() => { saveTask(cod);saveTask(data)}}>Codigo produto</Button>
        }  
    </Header>
    </div>
  );

}


export default FaleConosco;
