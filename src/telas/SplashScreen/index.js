import { View } from "react-native";
import styles from "./styles";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";

export default function SplashScreen({ navigation }) {
    // const navigation = useNavigation();
    function animacaoFinalizada() {
        navigation.reset({
            index: 0,
            routes: [{ name: 'Onboarding' }],
          });
    }

    return (
        <View style={styles.container}>
            <LottieView
                source={require("../../assets/splash-aluramed.json")}
                style={{ width: 300, height: 300 }}
                loop={false}
                autoPlay={true}
                onAnimationFinish={animacaoFinalizada}
            />
        </View>
    );
}
