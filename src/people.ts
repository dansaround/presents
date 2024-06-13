import rosaProfilePic from "./assets/profile_pic.png";
import rosaCover from "./assets/Cover.png";
import LaMolinaImg from "./assets/rma/casa_la_molina.jpg";
import terrenoEnAlquilerImg from "./assets/rma/terreno_en_alquiler.jpg";
import depaDuplexVentaImg from "./assets/rma/depa_duplex_venta.jpg";
import depaFlatAlquilerImg from "./assets/rma/depa_flat_alquiler.jpg";
import depaFlatVentaImg from "./assets/rma/depa_flat_venta.jpg";
import depaFlatVentaSurquilloImg from "./assets/rma/depa_flat_venta_surquillo.jpg";
import depaFlatAlquilerSanIsidroImg from "./assets/rma/depa_flat_alquiler_san_isidro.jpg";
import terrenoAlquilerChorrillosImg from "./assets/rma/terreno_alquiler_chorrillos.jpg";
import depaFlatVentaSurcoImg from "./assets/rma/depa_flat_venta_surco.jpg";
import terrenoVentaCarabaylloImg from "./assets/rma/terreno_venta_Carabayllo.jpeg";
import terrenoIndustrialAlquilerChorrillosImg from "./assets/rma/terreno_industrial_alquiler_chorrillos.jpg";
import depaFlatVentaSurco2Img from "./assets/rma/depa_flat_venta_surco2.jpg";
import depaFlatVentaMirafloresImg from "./assets/rma/depa_flat_venta_miraflores.jpg";
import depaFlatVentaLinceImg from "./assets/rma/depa_flat_venta_Lince.jpg";
import depaFlatVentaSurco3Img from "./assets/rma/depa_flat_venta_surco3.jpg";
import terrenoAgricolaVentaTumbesImg from "./assets/rma/terreno_agricula_venta_tumbes.jpg";
import casaUrbanaVentaSurcoImg from "./assets/rma/casa_urbana_venta_surco.jpg";
import terrenoComercialVentaSantaRosaImg from "./assets/rma/terreno_comercial_venta_santa_rosa.jpg";
import depaFlatVentaSurco4Img from "./assets/rma/depa_flat_venta_surco4.jpg";
import depaFlatVentaMiraflores2Img from "./assets/rma/depa_flat_venta_miraflores_2.jpg";

export const people = [
  {
    rosaMaria: {
      name: "Rosa María Álvarez",
      role: "Asesora Inmobiliaria |❤️✈️| Estudiante de coaching",
      description:
        "Me dedico a brindar un servicio personalizado y de calidad, adaptado a la necesidad de cadaHeaderProps",
      links: {
        whatsapp: "https://wa.me/message/63G3GQCG742WM1",
        tiktok: "https://www.tiktok.com/@rosamariaalvarezsalas",
        instagram: "https://www.instagram.com/rosa_alvarezs",
        facebook: "https://www.facebook.com/rosamariarealtor",
        linkedin: "https://www.linkedin.com/in/rosa-maria-alvarez-salas-/",
        youtube: "https://www.youtube.com/@rosamariaalvarezsalas",
      },
      images: {
        profile: rosaProfilePic,
        cover: rosaCover,
      },
      cta: {
        vcf: "src/assets/rosamaria.vcf",
        linkTo: "https://wa.link/2q2tzs",
        textCTA: "Ver Más",
      },
      properties: [
        {
          url: "https://www.remax.pe/web/search/property/propiedad-casa-en-venta-la-molina-lima-lima-1096139/",
          image: LaMolinaImg,
          title: "CASA URBANA EN VENTA",
          priceSol: "S/. 1,757,800.00",
          priceUsd: "USD 470,000.00",
          location: "Lima, La Molina",
        },
        {
          url: "https://www.remax.pe/web/search/property/propiedad-terreno-en-alquiler-chorrillos-lima-lima-1096089/",
          image: terrenoEnAlquilerImg,
          title: "TERRENO COMERCIAL EN ALQUILER",
          priceSol: "S/. 11,220.00",
          priceUsd: "USD 3,000.00",
          location: "Lima, Chorrillos",
        },
        {
          url: "https://www.remax.pe/web/search/property/propiedad-departamento-en-venta-miraflores-lima-lima-1092314/",
          image: depaDuplexVentaImg,
          title: "DEPARTAMENTO DUPLEX EN VENTA",
          priceSol: "S/. 935,000.00",
          priceUsd: "USD 250,000.00",
          location: "Lima, Miraflores",
        },
        {
          url: "https://www.remax.pe/web/search/property/propiedad-departamento-en-alquiler-san-isidro-lima-lima-1092222/",
          image: depaFlatAlquilerImg,
          title: "DEPARTAMENTO FLAT EN ALQUILER",
          priceSol: "S/. 4,862.00",
          priceUsd: "USD 1,300.00",
          location: "Lima, San Isidro",
        },
        {
          url: "https://www.remax.pe/web/search/property/propiedad-departamento-en-venta-miraflores-lima-lima-1089713/",
          image: depaFlatVentaImg,
          title: "DEPARTAMENTO FLAT EN VENTA",
          priceSol: "S/. 1,795,200.00",
          priceUsd: "USD 480,000.00",
          location: "Lima, Miraflores",
        },
        {
          url: "https://www.remax.pe/web/search/property/propiedad-departamento-en-venta-surquillo-lima-lima-1084225/",
          image: depaFlatVentaSurquilloImg,
          title: "DEPARTAMENTO FLAT EN VENTA",
          priceSol: "S/. 299,200.00",
          priceUsd: "USD 80,000.00",
          location: "Lima, Surquillo",
        },
        {
          url: "https://www.remax.pe/web/search/property/propiedad-departamento-en-alquiler-san-isidro-lima-lima-1082111/",
          image: depaFlatAlquilerSanIsidroImg,
          title: "DEPARTAMENTO FLAT EN ALQUILER",
          priceSol: "S/. 4,675.00",
          priceUsd: "USD 1,250.00",
          location: "Lima, San Isidro",
        },
        {
          url: "https://www.remax.pe/web/search/property/propiedad-terreno-en-alquiler-chorrillos-lima-lima-1082081/",
          image: terrenoAlquilerChorrillosImg,
          title: "TERRENO COMERCIAL EN ALQUILER",
          priceSol: "S/. 44,880.00",
          priceUsd: "USD 12,000.00",
          location: "Lima, Chorrillos",
        },
        {
          url: "https://www.remax.pe/web/search/property/propiedad-departamento-en-venta-santiago-de-surco-lima-lima-1082047/",
          image: depaFlatVentaSurcoImg,
          title: "DEPARTAMENTO FLAT EN VENTA",
          priceSol: "S/. 1,365,100.00",
          priceUsd: "USD 365,000.00",
          location: "Lima, Santiago de Surco",
        },
        {
          url: "https://www.remax.pe/web/search/property/propiedad-terreno-en-venta-carabayllo-lima-lima-1080254/",
          image: terrenoVentaCarabaylloImg,
          title: "TERRENO COMERCIAL EN VENTA",
          priceSol: "S/. 224,400.00",
          priceUsd: "USD 60,000.00",
          location: "Lima, Carabayllo",
        },
        {
          url: "https://www.remax.pe/web/search/property/propiedad-terreno-en-alquiler-chorrillos-lima-lima-1080229/",
          image: terrenoIndustrialAlquilerChorrillosImg,
          title: "TERRENO INDUSTRIAL EN ALQUILER",
          priceSol: "S/. 164,560.00",
          priceUsd: "USD 44,000.00",
          location: "Lima, Chorrillos",
        },
        {
          url: "https://www.remax.pe/web/search/property/propiedad-departamento-en-venta-santiago-de-surco-lima-lima-1079023/",
          image: depaFlatVentaSurco2Img,
          title: "DEPARTAMENTO FLAT EN VENTA",
          priceSol: "S/. 243,100.00",
          priceUsd: "USD 65,000.00",
          location: "Lima, Santiago de Surco",
        },
        {
          url: "https://www.remax.pe/web/search/property/propiedad-departamento-en-venta-miraflores-lima-lima-1078116/",
          image: depaFlatVentaMirafloresImg,
          title: "DEPARTAMENTO FLAT EN VENTA",
          priceSol: "S/. 935,000.00",
          priceUsd: "USD 250,000.00",
          location: "Lima, Miraflores",
        },
        {
          url: "https://www.remax.pe/web/search/property/propiedad-departamento-en-venta-lince-lima-lima-1077439/",
          image: depaFlatVentaLinceImg,
          title: "DEPARTAMENTO FLAT EN VENTA",
          priceSol: "S/. 822,800.00",
          priceUsd: "USD 220,000.00",
          location: "Lima, Lince",
        },
        {
          url: "https://www.remax.pe/web/search/property/propiedad-departamento-en-venta-santiago-de-surco-lima-lima-1076943/",
          image: depaFlatVentaSurco3Img,
          title: "DEPARTAMENTO FLAT EN VENTA",
          priceSol: "S/. 411,400.00",
          priceUsd: "USD 110,000.00",
          location: "Lima, Santiago de Surco",
        },
        {
          url: "https://www.remax.pe/web/search/property/propiedad-terreno-en-venta-aguas-verdes-zarumilla-tumbes-1076042/",
          image: terrenoAgricolaVentaTumbesImg,
          title: "TERRENO AGRÍCOLA EN VENTA",
          priceSol: "S/. 6,941,701.00",
          priceUsd: "USD 1,856,070.00",
          location: "Tumbes, Zarumilla, Aguas Verdes",
        },
        {
          url: "https://www.remax.pe/web/search/property/propiedad-casa-en-venta-santiago-de-surco-lima-lima-1075167/",
          image: casaUrbanaVentaSurcoImg,
          title: "CASA URBANA EN VENTA",
          priceSol: "S/. 1,492,260.00",
          priceUsd: "USD 399,000.00",
          location: "Lima, Santiago de Surco",
        },
        {
          url: "https://www.remax.pe/web/search/property/propiedad-terreno-en-venta-santa-rosa-lima-lima-1069454/",
          image: terrenoComercialVentaSantaRosaImg,
          title: "TERRENO COMERCIAL EN VENTA",
          priceSol: "S/. 306,680.00",
          priceUsd: "USD 82,000.00",
          location: "Lima, Santa Rosa",
        },
        {
          url: "https://www.remax.pe/web/search/property/propiedad-departamento-en-venta-santiago-de-surco-lima-lima-1065659/",
          image: depaFlatVentaSurco4Img,
          title: "DEPARTAMENTO FLAT EN VENTA",
          priceSol: "S/. 1,166,880.00",
          priceUsd: "USD 312,000.00",
          location: "Lima, Santiago de Surco",
        },
        {
          url: "https://www.remax.pe/web/search/property/propiedad-departamento-en-venta-miraflores-lima-lima-1056803/",
          image: depaFlatVentaMiraflores2Img,
          title: "DEPARTAMENTO FLAT EN VENTA",
          priceSol: "S/. 4,114,000.00",
          priceUsd: "USD 1,100,000.00",
          location: "Lima, Miraflores",
        },
      ],
    },
  },
];
