"use client"

import Button from "./Button";

export type ShareButtonProps = {
    urlToCopy: string,
}

export const ShareButton = ({ urlToCopy }: ShareButtonProps) => {

    function copySlug() {
        navigator.clipboard.writeText(urlToCopy);
        alert("URL was coppied!\nP.S. In the future notifications will appear in the bottom (pop-up message)")
    }

    return (
        <Button icon={{
            icon: "share"
        }} mode="noBorder" onClick={copySlug}/>
    )
}

export default ShareButton;