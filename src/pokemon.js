import React from 'react'
import axios from 'axios'
import { Layout, Menu, Breadcrumb } from 'antd';
import "./pokemon.css";
import "antd/dist/antd.css";
import React, { useState, useEffect } from 'react';


const { Header, Content, Footer } = Layout;

function pokemon (props) {
    const [pokemon, setPokemon] = useState([]);

    const getPokemon = () => {
        axios.get('https://api.pokemontcg.io/v1/cards?subtype=Basic') 
            .then(res => {
                setPokemon(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }
    useEffect(() => {
        getPokemon();
    }, [])

    return (
        <>
<Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">Menu</Menu.Item>
        <Menu.Item key="2">Novedades</Menu.Item>
        <Menu.Item key="3">About</Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>Pokemon</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-content">
        <div>
            <h1>
                Lista de Pokemons
            </h1>
            {
                card.map(card =>{
                return (
                    <dive>{card.name}</dive>
                    )
                })
            }
        </div>
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Examen Final</Footer>
  </Layout>,

</>
    );
}































export default pokemon;