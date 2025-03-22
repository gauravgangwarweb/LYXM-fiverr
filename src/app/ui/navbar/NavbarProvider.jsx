import { useTranslations } from "next-intl"
import Navbar from "./Navbar"

const NavbarProvider = () => {
    const t = useTranslations("sidebarContents")
    const buttonT = useTranslations("buttons") //for the contact us button
    const buttonContent = {
        contactUs: buttonT("contactButton")
      }

    const sideBarText = {
        link1: t("meet"),
        link2: t("faq"),
        link3: t("invest"),
        link4: t("legal"),
    }

    return (
        <div>
            <Navbar buttonText={buttonContent} sidebar={sideBarText} />
        </div>
    )
}

export default NavbarProvider