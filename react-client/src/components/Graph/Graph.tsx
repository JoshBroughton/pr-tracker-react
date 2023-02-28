import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { LiftRecord } from "../Home/Home";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

let url:string | undefined;
if (process.env.NODE_ENV === 'development') {
  url = process.env.REACT_APP_LOCAL_URL;
} else {
  url = process.env.REACT_APP_PROD_URL;
}

interface GraphProps {
  lift: string,
  user_id: string | undefined,
}

function Graph({ lift, user_id }:GraphProps) {
  const [data, setData] = useState<LiftRecord[]>([]);
  
  useEffect(() => {
    fetch((url + '/all_lifts'), {
      method: "POST",
      body: JSON.stringify({
        user_id: user_id,
        lift_type: lift,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data)});
  }, [lift, user_id])

  let dataset = {
    labels: data.map((point) => {
      let date = new Date(point.date);
      return date.toDateString().substring(4);
    }),
    datasets: [
      {
        label: "e1RM Over Time",
        data: data.map((point) => point.estimated_max)
      }
    ]
    }

  return (
    <>
      <Line 
        data={dataset}
        options={{
          plugins: {
            title: {
              display: true,
              text: "e1RM Over Time"
            },
            legend: {
              display: false
            }
          }
        }}
      />
    </>
  )
}

export default Graph;