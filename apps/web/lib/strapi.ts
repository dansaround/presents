import type { Profile, StrapiSingleResponse, StrapiCollectionResponse } from '@presents/shared';

const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1337';
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

interface FetchOptions extends RequestInit {
  revalidate?: number | false;
}

async function fetchStrapi<T>(
  endpoint: string,
  options: FetchOptions = {}
): Promise<T> {
  const { revalidate, ...fetchOptions } = options;

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...(STRAPI_API_TOKEN && { Authorization: `Bearer ${STRAPI_API_TOKEN}` }),
    ...fetchOptions.headers,
  };

  const response = await fetch(`${STRAPI_URL}/api${endpoint}`, {
    ...fetchOptions,
    headers,
    next: revalidate !== undefined ? { revalidate } : undefined,
  });

  if (!response.ok) {
    throw new Error(`Strapi fetch error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

// ==============================
// Profile API Functions
// ==============================

export async function getProfileBySlug(slug: string): Promise<Profile | null> {
  try {
    const response = await fetchStrapi<StrapiCollectionResponse<Omit<Profile, 'id'>>>(
      `/profiles?filters[slug][$eq]=${slug}&populate=deep`,
      { revalidate: 60 } // Revalidate every minute
    );

    if (!response.data?.[0]) {
      return null;
    }

    const { id, attributes } = response.data[0];
    return { id, ...attributes } as Profile;
  } catch (error) {
    console.error('Error fetching profile by slug:', error);
    return null;
  }
}

export async function getProfileById(id: number): Promise<Profile | null> {
  try {
    const response = await fetchStrapi<StrapiSingleResponse<Omit<Profile, 'id'>>>(
      `/profiles/${id}?populate=deep`,
      { revalidate: 60 }
    );

    if (!response.data) {
      return null;
    }

    return { id: response.data.id, ...response.data.attributes } as Profile;
  } catch (error) {
    console.error('Error fetching profile by id:', error);
    return null;
  }
}

export async function getProfileByClerkUserId(clerkUserId: string): Promise<Profile | null> {
  try {
    const response = await fetchStrapi<StrapiCollectionResponse<Omit<Profile, 'id'>>>(
      `/profiles?filters[clerkUserId][$eq]=${clerkUserId}&populate=deep`,
      { revalidate: 0 } // No caching for user-specific data
    );

    if (!response.data?.[0]) {
      return null;
    }

    const { id, attributes } = response.data[0];
    return { id, ...attributes } as Profile;
  } catch (error) {
    console.error('Error fetching profile by clerkUserId:', error);
    return null;
  }
}

export async function getProfilesByClerkUserId(clerkUserId: string): Promise<Profile[]> {
  try {
    const response = await fetchStrapi<StrapiCollectionResponse<Omit<Profile, 'id'>>>(
      `/profiles?filters[clerkUserId][$eq]=${clerkUserId}&populate=deep`,
      { revalidate: 0 }
    );

    return response.data.map(({ id, attributes }) => ({ id, ...attributes })) as Profile[];
  } catch (error) {
    console.error('Error fetching profiles by clerkUserId:', error);
    return [];
  }
}

export async function getProfileByCustomDomain(domain: string): Promise<Profile | null> {
  try {
    const response = await fetchStrapi<StrapiCollectionResponse<Omit<Profile, 'id'>>>(
      `/profiles?filters[customDomain][$eq]=${domain}&populate=deep`,
      { revalidate: 300 } // 5 minutes cache for custom domains
    );

    if (!response.data?.[0]) {
      return null;
    }

    const { id, attributes } = response.data[0];
    return { id, ...attributes } as Profile;
  } catch (error) {
    console.error('Error fetching profile by custom domain:', error);
    return null;
  }
}

// ==============================
// Mutation Functions (for editor)
// ==============================

export async function createProfile(data: Partial<Profile>): Promise<Profile | null> {
  try {
    const response = await fetchStrapi<StrapiSingleResponse<Omit<Profile, 'id'>>>(
      '/profiles',
      {
        method: 'POST',
        body: JSON.stringify({ data }),
        revalidate: 0,
      }
    );

    if (!response.data) {
      return null;
    }

    return { id: response.data.id, ...response.data.attributes } as Profile;
  } catch (error) {
    console.error('Error creating profile:', error);
    return null;
  }
}

export async function updateProfile(id: number, data: Partial<Profile>): Promise<Profile | null> {
  try {
    const response = await fetchStrapi<StrapiSingleResponse<Omit<Profile, 'id'>>>(
      `/profiles/${id}`,
      {
        method: 'PUT',
        body: JSON.stringify({ data }),
        revalidate: 0,
      }
    );

    if (!response.data) {
      return null;
    }

    return { id: response.data.id, ...response.data.attributes } as Profile;
  } catch (error) {
    console.error('Error updating profile:', error);
    return null;
  }
}

export async function publishProfile(id: number): Promise<Profile | null> {
  return updateProfile(id, { publishedAt: new Date().toISOString() } as unknown as Partial<Profile>);
}

export async function unpublishProfile(id: number): Promise<Profile | null> {
  return updateProfile(id, { publishedAt: null } as unknown as Partial<Profile>);
}

// ==============================
// View Log Functions
// ==============================

interface CreateViewLogData {
  profileId: number;
  fingerprint?: string;
  referrer?: string;
  country?: string;
  device?: 'mobile' | 'tablet' | 'desktop';
}

export async function logProfileView(data: CreateViewLogData): Promise<void> {
  try {
    await fetchStrapi('/view-logs', {
      method: 'POST',
      body: JSON.stringify({
        data: {
          profile: data.profileId,
          fingerprint: data.fingerprint || '',
          referrer: data.referrer || '',
          country: data.country || '',
          device: data.device || 'desktop',
          timestamp: new Date().toISOString(),
        },
      }),
      revalidate: 0,
    });
  } catch (error) {
    // Fire-and-forget: don't throw on view log errors
    console.error('Error logging profile view:', error);
  }
}
