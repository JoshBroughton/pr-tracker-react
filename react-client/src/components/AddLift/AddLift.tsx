import React, { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import './AddLift.css';

interface AddLiftProps {
  lift: string,
  setNewData: (newData:boolean) => void,
  newData: boolean,
}

let url:string | undefined;
if (process.env.NODE_ENV === 'development') {
  url = process.env.REACT_APP_LOCAL_URL;
} else {
  url = process.env.REACT_APP_PROD_URL;
}

function AddLift(props:AddLiftProps) {
  const [reps, setReps] = useState<number>(1);
  const [message, setMessage] = useState<string>('');
  const [weight, setWeight] = useState<number>(0);
  const [date, setDate] = useState<string>((new Date()).toISOString().substring(0, 10))
  const { user } = useAuth0();

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      fetch(url + "/create-lift", {
        method: "POST",
        body: JSON.stringify({
          user_id: user?.sub,
          lift_type: props.lift,
          reps: reps,
          weight: weight,
          date: date,
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => {
        if (res.status === 200) {
          setReps(1);
          setWeight(0);
          setDate((new Date()).toISOString().substring(0, 10));
          props.setNewData(props.newData === false ? true : false)
          setMessage("Lift added successfully");
        } else {
          setMessage("Some error occured");
        }
      })
      .then(data => data)
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
    return(<option key={i} value={i}>{i}</option>)
  })

  return(
    <form className="calc-form" onSubmit={handleSubmit}>
      <h2>Add a new lift record</h2>
      <label>
        Select number of Reps:
        <select value={reps} onChange={(e) => setReps(Number(e.target.value))}>
          {mappedRepOptions}
        </select>
      </label>
      <label>
        Enter the weight:
        <input
          type="text"
          pattern="[0-9]*" // this fixes the weird leading zero issue
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
      <p>{message}</p>
    </form>
  )
}

export default AddLift;