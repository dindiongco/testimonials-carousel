type Props = {
    name: string
    title:string
    description: string
    imgURL: string
  }
  
  function TestimonialItem({name, title, description, imgURL}: Props) {
    return (
      <div className="sm:flex px-10 relative">
        <div className="order-last">
          <img src={imgURL} className="text-center w-full"/>
        </div>
        <div className="before:content-patternquotes">
          <p className="text-[1.375rem]">{description}</p>
          <div className="sm:flex gap-3 mt-5 before:absolute before:content-patternbg before:right-0 before:top-[-30%] before:z-[-999]">
            <p className="font-bold">{name}</p>
            <p className="text-secondary-500 font-thin">{title}</p>
          </div>
        </div>
      </div>
    )
  }
  
  export default TestimonialItem