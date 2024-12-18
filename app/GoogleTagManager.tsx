import Script from "next/script";

const GoogleTagManager = () => (
  <>
    {/* Google Tag Manager */}
    <Script
      id="google-tag-manager"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-5FRPJ89K');`,
      }}
    />
    {/* End Google Tag Manager */}

    {/* noscript fallback */}
    <noscript>
      <iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-5FRPJ89K"
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      ></iframe>
    </noscript>
  </>
);

export default GoogleTagManager;
