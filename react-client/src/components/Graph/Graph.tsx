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
url = "https://pr-tracker-server.dev.joshbroughton.me"

interface GraphProps {
  lift: string,
  userID: string | undefined,
}

function Graph({ lift, userID }:GraphProps) {
  const [data, setData] = useState<LiftRecord[]>([]);

  useEffect(() => {
    fetch((url + '/all_lifts'), {
      method: "POST",
      body: JSON.stringify({
        user_id: userID,
        lift_type: lift,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data)});
  }, [lift, userID])

  interface DateMaxObject {
    [index: string]: number,
  }

  const dates:DateMaxObject = {};
  let dataset = {
    labels: data
      .sort((a, b) => {
        return b.estimated_max - a.estimated_max;
      })
      .filter((point) => {
        if (Object.keys(dates).includes(point.date)) {
          if (dates[point.date] > point.estimated_max) {
            return false;
          } else {
            dates[point.date] = point.estimated_max;
            return true;
          }
        } else {
          dates[point.date] = point.estimated_max;
          return true;
        }
      })
      .sort((a, b) => {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      })
      .map((point) => {
        let date = new Date(point.date);
        return date.toDateString().substring(4);
      }),
    datasets: [
      {
        label: "e1RM Over Time",
        data: data
          .sort((a, b) => {
            return new Date(a.date).getTime() - new Date(b.date).getTime();
          })
          .map((point) => point.estimated_max)
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
