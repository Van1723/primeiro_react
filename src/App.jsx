// import './Card_produto.css'
// import './App.css'
// import Item from './Item.jsx'
// import Card_Produto from './Card_Produto.jsx'
import Lista_Produtos from './Lista_Produtos.jsx'
import './Lista_produtos.css'

function App() {
      const produtos = [
  { nome: "Café", preco: 10 },
  { nome: "Leite", preco: 7 }]


  return (
    <>
      <div>
        <h1> Olá!</h1>
          {/* /* <Item nome="Café" valor={10} />
          <Item nome="Leite" valor={7} />
          <Card_Produto nome="Café" preco={10} /> : */}
          {produtos.map(produto => (
        <Lista_Produtos
          key={produto.id}
          nome={produto.nome}
          preco={produto.preco}
        />
      ))}

      </div>

      
        
      
    </>
  
  )
}

export default App
