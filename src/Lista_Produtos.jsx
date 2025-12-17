import './Lista_produtos.css'

const Lista_Produtos = ({ nome, preco })  => {


  return (
    <div id='container'>
      <h3>{nome}</h3>
      <p>R$ {preco}</p>
    </div>
  )
}
   

export default Lista_Produtos;