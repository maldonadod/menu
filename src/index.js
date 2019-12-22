import ReactDOM from 'react-dom';
import main from './main';
import FakeMenuService from './FakeMenuService';
import "bootstrap/dist/css/bootstrap.min.css"
import './index.css';

const driver = {
  send(tree) {
    ReactDOM.render(tree, document.getElementById('root'));
  }
}

main(driver, new FakeMenuService())