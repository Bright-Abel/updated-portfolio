import { createClient } from 'contentful';
import { useEffect, useState } from 'react';

const client = createClient({
  space: import.meta.env.VITE_SPACE_ID,
  environment: 'master',
  accessToken: import.meta.env.VITE_API_KEY,
});

export const useFetchProjects = () => {
  const [project, setProject] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState('');

  const getData = async () => {
    try {
      const resp = await client.getEntries({
        content_type: 'portfolio',
      });
      const projects = resp.items.map((item: any) => {
        const { title, productDesign, projectLink, projectType, image } =
          item.fields;
        const id = item.sys.id;
        const img = image?.fields?.file?.url;
        return { title, productDesign, projectLink, projectType, img, id };
      });
      setIsLoading(false);
      setProject(projects);
    } catch (error) {
      setIsLoading(false);
      if (error instanceof Error) {
        setIsError(error.message);
      } else {
        setIsError(String(error));
      }
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { project, isLoading, isError };
};
