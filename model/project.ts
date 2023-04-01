export interface Project {
  screenshot: Screenshot;
  title: string;
  tags: string[];
  linkDemo: string;
  linkCode: string;
  alt?: string;
}

interface Screenshot {
  large: string;
  small: string;
}
