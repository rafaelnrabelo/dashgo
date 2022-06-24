import { Text } from "@chakra-ui/react";

const Logo: React.FC = () => {
  return (
    <Text
      fontSize={["2xl", "3xl"]}
      fontWeight="bold"
      letterSpacing="tight"
      w="64"
    >
      dashgo
      <Text color="pink.500" ml="1" as="span">
        .
      </Text>
    </Text>
  );
};

export default Logo;
