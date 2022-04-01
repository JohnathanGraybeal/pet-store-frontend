import { Container } from "@chakra-ui/react";

import Image from 'next/image'

interface IntroImageProps {
    alttext?: string;
    imagepath?: string;
  }

export const IntroImage: React.FC<IntroImageProps> = ({ alttext, imagepath }) => {
    return (
      <Container
      paddingTop={50}
      style={{position:"relative"}}>
        <Image
        src={imagepath}
        alt={alttext}
        layout="responsive"
        sizes="50vw"
        placeholder="blur"
        />
      </Container>
    );
  };