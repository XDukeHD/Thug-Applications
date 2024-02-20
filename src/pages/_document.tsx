import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link href="/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/vendor/icofont/icofont.min.css" rel="stylesheet" />
        <link href="/vendor/boxicons/css/boxicons.min.css" rel="stylesheet" />
        <link
          href="/vendor/owl.carousel/assets/owl.carousel.min.css"
          rel="stylesheet"
        />
        <link href="/vendor/venobox/venobox.html" rel="stylesheet" />
        <link href="/vendor/aos/aos.css" rel="stylesheet" />
        <link href="/css/style.css" rel="stylesheet" />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Roboto:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
          rel="stylesheet"
        ></link>
        <link
          href="
https://cdn.jsdelivr.net/npm/icofont@1.0.0/dist/icofont.min.css
"
          rel="stylesheet"
        ></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
      <script type="module" src="/js/main.js"></script>
      <script src="/vendor/jquery/jquery.min.js"></script>
      <script src="/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
      <script src="/vendor/jquery.easing/jquery.easing.min.js"></script>
      <script src="/vendor/waypoints/jquery.waypoints.min.js"></script>
      <script src="/vendor/counterup/counterup.min.js"></script>
      <script src="/vendor/owl.carousel/owl.carousel.min.js"></script>
      <script src="/vendor/isotope-layout/isotope.pkgd.min.js"></script>
      <script src="/vendor/aos/aos.js"></script>
      <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

      <script
        src="
https://cdn.jsdelivr.net/npm/icofont@1.0.0/main.min.js
"
      ></script>
     
    </Html>
  );
}
