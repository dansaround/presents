// ==============================
// Property (Inmuebles)
// ==============================

export interface Property {
  url: string;
  image: string;
  title: string;
  priceSol?: string;
  priceUsd?: string;
  location: string;
  type: "Venta" | "Alquiler";
}

// ==============================
// Profile - bloques reutilizables
// ==============================

export interface ProfileLinks {
  whatsapp?: string;
  tiktok?: string;
  instagram?: string;
  facebook?: string;
  linkedin?: string;
  youtube?: string;
  properties?: string;
}

export interface ProfileImages {
  profile: string;
  cover?: string;
  cardImage?: string;
}

export interface ProfileCTA {
  vcf?: string;
  linkTo: string;
  textCTA: string;
}

// ==============================
// Profiles base y especializados
// ==============================

export interface BaseProfile {
  name: string;
  role?: string;
  description?: string;
  links?: ProfileLinks;
  images?: ProfileImages;
  cta?: ProfileCTA;
}

// Perfil inmobiliario (obliga a properties)
export interface RealtorProfile extends BaseProfile {
  properties: Property[];
}

// Extras custom (para perfiles no inmobiliarios)
export interface Extras {
  specialty: string;
  yearsExperience?: number;
  services?: string[];
}

// Perfil custom extensible
export interface CustomProfile<TExtras = unknown> extends BaseProfile {
  custom?: TExtras;
}

// Unión de perfiles posibles
export type PersonProfile = RealtorProfile | CustomProfile<Extras>;

// ==============================
// Entidad Persona
// ==============================

export interface Person {
  id: string;
  profile: PersonProfile;
}

// ==============================
// Type Guards (opcional pero recomendado)
// ==============================

export function hasProperties(
  profile: PersonProfile
): profile is RealtorProfile {
  return "properties" in profile;
}
