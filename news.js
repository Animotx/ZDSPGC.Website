const allNewsData = [
  {
    image: "https://readdy.ai/api/search-image?query=A%20group%20of%20criminology%20students%20in%20uniform%20standing%20in%20formation%20during%20a%20ceremony%2C%20bright%20sunny%20day%20with%20campus%20buildings%20in%20background%2C%20professional%20academic%20achievement&width=600&height=400&seq=1&orientation=landscape",
    title: "SCC-Criminology Pioneers Achieve 80.95% BLEC Passing Rate. Congratulations Batch Genesis!",
    content: "The pioneering batch of SCC-Criminology has set a remarkable milestone, achieving an 80.95% passing rate in the recent Criminologists Licensure Examination (CLE), a figure significantly higher than the national average."
  },
  {
    image: "https://readdy.ai/api/search-image?query=A%20priest%20in%20purple%20vestments%20speaking%20to%20a%20young%20student%20during%20Ash%20Wednesday%20service%20in%20a%20church%2C%20solemn%20religious%20ceremony%20with%20soft%20lighting&width=600&height=400&seq=2&orientation=landscape",
    title: "SCC: Ash Wednesday",
    content: "\"We were all made from the ashes, and so we must all return to where we came from.\" Saint Columban College, a community of faithful, held a meaningful Ash Wednesday service to mark the beginning of the Lenten season."
  },
  {
    image: "https://readdy.ai/api/search-image?query=A%20formal%20pinning%20ceremony%20for%20criminology%20students%2C%20group%20of%20officials%20and%20students%20in%20uniform%20posing%20for%20a%20photo%2C%20ceremonial%20event%20with%20green%20backdrop%20and%20official%20banners&width=600&height=400&seq=3&orientation=landscape",
    title: "SCC Criminology Pinning Ceremony and Promotional Rites",
    content: "Saint Columban College Criminology Department successfully held its Pinning Ceremony and Promotional Rites, at the Youth Development Center. Joined by CDC faculty, parents, and students, the event marked an important milestone for future law enforcement professionals."
  },
  {
    image: "https://readdy.ai/api/search-image?query=Students%20unveiling%20a%20large%20EDSA%20Revolution%20commemorative%20artwork%20or%20mural%2C%20celebration%20of%20democracy%20and%20freedom%2C%20historical%20commemoration%20event%20at%20a%20school&width=600&height=400&seq=4&orientation=landscape",
    title: "EDSA Revolution: 39 Years of Freedom & Democracy",
    content: "On February 25 of this year, a Eucharistic Celebration was presided by Rev. Fr. Nestor B. Renasiog, STL, PhD, School President solemnly commemorated the 39th anniversary of the EDSA People Power Revolution, a pivotal moment in Philippine history."
  },
  {
    image: "https://readdy.ai/api/search-image?query=Students%20celebrating%20at%20a%20masquerade%20ball%2C%20elegant%20formal%20attire%20with%20masks%2C%20dancing%20in%20a%20decorated%20gymnasium%20with%20colorful%20lighting%20and%20festive%20atmosphere&width=600&height=400&seq=5&orientation=landscape",
    title: "Masquerades, Music and Memories",
    content: "The night event of the annual Echoes of the Heart 2025 by the CTEAS department, transformed the YDC Gym into a magical masquerade ball, where students showcased their creativity through elaborate masks and elegant attire."
  },
  {
    image: "https://readdy.ai/api/search-image?query=Valentines%20Day%20celebration%20at%20a%20school%20gymnasium%2C%20romantic%20decorations%20with%20red%20hearts%20and%20silver%20backdrop%2C%20students%20enjoying%20the%20festive%20atmosphere&width=600&height=400&seq=6&orientation=landscape",
    title: "A Day of Love and Celebration",
    content: "The spirit of Valentine's Day was felt throughout the celebration of Echoes of the Heart 2025 at the YDC Gym. The celebration started with a variety of activities designed to foster camaraderie and express appreciation among students."
  },
  {
    image: "https://readdy.ai/api/search-image?query=Students%20participating%20in%20a%20science%20fair%2C%20displaying%20innovative%20projects%20with%20interactive%20demonstrations%2C%20modern%20laboratory%20setting&width=600&height=400&seq=7&orientation=landscape",
    title: "Innovation Showcase: Annual Science Fair 2025",
    content: "The Science Department hosted its annual Science Fair, featuring groundbreaking projects from students across different grade levels. The event highlighted the school's commitment to STEM education and innovation."
  },
  {
    image: "https://readdy.ai/api/search-image?query=College%20sports%20team%20celebrating%20victory%2C%20athletes%20in%20uniform%20holding%20trophy%2C%20excited%20crowd%20in%20background%20on%20sports%20field&width=600&height=400&seq=8&orientation=landscape",
    title: "SCC Dragons Claim Regional Championship",
    content: "Our college sports team achieved a historic victory in the Regional Championships, demonstrating exceptional teamwork and athletic prowess. The victory marks a significant milestone in our school's athletic program."
  },
  {
    image: "https://readdy.ai/api/search-image?query=Academic%20conference%20with%20international%20speakers%2C%20professional%20presentation%20in%20modern%20auditorium%2C%20engaged%20audience%20of%20educators%20and%20students&width=600&height=400&seq=9&orientation=landscape",
    title: "International Academic Conference Success",
    content: "SCC hosted its first International Academic Conference, bringing together scholars and researchers from across the globe. The event fostered academic collaboration and knowledge exchange."
  },
  {
    image: "https://readdy.ai/api/search-image?query=Students%20engaged%20in%20community%20service%2C%20group%20cleaning%20coastal%20area%2C%20environmental%20conservation%20activity&width=600&height=400&seq=10&orientation=landscape",
    title: "Community Outreach: Coastal Cleanup Drive",
    content: "Students and faculty members joined forces in a coastal cleanup initiative, demonstrating our commitment to environmental conservation and community service. The event collected over 500kg of waste materials."
  }
];
document.addEventListener('DOMContentLoaded', function() {
const itemsPerPage = 6;
let currentPage = 1;
function displayNews(page) {
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const pageNews = allNewsData.slice(start, end);
  const newsContainer = document.querySelector('.grid');
  
  newsContainer.innerHTML = '';
  
  pageNews.forEach(news => {
    const newsCard = `
      <div class="news-card bg-white rounded shadow overflow-hidden opacity-0 transform translate-y-4">
        <div class="h-60 overflow-hidden">
          <img src="${news.image}" alt="${news.title}" class="w-full h-full object-cover object-top">
        </div>
        <div class="p-6">
          <h2 class="text-xl font-bold text-gray-800 mb-2">${news.title}</h2>
          <p class="text-gray-600 mb-4">${news.content}</p>
          <button class="text-primary font-medium flex items-center group transition-all duration-300 !rounded-button">
            READ MORE
            <span class="ml-1 transform transition-transform group-hover:translate-x-1">
              <i class="ri-arrow-right-line"></i>
            </span>
          </button>
        </div>
      </div>
    `;
    newsContainer.insertAdjacentHTML('beforeend', newsCard);
  });
  setTimeout(() => {
    document.querySelectorAll('.news-card').forEach(card => {
      card.classList.add('fade-in');
    });
  }, 100);
  setupReadMoreButtons();
}
function setupReadMoreButtons() {
  const readMoreButtons = document.querySelectorAll('.news-card button');
  readMoreButtons.forEach(button => {
    button.addEventListener('click', function() {
      const card = this.closest('.news-card');
      card.style.transform = 'scale(1.03)';
      setTimeout(() => {
        card.style.transform = 'scale(1)';
      }, 300);
      console.log('Navigating to article:', this.closest('.news-card').querySelector('h2').textContent);
    });
  });
}
// Animate cards on scroll
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add('fade-in');
observer.unobserve(entry.target);
}
});
}, {
threshold: 0.1
});
newsCards.forEach(card => {
observer.observe(card);
});
// Pagination functionality
const paginationItems = document.querySelectorAll('.pagination-item');
paginationItems.forEach(item => {
  item.addEventListener('click', function(e) {
    e.preventDefault();
    
    const pageText = this.textContent.trim();
    if (pageText === '« Previous') {
      if (currentPage > 1) {
        currentPage--;
        displayNews(currentPage);
        updatePaginationUI();
      }
    } else if (pageText === 'Next »') {
      const maxPages = Math.ceil(allNewsData.length / itemsPerPage);
      if (currentPage < maxPages) {
        currentPage++;
        displayNews(currentPage);
        updatePaginationUI();
      }
    } else if (!isNaN(pageText)) {
      currentPage = parseInt(pageText);
      displayNews(currentPage);
      updatePaginationUI();
    }
  });
});
function updatePaginationUI() {
  paginationItems.forEach(item => {
    const pageText = item.textContent.trim();
    if (!isNaN(pageText)) {
      if (parseInt(pageText) === currentPage) {
        item.classList.add('active', 'bg-primary', 'text-white');
        item.classList.remove('text-gray-600');
      } else {
        item.classList.remove('active', 'bg-primary', 'text-white');
        item.classList.add('text-gray-600');
      }
    }
  });
}
// Initial display
displayNews(currentPage);
updatePaginationUI();
});

