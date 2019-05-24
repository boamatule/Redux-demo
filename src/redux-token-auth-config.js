import { generateAuthActions } from 'redux-token-auth'
import { authUrl } from './constants'

const config = {
  authUrl: 'http://localhost:3001///',
  userAttributes: (
    uid: 'uid'
  )
}

const {
  registerUser,
  signInUser,
  signOutUser,
  verifyCredentials,
} = generateAuthActions(config)

export {
  registerUser,
  signInUser,
  signOutUser,
  verifyCredentials,
}