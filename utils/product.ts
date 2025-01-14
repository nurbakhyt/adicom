export function getStrapiMedia(url: string | undefined): string {
    const config = useRuntimeConfig()

    if (url === undefined) {
      return "/images/night-sky.avif";
    }

    if (url.startsWith("/")) {
      return config.public.strapi.url ? `${config.public.strapi.url}${url}` : `http://127.0.0.1:1337${url}`;
    }
    return config.public.strapi.url ? `${config.strapiBaseUri}/${url}` : `http://127.0.0.1:1337/${url}`;;
  }

  export function formatMoney(amount: number | undefined): string {
    if (amount === undefined) {
      return "--";
    }

    return new Intl.NumberFormat('kz-KZ', {
      style: 'currency',
      currency: 'KZT',
    }).format(amount);
  }