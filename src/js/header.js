import jQuery from "jquery";
window.$ = window.jQuery = jQuery;

(() => {
  // src/utils/constants.js
  var TAB_KEY = "Tab";
  var KEY_DOWN = "keydown";
  window.isMobile = window.matchMedia("(max-width: 767px)").matches;
  window.isTablet = window.matchMedia(
    "(min-width: 768px) and (max-width: 1023px)"
  ).matches;
  window.isDesktop = window.matchMedia("(min-width: 1024px)").matches;

  // src/components/header/js/header.js
  function header() {
    let menuOpened = false;
    let isScrollInitialized = false;
    const $cmpHeader = $(".cmp-header");
    const $welcome_popup = $(".cmp-header__welcome");
    const $cmpHeaderTransparent = $(".cmp-header__transparent");
    const $cmpHeaderOverlay = $(".cmp-header__overlay");
    const $cmpHeaderContainer = $(".cmp-header__container");
    const $navContainer = $(".cmp-header__primary-nav-wrapper");
    const $cmpHeadHamMenuIcon = $(
      ".cmp-header__ham-menu .cmp-header__nav-icon"
    );
    const navContainerShowClass = "cmp-header__primary-nav-wrapper--show";
    const cmpHeaderMenuOpen = "cmp-header--menuOpen";
    const cmpHeadeNav = ".cmp-header__primary-nav";
    const cmpHeadeBlackBg = "cmp-header--black-bg";
    const welcomePopup = () => {
      const hideWelcomePopupOnScroll = () => {
        if ($(window).scrollTop() > 0 && !isScrollInitialized) {
          $welcome_popup.fadeOut();
        }
      };
      if ($welcome_popup.length > 0) {
        $("body").on("click", function () {
          $welcome_popup.fadeOut();
        });
        $(window).scroll(function () {
          requestAnimationFrame(hideWelcomePopupOnScroll);
        });
      }
    };
    welcomePopup();
    const showOverlay = () => {
      if ($cmpHeaderOverlay.length === 0) {
        $cmpHeader.append('<div class="cmp-header__overlay"></div>');
      }
      $cmpHeaderOverlay.fadeIn();
      $("body").css("overflow-y", "hidden");
      $cmpHeaderTransparent.addClass(cmpHeadeBlackBg);
    };
    const hideOverlay = () => {
      $cmpHeaderOverlay.fadeOut();
      $("body").css("overflow-y", "");
      $cmpHeaderTransparent.removeClass(cmpHeadeBlackBg);
    };
    $(
      "a.cmp-header__primary-nav-link[href='#'], ul.cmp-header__nav-level a[href='#'], .cmp-feedback-banner__button a[href='#'], .cmp-exp-selector__top-bar a.cmp-exp-selector__back-to-menu[href='#'], .cmp-header__subnav-tab a[href='#'], .cmp-local-nav__list-item__container a[href='#'], .cmp-exp-selector-gateway__link a.animate-underline[href='#'], a.cmp-link-list-v3__content__list-item-label[href='#'], .cmp-breadcrumbs__list-item  a[href='#'], .cmp-sitelanguage__list-item a[href='#'], .cmp-modal__footer .button-container a[href='#'], .cmp-list-image-v2__body a[href='#'], .cmp-feedback-banner__thank-you a[href='#'], a.optanon-show-settings[href='#']"
    ).on("click", function (e) {
      e.preventDefault ? e.preventDefault() : (e.returnValue = false);
    });
    const headerNavigationForDesktop = () => {
      const $headerEnabled = $(".header--enabled");
      const cmpHeaderNavDesktop = ".cmp-header__primary-nav--desktop";
      const cmpHeaderNavDesktopItem = `${cmpHeaderNavDesktop} .cmp-header__primary-nav-item`;
      const cmpHeaderActiveNavDesktopItem = `${cmpHeaderNavDesktopItem}.active`;
      const cmpHeaderNavLink = ".cmp-header__primary-nav-link";
      const cmpHeaderNavDesktopLink = `${cmpHeaderNavDesktop} ${cmpHeaderNavLink}`;
      const cmpHeaderSlidedownContainer = ".cmp-header__slidedown-container";
      const cmpHeaderSubNavDiv = ".cmp-header__subnav";
      const cmpHeaderSubNavTab = ".cmp-header__subnav-tab";
      const cmpHeaderActiveSubNavTab = `${cmpHeaderActiveNavDesktopItem} ${cmpHeaderSubNavTab}`;
      const cmpHeaderSubNavTabList = `${cmpHeaderActiveNavDesktopItem} ${cmpHeaderSubNavTab} ul`;
      const cmpHeaderSubNavTabLink = `${cmpHeaderSubNavTab} ul li`;
      const cmpHeaderContentSection = `${cmpHeaderSubNavTab}-content-section`;
      const cmpHeaderActiveContentSection = `${cmpHeaderActiveNavDesktopItem} ${cmpHeaderContentSection}`;
      const cmpHeaderActiveContentItem = `${cmpHeaderActiveNavDesktopItem} ${cmpHeaderSubNavTabLink}`;
      const cmpHeaderContent = `${cmpHeaderSubNavTab}-content`;
      const cmpHeaderShowContent = `${cmpHeaderContentSection}.show-content`;
      const cmpHeaderContentListWrapper = `${cmpHeaderSubNavTab}-content-list-wrapper`;
      const cmpHeaderFeaturedArticles = ".cmp-header__featured-articles";
      const cmpHeaderFeaturedNavPromoV3 =
        ".cmp-header__featured-articles .nav-promo-v3";
      const showHideFeaturePromo = (tabContentSelector) => {
        let tabContentListWrapper = $(tabContentSelector).find(
          cmpHeaderContentListWrapper
        );
        let featuredPromos = $(tabContentSelector).find(
          cmpHeaderFeaturedNavPromoV3
        );
        featuredPromos.not(":first").remove();
        const browserWidth =
          window.innerWidth > 0 ? window.innerWidth : screen.width;
        const featuredPromosWrapper = $(tabContentSelector).find(
          cmpHeaderFeaturedArticles
        );
        const contentWidth = $(tabContentListWrapper).width();
        const laptop = contentWidth > 620 && browserWidth <= 1560;
        const tabletLandscape = contentWidth > 550 && browserWidth <= 1280;
        const tabletPortrait = contentWidth > 500 && browserWidth <= 1200;
        const mobileLandscape = browserWidth <= 1080;
        const isHidePromoV3 =
          laptop || tabletLandscape || tabletPortrait || mobileLandscape;
        isHidePromoV3
          ? featuredPromosWrapper.hide()
          : featuredPromosWrapper.show();
      };
      const updateContentHeight = (tabContentSelector) => {
        const maxItems = 7;
        let totalHeight = 0;
        let tabContentListALLContents = $(tabContentSelector).find("ul li");
        let tabContentListULTag = $(tabContentSelector).find("ul");
        let rowGap = $(tabContentListULTag).css("row-gap");
        rowGap = rowGap
          ? parseFloat(rowGap) * maxItems - parseFloat(rowGap)
          : 0;
        let topPadding = $(cmpHeaderContent).css("padding-top");
        let bottomPadding = $(cmpHeaderContent).css("padding-bottom");
        topPadding = topPadding ? parseFloat(topPadding) : 0;
        bottomPadding = bottomPadding ? parseFloat(bottomPadding) : 0;
        const topBottomPadding = topPadding + bottomPadding;
        let ulTopPadding = $(tabContentListULTag).css("padding-top");
        let ulBottomPadding = $(tabContentListULTag).css("padding-bottom");
        ulTopPadding = ulTopPadding ? parseFloat(ulTopPadding) : 0;
        ulBottomPadding = ulBottomPadding ? parseFloat(ulBottomPadding) : 0;
        const ulPadding = ulBottomPadding + ulBottomPadding;
        $(tabContentListALLContents)
          .slice(0, 7)
          .each(function () {
            totalHeight += $(this).outerHeight(true);
          });
        const contentListHeight = totalHeight + rowGap + ulPadding;
        $(tabContentListULTag).css({
          height: contentListHeight + "px",
          "max-height": contentListHeight + "px",
        });
        setTimeout(() => {
          const featuredPromosWrapper = $(tabContentSelector).find(
            cmpHeaderFeaturedArticles
          );
          const contentUlHeight = totalHeight + rowGap;
          let promoHeight = $(featuredPromosWrapper).outerHeight(true);
          promoHeight =
            promoHeight > contentUlHeight ? promoHeight : contentUlHeight;
          featuredPromosWrapper.css({
            height: promoHeight + "px",
          });
        }, 10);
        let tabTopPadding = $(cmpHeaderActiveSubNavTab).css("padding-top");
        let tabBottomPadding = $(cmpHeaderActiveSubNavTab).css(
          "padding-bottom"
        );
        tabTopPadding = tabTopPadding ? parseFloat(tabTopPadding) : 0;
        tabBottomPadding = tabBottomPadding ? parseFloat(tabBottomPadding) : 0;
        const activeSubNavTabHeight =
          $(cmpHeaderSubNavTabList).outerHeight(true) +
          tabTopPadding +
          tabBottomPadding;
        let subNavContainerHeight =
          totalHeight + rowGap + topBottomPadding + ulPadding;
        subNavContainerHeight =
          subNavContainerHeight > activeSubNavTabHeight
            ? subNavContainerHeight
            : activeSubNavTabHeight;
        $(tabContentSelector)
          .parent()
          .closest(cmpHeaderSubNavDiv)
          .css({
            height: subNavContainerHeight + "px",
          });
      };
      const moveFocusBackToSubnavTabList = (tabContentSelector) => {
        const featuredPromosWrapper = $(tabContentSelector).find(
          cmpHeaderFeaturedArticles
        );
        const lastFocusableContent = `${cmpHeaderActiveContentSection}.show-content a:last`;
        const focusableContent = `${cmpHeaderActiveContentSection}.show-content a`;
        const lastFocusableElement = $(featuredPromosWrapper).is(":hidden")
          ? $(focusableContent).eq($(focusableContent).length - 2)
          : lastFocusableContent;
        $(lastFocusableElement).on(KEY_DOWN, function (e) {
          if (e.key === TAB_KEY && !e.shiftKey) {
            e.preventDefault();
            const isLastLi = $(`${cmpHeaderActiveContentItem}:last`).is(
              ".active"
            );
            let targetElement = isLastLi
              ? $(`${cmpHeaderActiveContentItem} a:first`)
              : $(`${cmpHeaderActiveContentItem}.active`).next();
            targetElement = !isLastLi
              ? $(targetElement).find("a")
              : targetElement;
            $(targetElement).trigger("focus");
          }
        });
      };
      const checkAndRemoveOverflowLink = (tabContentSelector) => {
        $(tabContentSelector)
          .find("ul li a")
          .each(function () {
            const $aElement = $(this);
            const $ulElement = $aElement.closest("ul");
            const isElementVisibleInParent = ($aElement2, $ulElement2) => {
              const aTagRect = $aElement2[0].getBoundingClientRect();
              const ulTagRect = $ulElement2[0].getBoundingClientRect();
              return (
                aTagRect.top >= ulTagRect.top &&
                aTagRect.left >= ulTagRect.left &&
                aTagRect.bottom <= ulTagRect.bottom &&
                aTagRect.right <= ulTagRect.right
              );
            };
            if (!isElementVisibleInParent($aElement, $ulElement)) {
              $aElement.remove();
            }
          });
      };
      const showTabContent = (index, tabContents) => {
        const tabContentSelector = tabContents[index];
        $(`${cmpHeaderSubNavTabList} li:gt(6)`).remove();
        $(cmpHeaderShowContent).removeClass("show-content");
        $(`${cmpHeaderSubNavTabLink}.active`).removeClass("active");
        $(cmpHeaderSubNavTabLink).attr("aria-selected", "false");
        $(cmpHeaderShowContent).attr("aria-hidden", "true");
        if (tabContentSelector) {
          $(tabContentSelector).addClass("show-content");
          $(tabContentSelector).find("ul li:gt(20)").remove();
          updateContentHeight(tabContentSelector);
          showHideFeaturePromo(tabContentSelector);
          $(tabContentSelector).attr("aria-hidden", "false");
          if (!$(tabContentSelector).is("[tabindex]")) {
            $(tabContentSelector).attr("tabindex", "0");
          }
          if ($(tabContentSelector).find("ul li:gt(0)").length) {
            $(tabContentSelector).trigger("focus");
          }
          checkAndRemoveOverflowLink(tabContentSelector);
          setTimeout(() => {
            moveFocusBackToSubnavTabList(tabContentSelector);
          }, 0);
        }
      };
      const initSubnavHandler = (subNavTabLinks, tabContents) => {
        $(subNavTabLinks).each((index, subNavTab) => {
          const aTag = $(subNavTab).find("a");
          $(subNavTab)
            .add(aTag)
            .on("click", function (event) {
              const clickedTab = event.target.closest(cmpHeaderSubNavTabLink);
              if ($(event.target).is("a")) {
                event.stopImmediatePropagation();
              }
              if (!clickedTab) return;
              showTabContent(index, tabContents);
              clickedTab.classList.add("active");
              $(clickedTab).attr("aria-selected", "true");
            });
        });
      };
      const handleStickyHeader = (isMenuOpen = false) => {
        const browserWidth =
          window.innerWidth > 0 ? window.innerWidth : screen.width;
        const originalHeaderMargin = $headerEnabled.css("margin-top");
        if (isMenuOpen && browserWidth <= 1440 && browserWidth > 1023) {
          hideOverlay();
          $cmpHeader.css("position", "relative");
          $headerEnabled.css("margin-top", "0px");
        } else {
          $cmpHeader.css("position", "fixed");
          $headerEnabled.css("margin-top", originalHeaderMargin);
        }
        if (isMenuOpen) {
          const tabConent = $(cmpHeaderActiveContentSection);
          showTabContent(0, tabConent);
          const firstTab = $(cmpHeaderActiveContentItem).first();
          firstTab.addClass("active");
          $(firstTab).attr("aria-selected", "true");
        }
      };
      const hideHeaderNav = (headerRef) => {
        $(headerRef).find(cmpHeaderSlidedownContainer).slideToggle(400);
        hideOverlay();
        menuOpened = false;
        $cmpHeader.removeClass(cmpHeaderMenuOpen);
        handleStickyHeader(menuOpened);
      };
      $(cmpHeaderNavDesktopItem).each((index, primaryNavItem) => {
        const subNavTabLinks = $(primaryNavItem).find(cmpHeaderSubNavTabLink);
        const tabContents = $(primaryNavItem).find(cmpHeaderContentSection);
        initSubnavHandler(subNavTabLinks, tabContents);
        $(primaryNavItem)
          .find(cmpHeaderNavLink)
          .on("click", function (event) {
            event.stopImmediatePropagation();
            if ($(primaryNavItem).hasClass("active")) {
              hideHeaderNav(primaryNavItem);
              $(cmpHeaderNavDesktopItem).attr("aria-expanded", "false");
              $(cmpHeaderNavDesktopItem).removeClass("active");
            } else {
              $(cmpHeaderNavDesktopItem).removeClass("active");
              $(cmpHeaderNavDesktopItem).attr("aria-expanded", "false");
              $(primaryNavItem).addClass("active");
              $(primaryNavItem).attr("aria-expanded", "true");
              showOverlay();
              $cmpHeader.addClass(cmpHeaderMenuOpen);
              $(cmpHeaderSlidedownContainer).hide();
              if (!menuOpened) {
                $(primaryNavItem)
                  .find(cmpHeaderSlidedownContainer)
                  .slideToggle(400);
              }
              $(primaryNavItem)
                .find(cmpHeaderSlidedownContainer)
                .show()
                .find(cmpHeaderSubNavTabLink)
                .show();
              menuOpened = true;
              handleStickyHeader(menuOpened);
            }
          });
      });
      const hideNavMenu = () => {
        try {
          const navLink = $(`${cmpHeaderActiveNavDesktopItem}`);
          if (navLink) {
            hideHeaderNav(navLink);
            $(navLink).toggleClass("active");
            $(navLink).attr("aria-expanded", "false");
          }
        } catch (err) {}
      };
      $(document).on("keydown click", function (event) {
        if (menuOpened) {
          const slideDownMenuContainer = $(cmpHeaderSlidedownContainer);
          if (
            event.key == "Escape" ||
            (!$(event.target).closest(slideDownMenuContainer)?.length &&
              !$(event.target).closest($cmpHeaderContainer)?.length)
          ) {
            hideNavMenu();
          }
        }
      });
      $(`${cmpHeaderSubNavTabLink}:last-child`).on(KEY_DOWN, function (e) {
        if (e.key === TAB_KEY && !e.shiftKey) {
          e.preventDefault();
          hideNavMenu();
        }
      });
      $(cmpHeadeNav).on(KEY_DOWN, "a", function (e) {
        if (e.key === TAB_KEY) {
          setTimeout(function () {
            if (
              document.activeElement.classList.contains(cmpHeaderNavDesktopLink)
            ) {
              menuOpened = false;
              $(
                `${cmpHeaderActiveNavDesktopItem} ${cmpHeaderSlidedownContainer}`
              ).slideToggle();
              $(`${cmpHeaderActiveNavDesktopItem} > a`).attr(
                "aria-expanded",
                "false"
              );
              $(cmpHeaderNavDesktopItem).removeClass("active");
              hideOverlay();
            }
          }, 10);
        }
      });
    };
    const headerNavigationForMobile = () => {
      const $navHasLevels = $(".cmp-header__nav-has-levels");
      const $backOneLevel = $(".cmp-header__back-one-level a");
      const $devicesNavItemAtag = $(
        ".cmp-header__primary-nav--devices .cmp-header__primary-nav-item a"
      );

      //   $navContainer.on("transitionstart", function (event) {
      //     console.log(event);
      //   });

      // POC work
      const FOCUSABLE_ELEMENTS = [
        'a[href]:not([tabindex^="-"])',
        'area[href]:not([tabindex^="-"])',
        'input:not([type="hidden"]):not([type="radio"]):not([disabled]):not([tabindex^="-"])',
        'input[type="radio"]:not([disabled]):not([tabindex^="-"]):checked',
        'select:not([disabled]):not([tabindex^="-"])',
        'textarea:not([disabled]):not([tabindex^="-"])',
        'button:not([disabled]):not([tabindex^="-"])',
        'iframe:not([tabindex^="-"])',
        'audio[controls]:not([tabindex^="-"])',
        'video[controls]:not([tabindex^="-"])',
        '[contenteditable]:not([tabindex^="-"])',
        '[tabindex]:not([tabindex^="-"])',
      ];

      const isVisible = (element) =>
        element.offsetWidth ||
        element.offsetHeight ||
        element.getClientRects().length;

      const getFocusableChildren = (rootElem) => {
        const elements = [
          ...rootElem.querySelectorAll(FOCUSABLE_ELEMENTS.join(",")),
        ];
        return elements.filter(isVisible);
      };

      let prevFocusElement, prevElement;
      let isManualFocus = false;
      let currentFocusElement;

      const handleFocusTrap = (e) => {
        console.log("focusin event triggered");
        console.log(e);
        const { target, relatedTarget } = e;
        const focusableChildren = getFocusableChildren(
          document.querySelector("header")
        );
        const firstFocusableElement = focusableChildren[0];
        const lastFocusableElement =
          focusableChildren[focusableChildren.length - 1];
        const nextFocusableElement = relatedTarget;

        if (
          target === lastFocusableElement &&
          !document.querySelector("header").contains(relatedTarget)
        ) {
          firstFocusableElement.focus();
        }

        if(target === firstFocusableElement && !document.querySelector("header").contains(relatedTarget)) {
          lastFocusableElement.focus();
        }
        // prevFocusElement = currentFocusElement;
        // currentFocusElement = target;
        // console.log("previous focus element");
        // console.log(prevFocusElement);
        // console.log("current focus element:");
        // console.log(currentFocusElement);
        // console.log($(header).find(e.target).length !== 0);
        // if (!document.querySelector("header").contains(e.target)) {
        //   console.log("inside if");
        //   const focusableChildren = getFocusableChildren(
        //     document.querySelector("header")
        //   );

        //   const firstFocusableElement = focusableChildren[0];
        //   const lastFocusableElement =
        //     focusableChildren[focusableChildren.length - 1];

        //   console.log(
        //     prevFocusElement === firstFocusableElement && !isManualFocus
        //   );
        //   console.log(
        //     prevFocusElement === lastFocusableElement && !isManualFocus
        //   );
        //   if (prevFocusElement === firstFocusableElement) {
        //     lastFocusableElement.focus();
        //     isManualFocus = true;
        //   }

        //   if (prevFocusElement === lastFocusableElement) {
        //     firstFocusableElement.focus();
        //     isManualFocus = true;
        //   }
        // } else {
        //   isManualFocus = false;
        // }

        // const focusableChildren = getFocusableChildren(
        // document.querySelector("header")
        // );
        // //   console.log(
        // //     prevElement,
        // //     focusableChildren[0],
        // //     focusableChildren[focusableChildren.length - 1]
        // //   );
        // if (prevElement === focusableChildren[0]) {
        // console.log("focusin event triggered on first element");
        // focusableChildren[focusableChildren.length - 1].focus();
        // prevElement = null;
        // }

        // if (prevElement === focusableChildren[focusableChildren.length - 1]) {
        // console.log("focusin event triggered on last element");
        // focusableChildren[0].focus();
        // prevElement = null;
        // }
      };

      document.addEventListener("pageLoaded", () => {
        console.log("pageLoaded event triggered");
        // document.addEventListener("focusin", (event)=> {
        //     console.log("document focusin event triggered");
        //     console.log(event);
        // })
        document
          .querySelector(".cmp-skip-navigation-link")
          .addEventListener("focus", (event) => {
            console.log("focus event triggered on skip navigation link");
            // event.target.style.setProperty("opacity", 1);
          });

          document
            .querySelector(".cmp-skip-navigation-link")
            .addEventListener("focusin", (event) => {
              console.log("focusin event triggered on skip navigation link");
            //   event.target.style.setProperty("opacity", 1);
            });

        

        // document
        //   .querySelector(".cmp-skip-navigation-link")
        //   .addEventListener("blur", (event) => {
        //     event.target.style.setProperty("opacity", 0);
        //   });
        // document
        //   .querySelector(".cmp-skip-navigation-link")
        //   .addEventListener("focusin", (event) => {
        //     event.target.style.setProperty("opacity", 1);
        //   });

        // document
        //   .querySelector(".cmp-skip-navigation-link")
        //   .addEventListener("focusout", (event) => {
        //     event.target.style.setProperty("opacity", 0);
        //   });
      });

      $cmpHeadHamMenuIcon.on("click", function (event) {
        event.stopImmediatePropagation();

        if ($(this).hasClass("active")) {
          $(this).removeClass("active");
          $(this).attr("aria-expanded", "false");
          document.querySelector("html").style.overflowY = "";
          hideOverlay();
          $navContainer.removeClass(navContainerShowClass);
          $cmpHeader.removeClass(cmpHeaderMenuOpen);
          // POC work
          $navContainer.on("transitionend", function (event) {
            $navContainer.css("display", "none");
            $navContainer.off("transitionend");
          });

          document.removeEventListener("blur", (event) => {
            console.log(event.target)
          });

          document.removeEventListener("focusout", handleFocusTrap);
          // POC work
        } else {
          $(this).addClass("active");

        //   document
        //     .querySelector(".cmp-image__link")
        //     .addEventListener("blur", (event) => {
        //       console.log(event);
        //     });

            document.addEventListener("focusout", handleFocusTrap);

          $navContainer.css("display", "flex");
          // POC work
          $devicesNavItemAtag.first().focus();
          $(this).attr("aria-expanded", "true");
          window.setTimeout(() => {
            document.querySelector("html").style.overflowY = "hidden";
          }, 300);
          showOverlay();
          $navContainer.addClass(navContainerShowClass);
          $cmpHeader.addClass(cmpHeaderMenuOpen);
        }
      });
      $navHasLevels.on("click", function () {
        $(this).parents("ul").find(" > li").hide();
        $(this).attr(
          "aria-expanded",
          $(this).attr("aria-expanded") === "true" ? "false" : "true"
        );
        $(this).parents("li").show();
        $(this).hide();
        $(this).next().fadeIn();
      });
      $backOneLevel.on("click", function () {
        let $currentList = $(this).closest("ul");
        let $parentList = $currentList.parent().closest("ul");
        $currentList.hide();
        $currentList.prev().attr("aria-expanded", "false");
        $parentList.find("li").fadeIn();
        $currentList.prev().fadeIn();
      });
    };
    $(window).on("resize", function () {
      if ($(window).width() > 1023) {
        headerNavigationForDesktop();
        menuOpened ? showOverlay() : hideOverlay();
      } else {
        headerNavigationForMobile();
        $cmpHeadHamMenuIcon.hasClass("active") ? showOverlay() : hideOverlay();
      }
    });
    $(window).width() > 1023
      ? headerNavigationForDesktop()
      : headerNavigationForMobile();
    $(function () {
      $(window).scroll(function () {
        const $headerScroll = $cmpHeaderTransparent;
        const isScrolled = $(this).scrollTop() > $headerScroll.height();
        $headerScroll.toggleClass("scrolled", isScrolled);
      });
    });
    $("body").on(
      "click",
      ".save-preference-btn-handler.onetrust-close-btn-handler, .ot-pc-refuse-all-handler, #accept-recommended-btn-handler, #onetrust-accept-btn-handler, #onetrust-reject-all-handler, .optanon-button-wrapper.optanon-save-settings-button, .optanon-button-wrapper.optanon-allow-all-button, .optanon-allow-all.accept-cookies-button,.accept-cookies-button",
      function () {
        window.location.reload();
      }
    );
  }
  document.addEventListener("DOMContentLoaded", header, false);
  var header_default = header;

  // src/components/header/dynamic-loader/header.js
  header_default();
})();
