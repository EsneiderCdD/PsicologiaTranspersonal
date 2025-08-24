import { s } from "framer-motion/client";
import { useNavigate, useLocation } from "react-router-dom";

export function useConfigBotones() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollOrNavigate = (pathname, hashId) => {
    const hash = `#${hashId}`;
    if (location.pathname === pathname) {
      const el = document.getElementById(hashId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
      else window.location.hash = hash; 
    } else {
      navigate({ pathname, hash });
    }
  };

  return [
    {
      label: "Inicio",
      variant: "principal",
      onClick: () => scrollOrNavigate("/", "inicio"),
      initial: { boxShadow: "none", backgroundColor: "#321033" },
      animate: {
        boxShadow: "0 0 20px #6b21a8, 0 0 40px #ca66eb66",
        backgroundColor: "#6b21a8",
        transition: { delay: 1, duration: 2, ease: "easeInOut" },
      },
 
    },
    {
      label: "Sobre mí",
      onClick: () => scrollOrNavigate("/sobremi", "sobremi"),
      initial: { backgroundColor: "transparent", color: "#000" },
      animate: {
        backgroundColor: "#f7edff",
        color: "#6b21a8",
        boxShadow: "0 0 50px #8c00ff70 ",
        transition: { delay: 0.6, duration: 1.5, ease: "easeInOut" },
      },
    },
    {
      label: "Psicotranspersonal",
      onClick: () => scrollOrNavigate("/psicotranspersonal", "psicotranspersonal"),
      initial: { backgroundColor: "transparent", color: "#999" },
      animate: {
        backgroundColor: "#f7edff",
        color: "#6b21a8",
        boxShadow: "0 0 70px #6b21a87f ",
        transition: { delay: 0.6, duration: 1.5, ease: "easeInOut" },
      },
    },
    {
      label: "Círculo de Mujeres",
      onClick: () => scrollOrNavigate("/circulomujeres", "circulomujeres"),
      initial: { backgroundColor: "transparent", color: "#999" },
      animate: {
        backgroundColor: "#f7edff",
        color: "#6b21a8",
        boxShadow: "0 0 90px #6b21a88d ",
        transition: { delay: 0.6, duration: 1.5, ease: "easeInOut" },
      },
    },
    {
      label: "+",
      onClick: () => scrollOrNavigate("/tyc", "tyc"),
      initial: { backgroundColor: "transparent", color: "#999" },
      animate: {
        backgroundColor: "#f7edff",
        color: "#6b21a8",
        boxShadow: "0 0 90px #6b21a82e ",
        transition: { delay: 0.6, duration: 1.5, ease: "easeInOut" },
      },
    },
  ];
}
