import ReactDOM from 'react-dom';
import main from './main';
import FakeMenuService from './FakeMenuService';

const renderer = {
  send(tree) {
    ReactDOM.render(tree, document.getElementById('root'));
  }
}

main(renderer, new FakeMenuService())