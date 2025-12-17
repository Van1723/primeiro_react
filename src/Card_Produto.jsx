 import './Card_produto.css'

function Card_Produto({ nome, preco }) {
  return <div id='container'>
    <p>{nome} - R$ {preco}</p>
  </div>
}


export default Card_Produto;