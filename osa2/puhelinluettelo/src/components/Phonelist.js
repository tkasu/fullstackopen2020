const Phonelist = ({persons, handleDeleteBuilder}) => (
    <div>
        <h2>Numbers</h2>
        <table>
            <tbody>
                {persons
                    .filter(person => person.visible)
                    .map(person => 
                    <tr key={person.name}>
                        <td>{person.name}</td>
                        <td>{person.number}</td>
                        <td>
                            <button onClick={handleDeleteBuilder(person)}>
                                delete
                            </button></td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
)

export default Phonelist