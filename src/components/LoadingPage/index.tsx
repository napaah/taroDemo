import { View, Image } from "@tarojs/components"
import gif from './images/loading.gif'
import './index.scss'

const LoadingPage = () => {
  return (
    <View className='LoadingPage'>
      <Image className='image' src={gif} />
    </View>
  )
}

export default LoadingPage
