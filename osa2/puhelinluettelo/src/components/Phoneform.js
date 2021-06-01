const Phoneform = ({addName, newName, handleNameChange}) => (
    <form onSubmit={addName}>
        <div>
            name: <input 
            value={newName}
            onChange={handleNameChange}/>
        </div>
        <div>
            <button type="submit">add</button>
        </div>
    </form>
)

export default Phoneform