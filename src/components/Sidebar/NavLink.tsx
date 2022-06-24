import { ElementType } from "react";
import { Text, Icon, Link as ChakraLink, LinkProps } from "@chakra-ui/react";

import ActiveLink from "../ActiveLink";

interface NavLinkProps extends LinkProps {
  label: string;
  icon: ElementType;
}

const NavLink: React.FC<NavLinkProps> = ({ icon, label, href, ...props }) => {
  return (
    <ActiveLink href={href || ""} passHref>
      <ChakraLink display="flex" align="center" {...props}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {label}
        </Text>
      </ChakraLink>
    </ActiveLink>
  );
};

export default NavLink;
