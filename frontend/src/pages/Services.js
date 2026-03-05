

import { useEffect, useState } from 'react';
import { getServices, MEDIA_URL } from '../api';
import './Services.css';

function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    getServices().then(r => setServices(r.data)).catch(() => {});
  }, []);

  const fallback = [
    {id:1, title:'All Printing Works', description:'libero, porta gravida dui sollicitudin. nisl. Sed lacus orci sapien at sit in lobortis, orci Lorem ex. urna vitae nec Nunc malesuada felis, nibh nisl.'},
    {id:2, title:'Branding', description:'Sed tincidunt non, vel enim faucibus laoreet eu dignissim, amet, non Sed placerat non nec ex efficitur orci lacus.'},
    {id:3, title:'Website Designing', description:'Morbi Cras at, consectetur lorem sapien. Ut viverra ex fringilla lorem. tincidunt faucibus Sed adipiscing ex non.'},
    {id:4, title:'Video / Motion Graphics', description:'placerat eget ex tincidunt placerat quam viverra viverra In Donec non non arci libero, nulla.'},
    {id:5, title:'UI UX / Design', description:'dui tincidunt Nam vehicula. Nullam venenatis libero, fringilla Morbi Nam sed eget nisi ac nisl elit fringilla eu cursus ullamcorper.'},
  ];

  const list = services.length > 0 ? services : fallback;

  return (
    <div className="services-page">
      <div className="container">
        <div className="services-header">
          <div>
            <h1>SERVICES<br/>WE PROVIDE</h1>
          </div>
          <p className="about-text">We offer a comprehensive range of creative and printing services tailored to elevate your brand identity and reach your target audience effectively.</p>
        </div>

        <div className="services-list">
          {list.map((s, i) => (
            <div className="service-row" key={s.id}>
              <span className="service-num">({String(i+1).padStart(3,'0')})</span>
              <div className="service-content">
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </div>
              {s.image
                ? <img src={`${MEDIA_URL}${s.image}`} alt={s.title} className="service-img" />
                : <div className="service-img-placeholder" />
              }
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
