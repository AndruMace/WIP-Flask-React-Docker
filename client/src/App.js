import { useState, useEffect } from 'react'
function App() {
  const [res, setRes] = useState({'res' : 'nothing yet'})

  useEffect(() => {
    fetch('http://localhost:5000/')
      .then(res => res.json())
      .then(data => setRes({'res': data.res}))
  }, []);  
  return (
    <div className="App">
      Data from server: {res.res}
    </div>
  );
}

export default App;
