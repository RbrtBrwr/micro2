import React, {useState, useEffect} from "react";
import { auth, db } from "../utils/firebase-config";

export const UserContext = React.createContext(null);

export default function UserContextProvider({ children }){
    const [user, setUser] = useState(null);

    const getUserProfile = async (email) => {
        const usersRef = db.collection("users");
        const usersCollection = await usersRef.where("email", "==", email).get();
        const profile = usersCollection.docs[0];

        if(!profile) return null;

        return {
            id: profile.id,
            ...profile.data()
        };
    }

    const createUser = async (userId, data) => {
        return db.collection("users").doc(userId).set({...data});
    }

    useEffect(() => {

        auth.onAuthStateChanged(async (firebaseUser) => {
            if(firebaseUser){

                let userProfile = await getUserProfile(firebaseUser.email);

                if(!userProfile){
                    createUser(firebaseUser.uid, {
                        email: firebaseUser.email
                    })
                }
                setUser(userProfile)
            } else{
                setUser(null);
            }
        });
        return() => {

        }
    }, [])

    return(
        <div>
            <UserContext.Provider value={{user, setUser}}>
            { children }
            </UserContext.Provider>
        </div>
    )
}