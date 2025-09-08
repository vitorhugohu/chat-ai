"use client";

import Link from 'next/link';
import React from 'react';
import {  Button, Input } from 'antd';

export default function Chat() {    
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
            <Button type="primary">Enviar</Button>
            &nbsp;
            <Link href={"/"}>
                <Button type="primary" style={{background: 'gray', color: 'white'}}>Cancelar</Button>
            </Link>
           </div>

        </>

    )
}
