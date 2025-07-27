'use client'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import React from 'react'
import { useFormik } from 'formik'
import { userValues } from '@/Types/userType'
import { useDispatch } from 'react-redux'
import { userLogin } from '@/lib/userSlice'

export default function Login() {
// email : moh.hat226@gmail.com
// Pass : Moh123@a

  const dispatch = useDispatch()
const initialValues:userValues = {
      email : '',
      password : '',
    }
  const formik = useFormik({
    initialValues , 
    onSubmit: (values) => {
      dispatch(userLogin(values));
    }
  })
  return <>
    <Box
  sx={{
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    color: '#1976D2',
  }}
>
  <Box
    sx={{
      width: 400,
      p: 4,
      borderRadius: 2,
      boxShadow: 3,
      backgroundColor: '#fff',
    }}
  >
     <form onSubmit = {formik.handleSubmit}>

     
    <Typography variant="h5" align="center" gutterBottom>
      Login
    </Typography>
    <Box>

    <TextField
      fullWidth
      margin="normal"
      label="Email"
      variant="outlined"
      type="email"
      name="email"
      id='email'
      onChange={formik.handleChange}
      value={formik.values.email}
      />

      </Box>
    <TextField
      fullWidth
      margin="normal"
      label="Password"
      type="password"
      variant="outlined"
      name='password'
      id='password'
      onChange={formik.handleChange}
      value={formik.values.password}
    />

    <Button
      fullWidth
      variant="contained"
      color="primary"
      sx={{ mt: 2 }}
      type='submit'
    >
      Login
    </Button>

    <Typography variant="body2" align="center" sx={{ mt: 2, color: '#333' }}>
  Don’t have an account?{' '}
  <Link href="/register" sx={{ color: '#1976D2' }}>
    Sign up
  </Link>
</Typography>
</form>
  </Box>
</Box>
  </>
}
