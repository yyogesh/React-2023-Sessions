import React from 'react'
import { useRecoilValue } from 'recoil' // importing useRecoilValue hook from 'recoil' package module
import { Atom_todo_list } from '../recoilState'

const About = () => {
    const todo = useRecoilValue(Atom_todo_list)
    return (
        <div>About { todo }</div>
    )
}

export default About