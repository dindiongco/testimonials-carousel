type Props = {
    name: string
    description: string
    imgURL: string
  }
  
  function TestimonialItem({name, description, imgURL}: Props) {
    return (
      <div>
        <div><img src={imgURL} alt="" /></div>
        <div>
          <p>{name}</p>
          <p>{description}</p>
        </div>
      </div>
    )
  }
  
  export default TestimonialItem