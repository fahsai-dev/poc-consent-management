(function () {
  // Function to log events
  function logEvent(line) {
    // const code = document.createElement("pre");
    // code.innerText = line;
    // code.style.paddingtop = "10px";
    // code.style.paddingBottom = "10px";
    // document.getElementById("event-log").appendChild(code);
  }

  // Initialize dataLayer and push method
  window.dataLayer = {
    push: function (args) {
      logEvent("DataLayer push: " + JSON.stringify(args));
    },
  };

  // Configuration for the cookie consent wrapper
  window.cc_wrapper_config = {
    cmp_api_options: {
      url: "http://localhost:8888/",
      project: "web_poc_next_consent",
      consent_api_enabled: true,
      cookies_api_enabled: true,
      cookie_table_headers: [
        "name",
        "purpose",
        "processing_time",
        "type",
        "link",
        "provider",
        "category",
      ],
    },
    plugin_options: {
      cookie_name: "consent-settings",
      force_consent: true,
      page_scripts: true,
    },
    auto_clear_options: {
      enabled: true,
      strategy: "clear_all_except_defined",
    },
    ui_options: {
      include_default_stylesheets: false,
      external_stylesheets: ["http://localhost:8080/demo/cookie-consent.css"], //custom css
      internal_stylesheets: [],
    },
    consent_modal_options: {
      position: "bottom center",
      secondary_button_role: "accept_necessary",
      show_third_button: true,
    },
    settings_modal_options: {
      modal_trigger_selector: "footer .footer-item",
    },
    locales: ["en"],
    storage_pool: [
      {
        name: "functionality_storage",
        enabled_by_default: true,
        display_in_widget: true,
        readonly: true,
      },
      {
        name: "personalization_storage",
        sync_consent_with: "functionality_storage",
      },
      { name: "security_storage", display_in_widget: true },
      { name: "ad_storage", display_in_widget: true },
      { name: "analytics_storage", display_in_widget: true },
    ],
    event_triggers: [
      {
        name: "functionality_storage_event",
        storage_names: ["functionality_storage"],
        type: "or",
      },
      {
        name: "personalization_storage_event",
        storage_names: ["personalization_storage"],
        type: "or",
      },
      {
        name: "security_storage_event",
        storage_names: ["security_storage"],
        type: "or",
      },
      { name: "ad_storage_event", storage_names: ["ad_storage"], type: "or" },
      {
        name: "analytics_storage_event",
        storage_names: ["analytics_storage"],
        type: "or",
      },
      {
        name: "fb_pixel_event",
        storage_names: ["ad_storage", "analytics_storage"],
        type: "and",
      },
    ],
  };

  // Initialize cookie consent wrapper events
  window.cookieConsentWrapperEvents = window.cookieConsentWrapperEvents || [];

  window.cookieConsentWrapperEvents.push([
    "init",
    function () {
      logEvent("CookieConsentWrapper initialized.");

      function showTrigger() {
        const trigger = document.getElementById("open-cookie-settings");
        trigger && (trigger.style.display = "flex");
      }

      if (window.CookieConsentWrapper.unwrap().validConsent()) {
        showTrigger();
      }

      window.CookieConsentWrapper.on("consent:accepted", function () {
        showTrigger();
      });
    },
  ]);

  window.cookieConsentWrapperEvents.push([
    "consent:first-action",
    function (consent) {
      logEvent(
        "Event consent:first-action triggered. " + JSON.stringify(consent)
      );
    },
  ]);

  window.cookieConsentWrapperEvents.push([
    "consent:accepted",
    function (consent) {
      logEvent("Event consent:accepted triggered. " + JSON.stringify(consent));
    },
  ]);

  window.cookieConsentWrapperEvents.push([
    "consent:changed",
    function (consent, changed) {
      logEvent(
        "Event consent:changed triggered. " +
          JSON.stringify(consent) +
          ", " +
          JSON.stringify(changed)
      );
    },
  ]);

  // Dynamically load the cookie-consent.js script
  var script = document.createElement("script");
  script.src = "/demo/cookie-consent.js";
  script.type = "text/javascript";
  script.async = true;
  document.head.appendChild(script);

  // After the script is loaded and executed
  script.onload = function () {
    // Wait until the DOM is fully loaded
    document.addEventListener("DOMContentLoaded", function () {
      function insertLogoAfterElement(targetId, footerId) {
        var targetElement = document.getElementById(targetId);
        if (targetElement) {
          var newFooterLogo = document.createElement("div");
          newFooterLogo.id = footerId;

          const logo = document.createElement("img");
          logo.src =
            "https://digital-cdn.msig-thai.com/images/UtmSource_Logo_MN0001.png";
          logo.alt = "cookie-banner-logo";
          logo.id = "cc-footer-logo";
          newFooterLogo.prepend(logo);

          targetElement.insertAdjacentElement("afterend", newFooterLogo);
          return true;
        }
        return false;
      }

      function checkAndInsertLogos() {
        var interval1 = setInterval(function () {
          if (insertLogoAfterElement("c-inr", "cc-footer-main")) {
            clearInterval(interval1); // Stop the interval after successful insertion
          }
        }, 100);

        var interval2 = setInterval(function () {
          if (insertLogoAfterElement("s-bns", "cc-footer-inner")) {
            clearInterval(interval2); // Stop the interval after successful insertion
          }
        }, 100);
      }

      // Start checking and inserting logos
      checkAndInsertLogos();
    });
  };
})();
