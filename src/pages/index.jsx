import { render } from '@czechitas/render';
import { Header } from '../components/Header/header';
import { Estate } from '../components/Estate/estate';
import '../global.css';
import './index.css';


const pageName = window.location.pathname.split('/').pop().replace('.html', '');
const response = await fetch(`https://apps.kodim.cz/daweb/trening-api/apis/realitka/${pageName}`)
const data = await response.json()
console.log(data)

document.querySelector('#root').innerHTML = render(
  <div className="container">
    {Header()}
    <Estate title={data.title} photo={data.photo} text={data.text} price={data.price} name={data.contact.name} email={data.contact.email} phone={data.contact.phone} />
  </div>
);
