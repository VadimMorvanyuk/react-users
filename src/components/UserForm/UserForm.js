import { useState } from "react";
import Card from "../UI/Card";
import './UserForm.css';

const UserForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const nameHandler = (event) => {
    setName(value => value = event.target.value)
  }
  const ageHandler = (event) => {
    setAge(value => value = event.target.value);
  }

  return (
    <Card>
      <form>
        <label htmlFor="name">User Name</label>
        <input id='name' type="text" onChange={nameHandler} value={name}/>
        <label htmlFor="age">Age (Years)</label>
        <input id='age' type="number" onChange={ageHandler} value={age} />
      </form>
    </Card>
    )
};

export default UserForm;
