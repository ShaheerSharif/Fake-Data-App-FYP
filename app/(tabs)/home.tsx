import CustomBtn from "@/components/CustomBtn";
import DataBox from "@/components/DataBox";
import { appliances } from "@/constants/Appliances";
import { Appliance, ApplianceData, randomizeData } from "@/utils/load-data";
import { sendDataToFirebase } from "@/utils/send-data";
import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const [selected, setSelected] = useState<number[]>([]);
  const [applianceData, setApplianceData] = useState<ApplianceData>({ ac: 0, dc: 0 });

  const generateData = (selectedIndexes: number[], applianceList: Appliance[]) => {
    if (selectedIndexes.length === 0) {
      return { ac: 0, dc: 0 }
    }

    const rand_data = selectedIndexes.map(i => randomizeData(applianceList[i]))
    const sum = rand_data.reduce((acc, cur) => ({
      ac: acc.ac + cur.ac,
      dc: acc.dc + cur.dc
    }), { ac: 0, dc: 0 })
    return sum
  }

  const handleSendData = async (index: number) => {
    const newSelected = selected.includes(index)
      ? selected.filter(i => i !== index)
      : [...selected, index]

    setSelected(newSelected)

    const sum = generateData(newSelected, appliances)
    setApplianceData(sum)

    await sendDataToFirebase(sum)
  }


  const handleResetData = async () => {
    const emptyData: ApplianceData = { ac: 0, dc: 0 }
    setSelected([])
    setApplianceData(emptyData)
    await sendDataToFirebase(emptyData)
  }

  return (
    <SafeAreaView style={styles.safe} edges={["left", "right"]}>
      <View style={styles.topSection}>
        <DataBox data={applianceData} />
        <CustomBtn
          name="Reset data"
          onPress={handleResetData}
        />
      </View>
      <View style={styles.bottomSection}>
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {appliances.map((value, index) => (
            <CustomBtn
              key={index}
              name={value.name}
              onPress={() => handleSendData(index)}
              isSelected={selected.includes(index)}
              selectedVariant="positive"
            />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1
  },
  topSection: {
    paddingVertical: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomSection: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  scroll: {
    backgroundColor: "#111111",
    width: "90%",
    height: 400,
    borderRadius: 12,
    marginBottom: 15,
    borderColor: "#404040",
    borderWidth: 1
  },
  scrollContent: {
    alignItems: "center",
    paddingVertical: 20,
  },
});
