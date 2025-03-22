import { useTranslations } from "next-intl";
import SignupCta from "./SignupCta";

const SignUpCtaProvider = () => {
  const t = useTranslations("signupCta");
  const translationText = {
    title: t("title"),
    disc: t("discription"),
    form: {
      option1: t("form.options.option1"),
      option2: t("form.options.option2"),
      option3: t("form.options.option3"),
      option4: t("form.options.option4"),
      buttonText: t("form.buttonText"),
    },
  };
  return (
    <>
      <SignupCta text={translationText} />
    </>
  );
};

export default SignUpCtaProvider;
