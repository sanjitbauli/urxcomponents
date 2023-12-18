import _ from "lodash";
const enforceDefaultStyle = true;
const defaultBg = "#f3f3f3";

export const newBgStyle = `url('https://www.ibm.com/account/urxstatic/URX-bg.svg') no-repeat rgb(255, 255, 255);`; // '#f3f3f3'; //  'url("https://wwwstage.ibm.com/account/ibmidutil/login-ui/img/illustration-final.svg") center bottom / 100% no-repeat rgb(247, 250, 253)';// '#f3f3f3';

const defaultBgStyles = {
  background: newBgStyle,
  backgroundPosition: `right`,
  backgroundSize: `cover`,
};
export function oldDefaultStyleExists(bgStyle, bg = "#4178be") {
  return (
    (bgStyle.background && bgStyle.background.toLowerCase() === bg) ||
    (bgStyle.backgroundColor && bgStyle.backgroundColor.toLowerCase() === bg)
  );
}
export const filterBg = (bgStyle) => {
  if (oldDefaultStyleExists(bgStyle)) {
    bgStyle = {
      ...bgStyle,
      background: "#ffffff",
    };
  }
  return bgStyle;
};
export const getBgStyle = (mainContent) => {
  let bgStyle = {
    background: defaultBg,
  };
  try {
    if (
      mainContent.leftBackgroundColor &&
      mainContent.leftBackgroundColor.indexOf("#") > -1
    ) {
      bgStyle = {
        backgroundColor: mainContent.leftBackgroundColor,
      };
    }
    if (mainContent.background) {
      bgStyle = {
        background: mainContent.background,
      };
    }
    // Style overwrite for default
    if (bgStyle.background === defaultBg) {
      bgStyle = { ...defaultBgStyles };
    }
  } catch (e) {
    //return null
  }
  return enforceDefaultStyle ? filterBg(bgStyle) : bgStyle;
};
export function getStyle(mainContent) {
  const bgStyle = getBgStyle(mainContent);
  let inlineCss = "";
  if (bgStyle && Object.keys(bgStyle).length > 0) {
    _.forOwn(bgStyle, function (value, key) {
      inlineCss = inlineCss + _.kebabCase(key) + ":" + value + ";";
    });
  }
  return inlineCss;
}

function isBgCss(value) {
  let isBgCssValue = false;
  if (value && typeof value !== "object") {
    if (value.indexOf(":") === -1) {
      isBgCssValue = true;
    } else {
      value = value.trim();
      const firstSplit = value.split(":");
      if (firstSplit[0].toLocaleLowerCase().indexOf("url") > -1) {
        isBgCssValue = true;
      }
    }
  }
  return isBgCssValue;
}
export function getDefaultMobileStyle(mainContent) {
  const bgStyle = getBgStyle(mainContent);

  if (bgStyle.background === defaultBgStyles.background) {
    bgStyle.background = "linear-gradient(180deg, #FFF 0%, #EDF5FF 100%)";
  }
  let inlineCss = "";
  if (bgStyle && Object.keys(bgStyle).length > 0) {
    _.forOwn(bgStyle, function (value, key) {
      inlineCss = inlineCss + _.kebabCase(key) + ":" + value + ";";
    });
  }
  return inlineCss;
}
export function getMobileStyle(mainContent){
    let styleMarkup = '';
    let inlineCss = '';
    let mobileStyle = '';
    if(mainContent.mobileStyle){
        mobileStyle =  mainContent.mobileStyle
        if(typeof mobileStyle === 'object' && Object.keys(mobileStyle).length > 0){
            _.forOwn(mobileStyle, function(value, key) {
                inlineCss = inlineCss + _.kebabCase(key)+' : '+value
            } );
        }else if(mobileStyle !=='background-image: none; background-color: #4178be'){
            inlineCss = mobileStyle
        }
    }
    if(!inlineCss && mainContent.backgroundMobile)
    {
        inlineCss = mainContent.backgroundMobile
    }

    if(isBgCss(inlineCss)){
        styleMarkup = "background: "+inlineCss
    }else{
        styleMarkup = inlineCss
    }
    return styleMarkup
}

export function getInfoStyle(mainContent) {
  let infoStyle = {
    defaultStyle: false,
    css: {},
  };
  const bgStyle = getBgStyle(mainContent);
  if (mainContent.leftTextColor) {
    if (
      !(
        mainContent.leftTextColor.indexOf("#fff") > -1 &&
        oldDefaultStyleExists(bgStyle, defaultBg)
      )
    ) {
      infoStyle.css = {
        color: mainContent.leftTextColor,
      };
    }
  }

  if (oldDefaultStyleExists(bgStyle, defaultBg) && enforceDefaultStyle) {
    infoStyle.css = {
      color: "#323232",
    };
    infoStyle.defaultStyle = true;
  }
  if (bgStyle.background === newBgStyle) {
    infoStyle.css.color = "#161616";
    infoStyle.defaultStyle = "v23";
  }
  return infoStyle;
}

export const getBgStyleMobile = (mainContent) => {
  let bgStyle = {
    background: "#ffffff",
  };
  try {
    if (mainContent.backgroundMobile) {
      // Style overwrite for default
      if (mainContent.backgroundMobile === defaultBg) {
        mainContent.backgroundMobile = "#ffffff";
      }
      bgStyle = {
        background: mainContent.backgroundMobile,
      };
    }
  } catch (e) {
    //return null
  }
  return enforceDefaultStyle ? filterBg(bgStyle) : bgStyle;
};

export function getInfoStyleMobile(mainContent) {
    
    if(!mainContent.backgroundMobile)
    {
        return getInfoStyle(mainContent)
    }
    else
    {
        let infoStyle = {
            defaultStyle: false,
            css: {
    
            }
        };
        const bgStyle = getBgStyleMobile(mainContent);

        
        if(mainContent.leftTextColor){
            if(!(mainContent.leftTextColor.indexOf('#fff') > -1 && oldDefaultStyleExists(bgStyle, defaultBg))) {
                infoStyle.css = {
                    "color": mainContent.leftTextColor
                }
            }
        }
    
        if(oldDefaultStyleExists(bgStyle, defaultBg) && enforceDefaultStyle){
            infoStyle.css = {
                "color": '#323232'
            }
            infoStyle.defaultStyle = true;
        }
        if(bgStyle.background === '#ffffff' && infoStyle.css && infoStyle.css.color && infoStyle.css.color.indexOf('#fff') > -1){
            infoStyle.css.color = '#161616'
        }
        return infoStyle
    }
}