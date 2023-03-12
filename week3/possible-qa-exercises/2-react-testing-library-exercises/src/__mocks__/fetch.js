const mockResponse = {
  categories: [],
  created_at: '2020-01-05 13:42:20.568859',
  icon_url: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
  id: 'R1u_ROyyS8KFKqrexX80eg',
  updated_at: '2020-01-05 13:42:20.568859',
  url: 'https://api.chucknorris.io/jokes/R1u_ROyyS8KFKqrexX80eg',
  value: 'Fake fetched joke',
};

export default {
  get: jest.fn().mockResolvedValue(mockResponse),
};
