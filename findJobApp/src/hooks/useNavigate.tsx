import { useNavigation } from '@react-navigation/native'

const useNavigate = () => {
  const navigation = useNavigation<any>()

  const navigateToSignUp = () => {
    navigation.navigate('AuthStack', {
      screen: 'SignUp',
    })
  }

  const navigateToSignIn = () => {
    navigation.navigate('AuthStack', {
      screen: 'SignUp'
    })
  }

  return {
    navigateToSignUp,
    navigateToSignIn,
  }
}

export default useNavigate
