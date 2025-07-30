import { Colors } from "@/constants/Colors";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type ColorVariant = "positive" | "negative" | "primary"

type CustomBtnProps = {
  name: string
  onPress: () => void
  isSelected?: boolean
  defaultVariant?: ColorVariant
  selectedVariant?: ColorVariant
  disabled?: boolean
}

export default function CustomBtn({
  name,
  onPress,
  isSelected = false,
  defaultVariant = "primary",
  selectedVariant = "primary",
  disabled = false
}: CustomBtnProps) {
  const defaultStyle = styles[defaultVariant]
  const selectedStyle = styles[selectedVariant]

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.btn,
        defaultStyle,
        isSelected && selectedStyle,
      ]}
    >
      <Text style={styles.text}>
        {name}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: Colors.colorBtn,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    width: "80%",
    borderWidth: 1,
    borderColor: Colors.colorBorder,
    marginVertical: 10,
    elevation: 5
  },
  positive: {
    backgroundColor: Colors.colorBtnPositive,
    borderColor: Colors.colorBtnPositive,
  },
  negative: {
    backgroundColor: Colors.colorBtnNegative,
    borderColor: Colors.colorBtnNegative,
  },
  primary: {
    backgroundColor: Colors.colorBtn,
    borderColor: Colors.colorBorder
  },
  text: {
    color: Colors.colorText,
    fontSize: 18,
    fontWeight: "600",
  }
});
