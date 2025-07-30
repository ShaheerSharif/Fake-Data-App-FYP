import { Colors } from "@/constants/Colors"
import { ApplianceData } from "@/utils/load-data"
import { StyleSheet, Text, View } from "react-native"

type DataBoxProps = {
  data: ApplianceData
}

export default function DataBox({ data }: DataBoxProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>AC Current: {data.ac.toFixed(2)} A</Text>
      <Text style={styles.text}>DC Current: {data.dc.toFixed(2)} A</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.colorView,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    width: "80%",
    borderWidth: 1,
    borderColor: "#444",
    marginVertical: 10,
    elevation: 5
  },
  text: {
    color: Colors.colorText,
    marginVertical: 5,
    fontSize: 18,
    fontWeight: "600",
  }
})
