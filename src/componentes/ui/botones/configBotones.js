import { useNavigate } from "react-router-dom";

export function getConfigBotones() {
  const navigate = useNavigate();

  return [
    {
      label: "Inicio",
      variant: "principal",
      onClick: () => navigate("/"),
      initial: { boxShadow: "none", backgroundColor: "#321033" },
      animate: {
        boxShadow: "0 0 20px #6b21a8, 0 0 40px #ca66eb66",
        backgroundColor: "#800089",
        transition: { delay: 1, duration: 2, ease: "easeInOut" },
      },
      whileHover: {
        backgroundColor: "#6b21a8",
        boxShadow: "0 0 25px #6b21a8, 0 0 50px #ca66ebaa",
        transition: { duration: 1.5 },
      },
    },
    {
      label: "Sobre mí",
      onClick: () => navigate("/sobremi"),
      initial: { backgroundColor: "transparent", color: "#000" },
      animate: {
        backgroundColor: "#f7edff",
        color: "#ca66eb",
        boxShadow: "0 0 50px #8c00ff70 ",
        transition: { delay: 0.6, duration: 1.5, ease: "easeInOut" },
      },
    },
    {
      label: "Psicotranspersonal",
      onClick: () => navigate("/psicotranspersonal"),
      initial: { backgroundColor: "transparent", color: "#999" },
      animate: {
        backgroundColor: "#f7edff",
        color: "#ca66eb",
        boxShadow: "0 0 70px #6b21a87f ",
        transition: { delay: 0.6, duration: 1.5, ease: "easeInOut" },
      },
    },
    {
      label: "Círculo de Mujeres",
      onClick: () => navigate("/circulomujeres"),
      initial: { backgroundColor: "transparent", color: "#999" },
      animate: {
        backgroundColor: "#f7edff",
        color: "#ca66eb",
        boxShadow: "0 0 90px #6b21a88d ",
        transition: { delay: 0.6, duration: 1.5, ease: "easeInOut" },
      },
    },
    {
      label: "+",
      onClick: () => navigate("/tyc"),
      initial: { backgroundColor: "transparent", color: "#999" },
      animate: {
        backgroundColor: "#f7edff",
        color: "#ca66eb",
        boxShadow: "0 0 90px #6b21a82e ",
        transition: { delay: 0.6, duration: 1.5, ease: "easeInOut" },
      },
    },
  ];
}
