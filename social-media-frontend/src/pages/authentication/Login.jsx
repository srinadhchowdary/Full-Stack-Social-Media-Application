import React from 'react'
import { Formik, Form, Field } from 'formik'
import { TextField, Button } from '@mui/material'
import * as Yup from 'yup'
import './Login.css'

const initialValues = {
  email: "",
  password: ""
}

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required'),

  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
})

const Login = () => {

  const handleSubmit = (values) => {
    console.log('handle Submit', values)
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form className="login-form">

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

          <Button

            sx={{padding:".8rem 0rem" }}
            type="submit"
            variant="contained"
            fullWidth
          >
            Login
          </Button>

        </Form>
      )}
    </Formik>
  )
}

export default Login
