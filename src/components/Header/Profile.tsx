import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

const Profile: React.FC<ProfileProps> = ({ showProfileData = true }) => {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Rafael Nogueira Rabelo</Text>
          <Text color="gray.300" fontSize="small">
            rafaelnrabelo@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Rafael Nogueira Rabelo" bg="pink.500" />
    </Flex>
  );
};

export default Profile;
