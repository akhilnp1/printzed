import { useEffect, useState } from 'react';
import { getTeam, MEDIA_URL } from '../api';
import './Team.css';

function Team() {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    getTeam().then(r => setTeam(r.data)).catch(() => {});
  }, []);

  const coo = team.find(m => m.is_coo);
  const members = team.filter(m => !m.is_coo);

  return (
    <div className="team-page">
      <div className="container">

        {/* COO Section */}
        <div className="coo-section">
          <h2>Our COO's Message</h2>
          <div className="coo-content">
            {coo ? (
              <>
                {coo.image && <img src={`${MEDIA_URL}${coo.image}`} alt={coo.name} className="coo-img" />}
                <div>
                  <p className="coo-text">{coo.message || 'No message added yet.'}</p>
                  <span className="learn-more" style={{color:'#ff5500',marginTop:16,display:'block'}}>{coo.name}</span>
                </div>
              </>
            ) : (
              <>
                <div className="coo-img-placeholder" />
                <div>
                  <p className="coo-text">Add a COO team member from the dashboard and mark them as COO to display their message here.</p>
                  <span style={{color:'#ff5500',marginTop:16,display:'block'}}>COO Name</span>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Team Grid */}
        <div className="meet-team">
          <h2>Meet Our Team</h2>
          <div className="team-grid">
            {members.length > 0 ? members.map(m => (
              <div className="team-card" key={m.id}>
                {m.image
                  ? <img src={`${MEDIA_URL}${m.image}`} alt={m.name} />
                  : <div className="team-img-placeholder" />
                }
                <h4 style={{color:'#ff5500',fontSize:14,marginTop:10}}>{m.name}</h4>
                <p style={{color:'#888',fontSize:13}}>{m.role}</p>
              </div>
            )) : (
              ['Designer','Sales Executive','Sales Executive','Sales Executive'].map((r,i) => (
                <div className="team-card" key={i}>
                  <div className="team-img-placeholder" />
                  <h4 style={{color:'#ff5500',fontSize:14,marginTop:10}}>Team Member</h4>
                  <p style={{color:'#888',fontSize:13}}>{r}</p>
                </div>
              ))
            )}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Team;
