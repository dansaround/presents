import { Helmet } from "react-helmet-async";

interface SeoProps {
  name: string;
  description: string;
  image: string;
}

export const Seo = ({ name, description, image }: SeoProps) => {
  return (
    <Helmet>
      <title>Presents | {name}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={name} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}
    </Helmet>
  );
};
