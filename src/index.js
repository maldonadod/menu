import ReactDOM from 'react-dom';
import main from './main';
import FakeMenuService from './FakeMenuService';

const driver = {
  send(tree) {
    ReactDOM.render(tree, document.getElementById('root'));
  }
}

main(driver, new FakeMenuService())