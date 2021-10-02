import { useState, useEffect } from 'react'
function App() {
  const [res, setRes] = useState({'res' : 'nothing yet'})
  const [user, setUser] = useState({'fname' : 'John', 'lname' : 'Doe'})

  useEffect(() => {
    fetch('http://localhost:5000/')
      .then(res => res.json())
      .then(data => setRes(data))
      .catch((err) => {
        setRes({'Error' : err})
      })
  }, []);  

  function updateInput(e) {
    if(e.target.id === 'fname') {
      setUser((oldUser) => { return {'fname': e.target.value, 'lname': oldUser.lname} }) 
    } else {
      setUser((oldUser) => { return {'fname': oldUser.fname, 'lname': e.target.value} })
    }
  }

  function onSubmit(e) {
    e.preventDefault()

    fetch('http://localhost:5000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
    .then(response => response.json())
    .then(data => {
      setRes(data);
      setUser({'fname' : '', 'lname' : ''})
    })
    .catch((error) => {
      setRes(error);
    });
  }

  function renderResponse(data) { 
    if (data['Error']) {
      return `Server returned an error. Error is as follows: ${data.Error}`
    } else if (data['Success']) {
      return `Server response successful. Here is the data returned: ${JSON.stringify(data.Success)}`
    } else {
      return `Server responded in a way that was not anticipated. Response is as follows: ${JSON.stringify(data)}`
    }
  }

  return (
    <div className="App" style={{padding: '50px', backgroundColor: '#00004d', color: 'white', width: '100vw', height: '100vh' }}>
      {renderResponse(res)}
      <div>
        <h2>Test Form</h2>
        <form onSubmit={onSubmit}>
          <label for="fname">First name:</label>
          <input type="text" id="fname" name="fname" onChange={updateInput} value={user.fname}/>
          <label for="lname">Last name:</label>
          <input type="text" id="lname" name="lname" onChange={updateInput} value={user.lname}/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    </div>
  );
}

export default App;
