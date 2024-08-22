// Use type safe message keys with `next-intl`
type Messages = typeof import("./src/locales/th.json");
// eslint-disable-next-line no-unused-vars
declare interface IntlMessages extends Messages {}

type TypeReCaptchaInstance =
  import("./src/apis/recaptcha/@types").TypeReCaptchaInstance;
// eslint-disable-next-line no-unused-vars
declare interface Window {
  CookieConsent: any;
  cc_wrapper_config: any;
  dataLayer: any;
  cookieConsentWrapperEvents: any;
}
