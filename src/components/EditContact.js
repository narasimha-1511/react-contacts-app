import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { isEmptyBlank, ValidateEmail} from './AddContact.js'

function EditContact(props) {
  const [contact, setContact] = useState({
    name: '',
    email: '',
  })
  const params = useParams()
  const navigate = useNavigate()

  function handleChange(e) {
    const { name, value } = e.target
    setContact((prev) => ({ ...prev, [name]: value }))
  }

  function update(e) {
    e.preventDefault()

    if (isEmptyBlank(contact.email) || isEmptyBlank(contact.name)) {
      alert("All the fields are mandatory");
      return;
    }
    else if(!(ValidateEmail(contact.email))){
      alert("You have entered an invalid email address!");
      return;
    }

    props.update(params.id, contact.name, contact.email)

    navigate('/')
  }

  useEffect(() => {
    const filterContact = props.contacts.filter(
      (contact) => contact.id === params.id
    )
    setContact(filterContact[0])
  }, [])

  return (
    <div className='ui main'>
      <h2>Edit Contact</h2>
      <form className='ui form' onSubmit={update}>
        <div className='field'>
          <label>Name</label>
          <input
            value={contact.name}
            placeholder='Name'
            name='name'
            type='text'
            onChange={handleChange}
          />
        </div>
        <div className='field'>
          <label>Email</label>
          <input
            placeholder='Email'
            name='email'
            type='text'
            value={contact.email}
            onChange={handleChange}
          />
        </div>
        <button className='ui blue button' type='submit'>
          Update
        </button>
      </form>
    </div>
  )
}

export default EditContact
