import React from 'react';
import {
  cleanup, render, fireEvent, waitForElement, act,
} from 'react-testing-library';
import MockFirebase from 'mock-cloud-firestore';
import BadgeNew from '../BadgeNew';

const fixtureData = {
  __collection__: {
    users: {
      __doc__: {
        abc123: {
          date: {
            toDate() {
              return new Date();
            },
          },
          name: 'mahali',
          orden: [
            {
              id: 1,
              name: 'Café americano',
              value: 10.00,
              option: 'Bebidas',
              type: 'Desayuno',
              count: 1,
            },
          ],
        },
      },
    },
  },
};

const firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });

global.firebase = firebase;

describe('BadgeNew', () => {
  afterEach(cleanup);
  it('deberia aumentar y eliminar productos del array de ordenes', async () => {
    const { getByTestId, queryAllByTestId } = render(<BadgeNew />);

    let productTableItems = queryAllByTestId('item');
    expect(productTableItems).toHaveLength(0);

    const addOrdenBtn = await waitForElement(() => getByTestId('addOrden-button'));
    await act(async () => {
      fireEvent.click(addOrdenBtn);
    });
    productTableItems = queryAllByTestId('item');
    expect(productTableItems).toHaveLength(1);

    const deleteOrdenBtn = await waitForElement(() => getByTestId('0-deleteOrden-button'));
    await act(async () => {
      fireEvent.click(deleteOrdenBtn);
    });
    productTableItems = queryAllByTestId('item');
    expect(productTableItems).toHaveLength(0);
  });
  it('deberia aumentar la cantidad del producto si ya existen en la orden', async () => {
    const { getByTestId, queryAllByTestId } = render(<BadgeNew />);

    let productTableItems = queryAllByTestId('item');
    expect(productTableItems).toHaveLength(0);

    let addOrderBtn = await waitForElement(() => getByTestId('addOrden-button'));
    await act(async () => {
      fireEvent.click(addOrderBtn);
    });
    productTableItems = queryAllByTestId('item');
    expect(productTableItems).toHaveLength(1);

    addOrderBtn = await waitForElement(() => getByTestId('addOrden-button'));
    await act(async () => {
      fireEvent.click(addOrderBtn);
    });
    const amount = getByTestId('0-amount');
    expect(amount.textContent).toEqual('2');
  });
  it('deberia poder escribir el nombre del usuario', async () => {
    const { getByTestId } = render(<BadgeNew />);
    const input = await waitForElement(() => getByTestId('cliente-input'));
    await act(async () => {
      fireEvent.change(input, { target: { value: 'mahali' } });
    });
    expect(input.value).toBe('mahali');
  });
  it('debería guardar la orden en firebase', async (done) => {
    const getCollectionFromFirebase = (callback) => {
      const db = firebase.firestore();
      db.collection('users').onSnapshot((querySnapshot) => {
        const userData = [];
        querySnapshot.forEach((doc) => {
          userData.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        callback(userData);
      });
    };
    const { getByTestId } = render(<BadgeNew />);
    const addOrdenBtn = await waitForElement(() => getByTestId('addOrden-button'));
    await act(async () => {
      fireEvent.click(addOrdenBtn);
    });
    const buttonOrdenToFirebase = await waitForElement(() => getByTestId('ordenToFirebase-button'));
    await act(async () => {
      fireEvent.click(buttonOrdenToFirebase);
    });

    const getData = (data) => {
      expect(data).toHaveLength(1);
      done();
    };
    getCollectionFromFirebase(getData);
  });
});
