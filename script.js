const projects = [
  {
    icon: "🤖",
    name: "FaceDet",
    desc: "Real-time facial expression detector using MediaPipe Face Mesh.",
    url: "https://kenthub123.github.io/dogface/",
    tags: ["html", "js"]
  }
];

const certs = [
  {
    icon: "📜",
    name: "Certificate of Appreciation – Intellectual Property Webinar",
    issuer: "SOURCE / La Salle University",
    date: "April 28, 2025",
    data: "https://drive.google.com/file/d/1SkFP90S_LBcxfSmsPRykMc4mC6HuaN9c/preview"
  },
  {
    icon: "📜",
    name: "Certificate of Appreciation – Introduction to Game Development with GDevelop",
    issuer: "SOURCE / La Salle University",
    date: "May 31, 2025",
    data: "https://drive.google.com/file/d/1z9oNsaHokwmKN4DLhqELkCHBpqpGBPl5/preview"
  },
  {
    icon: "📜",
    name: "Certificate of Participation – Introduction to Git Version Control",
    issuer: "SOURCE / La Salle University",
    date: "September 19, 2025",
    data: "https://drive.google.com/file/d/15rddtut7ITr5lACLvEllESl9QGN-x93t/preview"
  },
  {
    icon: "📜",
    name: "Certificate of Participation – Introduction to UI/UX Design",
    issuer: "SOURCE / La Salle University",
    date: "September 26, 2025",
    data: "https://drive.google.com/file/d/1f-0kGaNtN0sY4k23XkMRdTtJHmsR_qtH/preview"
  },
  {
    icon: "📜",
    name: "Certificate of Participation – Classroom to Career",
    issuer: "SOURCE / La Salle University",
    date: "November 4, 2025",
    data: "https://drive.google.com/file/d/1TFs5Q29xTd-Z8JVwOVvpqpL4BnmU-_bb/preview"
  },
  {
    icon: "📜",
    name: "Certificate of Participation – IT Certification: Certifying IT Excellence",
    issuer: "SOURCE / La Salle University",
    date: "March 11, 2026",
    data: "https://drive.google.com/file/d/1sJRpPydf22XPOZiPcJhlzdu3LOkRer6Q/preview"
  },
  {
    icon: "📜",
    name: "Certificate of Participation – Information Security Bootcamp",
    issuer: "SOURCE / La Salle University",
    date: "April 29, 2026",
    data: "https://drive.google.com/file/d/12WoEQERi8xmUhHv8Ohmzlc606Wa78kNw/preview"
  },
  {
    icon: "📜",
    name: "Certificate of Participation – Classroom to Career: Stories to Life Through Cinematic Art",
    issuer: "SOURCE / La Salle University",
    date: "April 30, 2026",
    data: "https://drive.google.com/file/d/16jSl8nNzFUDtVHRnWhbGXvw2EwdlqejQ/preview"
  }
];

const tagLabels = {
  html: "HTML/CSS",
  js: "JavaScript",
  react: "React",
  python: "Python",
  php: "PHP"
};

function renderProjects(f) {
  const g = document.getElementById('pgrid');
  const list = f === 'all' ? projects : projects.filter(p => p.tags.includes(f));
  if (!projects.length) {
    g.innerHTML = '<div class="empty">Add your projects in the script section</div>';
    return;
  }
  g.innerHTML = list.map(p => `
    <a href="${p.url || '#'}" target="_blank" rel="noopener" class="pcard">
      <div class="phead"><div class="pico">${p.icon}</div><span class="parrow">&#x2197;</span></div>
      <div class="ptitle">${p.name}</div>
      <div class="pdesc">${p.desc}</div>
      <div class="ptags">${p.tags.map(t => `<span class="ptag">${tagLabels[t] || t}</span>`).join('')}</div>
    </a>`).join('');
  document.getElementById('proj-count').textContent = projects.length;
}
function renderCerts() {
  document.getElementById('cgrid').innerHTML = certs.map((c, i) => `
    <div class="ccard">
      <div style="display:flex;align-items:flex-start;gap:.7rem">
        <div class="cico">${c.icon}</div>
        <div><div class="cname">${c.name}</div><div class="cissuer">${c.issuer}</div></div>
      </div>
      <div class="cdate">${c.date}</div>
      <button class="cbtn" onclick="openCert(${i})">View Certificate &#x2197;</button>
    </div>`).join('');
}

function openCert(i) {
  const c = certs[i];
  document.getElementById('lb-frame').src = c.data;
  document.getElementById('lb-title').textContent = c.name;
  const dl = document.getElementById('lb-dl');
  dl.href = c.data.replace('/preview', '/view');
  dl.download = c.name + '.pdf';
  document.getElementById('lb').classList.add('open');
  document.body.style.overflow = 'hidden';
}

document.getElementById('lb-x').onclick = () => {
  document.getElementById('lb').classList.remove('open');
  document.getElementById('lb-frame').src = '';
  document.body.style.overflow = '';
};

document.getElementById('lb').onclick = function (e) {
  if (e.target === this) document.getElementById('lb-x').click();
};

document.querySelectorAll('.fbtn').forEach(b => {
  b.onclick = () => {
    document.querySelectorAll('.fbtn').forEach(x => x.classList.remove('on'));
    b.classList.add('on');
    renderProjects(b.dataset.f);
  };
});

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.onclick = e => {
    const t = document.querySelector(a.getAttribute('href'));
    if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth' }); }
  };
});

renderProjects('all');
renderCerts();