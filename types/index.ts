export interface PageProps {
  navigation: {
    navigate: (to: string) => void;
  };
  route: {
    key: string;
  };
}

export interface FetchOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  headers?: {
    Accept?: string;
    'Content-Type'?: string;
    Authorization?: string;
  };
  body?: string;
}
