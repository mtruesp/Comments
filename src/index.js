//Importado de librerias
import React from 'react'
import ReactDom from 'react-dom'

//Componente a renderizar
import App from './components/App/App'

//Renderizado de componente
ReactDom.render(
    <App/>,
    document.querySelector('#root')
)