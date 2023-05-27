import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

// export const API = publicRuntimeConfig.PRODUCTION
//    ? publicRuntimeConfig.API_PRODUCTION
//    : publicRuntimeConfig.API_DEVELOPMENT;

// export const API = publicRuntimeConfig.API_DEVELOPMENT;
export const API = "https://lazy-cyan-bluefish-fez.cyclic.app";

export const APP_NAME = publicRuntimeConfig.APP_NAME;

export const DOMAIN = publicRuntimeConfig.PRODUCTION
   ? publicRuntimeConfig.DOMAIN_PRODUCTION
   : publicRuntimeConfig.DOMAIN_DEVELOPMENT;

export const FB_APP_ID = publicRuntimeConfig.FB_APP_ID;
export const DISQUS_SHORTNAME = publicRuntimeConfig.DISQUS_SHORTNAME;
export const GOOGLE_CLIENT_ID = publicRuntimeConfig.GOOGLE_CLIENT_ID;


//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