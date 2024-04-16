import styles from './aboutDetails.module.css';
import Image from "next/image";

type DetailsProps = {
  title: string;
  lecturer: string;
  image: string;
};

export function AboutDetails({title, lecturer, image}: DetailsProps) {
  console.log(image)

  return (
    <div>
      <h2>{lecturer}</h2>
     <Image src={image} alt='human' width={350} height={200}/> 

      
    </div>
  );
}
