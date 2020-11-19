import {useState, useEffect} from 'react'

const useForm = () => {

const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
});
const [errors, setErrors] = useState({})

const handleChange = e => {
    const { name, value} = e.target
    setValues({
        ...values,
        [name]: value
    });
};

const handleSubmit = e => {
    e.preventDefault();
};

    return {handleChange, values, handleSubmit};

};

export default useForm
