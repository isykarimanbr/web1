const smartphones = [
            {
                name: "iPhone 15 Pro Max",
                image: "https://ibox.co.id/_next/image?url=https%3A%2F%2Fcdnpro.eraspace.com%2Fmedia%2Fcatalog%2Fproduct%2Fa%2Fp%2Fapple_iphone_15_pro_max_natural_titanium_1_1_2.jpg&w=1920&q=45",
                specs: {
                    display: '6.7" Super Retina XDR OLED',
                    processor: "A17 Pro chip",
                    camera: "Triple 48MP system",
                    battery: "Up to 29 hours video playback",
                    storage: "Up to 1TB"
                }
            },
            {
                name: "Samsung Galaxy S24 Ultra",
                image: "https://m.media-amazon.com/images/I/51EldjH4K8L._AC_SX522_.jpg",
                specs: {
                    display: '6.8" QHD+ Dynamic AMOLED 2X',
                    processor: "Snapdragon 8 Gen 3",
                    camera: "Quad 200MP system",
                    battery: "5000mAh",
                    storage: "Up to 1TB"
                }
            },
            {
                name: "Google Pixel 8 Pro",
                image: "https://i5.walmartimages.com/seo/Google-Pixel-Pixel-8-Pro-128GB-6-7-5G-Fully-Unlocked-Procelain_e7833cf8-623a-4b24-b379-9279e601019d.72aa46bc524f3fa4e3624404f08278b4.jpeg",
                specs: {
                    display: '6.7" QHD+ LTPO OLED',
                    processor: "Google Tensor G3",
                    camera: "Triple 50MP system",
                    battery: "5050mAh",
                    storage: "Up to 512GB"
                }
            },
            {
                name: "OnePlus 12",
                image: "https://p-id.ipricegroup.com/uploaded_b8cd79b86e0ba4dd89c9ebfbd22de1aa5cb19aac.jpg",
                specs: {
                    display: '6.82" QHD+ LTPO AMOLED',
                    processor: "Snapdragon 8 Gen 3",
                    camera: "Triple 50MP system",
                    battery: "5400mAh",
                    storage: "Up to 512GB"
                }
            },
            // Added additional smartphones
        ];

        function smartphoneCard(smartphone) {
            const col = document.createElement('div');
            col.className = 'col mb-4';
            col.innerHTML = `
                <div class="card shadow-sm pt-2">
                    <img src="${smartphone.image}" class="card-img-top" alt="${smartphone.name}">
                    <div class="card-body">
                        <h5 class="card-title">${smartphone.name}</h5>
                        <p class="card-text">Discover the latest features and specifications of the ${smartphone.name}.</p>
                        <details class="btn btn-primary" id="details-${smartphone.name}">
                            <summary>View Details</summary>
                            <table class="table-sm">
                                <tbody>
                                    ${Object.entries(smartphone.specs).map(([key, value]) => `
                                        <tr>
                                            <th scope="row">${key.charAt(0).toUpperCase() + key.slice(1)}</th>
                                            <th scope="row">:</th>
                                            <td>${value}</td>
                                        </tr>
                                    `).join('')}
                                </tbody>
                            </table>
                        </details>
                    </div>
                    </div>
                </div>
            `;
            return col;
        }

        function renderSmartphones(smartphones) {
            const container = document.getElementById('smartphone-list');
            container.innerHTML = '';
            smartphones.forEach(smartphone => {
                container.appendChild(smartphoneCard(smartphone));
            });
        }

        // Initial render list of smartphones
        renderSmartphones(smartphones);

        // Search functionality
        document.getElementById('search').addEventListener('input', (e) => {
            const filteredSmartphones = smartphones.filter(smartphone => 
                smartphone.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
                Object.values(smartphone.specs).some(spec => 
                    spec.toLowerCase().includes(e.target.value.toLowerCase())
                )
            );

            const alertContainer = document.getElementById('alert-container');
            if (filteredSmartphones.length === 0) {
                alertContainer.innerHTML = `
                    <div class="alert alert-warning fade show" role="alert">
                        <strong>Sorry, no smartphones match your search 😞</strong>
                    </div>
                `;
            } else {
                alertContainer.innerHTML = '';
            }

            renderSmartphones(filteredSmartphones);
        });