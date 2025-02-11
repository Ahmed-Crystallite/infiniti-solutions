import Image from "next/image"
import BG from "media/home/background_noise.png"
import { AutoPlaySlider } from "./index"
const Reviews = () => {
  return (
    <section>
      <div className="relative z-10 md:pt-[100px] pt-[130px] pb-[60px]">
        <Image
          src={BG}
          alt="noise"
          priority
          className="absolute bg-white -z-10 w-full h-full inset-0 object-cover object-center"
        />
      <div className="container">
        <AutoPlaySlider>
            <div className="grow-0 shrink-0 basis-full px-5">
                <p>“ They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.”</p>
            </div>
            <div className="grow-0 shrink-0 basis-full px-5">
                <p>“ They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.”</p>
            </div>
            <div className="grow-0 shrink-0 basis-full px-5">
                <p>“ They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.”</p>
            </div>
        </AutoPlaySlider>
      </div>
      </div>
    </section>
  )
}

export default Reviews
