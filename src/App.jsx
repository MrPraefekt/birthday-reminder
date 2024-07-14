import {useState} from "react";
import peopleImport from './data.js';

const App = () => {
    const [people, setPeople] = useState(peopleImport);

    return (
        <main>
            <div className='container'>
                <h2>Birthday Reminder count: {people.length}</h2>
                {people.map((person) => {
                    const {id, name, age, image} = person;
                    return <article key={id} className='person'>
                        <img className='img' src={image} alt={name}/>
                        <div>
                            <h3>{name}</h3>
                            <p>{age} years</p>
                        </div>
                    </article>
                })
                }
                <button className='btn btn-block' onClick={() => setPeople([])}>Remove entries</button>
            </div>
        </main>)
};
export default App;
