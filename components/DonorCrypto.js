import Script from 'next/script';


export default function DonorCrypto() {

    return(
        <div className="contentWidth">


                <div className="headingForSections greenHeading">
                    <h3>Donate with crypto</h3>
                </div>

                <div>

                <div id="tgb-widget-script" >

                <Script src="/tgb-widget.js"></Script>

                    {/* <Script id="tgb-widget-script"> {!function(t,e,i,n,o,c,b,d,s){ t.tgbWidgetOptions={id:o,domain:n,buttonId:b}, (d=e.createElement(i)).src=[n,"widget/script.js"].join(""), d.async=1, (s=e.getElementById(c)).parentNode.insertBefore(d,s) }(t.window,document,"script","https://tgbwidget.com/","1189132951","tgb-widget-script","tgb-widget-button")} </Script>
      */}
                </div>


                </div>

                

                
        </div>
    )
}


{/* crypto donation widget:
<script id="tgb-widget-script"> 
!function(t,e,i,n,o,c,b,d,s){ t.tgbWidgetOptions={id:o,domain:n,buttonId:b}, 
(d=e.createElement(i)).src=[n,"widget/script.js"].join(""), d.async=1, 
(s=e.getElementById(c)).parentNode.insertBefore(d,s) }(window,document,"script","https://tgbwidget.com/",
"1189132951","tgb-widget-script","tgb-widget-button"); </script> 
*/}