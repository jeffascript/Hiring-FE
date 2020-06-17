import React from 'react'
import { FormGroup, Label, Input } from 'reactstrap';

const InputGroup = ({ name, type='text', onChange, value, label }) => {
    return (
        <>
            <FormGroup>
                <Label for={name}>{label}</Label>
                <Input type={type} name={name} id={name} placeholder={name} value={value} onChange={onChange} />
            </FormGroup>
        </>
    )
}

export default InputGroup;