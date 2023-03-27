import { Html, Head, Main, NextScript } from 'next/document';
//import Script from 'next/script';


export default function Document() {
  return (
    <Html>
      <Head> 
        {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous"></link> */}
      </Head>
      <body>
        <Main />
        {/* <Script src="https://donorbox.org/widget.js" paypalExpress="true"></Script>  */}
        
       

        {/* <Script id="tgb-widget-script"> 
          {!function(t,e,i,n,o,c,b,d,s){ t.tgbWidgetOptions={id:o,domain:n,buttonId:b}, 
          (d=e.createElement(i)).src=[n,"widget/script.js"].join(""), d.async=1, 
          (s=e.getElementById(c)).parentNode.insertBefore(d,s) }(window,document,"script","https://tgbwidget.com/",
          "1189132951","tgb-widget-script","tgb-widget-button")} </Script>  */}

        {/* <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></Script> */}
        <NextScript />
      </body>
    </Html>
  )
}

{/* donorbox.org widget:
<script src="https://donorbox.org/widget.js" paypalExpress="true"></script>
<iframe src="https://donorbox.org/embed/support-our-mission-38?default_interval=m&amount=25" name="donorbox" 
allowpaymentrequest="allowpaymentrequest" seamless="seamless" frameborder="0" scrolling="no" height="900px" 
width="100%" style="max-width: 500px; min-width: 250px; max-height:none!important"></iframe> 
*/}


{/* crypto donation widget:
<script id="tgb-widget-script"> 
!function(t,e,i,n,o,c,b,d,s){ t.tgbWidgetOptions={id:o,domain:n,buttonId:b}, 
(d=e.createElement(i)).src=[n,"widget/script.js"].join(""), d.async=1, 
(s=e.getElementById(c)).parentNode.insertBefore(d,s) }(window,document,"script","https://tgbwidget.com/",
"1189132951","tgb-widget-script","tgb-widget-button"); </script> 
*/}