import React from 'react'
import ReactDOM from 'react-dom/client'

// const h1 = <h1>Hello World</h1>

// const h1 = React.createElement(
//   'h1',
//   { id: 'title', className: 'test' },
//   'Hello React'
// )

// Проблема споссоба в лишнем диве, который оборачивает несколько элементов
// function App() {
//   return (
//     <div>
//       <h1>Hello React</h1>
//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, ut
//         voluptatibus. Atque, earum a error soluta laudantium id nihil sapiente
//         ex facere nobis nemo ut aut quos vitae! Aspernatur, cumque.
//       </p>
//     </div>
//   )
// }

const Title = () => <h1>Hello React</h1>

//Непрактичный споссоб, по книге
// const Content = () => {
//   return (
//     <React.Fragment>
//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, ut
//         voluptatibus. Atque, earum a error soluta laudantium id nihil sapiente
//         ex facere nobis nemo ut aut quos vitae! Aspernatur, cumque.
//       </p>

//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, ea qui!
//         Reprehenderit dolor obcaecati porro quibusdam nemo corporis enim nam
//         nihil, dignissimos asperiores labore ex adipisci iusto dolorum
//         perspiciatis sunt?
//       </p>
//     </React.Fragment>
//   )
// }

//Практичный способ, пустой тег
const Content = () => {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, ut
        voluptatibus. Atque, earum a error soluta laudantium id nihil sapiente
        ex facere nobis nemo ut aut quos vitae! Aspernatur, cumque.
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, ea qui!
        Reprehenderit dolor obcaecati porro quibusdam nemo corporis enim nam
        nihil, dignissimos asperiores labore ex adipisci iusto dolorum
        perspiciatis sunt?
      </p>
    </>
  )
}

const App = () => {
  return (
    <>
      <Title />
      <Content />
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
