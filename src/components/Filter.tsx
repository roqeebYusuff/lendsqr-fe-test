import React from 'react'
import { DropdownItem, DropdownMenu, FormGroup, Input, Label } from 'reactstrap'

const Filter: React.FC = () => {
    return (
        <DropdownMenu className='filter-menu'>
            <FormGroup>
                <Label>Organization</Label>
                <Input
                    name="select"
                    type="select"
                >
                    <option>
                        Select
                    </option>
                </Input>
            </FormGroup>

            <FormGroup>
                <Label>Username</Label>
                <Input
                    id="username"
                    name="username"
                    type="text"
                />
            </FormGroup>

            <FormGroup>
                <Label>Email</Label>
                <Input
                    id="email"
                    name="email"
                    type="text"
                />
            </FormGroup>

            <FormGroup>
                <Label>Date</Label>
                <Input
                    id="date"
                    name="date"
                    type="date"
                />
            </FormGroup>

            <FormGroup>
                <Label>Phone Number</Label>
                <Input
                    id="phone-number"
                    name="phone-number"
                    type="text"
                    placeholder='Phone Number'
                />
            </FormGroup>


            <FormGroup>
                <Label>Status</Label>
                <Input
                    name="select"
                    type="select"
                >
                    <option>
                        Select
                    </option>
                </Input>
            </FormGroup>
        </DropdownMenu>
    )
}

export default Filter
