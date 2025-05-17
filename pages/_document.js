// pages/_document.js

import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="title"
          content="Gammo | Demo Project | Developed by Sudheer Neo"
        />
        <meta
          name="description"
          content="Play for Skill | E - Sports | Unlock your earning potential with your skills! Victory means instant payment, so let your strategy and average skills take you to the top. Level up your productivity and become a true gamer! Join us today and let's conquer the esports world together!"
        />

        <link rel="canonical" href="https://gammo.sudheerneo.com/" />
        <link
          rel="icon"
          type="image/png"
          href="/assets/images/favicon.png"
          sizes="16x16"
        />
        <link
          rel="stylesheet"
          id="dashicons-css"
          href="/srcData_files/dashicons.min.css?ver=5.7.2"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="font-awesome-css"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css?ver=1.10.5.1"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="foundation-icons-css"
          href="https://cdnjs.cloudflare.com/ajax/libs/foundicons/3.0.0/foundation-icons.css?ver=1.10.5.1"
          type="text/css"
          media="all"
        />
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/all.min.css" />
        <link rel="stylesheet" href="/assets/css/line-awesome.min.css" />
        <link rel="stylesheet" href="/assets/css/nice-select.css" />
        <link rel="stylesheet" href="/assets/css/lightcase.css" />
        <link rel="stylesheet" href="/assets/css/slick.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
