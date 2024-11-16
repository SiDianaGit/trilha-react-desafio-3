import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// Criando um mock adapter
const mock = new MockAdapter(axios);

export { mock }