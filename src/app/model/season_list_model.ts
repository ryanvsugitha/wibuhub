export interface SeasonListModel {
  pagination: Pagination;
  data: SeasonList[];
}

export interface Pagination {
  last_visible_page: number;
  has_next_page: boolean;
}

export interface SeasonList {
  year: number;
  seasons: string[];
}
