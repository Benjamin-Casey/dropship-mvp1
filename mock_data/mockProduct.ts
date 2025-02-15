export interface mockProductInterface {
  name: string;
  description: string;
  price: number;
  imageLink?: string;
}

export const product: mockProductInterface = {
  name: "Mock Product",
  description: "My product's description",
  price: 99.99,
  imageLink: 'https://placehold.co/600x400' 
}
