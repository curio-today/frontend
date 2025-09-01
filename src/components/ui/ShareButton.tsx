"use client"

import Button from "./Button";

export type ShareButtonProps = {
    urlToCopy: string,
}
const ShareButton = ({ urlToCopy }: ShareButtonProps) => {

    function copySlug() {
        navigator.clipboard.writeText(urlToCopy);
        alert("URL was coppied!\nP.S. In the future notifications will appear in the bottom (pop-up message)")
    }

    return (
        <Button icon={{ type: "share" }} mode="noBorder" onClick={copySlug}/>
    )
}

export default ShareButton;