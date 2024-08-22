import Script from "next/script";

const CookieTableScript = () => {
  return (
    <>
      <Script async id="cmp-cookies-table-script">
        {`!function(e,t,n=null,o=null){var a=new XMLHttpRequest,l=[];a.onreadystatechange=()=>{if(4===a.readyState&&0!==a.status){var e=a.responseText;200<=a.status&&300>a.status?document.getElementById("cmp-cookies-table-script").insertAdjacentHTML("beforebegin",e):console.warn(e)}},a.onerror=()=>{console.warn(a.statusText||"Can't load cookies table.")},null===o&&(o=document.documentElement.lang),null!==o&&l.push("locale="+o),null!==n&&l.push("environment="+n),a.open("get",e.replace(new RegExp("/$"),"")+"/api/v1/cookies/"+t+"/template"+(l.length?"?"+l.join("&"):""),!0),a.send()}('http://localhost:8888', 'web_poc_next_consent', null);`}
      </Script>
    </>
  );
};

export default CookieTableScript;
