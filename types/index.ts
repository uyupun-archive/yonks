export interface PageProps {
  navigation: {
    navigate: (to: string) => void;
  };
  route: {
    key: string;
  };
}
