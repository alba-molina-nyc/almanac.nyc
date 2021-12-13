// Variables and Constants

let resourceData;
let userInput;


const BASE_URL = 'https://data.cityofnewyork.us/resource/pqg4-dm6b.json';


// Cached Element References


const $resourcename = $('#name');
const $url = $('#url');
const $address1 = $('#address1');
const $input = $('input[type="text"]');

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

    $('form').on('submit', handleGetData);
    function handleGetData(event) {
        event.preventDefault();
           // calling preventDefault() on a 'submit' event will prevent a page refresh  
        userInput = $input.val();
$.ajax(`${BASE_URL}?description=` + userInput).then(
      (data) => {
          resourceData = data;
          render();
          
       console.log(data);
      },
      (error) => {
       console.log('bad request: ', error);
      }
    );
    }

