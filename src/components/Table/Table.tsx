import React, { useState, useRef, useEffect, useMemo, useCallback} from 'react';
import { render } from 'react-dom';


interface LiftRecord {
  reps: number;
  weight: number;
  date: Date;
  e1rm: number;
}

const data: LiftRecord[] = [
  {
    reps: 1,
    weight: 445,
    date: new Date(),
    e1rm: 445, 
  }
]

function Table() {
  const [rowData, setRowData] = useState<LiftRecord[]>(data);

  return(
    <>

    </>
  )
}

export default Table;