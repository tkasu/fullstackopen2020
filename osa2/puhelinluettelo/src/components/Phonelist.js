const Phonelist = ({persons}) => (
    <div>
        <h2>Numbers</h2>
        <ul>
            {persons.map(person => 
                <li key={person.name}>
                    {person.name}
                </li>   
            )}
        </ul>
    </div>
)

export default Phonelist