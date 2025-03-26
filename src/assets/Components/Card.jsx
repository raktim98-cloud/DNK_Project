import { motion } from "framer-motion";


const Card = ({ title, description, buttonText, imageUrl }) => {


  const textVariants_4 = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  // const textVariants_2 = {
  //   hidden: { opacity: 0, x: 50 },
  //   visible: { opacity: 1, x: 0 },
  // };
  
  // // button var
  // const buttonVariants = {
  //   hidden: { opacity: 0, y: 10 },
  //   visible: { opacity: 1, y: 0 },
  // };

  return (
    <motion.div 
    
    
      initial="hidden"
      animate="visible"
      variants={textVariants_4}
      transition={{ duration: 1, delay: 0.2 }}
    
    className="relative rounded shadow-lg ">
      <div className="w-[363px] h-[481px]  ">
      <img className="size-full overflow-hidden object-cover  " src={imageUrl} alt={title} />
      </div>
      <div className="absolute inset-0 bg-black/50"></div>
      
      
      <div>
        <div className="px-6 py-4 absolute left-0 bottom-0 translate-x-5 -translate-y-7">
          <div className=" text-white font-bold text-xl mb-2">{title}</div>
          <p className=" text-white  text-lg pb-6">
            {description}
          </p>
          
          <button className="bg-white transition-all duration-500 hover:bg-black text-black hover:text-white font-bold py-2.5 px-5">
            {buttonText}
          </button>
        
        </div>
        
      </div>
    </motion.div>
  );
};

const CardList = () => {
  const cards = [
    {
      title: "20% Off On Tank Tops",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.",
      buttonText: "SHOP NOW",
      imageUrl: "/image_1.jpg" // Replace with your image URL
    },
    {
      title: "Latest Eyewear For You",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.",
      buttonText: "SHOP NOW",
      imageUrl: "/image_2.jpg" // Replace with your image URL
    },
    {
      title: "Let's Lorem Suit Up!",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.",
      buttonText: "CHECK OUT",
      imageUrl: "/image_3.jpg" // Replace with your image URL
    }
  ];

  return (
    <section className='bg-white'>
      <div className="container mx-auto">
        <div className="flex items-center justify-center gap-10">
      {cards.map((card, index) => (
        <Card 
          key={index} 
          title={card.title} 
          description={card.description} 
          buttonText={card.buttonText} 
          imageUrl={card.imageUrl} 
        />
      ))}
    </div>
    </div>
    </section>
  );
};

export default CardList;



