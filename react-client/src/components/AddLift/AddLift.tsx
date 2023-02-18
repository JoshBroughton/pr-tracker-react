import React, { useState } from 'react';


function AddLift() {
  const [text, setText] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      fetch("/create-lift", {
        method: "POST",
        body: JSON.stringify({
          text: text,
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => {
        res.json()
        if (res.status === 200) {
          setText('')
          setMessage("User created successfully");
        } else {
          setMessage("Some error occured");
        }
      })
      .then(data => console.log(data))
    } catch (err) {
      console.log(err);
    }
  };
  

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
      <p>{message}</p>
    </div>
  )
}

export default AddLift;