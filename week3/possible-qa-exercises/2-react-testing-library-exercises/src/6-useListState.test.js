import { renderHook, act } from '@testing-library/react-hooks';
import useListState from './6-useListState';

/**
 * useListState is a custom hook, which means we (just like with a context) have something that does not render anything to the screen.
 * We can use the same trick as with contexts and write our own test component that puts it all on the screen, but there is a built in way especially for custom hooks.
 * Have a look at https://kentcdodds.com/blog/how-to-test-custom-react-hooks where you can find how the `renderHook` function can help
 */

/**
 * For the hook we have a couple of things to check:
 * - We provide an initialList, we should check that that one is actually filled in
 * - We get an addElement function, we should use that and see that the list is updated
 * - We get a removeElementById function, we should use that and see that the list is updated
 *
 * https://react-hooks-testing-library.com/usage/basic-hooks
 */

describe('useListState', () => {
  it('Sets the correct initial list', () => {
    const { result } = renderHook(() => useListState());
    expect(result.current.list).toEqual([]);
  });

  const newElement = {
    id: 111222333,
    label: 'newItemLabel',
  };

  it('Adding an element updates the list', () => {
    const { result } = renderHook(() => useListState());
    act(() => {
      result.current.addElement(newElement);
    });
    expect(result.current.list).toEqual([newElement]);
  });

  it('Removing an element updates the list', () => {
    const { result } = renderHook(() => useListState());
    act(() => {
      result.current.addElement(newElement);
    });
    act(() => {
      result.current.removeElementWithId('111222333');
    });
    expect(result.current.list).toEqual([newElement]);
  });

  it('Removing a wrong id element DO NOT updates the list', () => {
    const { result } = renderHook(() => useListState());
    act(() => {
      result.current.addElement(newElement);
    });
    act(() => {
      result.current.removeElementWithId('000');
    });
    expect(result.current.list).toEqual([newElement]);
  });
});
