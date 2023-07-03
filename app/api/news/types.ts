export type NewsInfoResponse = {
  id: number;
  title: string;
  image_small: string;
  image_big: string;
  creation_date: string;
  date: string;
  view_count: number;
  parent_category: {
    category_id: number;
    category_title: string;
    color_title: string;
    color: string;
  };
  category: {
    category_id: number;
    category_title: string;
    color_title: string;
    color: string;
  };
  url: string;
  lead: string;
};

export type NewsInfo = {
  id: number;
  imageSmall: string;
  imageBig: string;
  title: string;
  creationDate: number;
  lead: string;
};
