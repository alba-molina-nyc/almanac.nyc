// Variables and Constants

let resourceData;

let allData;

let allOrganizationNames = [];

const BASE_URL = 'https://data.cityofnewyork.us/resource/pqg4-dm6b.json';

const $search_value = $('#myInput')


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

   


const $myInput = $('myInput');        

$myInput.on('keyup', searchData);
        
function searchData() {
    let search_value = $myInput;
    $.ajax(`${BASE_URL}?organizationname=${search_value}`).then(function(data) {
        resourceData = data;
        console.log(data)
        render();
    }, function(error) {
        console.log(error);
    });
}

