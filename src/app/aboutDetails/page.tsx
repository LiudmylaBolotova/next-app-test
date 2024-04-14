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
     <Image src={image} alt='human' width={300} height={200}/> 
     <h2>{lecturer}</h2>
      
    </div>
  );
}
