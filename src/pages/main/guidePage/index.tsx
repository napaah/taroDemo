import {LoadingPage} from "@/components"
import { View } from "@tarojs/components"
import Taro from "@tarojs/taro"
import { useEffect, useState } from "react"

const GuidePage = () => {
  const [loading, setloading] = useState(true)
  useEffect(() => {
   setTimeout(() => {
    setloading(false)
    Taro.switchTab({
      url: '/pages/main/homePage/index'
    })
   }, 1000);
  })


  return (
    <View className='GuidePage'>
      <LoadingPage show={loading} />
    </View>
  )

}
export default GuidePage
