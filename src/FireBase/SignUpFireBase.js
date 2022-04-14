import { auth } from './FireBase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

async function signUpFireBase(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    return user
  } catch (error) {
      throw error
  }
}

export {signUpFireBase}
