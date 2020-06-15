import React, { useState, useEffect } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


const UpdateUserForm = ({ initialValue }) => {
  const [username, setUsername] = useState(initialValue ? initialValue.username : '')
  const [firstname, setFirstname] = useState(initialValue ? initialValue.firstname : '')
  const [surname, setSurname] = useState(initialValue ? initialValue.surname : '')
  const [email, setEmail] = useState(initialValue ? initialValue.email : '')
  const [location, setLocation] = useState(initialValue ? initialValue.location : '')
  const [github, setGithub] = useState(initialValue ? initialValue.github : '')
  const [linkedin, setLinkedin] = useState(initialValue ? initialValue.linkedin : '')


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
      linkedin
    }

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

    }
  }

  return (
    <>
      {initialValue &&
        <Form >
          <FormGroup>
            <Label for="username">Username</Label>
            <Input type="text" name="username" id="username" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </FormGroup>
          <FormGroup>
            <Label for="firstname">First name</Label>
            <Input type="text" name="firstname" id="firstname" placeholder="firstname" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
          </FormGroup>
          <FormGroup>
            <Label for="surname">surname</Label>
            <Input type="text" name="surname" id="surname" placeholder="surname" value={surname} onChange={(e) => setSurname(e.target.value)} />
          </FormGroup>
          <FormGroup>
            <Label for="email">email</Label>
            <Input type="email" name="email" id="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </FormGroup>
          <FormGroup>
            <Label for="location">Location</Label>
            <Input type="text" name="location" id="location" placeholder="location" value={location} onChange={(e) => setLocation(e.target.value)} />
          </FormGroup>
          <FormGroup>
            <Label for="github">Github url</Label>
            <Input type="url" name="github" id="github" placeholder="github" value={github} onChange={(e) => setGithub(e.target.value)} />
          </FormGroup>
          <FormGroup>
            <Label for="linkedin">Linkedin Url</Label>
            <Input type="url" name="linkedin" id="linkedin" placeholder="linkedin" value={linkedin} onChange={(e) => setLinkedin(e.target.value)} />
          </FormGroup>
          <Button onClick={handleSubmit}>Submit</Button>
        </Form>
      }
    </>
  )
}

export default UpdateUserForm;