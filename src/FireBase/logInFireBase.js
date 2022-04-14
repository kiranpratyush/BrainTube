import { auth } from './FireBase';
import { signInWithEmailAndPassword } from 'firebase/auth';

async function LogInFirebase(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    return user;
  } catch (error) {
    const errorMessage = error.message;
    throw new Error(`returned ${errorMessage}`);
  }
}

export { LogInFirebase };
