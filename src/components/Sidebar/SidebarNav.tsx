import { Stack } from "@chakra-ui/react";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";

import NavLink from "./NavLink";
import NavSection from "./NavSection";

const SidebarNav: React.FC = () => {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GERAL">
        <NavLink icon={RiDashboardLine} label="Dashboard" href="/dashboard" />
        <NavLink icon={RiContactsLine} label="Usuários" href="/users" />
      </NavSection>
      <NavSection title="AUTOMAÇÃO">
        <NavLink icon={RiInputMethodLine} href="/forms" label="Formulários" />
        <NavLink icon={RiGitMergeLine} href="/automations" label="Automação" />
      </NavSection>
    </Stack>
  );
};

export default SidebarNav;
