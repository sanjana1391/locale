import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"
const Hero = () => {
  return (
    <div className="h-[90vh] w-full relative">
      <div className="text-white absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:text-left small:justify-end small:items-start small:p-32">
        {/* <h1 className="text-2xl-semi mb-4 drop-shadow-md shadow-black">
          Summer styles are finally here
        </h1> */}
  
        {/* <p style={{color:'black', background:'white', paddingLeft:'40px'}}>A medusa. js designed ecommerce website to allow people to search native,
         traditional and famous products globally and buy them with an initiative to
        support artisians work!!</p> */}
        <UnderlineLink href="/store">Explore products</UnderlineLink>
      </div>
      <Image
        src="/hero.jpg"
        layout="fill"
        loading="eager"
        priority={true}
        quality={90}
        objectFit="cover"
        // alt="Photo by @thevoncomplex https://unsplash.com/@thevoncomplex"
        className="absolute inset-0"
        draggable="false"
      />
    </div>
  )
}

export default Hero
