import { Flex, Image } from '@chakra-ui/react';
const CardWeb = props => {
  return (
    <Flex maxW="500px" rounded="sm">
      <Flex>
        <Image src={props.image} />
      </Flex>
    </Flex>
  );
};

export default CardWeb;
