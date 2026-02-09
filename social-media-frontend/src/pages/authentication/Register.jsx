import React from 'react'
import { Formik, Form, Field } from 'formik'
import {
  TextField,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
  FormControl
} from '@mui/material'
import * as Yup from 'yup'
import './Login.css'

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  gender: ''
}

const validationSchema = Yup.object({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),

  email: Yup.string()
    .email('Invalid email')
    .required('Email is required'),

  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),

  gender: Yup.string().required('Gender is required'),
})

const Register = () => {

  const handleSubmit = (values) => {
    console.log('Register Values:', values)
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form className="login-form">

          {/* First Name */}
          <Field
            as={TextField}
            name="firstName"
            label="First Name"
            fullWidth
            error={touched.firstName && Boolean(errors.firstName)}
            helperText={touched.firstName && errors.firstName}
          />

          {/* Last Name */}
          <Field
            as={TextField}
            name="lastName"
            label="Last Name"
            fullWidth
            error={touched.lastName && Boolean(errors.lastName)}
            helperText={touched.lastName && errors.lastName}
          />

          {/* Email */}
          <Field
            as={TextField}
            name="email"
            label="Email"
            type="email"
            fullWidth
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && errors.email}
          />

          {/* Password */}
          <Field
            as={TextField}
            name="password"
            label="Password"
            type="password"
            fullWidth
            error={touched.password && Boolean(errors.password)}
            helperText={touched.password && errors.password}
          />

          {/* Gender */}
          <FormControl error={touched.gender && Boolean(errors.gender)}>
            <FormLabel>Gender</FormLabel>
            <Field as={RadioGroup} name="gender" row>
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
            </Field>
          </FormControl>

          {/* Register Button */}
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ padding: '0.8rem 0' }}
          >
            Register
          </Button>

        </Form>
      )}
    </Formik>
  )
}

export default Register
