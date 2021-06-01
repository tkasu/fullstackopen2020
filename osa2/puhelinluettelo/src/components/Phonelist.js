const Phonelist = ({persons}) => (
    <div>
        <h2>Numbers</h2>
        <ul>
            {persons
                .filter(person => person.visible)
                .map(person => 
                <li key={person.name}>
                    {person.name} {person.number}
                </li>   
            )}
        </ul>
    </div>
)

export default Phonelist