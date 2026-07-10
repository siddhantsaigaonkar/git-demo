import React from 'react'

export default function Student({ stuList }) {
  console.log(stuList)
  return <div>

    {
      stuList.map((item) => (
        <div>
          {item}
        </div>

      ))
    }
  </div>;
}
