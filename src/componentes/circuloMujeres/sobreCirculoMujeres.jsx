import CirculoMujeres from "../about/CirculoMujeres";
import ScrollSteps from "../about/ScrollSteps";
import Footer from "../footer/Footer";
import { useConfigBotones } from "../../componentes/ui/botones/configBotones";

export default function SobreCirculoMujeres() {
    const botones = useConfigBotones().filter(b => b.label !== "Círculo de Mujeres");
    return (
        <div>
            <CirculoMujeres />
            <ScrollSteps />
            <Footer botones={botones} />
        </div>
    );
}
