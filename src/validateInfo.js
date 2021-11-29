export default function validateInfo (values) {
    let errors = {};
    if (!values.username.trim()) {
        errors.username= "Username required";
    }
    if (!values.email) {
        errors.email= "Email required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email= "Invalid email";
    }
    if (!values.password) {
        errors.password= "Password required";
    } else if (values.password.length < 6) {
        errors.password= "Password needs to be min 6 characters or more";
    }
    if (!values.password2) {
        errors.password2= "Password required"
    } else if (values.password2 !== values.password) {
        errors.password2= "Passwords do not match"
    }
    return errors;
}