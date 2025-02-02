import { render, screen, waitFor } from '@testing-library/react';
import fetchMock from 'jest-fetch-mock';
import ChuckNorrisJoke from './3-ChuckNorrisJoke';

/**
 * ChuckNorrisJoke is a component that fetches a joke from an api and displays it on the screen.
 * It is a simple component that we can use to practice API testing! Let's look at how the user sees the component:
 *
 * - When starting, the user should see a Loading... text
 * - Once the joke has been fetched it should be shown on the screen
 * - If there is an error, an error message needs to be showen to the user
 *
 * You don't want your component to really connect to the API when unit testing so you will want to mock that.
 * To make this easier, a package called `jest-fetch-mock` can be useful, you will have to set that up yourself.
 * Have a look at: https://github.com/jefflau/jest-fetch-mock
 */

const testSuccessfullResponse = {
  categories: [],
  created_at: '2020-01-05 13:42:20.568859',
  icon_url: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
  id: 'R1u_ROyyS8KFKqrexX80eg',
  updated_at: '2020-01-05 13:42:20.568859',
  url: 'https://api.chucknorris.io/jokes/R1u_ROyyS8KFKqrexX80eg',
  value: 'Fake fetched joke',
};

fetchMock.enableMocks();

describe('ChuckNorrisJoke', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('should show the Loading text when the component is still loading', async () => {
    fetch.mockResponseOnce(JSON.stringify(testSuccessfullResponse));
    render(<ChuckNorrisJoke />);
    const textJoke = await screen.findByText('Loading...');
    expect(textJoke).toBeInTheDocument();
  });

  it('should show the joke the fetch returns', async () => {
    fetch.mockResponseOnce(JSON.stringify(testSuccessfullResponse));
    render(<ChuckNorrisJoke />);
    const textJoke = await screen.findByText('Fake fetched joke');
    expect(textJoke).toBeInTheDocument();
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it('should show an error message if the fetch fails', async () => {
    //EXTRA CHALLENGE: You will find that you will get a `console.error` log because the component calls it.
    //     The test will pass but it will clog up your test runs which will become a problem.
    //     Think of a way to not change the component but also not get an error message.
    jest.spyOn(console, 'error').mockImplementation(jest.fn()); // solution
    fetch.mockReject(() => Promise.reject('API is down'));
    render(<ChuckNorrisJoke />);
    const textJoke = await screen.findByText(/Something went wrong/i);
    expect(textJoke).toBeInTheDocument();
  });
});
