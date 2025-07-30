import { auth, db } from "@/firebaseConfig";
import { ref, set } from "firebase/database";
import { ApplianceData } from "./load-data";

async function sendDataToFirebase(data: ApplianceData) {
  try {
    if (!auth.currentUser) throw new Error("User not signed in")
    const path = "data"

    await set(ref(db, path), {
      ac: data.ac,
      dc: data.dc
    })
  } catch (error) {
    console.error("DB access denied: ", error)
  }
}

export { sendDataToFirebase };
