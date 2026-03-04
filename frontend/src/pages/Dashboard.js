import { useEffect, useState } from 'react';
import {
  getServices, addService, updateService, deleteService,
  getPortfolio, addPortfolio, updatePortfolio, deletePortfolio,
  getTeam, addTeamMember, updateTeamMember, deleteTeamMember,
  getReviews, addReview, updateReview, deleteReview,
  MEDIA_URL
} from '../api';
import './Dashboard.css';

const EMPTY_SVC  = { title:'', description:'', order:0, image:null };
const EMPTY_PORT = { title:'', category:'', image:null };
const EMPTY_TEAM = { name:'', role:'', is_coo:false, message:'', image:null };
const EMPTY_REV  = { name:'', category:'', review:'', rating:5, image:null };

function Dashboard() {
  const [tab, setTab]           = useState('services');
  const [services, setServices] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [team, setTeam]         = useState([]);
  const [reviews, setReviews]   = useState([]);
  const [msg, setMsg]           = useState('');

  // Form state
  const [svcForm,  setSvcForm]  = useState(EMPTY_SVC);
  const [portForm, setPortForm] = useState(EMPTY_PORT);
  const [teamForm, setTeamForm] = useState(EMPTY_TEAM);
  const [revForm,  setRevForm]  = useState(EMPTY_REV);

  // Edit mode: stores the id being edited, null = add mode
  const [editSvcId,  setEditSvcId]  = useState(null);
  const [editPortId, setEditPortId] = useState(null);
  const [editTeamId, setEditTeamId] = useState(null);
  const [editRevId,  setEditRevId]  = useState(null);

  const notify = (m) => { setMsg(m); setTimeout(() => setMsg(''), 3000); };

  const load = () => {
    getServices().then(r => setServices(r.data)).catch(() => {});
    getPortfolio().then(r => setPortfolio(r.data)).catch(() => {});
    getTeam().then(r => setTeam(r.data)).catch(() => {});
    getReviews().then(r => setReviews(r.data)).catch(() => {});
  };

  useEffect(() => { load(); }, []);

  // Build FormData — skip null values (don't overwrite image if not changed)
  const toForm = (obj) => {
    const fd = new FormData();
    Object.entries(obj).forEach(([k, v]) => {
      if (v !== null && v !== undefined && v !== '') fd.append(k, v);
    });
    return fd;
  };

  // ── SERVICES ──
  const handleSaveService = async () => {
    if (!svcForm.title) return notify('⚠️ Title is required');
    try {
      if (editSvcId) {
        await updateService(editSvcId, toForm(svcForm));
        notify('✅ Service updated!');
      } else {
        await addService(toForm(svcForm));
        notify('✅ Service added!');
      }
      setSvcForm(EMPTY_SVC); setEditSvcId(null); load();
    } catch { notify('❌ Something went wrong'); }
  };

  const startEditService = (s) => {
    setSvcForm({ title: s.title, description: s.description, order: s.order, image: null });
    setEditSvcId(s.id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // ── PORTFOLIO ──
  const handleSavePortfolio = async () => {
    if (!portForm.title) return notify('⚠️ Title is required');
    if (!editPortId && !portForm.image) return notify('⚠️ Image is required');
    try {
      if (editPortId) {
        await updatePortfolio(editPortId, toForm(portForm));
        notify('✅ Portfolio updated!');
      } else {
        await addPortfolio(toForm(portForm));
        notify('✅ Portfolio item added!');
      }
      setPortForm(EMPTY_PORT); setEditPortId(null); load();
    } catch { notify('❌ Something went wrong'); }
  };

  const startEditPortfolio = (p) => {
    setPortForm({ title: p.title, category: p.category, image: null });
    setEditPortId(p.id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // ── TEAM ──
  const handleSaveTeam = async () => {
    if (!teamForm.name) return notify('⚠️ Name is required');
    try {
      if (editTeamId) {
        await updateTeamMember(editTeamId, toForm(teamForm));
        notify('✅ Team member updated!');
      } else {
        await addTeamMember(toForm(teamForm));
        notify('✅ Team member added!');
      }
      setTeamForm(EMPTY_TEAM); setEditTeamId(null); load();
    } catch { notify('❌ Something went wrong'); }
  };

  const startEditTeam = (m) => {
    setTeamForm({ name: m.name, role: m.role, is_coo: m.is_coo, message: m.message || '', image: null });
    setEditTeamId(m.id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // ── REVIEWS ──
  const handleSaveReview = async () => {
    if (!revForm.name) return notify('⚠️ Name is required');
    try {
      if (editRevId) {
        await updateReview(editRevId, toForm(revForm));
        notify('✅ Review updated!');
      } else {
        await addReview(toForm(revForm));
        notify('✅ Review added!');
      }
      setRevForm(EMPTY_REV); setEditRevId(null); load();
    } catch { notify('❌ Something went wrong'); }
  };

  const startEditReview = (r) => {
    setRevForm({ name: r.name, category: r.category, review: r.review, rating: r.rating, image: null });
    setEditRevId(r.id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const cancelEdit = () => {
    setSvcForm(EMPTY_SVC);  setEditSvcId(null);
    setPortForm(EMPTY_PORT); setEditPortId(null);
    setTeamForm(EMPTY_TEAM); setEditTeamId(null);
    setRevForm(EMPTY_REV);  setEditRevId(null);
  };

  const tabs = ['services', 'portfolio', 'team', 'reviews'];

  return (
    <div className="dashboard">
      <div className="container">
        <h1 className="dash-title">Admin Dashboard</h1>
        <p className="dash-sub">Add, Edit and Delete all website content from here</p>

        {msg && <div className="dash-msg">{msg}</div>}

        <div className="dash-tabs">
          {tabs.map(t => (
            <button key={t} onClick={() => { setTab(t); cancelEdit(); }}
              className={tab === t ? 'active' : ''}>
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>

        {/* ═══ SERVICES ═══ */}
        {tab === 'services' && (
          <div className="dash-section">
            <div className="dash-form-header">
              <h2>{editSvcId ? '✏️ Edit Service' : '➕ Add Service'}</h2>
              {editSvcId && <button className="cancel-btn" onClick={cancelEdit}>✕ Cancel Edit</button>}
            </div>
            <div className="dash-form">
              <input placeholder="Title *" value={svcForm.title}
                onChange={e => setSvcForm({ ...svcForm, title: e.target.value })} />
              <textarea placeholder="Description"  value={svcForm.description}
                onChange={e => setSvcForm({ ...svcForm, description: e.target.value })} />
              <input type="number" placeholder="Order (0,1,2...)" value={svcForm.order}
                onChange={e => setSvcForm({ ...svcForm, order: e.target.value })} />
              <div className="file-input-row">
                <input type="file" accept="image/*"
                  onChange={e => setSvcForm({ ...svcForm, image: e.target.files[0] })} />
                {editSvcId && <span className="file-hint">Leave empty to keep existing image</span>}
              </div>
              <button
              className="dash-btn"
              onClick={(e) => {
                e.preventDefault();
                handleSaveService();
              }}
            >
              {editSvcId ? '💾 Save Changes' : '+ Add Service'}
            </button>
            </div>

            <h2>Existing Services</h2>
            <div className="dash-list">
              {services.map(s => (
                <div className={`dash-item ${editSvcId === s.id ? 'editing' : ''}`} key={s.id}>
                  <img src={s.image} alt={s.title} />
                  <div className="dash-item-info">
                    <h4>{s.title}</h4>
                    <p>{s.description}</p>
                  </div>
                  <div className="dash-item-actions">
                    <button className="edit-btn" onClick={() => startEditService(s)}>✏️ Edit</button>
                    <button className="del-btn" onClick={() => deleteService(s.id).then(load)}>🗑 Delete</button>
                  </div>
                </div>
              ))}
              {services.length === 0 && <p className="empty">No services yet. Add one above.</p>}
            </div>
          </div>
        )}

        {/* ═══ PORTFOLIO ═══ */}
        {tab === 'portfolio' && (
          <div className="dash-section">
            <div className="dash-form-header">
              <h2>{editPortId ? '✏️ Edit Portfolio Item' : '➕ Add Portfolio Item'}</h2>
              {editPortId && <button className="cancel-btn" onClick={cancelEdit}>✕ Cancel Edit</button>}
            </div>
            <div className="dash-form">
              <input placeholder="Title *" value={portForm.title}
                onChange={e => setPortForm({ ...portForm, title: e.target.value })} />
              <input placeholder="Category (e.g. Branding)" value={portForm.category}
                onChange={e => setPortForm({ ...portForm, category: e.target.value })} />
              <div className="file-input-row">
                <input type="file" accept="image/*"
                  onChange={e => setPortForm({ ...portForm, image: e.target.files[0] })} />
                {editPortId && <span className="file-hint">Leave empty to keep existing image</span>}
              </div>
              <button className="dash-btn" onClick={handleSavePortfolio}>
                {editPortId ? '💾 Save Changes' : '+ Add Portfolio Item'}
              </button>
            </div>

            <h2>Existing Portfolio</h2>
            <div className="dash-list">
              {portfolio.map(p => (
                <div className={`dash-item ${editPortId === p.id ? 'editing' : ''}`} key={p.id}>
                  <img src={`${MEDIA_URL}${p.image}`} alt={p.title} />
                  <div className="dash-item-info">
                    <h4>{p.title}</h4>
                    <p>{p.category}</p>
                  </div>
                  <div className="dash-item-actions">
                    <button className="edit-btn" onClick={() => startEditPortfolio(p)}>✏️ Edit</button>
                    <button className="del-btn" onClick={() => deletePortfolio(p.id).then(load)}>🗑 Delete</button>
                  </div>
                </div>
              ))}
              {portfolio.length === 0 && <p className="empty">No portfolio items yet.</p>}
            </div>
          </div>
        )}

        {/* ═══ TEAM ═══ */}
        {tab === 'team' && (
          <div className="dash-section">
            <div className="dash-form-header">
              <h2>{editTeamId ? '✏️ Edit Team Member' : '➕ Add Team Member'}</h2>
              {editTeamId && <button className="cancel-btn" onClick={cancelEdit}>✕ Cancel Edit</button>}
            </div>
            <div className="dash-form">
              <input placeholder="Name *" value={teamForm.name}
                onChange={e => setTeamForm({ ...teamForm, name: e.target.value })} />
              <input placeholder="Role (e.g. Designer)" value={teamForm.role}
                onChange={e => setTeamForm({ ...teamForm, role: e.target.value })} />
              <label className="dash-check">
                <input type="checkbox" checked={teamForm.is_coo}
                  onChange={e => setTeamForm({ ...teamForm, is_coo: e.target.checked })} />
                &nbsp; This person is the COO
              </label>
              <textarea placeholder="COO Message (optional)" value={teamForm.message}
                onChange={e => setTeamForm({ ...teamForm, message: e.target.value })} />
              <div className="file-input-row">
                <input type="file" accept="image/*"
                  onChange={e => setTeamForm({ ...teamForm, image: e.target.files[0] })} />
                {editTeamId && <span className="file-hint">Leave empty to keep existing image</span>}
              </div>
              <button className="dash-btn" onClick={handleSaveTeam}>
                {editTeamId ? '💾 Save Changes' : '+ Add Team Member'}
              </button>
            </div>

            <h2>Existing Team</h2>
            <div className="dash-list">
              {team.map(m => (
                <div className={`dash-item ${editTeamId === m.id ? 'editing' : ''}`} key={m.id}>
                  {m.image && <img src={`${MEDIA_URL}${m.image}`} alt={m.name} />}
                  <div className="dash-item-info">
                    <h4>{m.name} {m.is_coo && <span className="coo-badge">COO</span>}</h4>
                    <p>{m.role}</p>
                  </div>
                  <div className="dash-item-actions">
                    <button className="edit-btn" onClick={() => startEditTeam(m)}>✏️ Edit</button>
                    <button className="del-btn" onClick={() => deleteTeamMember(m.id).then(load)}>🗑 Delete</button>
                  </div>
                </div>
              ))}
              {team.length === 0 && <p className="empty">No team members yet.</p>}
            </div>
          </div>
        )}

        {/* ═══ REVIEWS ═══ */}
        {tab === 'reviews' && (
          <div className="dash-section">
            <div className="dash-form-header">
              <h2>{editRevId ? '✏️ Edit Review' : '➕ Add Review'}</h2>
              {editRevId && <button className="cancel-btn" onClick={cancelEdit}>✕ Cancel Edit</button>}
            </div>
            <div className="dash-form">
              <input placeholder="Client Name *" value={revForm.name}
                onChange={e => setRevForm({ ...revForm, name: e.target.value })} />
              <input placeholder="Category (e.g. Digital Marketing)" value={revForm.category}
                onChange={e => setRevForm({ ...revForm, category: e.target.value })} />
              <textarea placeholder="Review text" value={revForm.review}
                onChange={e => setRevForm({ ...revForm, review: e.target.value })} />
              <select value={revForm.rating}
                onChange={e => setRevForm({ ...revForm, rating: Number(e.target.value) })}>
                {[1, 2, 3, 4, 5].map(n => (
                  <option key={n} value={n}>{n} Star{n > 1 ? 's' : ''}</option>
                ))}
              </select>
              <div className="file-input-row">
                <input type="file" accept="image/*"
                  onChange={e => setRevForm({ ...revForm, image: e.target.files[0] })} />
                {editRevId && <span className="file-hint">Leave empty to keep existing image</span>}
              </div>
              <button className="dash-btn" onClick={handleSaveReview}>
                {editRevId ? '💾 Save Changes' : '+ Add Review'}
              </button>
            </div>

            <h2>Existing Reviews</h2>
            <div className="dash-list">
              {reviews.map(r => (
                <div className={`dash-item ${editRevId === r.id ? 'editing' : ''}`} key={r.id}>
                  {r.image && <img src={`${MEDIA_URL}${r.image}`} alt={r.name} />}
                  <div className="dash-item-info">
                    <h4>{r.name}</h4>
                    <p>{'★'.repeat(r.rating)}{'☆'.repeat(5 - r.rating)} — {r.category}</p>
                    <p style={{ fontSize: 12, color: '#666', marginTop: 4 }}>{r.review?.substring(0, 80)}...</p>
                  </div>
                  <div className="dash-item-actions">
                    <button className="edit-btn" onClick={() => startEditReview(r)}>✏️ Edit</button>
                    <button className="del-btn" onClick={() => deleteReview(r.id).then(load)}>🗑 Delete</button>
                  </div>
                </div>
              ))}
              {reviews.length === 0 && <p className="empty">No reviews yet.</p>}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default Dashboard;



// import { useEffect, useState } from 'react';
// import {
//   getServices, addService, deleteService,
//   getPortfolio, addPortfolio, deletePortfolio,
//   getTeam, addTeamMember, deleteTeamMember,
//   getReviews, addReview, deleteReview,
//   MEDIA_URL
// } from '../api';
// import './Dashboard.css';

// function Dashboard() {
//   const [tab, setTab] = useState('services');
//   const [services, setServices] = useState([]);
//   const [portfolio, setPortfolio] = useState([]);
//   const [team, setTeam] = useState([]);
//   const [reviews, setReviews] = useState([]);
//   const [msg, setMsg] = useState('');

//   // Form states
//   const [svcForm, setSvcForm] = useState({title:'',description:'',order:0,image:null});
//   const [portForm, setPortForm] = useState({title:'',category:'',image:null});
//   const [teamForm, setTeamForm] = useState({name:'',role:'',is_coo:false,message:'',image:null});
//   const [revForm, setRevForm] = useState({name:'',category:'',review:'',rating:5,image:null});

//   const notify = (m) => { setMsg(m); setTimeout(()=>setMsg(''),3000); };

//   const load = () => {
//     getServices().then(r=>setServices(r.data)).catch(()=>{});
//     getPortfolio().then(r=>setPortfolio(r.data)).catch(()=>{});
//     getTeam().then(r=>setTeam(r.data)).catch(()=>{});
//     getReviews().then(r=>setReviews(r.data)).catch(()=>{});
//   };

//   useEffect(()=>{ load(); },[]);

//   const toForm = (obj) => {
//     const fd = new FormData();
//     Object.entries(obj).forEach(([k,v])=>{ if(v!==null && v!==undefined) fd.append(k,v); });
//     return fd;
//   };

//   const handleAddService = async () => {
//     if(!svcForm.title) return notify('Title is required');
//     await addService(toForm(svcForm));
//     setSvcForm({title:'',description:'',order:0,image:null});
//     load(); notify('✅ Service added!');
//   };

//   const handleAddPortfolio = async () => {
//     if(!portForm.title || !portForm.image) return notify('Title and image required');
//     await addPortfolio(toForm(portForm));
//     setPortForm({title:'',category:'',image:null});
//     load(); notify('✅ Portfolio item added!');
//   };

//   const handleAddTeam = async () => {
//     if(!teamForm.name) return notify('Name is required');
//     await addTeamMember(toForm(teamForm));
//     setTeamForm({name:'',role:'',is_coo:false,message:'',image:null});
//     load(); notify('✅ Team member added!');
//   };

//   const handleAddReview = async () => {
//     if(!revForm.name) return notify('Name is required');
//     await addReview(toForm(revForm));
//     setRevForm({name:'',category:'',review:'',rating:5,image:null});
//     load(); notify('✅ Review added!');
//   };

//   const tabs = ['services','portfolio','team','reviews'];

//   return (
//     <div className="dashboard">
//       <div className="container">
//         <h1 className="dash-title">Admin Dashboard</h1>
//         <p className="dash-sub">Manage all website content from here</p>

//         {msg && <div className="dash-msg">{msg}</div>}

//         <div className="dash-tabs">
//           {tabs.map(t => (
//             <button key={t} onClick={()=>setTab(t)} className={tab===t?'active':''}>
//               {t.charAt(0).toUpperCase()+t.slice(1)}
//             </button>
//           ))}
//         </div>

//         {/* SERVICES */}
//         {tab==='services' && (
//           <div className="dash-section">
//             <h2>Add Service</h2>
//             <div className="dash-form">
//               <input placeholder="Title" value={svcForm.title} onChange={e=>setSvcForm({...svcForm,title:e.target.value})} />
//               <textarea placeholder="Description" value={svcForm.description} onChange={e=>setSvcForm({...svcForm,description:e.target.value})} />
//               <input type="number" placeholder="Order (0,1,2...)" value={svcForm.order} onChange={e=>setSvcForm({...svcForm,order:e.target.value})} />
//               <input type="file" accept="image/*" onChange={e=>setSvcForm({...svcForm,image:e.target.files[0]})} />
//               <button className="dash-btn" onClick={handleAddService}>+ Add Service</button>
//             </div>
//             <h2>Existing Services</h2>
//             <div className="dash-list">
//               {services.map(s=>(
//                 <div className="dash-item" key={s.id}>
//                   {s.image && <img src={`${MEDIA_URL}${s.image}`} alt={s.title} />}
//                   <div className="dash-item-info">
//                     <h4>{s.title}</h4>
//                     <p>{s.description}</p>
//                   </div>
//                   <button className="del-btn" onClick={()=>deleteService(s.id).then(load)}>Delete</button>
//                 </div>
//               ))}
//               {services.length===0 && <p className="empty">No services yet. Add one above.</p>}
//             </div>
//           </div>
//         )}

//         {/* PORTFOLIO */}
//         {tab==='portfolio' && (
//           <div className="dash-section">
//             <h2>Add Portfolio Item</h2>
//             <div className="dash-form">
//               <input placeholder="Title" value={portForm.title} onChange={e=>setPortForm({...portForm,title:e.target.value})} />
//               <input placeholder="Category (e.g. Branding)" value={portForm.category} onChange={e=>setPortForm({...portForm,category:e.target.value})} />
//               <input type="file" accept="image/*" onChange={e=>setPortForm({...portForm,image:e.target.files[0]})} />
//               <button className="dash-btn" onClick={handleAddPortfolio}>+ Add Portfolio Item</button>
//             </div>
//             <h2>Existing Portfolio</h2>
//             <div className="dash-list">
//               {portfolio.map(p=>(
//                 <div className="dash-item" key={p.id}>
//                   <img src={`${MEDIA_URL}${p.image}`} alt={p.title} />
//                   <div className="dash-item-info">
//                     <h4>{p.title}</h4>
//                     <p>{p.category}</p>
//                   </div>
//                   <button className="del-btn" onClick={()=>deletePortfolio(p.id).then(load)}>Delete</button>
//                 </div>
//               ))}
//               {portfolio.length===0 && <p className="empty">No portfolio items yet.</p>}
//             </div>
//           </div>
//         )}

//         {/* TEAM */}
//         {tab==='team' && (
//           <div className="dash-section">
//             <h2>Add Team Member</h2>
//             <div className="dash-form">
//               <input placeholder="Name" value={teamForm.name} onChange={e=>setTeamForm({...teamForm,name:e.target.value})} />
//               <input placeholder="Role (e.g. Designer)" value={teamForm.role} onChange={e=>setTeamForm({...teamForm,role:e.target.value})} />
//               <label className="dash-check">
//                 <input type="checkbox" checked={teamForm.is_coo} onChange={e=>setTeamForm({...teamForm,is_coo:e.target.checked})} />
//                 &nbsp; This person is the COO
//               </label>
//               <textarea placeholder="COO Message (optional)" value={teamForm.message} onChange={e=>setTeamForm({...teamForm,message:e.target.value})} />
//               <input type="file" accept="image/*" onChange={e=>setTeamForm({...teamForm,image:e.target.files[0]})} />
//               <button className="dash-btn" onClick={handleAddTeam}>+ Add Team Member</button>
//             </div>
//             <h2>Existing Team</h2>
//             <div className="dash-list">
//               {team.map(m=>(
//                 <div className="dash-item" key={m.id}>
//                   {m.image && <img src={`${MEDIA_URL}${m.image}`} alt={m.name} />}
//                   <div className="dash-item-info">
//                     <h4>{m.name} {m.is_coo && <span style={{color:'#ff5500',fontSize:11}}>(COO)</span>}</h4>
//                     <p>{m.role}</p>
//                   </div>
//                   <button className="del-btn" onClick={()=>deleteTeamMember(m.id).then(load)}>Delete</button>
//                 </div>
//               ))}
//               {team.length===0 && <p className="empty">No team members yet.</p>}
//             </div>
//           </div>
//         )}

//         {/* REVIEWS */}
//         {tab==='reviews' && (
//           <div className="dash-section">
//             <h2>Add Review</h2>
//             <div className="dash-form">
//               <input placeholder="Client Name" value={revForm.name} onChange={e=>setRevForm({...revForm,name:e.target.value})} />
//               <input placeholder="Category (e.g. Digital Marketing)" value={revForm.category} onChange={e=>setRevForm({...revForm,category:e.target.value})} />
//               <textarea placeholder="Review text" value={revForm.review} onChange={e=>setRevForm({...revForm,review:e.target.value})} />
//               <select value={revForm.rating} onChange={e=>setRevForm({...revForm,rating:Number(e.target.value)})}>
//                 {[1,2,3,4,5].map(n=><option key={n} value={n}>{n} Star{n>1?'s':''}</option>)}
//               </select>
//               <input type="file" accept="image/*" onChange={e=>setRevForm({...revForm,image:e.target.files[0]})} />
//               <button className="dash-btn" onClick={handleAddReview}>+ Add Review</button>
//             </div>
//             <h2>Existing Reviews</h2>
//             <div className="dash-list">
//               {reviews.map(r=>(
//                 <div className="dash-item" key={r.id}>
//                   {r.image && <img src={`${MEDIA_URL}${r.image}`} alt={r.name} />}
//                   <div className="dash-item-info">
//                     <h4>{r.name}</h4>
//                     <p>{'★'.repeat(r.rating)} — {r.category}</p>
//                   </div>
//                   <button className="del-btn" onClick={()=>deleteReview(r.id).then(load)}>Delete</button>
//                 </div>
//               ))}
//               {reviews.length===0 && <p className="empty">No reviews yet.</p>}
//             </div>
//           </div>
//         )}

//       </div>
//     </div>
//   );
// }

// export default Dashboard;
