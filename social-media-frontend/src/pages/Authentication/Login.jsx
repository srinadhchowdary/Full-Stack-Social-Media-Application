import React from 'react'
import { Formik, Form, Field } from 'formik'
import { TextField, Button } from '@mui/material'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { loginUserAction } from '../../Redux/Auth/auth.action'
import './Login.css'

/* ---------------- INITIAL STATE ---------------- */
const initialValues = {
  email: '',
  password: '',
}

/* ---------------- VALIDATION ---------------- */
const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required'),

  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
})

/* ---------------- COMPONENT ---------------- */
const Login = () => {
  const dispatch = useDispatch()

  const handleSubmit = (values, { setSubmitting }) => {
    console.log('Login Values:', values)
    dispatch(loginUserAction({ data: values }))
    setSubmitting(false)
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, isSubmitting }) => (
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

          {/* Login Button */}
          <Button
            type="submit"
            variant="contained"
            fullWidth
            disabled={isSubmitting}
            sx={{ padding: '0.8rem 0' }}
          >
            {isSubmitting ? 'Logging in...' : 'Login'}
          </Button>

        </Form>
      )}
    </Formik>
  )
}

export default Login
