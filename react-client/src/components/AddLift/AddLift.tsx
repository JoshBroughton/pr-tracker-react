import React, { useState } from 'react';


function AddLift() {
  const [reps, setReps] = useState<number>(1);
  const [message, setMessage] = useState<string>('');
  const [weight, setWeight] = useState<number>(0);
  const [date, setDate] = useState<string>((new Date()).toISOString())

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      fetch("/create-lift", {
        method: "POST",
        body: JSON.stringify({
          reps: reps,
          weight: weight,
          date: date,
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => {
        res.json()
        if (res.status === 200) {
          setReps(1);
          setMessage("Lift added successfully");
        } else {
          setMessage("Some error occured");
        }
      })
      .then(data => console.log(data))
    } catch (err) {
      console.log(err);
    }
  };
  //some helpers to map # of rep options
  const repOptions = [];
  for (let i=1;i < 16;i++) {
    repOptions.push(i)
  }
  const mappedRepOptions = repOptions.map((i) => {
    return(<option value={i}>{i}</option>)
  })

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Select number of Reps:
          <select value={reps} onChange={(e) => setReps(Number(e.target.value))}>
            {mappedRepOptions}
          </select>
        </label>
        <label>
          Enter the weight:
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(Number(e.target.value))}
          />
        </label>
        <label>
          Enter the date:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <p>{message}</p>
    </div>
  )
}

export default AddLift;