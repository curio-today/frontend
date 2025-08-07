import "./index.scss"
import { AnimatedIconButton } from "@/components/ui/animated";

const BurgerIconButton = () => {
    return (
        <AnimatedIconButton name="burger-icon">
            <span />
            <span />
            <span />
            <span />
        </AnimatedIconButton>
    );
}

export default BurgerIconButton;