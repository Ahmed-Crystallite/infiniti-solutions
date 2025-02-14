import Image from "next/image"
import BG from "media/home/background_noise.png"
import Avatar1 from "media/home/icons/avatar.png"
import { AutoPlaySlider } from "./index"
const Reviews = () => {
  return (
    <section>
      <div className="relative z-10 lg:py-[100px] md:py-[80px] py-[50px]">
        <Image
          src={BG}
          alt="noise"
          priority
          className="absolute bg-white -z-10 w-full h-full inset-0 object-cover object-center"
        />
        <div className="container">
          <AutoPlaySlider arrowsCss="sm:!justify-end" counter={true}>
            {[
              [
                "“ They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.”",
                Avatar1,
                "Michael Kaizer",
                "CEO of Basecamp Corp",
              ],
              [
                "“ They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.”",
                Avatar1,
                "Michael Kaizer",
                "CEO of Basecamp Corp",
              ],
              [
                "“ They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.”",
                Avatar1,
                "Michael Kaizer",
                "CEO of Basecamp Corp",
              ],
              [
                "“ They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.”",
                Avatar1,
                "Michael Kaizer",
                "CEO of Basecamp Corp",
              ],
              [
                "“ They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.”",
                Avatar1,
                "Michael Kaizer",
                "CEO of Basecamp Corp",
              ],
            ].map(([desc, img, name, about], i) => (
              <div key={i} className="grow-0 shrink-0 basis-full px-5">
                <p className="2xl:text-[36px] xl:text-[30px] lg:text-[25px] md:text-[20px] sm:text-[18px] text-[16px] leading-normal font-semibold">
                  {desc}
                </p>
                <div className="flex items-center gap-x-3 mt-[50px]">
                  <Image
                    src={img}
                    alt="avatar"
                    width={70}
                    height={70}
                    className="w-[70px] h-[70px] rounded-full object-cover object-left"
                  />
                  <div>
                    <h4 className="md:text-[20px] text-[18px] leading-tight font-bold text-black mb-3">
                      {name}
                    </h4>
                    <span className="block md:text-base text-sm font-medium leading-tight text-secondary">
                      {about}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </AutoPlaySlider>
        </div>
      </div>
    </section>
  )
}

export default Reviews
