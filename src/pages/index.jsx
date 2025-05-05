import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Letenky } from '../components/Letenky';

document.querySelector('#root').innerHTML = render(
  <div className="container">
    {
      <>
        <Letenky />
      </>
    }

  </div>
);
