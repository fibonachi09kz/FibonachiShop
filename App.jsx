import { Provider, useSelector } from "react-redux";
import {store} from "./src/store/store";
import {SafeAreaProvider} from "react-native-safe-area-context";
import EntryPoint from "./src/screens/EntryPoint";

const App = () => {

	return (
		<SafeAreaProvider>
			<Provider store={store}>

				<EntryPoint />

			</Provider>
		</SafeAreaProvider>
	);
}



export default App;
