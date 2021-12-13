// Variables and Constants

let resourceData;

const BASE_URL = 'https://data.cityofnewyork.us/resource/pqg4-dm6b.json';

const $organizationname = $('#organizationname');

// Cached Element References

// Event Listeners

// Functions
    function showResources() {
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
                        <a target="_blank" href="${resource.url}">${resource.organizationname} Website </a>
                        <p>${resource.address1}</p>
                    </span>
                  </div>
                </div>
              </div>`;
            });
    
            $('main').html(html);
        }



        // -------
        // -----

 function searchOrganizationName() {
     let chosenOrganizationName = $organizationname.val();
    $.ajax(`${BASE_URL}?organizationname=${chosenOrganizationName}`).then((data) => {
        console.log(data + 'data for searchorgname works');
    }, (error) => {
        console.log('bad request', error);
    }
    )

 }