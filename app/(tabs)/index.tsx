import CustomBtn from "@/components/CustomBtn";
import { auth } from "@/firebaseConfig";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const EMAIL = "abcd@gmail.com"
const PASSWORD = "222222"

export default function LoginScreen() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true)
      } else {
        setIsAuthenticated(false)
      }
    })

    return unsubscribe;
  }, [])


  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, EMAIL, PASSWORD)
    } catch (error) {
      console.error("Sign-in error: ", error)
    }
  }

  const handleSignOut = () => {
    try {
      if (auth) {
        signOut(auth)
      }
    } catch (error) {
      console.error("Failed to sign-out: ", error)
    }
  }

  return (
    <SafeAreaView style={styles.safe} edges={["left", "right"]}>
      <View style={styles.center}>
        <CustomBtn
          name={isAuthenticated ? "Already signed in" : "Sign In"}
          onPress={handleSignIn}
          isSelected={isAuthenticated}
          defaultVariant="negative"
          selectedVariant="positive"
          disabled={isAuthenticated}
        />
        <CustomBtn
          name="Sign out"
          onPress={handleSignOut}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: "auto"
  }
})
