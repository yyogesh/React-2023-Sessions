import { atom } from 'recoil';

export const Atom_todo_list = atom({
    // Creating atom named Atom_todo_list with default value as an empty array
    key: 'todo_list_state', // unique key value
    default: '', // empty array as default value initially
})