import { Box } from "@mui/material";
import { useRouter } from "next/router";

const NavLogo = () => {
  const router = useRouter();
  return (
    <div>
        {router.pathname === "/" && <Box>¡Bienvenido!</Box>}
        {router.pathname === "/planes" && <Box>¡Bienvenido!</Box>}
    </div>
)


};
export default NavLogo;
