"use client";

import Link from 'next/link';
import React from 'react';
import {  Button, Input } from 'antd';
import axios from 'axios';

export default function Chat() {    
    
    function submmit() {
        //const name = (document.getElementById('nome') as HTMLInputElement).value;
        //const message = (document.getElementById('mensagem') as HTMLInputElement).value;
        const url = `http://localhost:5000/chat/${'name'}/${'message'}`;

        axios.post(url);
        // .then(response => {
        //     console.log('Mensagem enviada com sucesso:', response.data);
        // })
        // .catch(error => {
        //     console.error('Erro ao enviar mensagem:', error);
        // });
    }

    return (
        <>
           <div style={{width: '500px', margin: '0 auto', marginTop: '50px'}}>
             <label htmlFor="nome">Nome:</label>
            <Input placeholder='Digite seu nome'id="nome"/>
            <br/>
            <br/>
            <label htmlFor="mensagem">Mensagem:</label>
            <Input.TextArea placeholder='Digite sua mensagem' id='mensagem'/>
            <br/>
            <br/>
            <Button type="primary" onClick={alert}>Enviar</Button>
            &nbsp;
            <Link href={"/"}>
                <Button type="primary" style={{background: 'gray', color: 'white'}}>Cancelar</Button>
            </Link>
           </div>

        </>

    )
}
