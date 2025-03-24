import { motion } from "framer-motion";


const Card = ({ title, description, buttonText, imageUrl }) => {


  const textVariants_1 = {
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
      variants={textVariants_1}
      transition={{ duration: 1, delay: 0.2 }}
    
    className="rounded overflow-hidden shadow-lg bg-gray-200">
      <img className="w-full " src={imageUrl} alt={title} />
      <div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">
            {description}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
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
        <div className=" grid grid-cols-3 items-center justify-center gap-3">
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



