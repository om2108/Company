import React from 'react';
import './Naac.css';

export default function Naac() {
  return (
    <div>
      <div className='container-Front'>
        <h2>NAAC/IQAC</h2>
      </div>
      <div className='below'>
        <div className='left'>
            <Sidebar/>
        </div>
        <div className='right'>
          <NaacContent/>
        </div>
      </div>
    </div>
  )
}

const Sidebar = () => (
  <div className="sidebar-container">
    <ul>
      <li className="active"><a href="https://www.smbstcollege.com/naac/about">ABOUT NAAC / IQAC</a></li>
      <li><a href="https://www.smbstcollege.com/naac/iqsc_commitee">IQAC Committee</a></li>
      <li><a href="https://www.smbstcollege.com/naac/ssr_documents">SSR Documents</a></li>
      <li><a href="https://www.smbstcollege.com/naac/ssr_report">SSR Report</a></li>
      <li><a href="https://www.smbstcollege.com/naac/aqar_report">AQAR Report</a></li>
      <li><a href="https://www.smbstcollege.com/naac/iiqa_report">IIQA Report</a></li>
      <li><a href="https://www.smbstcollege.com/naac/naaq_activity">Activities</a></li>
      <li><a href="https://www.smbstcollege.com/naac/naaq_meeting">IQAC Meeting of Minutes</a></li>
      <li><a href="https://www.smbstcollege.com/naac/photo_gallery">Photo Gallery</a></li>
    </ul>
  </div>
);

const NaacContent = () => (
  <div>
  <h3 className='right-title'>Welcome To NAAC / IQAC</h3>
  <hr/>

  <div className='gray'>
    <div className='th'><strong>About NAAC / IQAC</strong></div>
    <div className='break'></div>
    <div>
      As per the guidelines by The National Assessment and Accreditation Council (NAAC), the institution has formed Internal Quality Assurance Cell (IQAC) on 21st June, 2005 with an aim of quality sustenance and enhancement. The IQAC has been actively involved in developing a mechanism for conscious, consistent and catalytic improvement in the overall performance of the institution.
    </div>
  </div>

  <div className='gray'>
    <h4 className='th'>Quality Policy of IQAC</h4>
    <div className='break'></div>
    <ul>
      <li>Ensuring timely, efficient and progressive performance of academic, administrative and financial tasks;</li>
      <li>The relevance and quality of academic and research programmes;</li>
      <li>Equitable access to and affordability of academic programmes for various sections of society;</li>
      <li>Optimization and integration of modern methods of teaching and learning;</li>
      <li>The credibility of evaluation procedures;</li>
      <li>Ensuring the adequacy, maintenance and proper allocation of support structure and services;</li>
      <li>Sharing of research findings and networking with other institutions.</li>
    </ul>
  </div>
</div>

);

