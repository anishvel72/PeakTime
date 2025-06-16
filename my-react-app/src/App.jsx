import "./app.css"

function App() {

  return (
    <body className="background">

      <div className="container">

        <h1 className="title">Welcome!</h1>

        <div>Amount of sleep:</div>
        <input type="number" placeholder="Enter sleep in hours"/>

        <div>Stress level:</div>
        <input type="range"></input>

        <div>Caffienated drinks:</div>
        <select>
          <option>Coffee</option>
          <option>Tea</option>
          <option>Coke</option>
        </select>

        <div>Physical activity:</div>
        <input type="range"/>

        <div>Time since last meal:</div>
        <input type="number" placeholder="Enter approximate minutes"/>

      </div>
    </body>
  )
  
}

export default App
