import { signOut } from "firebase/auth"
import { auth } from "src/config/firebase"

export const handleSignOut = (): void => {
    signOut(auth)
    .catch((error) => {
        alert(error);
    });
}