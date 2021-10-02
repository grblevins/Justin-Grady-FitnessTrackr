import React from 'react';

const routine = ({ name, goal, creatorName, activities}) => {

    return <div>
        <h3>Routine: {name}</h3>
        <p>Goal: {goal}</p>
        <p>Creator: {creatorName}</p>
        <p>Involved activities: {activities}</p>
    </div>
}

export default routine;