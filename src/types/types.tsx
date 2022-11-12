export interface Client {
  name: string;
  rating: number;
  verified: boolean;
}

export interface Post {
  title: string;
  description: string;
  tags: string[];
  client: Client;
  proposalCount: number;
  proposalMax: number;
}
