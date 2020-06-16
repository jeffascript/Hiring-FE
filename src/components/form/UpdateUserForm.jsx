import React, { useState } from 'react'
import { Button, Form } from 'reactstrap';
import Input from './InputGroup'


const UpdateUserForm = ({ initialValue, close, updateUser }) => {
  const [username, setUsername] = useState(initialValue ? initialValue.username : '')
  const [firstname, setFirstname] = useState(initialValue ? initialValue.firstname : '')
  const [surname, setSurname] = useState(initialValue ? initialValue.surname : '')
  const [email, setEmail] = useState(initialValue ? initialValue.email : '')
  const [location, setLocation] = useState(initialValue ? initialValue.location : '')
  const [github, setGithub] = useState(initialValue ? initialValue.github : '')
  const [linkedin, setLinkedin] = useState(initialValue ? initialValue.linkedIn : '')


  const handleSubmit = async (e) => {
    e.preventDefault()
    let token = localStorage.token
    let newUserInfo = {
      username,
      firstname,
      surname,
      email,
      location,
      github,
      linkedIn:linkedin
    }
    try {
      let request = await fetch(`${process.env.REACT_APP_URL}/api/user`, {
        method: "PUT",
        body: JSON.stringify(newUserInfo),
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token
        },
      });
      if (request.ok) {
        console.log('updated')
        updateUser(await request.json())
        close()

      }
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <div>
      {initialValue &&
        <Form style={{ width: '300px', height: '200px' }}>
          <Input type={'text'} label={'Username'} name={'username'} value={username} onChange={(e) => setUsername(e.target.value)} />
          <Input type={'text'} label={'Firstname'} name={'firstname'} value={firstname} onChange={(e) => setFirstname(e.target.value)} />
          <Input type={'text'} label={'Surname'} name={'surname'} value={surname} onChange={(e) => setSurname(e.target.value)} />
          <Input type={'email'} label={'Email'} name={'email'} value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input type={'text'} label={'Location'} name={'location'} value={location} onChange={(e) => setLocation(e.target.value)} />
          <Input type={'url'} label={'Github link'} name={'github'} value={github} onChange={(e) => setGithub(e.target.value)} />
          <Input type={'url'} label={'Linkedin link'} name={'linkedin'} value={linkedin} onChange={(e) => setLinkedin(e.target.value)} />
          <Button onClick={handleSubmit}>Update</Button>
        </Form>
      }
    </div>
  )
}

export default UpdateUserForm;