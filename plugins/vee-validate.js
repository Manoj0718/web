import { extend } from 'vee-validate'
import { required, email, alpha } from 'vee-validate/dist/rules'

extend('required', {
  ...required,
  message: 'You Forget To Fill this.',
})

extend('email', {
  ...email,
  message: 'Email adress not correct.',
})

extend('alpha', {
  ...alpha,
  message: 'This field must only contain alphabetic characters',
})
