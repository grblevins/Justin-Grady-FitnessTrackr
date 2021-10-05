// import React, {useState} from 'react';
// import api from '../utilities/api';
// import { Link, useHistory } from 'react-router-dom';


// const RoutineForm = (isLoggedIn) => {

//     const defaultState = {name: '', goal: '', isPublic: null};
//     const [routine, setroutine] = useState(defaultState);

//     let history = useHistory();


//     function handleChange(event, stateKey){
//         const newroutine = {...routine};
//         let value = event.target.value;
//         newroutine[stateKey] = value;
//         setroutine(newroutine);
//     }
        
//     async function onSubmit(event) {
//         try {
//             event.preventDefault();
//             const newroutine = {routine}
//             await api.makeRequest('/routines', 'routine', newroutine);
//             setroutine(defaultState);
//         }
//         catch (error) {
//             console.log(error);
//         }
//         finally{
//             history.push('/routines');
//         }
//     }

//     return <div className="routine-form">
//         <h1>Hello, World!</h1>
//         <input onChange={event => handleChange(event, 'name')} id="name" value={routine.name} type="text" required placeholder="Routine Name" />
//         <input onChange={event => handleChange(event, 'goal')} id="goal" value={routine.goal}  type="text" required placeholder="Routine Goal" />
//         <input onChange={event => handleChange(event, 'price')} id="price" value={routine.isPublic} type="boolean" required/>
//         <button onClick={onSubmit}>Make routine</button>
//         <Link to="/">Home</Link>
//     </div>
// }

// export default RoutineForm;