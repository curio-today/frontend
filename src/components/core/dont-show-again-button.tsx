import { useTranslations } from "next-intl";
import { Button, ButtonProps } from "../ui/button";

export const DontShowAgainButton = ({ ...props }: ButtonProps) => {
    const t = useTranslations("Buttons.DontShowAgain")

    return (
        <Button
            variant="ghost"
            className="text-secondary text-sm"
            size="sm"
            {...props}
        >
            {t("label")}
        </Button>
    )
}