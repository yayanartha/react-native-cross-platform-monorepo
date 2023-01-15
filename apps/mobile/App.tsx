import 'expo-dev-client'
import { NativeNavigation } from 'app/navigation/mobile'
import { Provider } from 'app/provider'
import { useFonts } from 'expo-font'

export default function App() {
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  })

  if (!loaded) {
    return null
  }

  return (
    <Provider>
      <NativeNavigation />
    </Provider>
  )
}
