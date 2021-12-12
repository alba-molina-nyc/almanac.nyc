// Variables and Constants

let resourceData;

const BASE_URL = 'https://data.cityofnewyork.us/resource/pqg4-dm6b.json';

// Cached Element References


// Event Listeners

// Functions
    function getResourceData() {
        $.ajax(`${BASE_URL}`)
        .then(function(data) {
            resourceData = data;
            render();
        }, function(error) {
            console.log(error);
        });
    }
        function render() {
            const html = resourceData.map(function(resource) {
                return `<div class="row">
                <div class="col s12 m6" id="article">
                  <div class="card-panel teal" id="article1">
                    <span class="white-text"> <h4>${resource.organizationname}</h4>
                        <p>${resource.url}</p>
                        <p>${resource.address1}</p>
                    </span>
                  </div>
                </div>
              </div>`;
            });
    
            $('main').html(html);
        }


        function showResources() {
            let xhr = new XMLHttpRequest()

            xhr.open('GET', `${BASE_URL}`, true)

            xhr.onload = function() {
                if (xhr.status == 200) {
                    console.log('success')
                    let resources = JSON.parse(this.response)
                    console.log(resources)
                }
            }

            xhr.send()
        }
     
    