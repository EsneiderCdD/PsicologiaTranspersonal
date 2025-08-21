import Terminos from "../terminos/Terminos";
import ScrollSteps from "../about/ScrollSteps";
import Footer from "../footer/Footer";
import { useConfigBotones } from "../../componentes/ui/botones/configBotones";

export default function SobreTyC() {

    const botones = useConfigBotones().filter(b => b.label !== "+");
    return (
        <div>
            <Terminos />
            <ScrollSteps />
            <Footer botones={botones} />
        </div>
    );
}
