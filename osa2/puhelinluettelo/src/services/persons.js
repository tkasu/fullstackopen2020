import axios from 'axios'

const API_URL = "http://localhost:3001"

const getAll = () => (
    axios
      .get(`${API_URL}/persons`)
      .then(response => response.data
          .map(person => {
            const visiblePerson = {
              ...person,
              visible: true
            }
            return visiblePerson
          }))
)

const create = (person) => (
    axios
      .post(`${API_URL}/persons`, person)
      .then(response => { 
        const newVisiblePerson = {...response.data, visible: true}
        return newVisiblePerson
      })
)

const remove = (id) => (
    axios
      .delete(`${API_URL}/persons/${id}`)
      .then(_ => {})
)

const serviceAPI = { getAll, create, remove }
  
export default serviceAPI
