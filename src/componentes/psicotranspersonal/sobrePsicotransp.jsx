import Servicios from "../about/Servicios";
import ScrollSteps from "../about/ScrollSteps";
import Footer from "../footer/Footer";
import { getConfigBotones } from "../../componentes/ui/botones/configBotones";

export default function SobrePsicotransp() {

    const botones = getConfigBotones().filter(b => b.label !== "Psicotranspersonal");
    return (
        <div>
            <Servicios />
            <ScrollSteps />
            <Footer botones={botones} />
        </div>
    );
}
