import { View, Image } from "@tarojs/components"
import classnames from "classnames"
import gif from './images/loading.gif'
import './index.scss'

const LoadingPage = ({
  show = true
}: {show?: boolean}) => {
  return (
    <View className={classnames('LoadingPage df-c', {
      show
    })}
    >
      <Image className='image' src={gif} />
    </View>
  )
}

export default LoadingPage
