import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script src="/cookie-consent-config.js" type="text/javascript" async />
      </Head>
      <body>
        {/* Google Tag Manager (noscript) */}
        {/* <noscript
          dangerouslySetInnerHTML={{
            __html: `
              <iframe
                src="https://www.googletagmanager.com/ns.html?id=GTM-TNP7ZDDS"
                height="0"
                width="0"
                style="display:none;visibility:hidden"
              ></iframe>
            `,
          }}
        /> */}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

{
  /* Google Tag Manager */
}
{
  /* <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),
                    dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-TNP7ZDDS');
            `,
          }}
        /> */
}

{
  /* <script
          src="http://localhost:3000/call-consent.js"
          type="text/javascript"
          async
        /> */
}
