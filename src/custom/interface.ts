export interface IFetchProject {
  id: string;
  productDesign: string;
  projectLink: string;
  projectType: string;
  title: string;
  image: Image;
}

interface Image {
  description: string;
  title: string;
  file: {
    url: string;
    fileName: string;
  };
}
