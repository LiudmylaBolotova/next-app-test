import Image from "next/image";

type DetailsProps = {
  title: string;
  lecturer: string;
  image: string;
};

export default function AboutDetails({ title, lecturer, image }: DetailsProps) {
  return (
    <div>
      <h2>{lecturer}</h2>
      <Image src={image} alt="human" width={350} height={200} />
      <p>{title}</p>
    </div>
  );
}
