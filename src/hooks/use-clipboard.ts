import { useTranslations } from "next-intl";
import { toast } from "sonner";

export const useClipboard = () => {
    const t = useTranslations("Messages.clipboard");
    
    return {
        copy: (text: string) => {
            navigator.clipboard.writeText(text);
            toast.success(t("successMessage"));
        }
    }
}