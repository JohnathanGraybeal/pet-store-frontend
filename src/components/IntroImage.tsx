import { Container } from "@chakra-ui/react";

import Image, { StaticImageData } from 'next/image'

interface IntroImageProps {
    alttext?: string;
    imagepath?: string | StaticImageData; 
    blururl?: string;
  }

export const IntroImage: React.FC<IntroImageProps> = ({ alttext, imagepath, blururl }) => {
    return (
      <Container
      paddingTop={100}
      style={{position:"relative"}}>
        <Image
        src={imagepath}
        alt={alttext}
        layout="responsive"
        sizes="50vw"
        placeholder="blur"
        blurDataURL={blururl}
        />
      </Container>
    );
  };