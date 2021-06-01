const Phonefilter = ({nameFilter, handleNameFilterChange}) => (
    <div>
        filter shown with: <input 
        value={nameFilter}
        onChange={handleNameFilterChange}/>
    </div>
)

export default Phonefilter