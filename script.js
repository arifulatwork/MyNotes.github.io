 // Data
    const data = {
      "products": [
        {
          "title": "MSI Laptop",
          "description": "MSI Thin 15 B7UC-004NL 15.6\" 144Hz R5 7535HS 16GB 512SSD RTX3050 W11",
          "links": [
            {
              "text": "Buy from Shop: RD Electronics, Liepaja",
              "url": "https://www.rdveikals.lv/products/lv/150/602664/sort/5/filter/0_0_0_0/Thin-15-B7UC-004NL-15.6-144Hz-R5-7535HS-16GB-512SSD-RTX3050-W11-portat%C4%ABvais-dators.html",
              "icon": "shopping_cart"
            },
            {
              "text": "MSI Official",
              "url": "https://www.msi.com/Laptop/Thin-A15-B7UX",
              "icon": "info"
            }
          ],
          "invoiceNumber": "#00004948"
        }
      ],
      "universities": {
        "latvia": {
          "description": "Latvian universities offer good value for international students:",
          "tags": ["Affordable", "English Programs", "EU Degrees", "Quality Education"],
          "summary": "Compared to Western Europe, Latvia provides quality education at lower costs, with all three being accredited institutions in the EU.",
          "institutions": [
            {
              "name": "Rezekne Academy of Technologies",
              "program": "Management Science",
              "tuition": "€3,290/year",
              "duration": "2 years",
              "language": "English",
              "pros": [
                "Lower cost than universities in Riga",
                "Practical focus",
                "Smaller class sizes"
              ],
              "cons": [
                "Smaller city (Rezekne)",
                "Less international recognition"
              ],
              "url": "https://rta.lv/study-programms/management-science"
            },
            {
              "name": "Daugavpils University",
              "program": "Computer Science",
              "tuition": "€2,500-3,000/year",
              "duration": "2 years",
              "language": "English",
              "pros": [
                "Technical program with good career prospects",
                "Affordable tuition",
                "Research opportunities"
              ],
              "cons": [
                "Located in Daugavpils (smaller city)",
                "More academically rigorous"
              ],
              "url": "https://du.lv/en/studies/study-programmes/academic-master-study-programmes/computer-science/"
            },
            {
              "name": "EKA University",
              "program": "Business Administration",
              "tuition": "€3,200/year",
              "duration": "2 years",
              "language": "English",
              "pros": [
                "Located in Riga (capital city)",
                "Business networking opportunities",
                "Practical business education"
              ],
              "cons": [
                "Higher cost of living in Riga",
                "More expensive than regional options"
              ],
              "url": "https://www.augstskola.lv/?parent=123&lng=eng"
            }
          ]
        },
        "portugal": {
          "description": "",
          "tags": [],
          "summary": "",
          "institutions": [
            {
              "name": "University of the Algarve",
              "program": "PhD in Information Engineering",
              "tuition": "National Students: 1500 Euros\nInternational Students: 4000 Euros\nApplication Rate: 100 Euros\nRegistration Fee and School Insurance: 275 Euros",
              "duration": "",
              "language": "",
              "pros": [],
              "cons": [],
              "url": "https://www.ualg.pt/en/curso/1566",
              "note": "The rate of this course can be paid in 10 installments: the first at registration, and the rest from October to June."
            }
          ]
        },
        "germany": {
          "description": "German universities are known for:",
          "tags": ["Low Tuition", "High Quality", "Strong Economy", "Research Focus"],
          "summary": "Germany offers excellent education with minimal tuition fees at public universities, though admission can be competitive.",
          "institutions": [
            {
              "name": "Technical University of Munich",
              "program": "Computer Science",
              "tuition": "€0-€3,000/year",
              "duration": "2 years",
              "language": "English/German",
              "pros": [
                "World-class reputation",
                "Low or no tuition fees",
                "Strong industry connections"
              ],
              "cons": [
                "Highly competitive admission",
                "Higher cost of living"
              ],
              "url": "https://www.tum.de/en/"
            },
            {
              "name": "University of Freiburg",
              "program": "Renewable Energy",
              "tuition": "€1,500/semester",
              "duration": "2 years",
              "language": "English",
              "pros": [
                "Specialized programs",
                "Beautiful location",
                "Strong research focus"
              ],
              "cons": [
                "Smaller city",
                "Limited English programs"
              ],
              "url": "https://www.uni-freiburg.de/"
            }
          ]
        },
        "france": {
          "description": "French higher education offers:",
          "tags": ["Cultural Experience", "Affordable Tuition", "Grandes Écoles", "EU Location"],
          "summary": "France has a mix of public universities and prestigious Grandes Écoles, with relatively low tuition fees but higher living costs in cities like Paris.",
          "institutions": [
            {
              "name": "Sorbonne University",
              "program": "Computer Science",
              "tuition": "€2,770/year",
              "duration": "2 years",
              "language": "French/English",
              "pros": [
                "Prestigious institution",
                "Affordable tuition",
                "Paris location"
              ],
              "cons": [
                "High cost of living in Paris",
                "French language required for many programs"
              ],
              "url": "https://www.sorbonne-universite.fr/en"
            }
          ]
        },
        "poland": {
          "description": "",
          "tags": [],
          "summary": "",
          "institutions": [
            {
              "name": "University of Warsaw",
              "program": "Economics",
              "tuition": "€2,000-3,000/year",
              "duration": "2 years",
              "language": "English",
              "pros": [
                "Top-ranked in Poland",
                "Affordable cost of living",
                "Wide range of English programs"
              ],
              "cons": [
                "Less international recognition than Western Europe",
                "Colder climate"
              ],
              "url": "https://en.uw.edu.pl/"
            }
          ]
        },
        "netherlands": {
          "description": "",
          "tags": [],
          "summary": "",
          "institutions": [
            {
              "name": "University of Amsterdam",
              "program": "Business Administration",
              "tuition": "€12,000-15,000/year",
              "duration": "1-2 years",
              "language": "English",
              "pros": [
                "Highly international environment",
                "Excellent reputation",
                "All programs in English"
              ],
              "cons": [
                "High tuition fees",
                "Competitive admission",
                "Expensive housing"
              ],
              "url": "https://www.uva.nl/"
            }
          ]
        }
      }
    };

    // Load products
    function loadProducts() {
      const productsContainer = document.getElementById('products');
      productsContainer.innerHTML = '';
      
      data.products.forEach(product => {
        const productHTML = `
          <div class="note-card">
            <div class="note-header">
              <h2 class="note-title">${product.title}</h2>
            </div>
            <div class="note-content">
              <p class="note-text">${product.description}</p>
              <div class="note-links">
                ${product.links.map(link => `
                  <a href="${link.url}" target="_blank" class="note-link">
                    <span class="material-icons">${link.icon}</span>
                    ${link.text}
                  </a>
                `).join('')}
              </div>
              ${product.invoiceNumber ? `
                <div class="invoice-number" style="margin-top: 10px; font-weight: bold;">
                  Invoice Number: ${product.invoiceNumber}
                </div>
              ` : ''}
            </div>
          </div>
        `;
        productsContainer.innerHTML += productHTML;
      });
    }

    // Load universities for a country
    function loadUniversities(countryId) {
      const countryData = data.universities[countryId];
      const countryContainer = document.getElementById(countryId);
      countryContainer.innerHTML = '';
      
      if (!countryData) return;
      
      let universitiesHTML = `
        <div class="compare-grid">
          ${countryData.institutions.map(uni => `
            <div class="compare-card">
              <h3 class="uni-name">${uni.name}</h3>
              <div class="uni-detail"><strong>Program:</strong> ${uni.program}</div>
              ${uni.tuition ? `<div class="uni-detail"><strong>Tuition:</strong> ${uni.tuition}</div>` : ''}
              ${uni.duration ? `<div class="uni-detail"><strong>Duration:</strong> ${uni.duration}</div>` : ''}
              ${uni.language ? `<div class="uni-detail"><strong>Language:</strong> ${uni.language}</div>` : ''}
              
              ${uni.pros.length > 0 || uni.cons.length > 0 ? `
                <div class="pros-cons">
                  ${uni.pros.length > 0 ? `
                    <div class="pros">
                      <span class="material-icons" style="font-size: 1rem; vertical-align: middle;">thumb_up</span>
                      <strong>Pros:</strong>
                      <ul>
                        ${uni.pros.map(pro => `<li>${pro}</li>`).join('')}
                      </ul>
                    </div>
                  ` : ''}
                  
                  ${uni.cons.length > 0 ? `
                    <div class="cons">
                      <span class="material-icons" style="font-size: 1rem; vertical-align: middle;">thumb_down</span>
                      <strong>Cons:</strong>
                      <ul>
                        ${uni.cons.map(con => `<li>${con}</li>`).join('')}
                      </ul>
                    </div>
                  ` : ''}
                </div>
              ` : ''}
              
              ${uni.url ? `
                <a href="${uni.url}" target="_blank" class="note-link" style="margin-top: 12px; display: inline-block;">
                  <span class="material-icons">school</span>
                  ${uni.program ? 'Program Details' : 'University Website'}
                </a>
              ` : ''}
              
              ${uni.note ? `
                <div class="uni-detail" style="margin-top: 8px; font-style: italic;">
                  ${uni.note}
                </div>
              ` : ''}
            </div>
          `).join('')}
        </div>
      `;
      
      if (countryData.description || countryData.tags.length > 0 || countryData.summary) {
        universitiesHTML += `
          <div style="margin-top: 24px; background-color: rgba(3, 218, 198, 0.1); padding: 16px; border-radius: 8px;">
            ${countryData.description ? `<h3 style="margin-top: 0; color: var(--primary-color);">Why ${countryId.charAt(0).toUpperCase() + countryId.slice(1)}?</h3>` : ''}
            ${countryData.description ? `<p>${countryData.description}</p>` : ''}
            ${countryData.tags.length > 0 ? `
              <div>
                ${countryData.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
              </div>
            ` : ''}
            ${countryData.summary ? `<p style="margin-bottom: 0;">${countryData.summary}</p>` : ''}
          </div>
        `;
      }
      
      countryContainer.innerHTML = universitiesHTML;
    }

    // Load all university data
    function loadAllUniversities() {
      Object.keys(data.universities).forEach(country => {
        loadUniversities(country);
      });
    }

    // Tab functions
    function openTab(tabId) {
      // Hide all tab contents
      const tabContents = document.getElementsByClassName('tab-content');
      for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove('active');
      }
      
      // Remove active class from all tabs
      const tabs = document.getElementsByClassName('tab');
      for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active');
      }
      
      // Show the selected tab content and mark tab as active
      document.getElementById(tabId).classList.add('active');
      event.currentTarget.classList.add('active');
    }
    
    function openCountry(countryId) {
      // Hide all country contents
      const countryContents = document.getElementsByClassName('country-content');
      for (let i = 0; i < countryContents.length; i++) {
        countryContents[i].classList.remove('active');
      }
      
      // Remove active class from all country tabs
      const countryTabs = document.getElementsByClassName('country-tab');
      for (let i = 0; i < countryTabs.length; i++) {
        countryTabs[i].classList.remove('active');
      }
      
      // Show the selected country content and mark tab as active
      document.getElementById(countryId).classList.add('active');
      event.currentTarget.classList.add('active');
    }

    // Initialize the page
    document.addEventListener('DOMContentLoaded', function() {
      loadProducts();
      loadAllUniversities();
    });