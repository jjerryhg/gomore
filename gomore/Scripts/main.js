function myFunction() {
    var x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    };
}
function myFunction1() {
    var x = document.getElementById("password1");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    };
}
function myFunction2() {
    var x = document.getElementById("password2");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    };
}
function clearInputs() {
    var inputs = document.querySelectorAll('form input')

    inputs.forEach(function (input) {
        input.value = '';
    });
}
function resetpwd() {
    var inputField = document.getElementById("password");

    var currentType = inputField.type;

    if (currentType === 'text') {
        inputField.type = 'password';
    }
}
function resetpwd1() {
    var inputField = document.getElementById("password1");

    var currentType = inputField.type;

    if (currentType === 'text') {
        inputField.type = 'password';
    }
}
function resetpwd2() {
    var inputField = document.getElementById("password2");

    var currentType = inputField.type;

    if (currentType === 'text') {
        inputField.type = 'password';
    }
}

// toggle topleft nav to open and close
function topleftmenu() {
    var width = document.getElementById("toggle-topleft-wrapper").style.width;
    if (width === "0px" || width == "") {
        document.getElementById("toggle-topleft-wrapper").style.width = "200px";
        $('.topleft-menu-btn').toggleClass('open');
    }
    else {
        document.getElementById("toggle-topleft-sidenav").style.width = "0px";
        $('.topleft-menu-btn').toggleClass('open');
    }
}
function closetopleftmenu() {
    var width = document.getElementById("toggle-topleft-wrapper").style.width;
    if (width === "200px" || width == "") {
        document.getElementById("toggle-topleft-wrapper").style.width = "0px";
        $('.toggle-topleft-menu-btn').toggleClass('open');
    }
    else {
        document.getElementById("toggle-topleft-sidenav").style.width = "0px";
        $('.topleft-menu-btn').toggleClass('open');
    }
}

// toogle topright nav to open and close
function toprightmenu() {
    var width = document.getElementById("toggle-topright-wrapper").style.width;
    if (width === "0px" || width == "") {
        document.getElementById("toggle-topright-wrapper").style.width = "185px";
        $('.toggle-topright-menu-btn').toggleClass('open');
    }
    else {
        document.getElementById("toggle-topright-wrapper").style.width = "0px";
        $('.toggle-topright-menu-btn').toggleClass('open');
    }
}
function closetoprightmenu() {
    var width = document.getElementById("toggle-topright-wrapper").style.width;
    if (width === "185px" || width == "") {
        document.getElementById("toggle-topright-wrapper").style.width = "0px";
        $('.toggle-topright-menu-btn').toggleClass('open');
    }
    else {
        document.getElementById("toggle-topright-wrapper").style.width = "0px";
        $('.toggle-topright-menu-btn').toggleClass('open');
    }
}


// toggle dropdown button 
var currentdropbtn = ""

function mydropFunction(mode) {
    document.getElementById(mode).classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.topleft-sidebar-dropbtn')) {
        var dropdowns = document.getElementsByClassName(currentdropbtn);
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

// To show guide info box on click
var guide = ""

function openguide(mode) {
    if (guide !== "" && guide !== mode) document.getElementById(guide).className = "guide-wrapper";
    if (document.getElementById(mode).className == "guide-wrapper-shown") {
        document.getElementById(mode).className = "guide-wrapper";
    }
    else {
        guide = mode;
        document.getElementById(mode).className = "guide-wrapper-shown";
    }
}



//Function to hide table info
var currentId = ""

function toggleTable(mode) {
    if (currentId !== "" && currentId !== mode) document.getElementById(currentId).className = "table-info-hidden";
    if (document.getElementById(mode).className == "table-info") {
        document.getElementById(mode).className = "table-info-hidden";
    }
    else {
        currentId = mode;
        document.getElementById(mode).className = "table-info";
    }
}

// Toggle slide menu sidebar
// function openSlideMenu() {
//   document.getElementById('menu').style.width = '250px';
//   document.getElementById('content').style.marginLeft = '250px';
// }

// function closeSlideMenu() {
//   document.getElementById('menu').style.width = '0px';
//   document.getElementById('content').style.marginLeft = '0px';
// }

function toggleSlideMenu() {
    var menu = document.getElementById('menu');
    var content = document.getElementById('content');
    var sidebar = document.getElementById('sidebar');

    // Check if the menu is currently open
    if (menu.style.width === '250px') {
        // If open, close the menu
        menu.style.width = '0px';
        content.style.marginLeft = '50px';
        sidebar.style.marginLeft = '0px';
        menu.style.opacity = '0';
    } else {
        // If closed, open the menu
        menu.style.width = '250px';
        content.style.marginLeft = '260px';
        sidebar.style.marginLeft = '250px';
        menu.style.opacity = '1';

        menu.style.transition = 'width 0.5s ease, opacity 0.5s ease';
        content.style.transition = 'margin-left 0.5s ease';
        sidebar.style.transition = 'margin-left 0.5s ease';
    }
}

function togglerSlideMenu() {
    var menu = document.getElementById('nav-content');
    var content = document.getElementById('content');
    var sidebar = document.getElementById('nav-bar');

    // Check if the menu is currently open
    if (menu.style.width === '256px') {
        // If open, close the menu
        menu.style.width = '80px';
        content.style.marginLeft = '85px';
        sidebar.style.marginLeft = '0';
    } else {
        // If closed, open the menu
        menu.style.width = '256px';
        content.style.marginLeft = '261px';
        sidebar.style.marginLeft = '0px';
    }
}

// Get file input element
let fileInput = document.getElementById('formFile');
let span = document.getElementById('fileName');
// Fires on file upload
fileInput.addEventListener('change', function (event) {

    // Get file name
    let fileName = fileInput.files[0].name;

    // Update file name in span
    span.innerText = fileName;
});

function filterSearchFunction() {
    // Declare variables
    var input, filter, table, tr, td, i, j, txtValue;
    input = document.getElementById("search-input");
    filter = input.value.toUpperCase();
    table = document.getElementById("search-table");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows starting from index 1 (skip thead)
    for (i = 1; i < tr.length; i++) {
        // Loop through all cells in the current row
        for (j = 0; j < tr[i].cells.length; j++) {
            td = tr[i].cells[j];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    // If the search query is found, show the row and break the inner loop
                    tr[i].style.display = "";
                    break;
                } else {
                    // If the search query is not found in any cell, hide the row
                    tr[i].style.display = "none";
                }
            }
        }
    }
}

// Toggle show and hide for sidebar component
document.addEventListener('DOMContentLoaded', function () {
    var myDiv = document.getElementById('upload');
    var toggleBtn = document.getElementById('toggleUpload');
    var closeBtn = document.getElementById('closeUpload');

    function toggleUpload() {
        // Toggle the "hidden" class to hide or show the div
        myDiv.classList.toggle('hidden');

        // You can also update the server-side model property here using AJAX
        // Example: UpdateIsParameterHidden(!@Model.IsParameterHidden);
    }

    // Add a click event listener to the toggle button
    toggleBtn.addEventListener('click', toggleUpload);

    // Add a click event listener to the close button
    closeBtn.addEventListener('click', toggleUpload);
});

document.addEventListener('DOMContentLoaded', function () {
    var myDiv2 = document.getElementById('info-mode');
    var toggleBtn2 = document.getElementById('toggleInfo');
    var closeBtn2 = document.getElementById('closeInfo');

    function toggleInfo() {
        // Toggle the "hidden" class to hide or show the div
        myDiv2.classList.toggle('hidden');

        // You can also update the server-side model property here using AJAX
        // Example: UpdateIsParameterHidden(!@Model.IsParameterHidden);
    }

    // Add a click event listener to the toggle button
    toggleBtn2.addEventListener('click', toggleInfo);

    // Add a click event listener to the close button
    closeBtn2.addEventListener('click', toggleInfo);
});

document.addEventListener('DOMContentLoaded', function () {
    var myDiv3 = document.getElementById('display');
    var toggleBtn3 = document.getElementById('toggleDisplay');
    var closeBtn3 = document.getElementById('closeDisplay');

    function toggleDisplay() {
        // Toggle the "hidden" class to hide or show the div
        myDiv3.classList.toggle('hidden');

        // You can also update the server-side model property here using AJAX
        // Example: UpdateIsParameterHidden(!@Model.IsParameterHidden);
    }

    // Add a click event listener to the toggle button
    toggleBtn3.addEventListener('click', toggleDisplay);

    // Add a click event listener to the close button
    closeBtn3.addEventListener('click', toggleDisplay);
});

document.addEventListener('DOMContentLoaded', function () {
    var myDiv4 = document.getElementById('search');
    var toggleBtn4 = document.getElementById('toggleSearch');
    var closeBtn4 = document.getElementById('closeSearch');

    function toggleSearch() {
        // Toggle the "hidden" class to hide or show the div
        myDiv4.classList.toggle('hidden');

        // You can also update the server-side model property here using AJAX
        // Example: UpdateIsParameterHidden(!@Model.IsParameterHidden);
    }

    // Add a click event listener to the toggle button
    toggleBtn4.addEventListener('click', toggleSearch);

    // Add a click event listener to the close button
    closeBtn4.addEventListener('click', toggleSearch);
});

document.addEventListener('DOMContentLoaded', function () {
    var myDiv5 = document.getElementById('status');
    var toggleBtn5 = document.getElementById('toggleStatus');
    var closeBtn5 = document.getElementById('closeStatus');

    function toggleStatus() {
        // Toggle the "hidden" class to hide or show the div
        myDiv5.classList.toggle('hidden');

        // You can also update the server-side model property here using AJAX
        // Example: UpdateIsParameterHidden(!@Model.IsParameterHidden);
    }

    // Add a click event listener to the toggle button
    toggleBtn5.addEventListener('click', toggleStatus);

    // Add a click event listener to the close button
    closeBtn5.addEventListener('click', toggleStatus);
});

document.addEventListener('DOMContentLoaded', function () {
    var myDiv6 = document.getElementById('parameter');
    var toggleBtn6 = document.getElementById('toggleParameter');
    var closeBtn6 = document.getElementById('closeParameter');

    function toggleParameter() {
        // Toggle the "hidden" class to hide or show the div
        myDiv6.classList.toggle('hidden');

        // You can also update the server-side model property here using AJAX
        // Example: UpdateIsParameterHidden(!@Model.IsParameterHidden);
    }

    // Add a click event listener to the toggle button
    toggleBtn6.addEventListener('click', toggleParameter);

    // Add a click event listener to the close button
    closeBtn6.addEventListener('click', toggleParameter);
});

function toggleTheme() {
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

    if (toggleSwitch.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}

// Upload Pagination
document.addEventListener("DOMContentLoaded", function () {
    const table = document.getElementById("upload-table");
    const rowsPerPage = 2; // Adjust this value based on the number of rows you want per page

    // Calculate the total number of pages
    const totalRows = table.tBodies[0].rows.length;
    const totalPages = Math.ceil(totalRows / rowsPerPage);

    // Initialize current page
    let currentPage = 1;

    function showPage(page) {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;

        // Hide all rows
        for (let i = 0; i < totalRows; i++) {
            table.tBodies[0].rows[i].style.display = "none";
        }

        // Show the rows for the current page
        for (let i = start; i < Math.min(end, totalRows); i++) {
            table.tBodies[0].rows[i].style.display = "";
        }
    }

    function updatePagination() {
        const paginationContainer = document.getElementById("Uploadpagination");
        paginationContainer.innerHTML = ""; // Clear existing pagination links

        // Previous button
        const previousButton = document.createElement("li");
        previousButton.className = "page-item";
        const previousLink = document.createElement("a");
        previousLink.className = "page-link";
        previousLink.href = "#";
        previousLink.textContent = "Previous";
        previousLink.addEventListener("click", function () {
            if (currentPage > 1) {
                currentPage--;
                showPage(currentPage);
            }
        });
        previousButton.appendChild(previousLink);
        paginationContainer.appendChild(previousButton);

        // Page buttons
        for (let i = 1; i <= totalPages; i++) {
            const pageButton = document.createElement("li");
            pageButton.className = "page-item";
            const pageLink = document.createElement("a");
            pageLink.className = "page-link";
            pageLink.href = "#";
            pageLink.textContent = i;
            pageLink.addEventListener("click", function () {
                currentPage = i;
                showPage(currentPage);
            });
            pageButton.appendChild(pageLink);
            paginationContainer.appendChild(pageButton);
        }

        // Next button
        const nextButton = document.createElement("li");
        nextButton.className = "page-item";
        const nextLink = document.createElement("a");
        nextLink.className = "page-link";
        nextLink.href = "#";
        nextLink.textContent = "Next";
        nextLink.addEventListener("click", function () {
            if (currentPage < totalPages) {
                currentPage++;
                showPage(currentPage);
            }
        });
        nextButton.appendChild(nextLink);
        paginationContainer.appendChild(nextButton);

        // Show the initial page
        showPage(currentPage);
    }

    // Initial setup
    updatePagination();
});

// Parameter Pagination
document.addEventListener("DOMContentLoaded", function () {
    const table = document.getElementById("parameter-table");
    const rowsPerPage = 2; // Adjust this value based on the number of rows you want per page

    // Calculate the total number of pages
    const totalRows = table.tBodies[0].rows.length;
    const totalPages = Math.ceil(totalRows / rowsPerPage);

    // Initialize current page
    let currentPage = 1;

    function showPage(page) {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;

        // Hide all rows
        for (let i = 0; i < totalRows; i++) {
            table.tBodies[0].rows[i].style.display = "none";
        }

        // Show the rows for the current page
        for (let i = start; i < Math.min(end, totalRows); i++) {
            table.tBodies[0].rows[i].style.display = "";
        }
    }

    function updatePagination() {
        const paginationContainer = document.getElementById("Parameterpagination");
        paginationContainer.innerHTML = ""; // Clear existing pagination links

        // Previous button
        const previousButton = document.createElement("li");
        previousButton.className = "page-item";
        const previousLink = document.createElement("a");
        previousLink.className = "page-link";
        previousLink.href = "#";
        previousLink.textContent = "Previous";
        previousLink.addEventListener("click", function () {
            if (currentPage > 1) {
                currentPage--;
                showPage(currentPage);
            }
        });
        previousButton.appendChild(previousLink);
        paginationContainer.appendChild(previousButton);

        // Page buttons
        for (let i = 1; i <= totalPages; i++) {
            const pageButton = document.createElement("li");
            pageButton.className = "page-item";
            const pageLink = document.createElement("a");
            pageLink.className = "page-link";
            pageLink.href = "#";
            pageLink.textContent = i;
            pageLink.addEventListener("click", function () {
                currentPage = i;
                showPage(currentPage);
            });
            pageButton.appendChild(pageLink);
            paginationContainer.appendChild(pageButton);
        }

        // Next button
        const nextButton = document.createElement("li");
        nextButton.className = "page-item";
        const nextLink = document.createElement("a");
        nextLink.className = "page-link";
        nextLink.href = "#";
        nextLink.textContent = "Next";
        nextLink.addEventListener("click", function () {
            if (currentPage < totalPages) {
                currentPage++;
                showPage(currentPage);
            }
        });
        nextButton.appendChild(nextLink);
        paginationContainer.appendChild(nextButton);

        // Show the initial page
        showPage(currentPage);
    }

    // Initial setup
    updatePagination();
});

// Info Pagination
document.addEventListener("DOMContentLoaded", function () {
    const table = document.getElementById("info-mode-table");
    const rowsPerPage = 2; // Adjust this value based on the number of rows you want per page

    // Calculate the total number of pages
    const totalRows = table.tBodies[0].rows.length;
    const totalPages = Math.ceil(totalRows / rowsPerPage);

    // Initialize current page
    let currentPage = 1;

    function showPage(page) {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;

        // Hide all rows
        for (let i = 0; i < totalRows; i++) {
            table.tBodies[0].rows[i].style.display = "none";
        }

        // Show the rows for the current page
        for (let i = start; i < Math.min(end, totalRows); i++) {
            table.tBodies[0].rows[i].style.display = "";
        }
    }

    function updatePagination() {
        const paginationContainer = document.getElementById("Infopagination");
        paginationContainer.innerHTML = ""; // Clear existing pagination links

        // Previous button
        const previousButton = document.createElement("li");
        previousButton.className = "page-item";
        const previousLink = document.createElement("a");
        previousLink.className = "page-link";
        previousLink.href = "#";
        previousLink.textContent = "Previous";
        previousLink.addEventListener("click", function () {
            if (currentPage > 1) {
                currentPage--;
                showPage(currentPage);
            }
        });
        previousButton.appendChild(previousLink);
        paginationContainer.appendChild(previousButton);

        // Page buttons
        for (let i = 1; i <= totalPages; i++) {
            const pageButton = document.createElement("li");
            pageButton.className = "page-item";
            const pageLink = document.createElement("a");
            pageLink.className = "page-link";
            pageLink.href = "#";
            pageLink.textContent = i;
            pageLink.addEventListener("click", function () {
                currentPage = i;
                showPage(currentPage);
            });
            pageButton.appendChild(pageLink);
            paginationContainer.appendChild(pageButton);
        }

        // Next button
        const nextButton = document.createElement("li");
        nextButton.className = "page-item";
        const nextLink = document.createElement("a");
        nextLink.className = "page-link";
        nextLink.href = "#";
        nextLink.textContent = "Next";
        nextLink.addEventListener("click", function () {
            if (currentPage < totalPages) {
                currentPage++;
                showPage(currentPage);
            }
        });
        nextButton.appendChild(nextLink);
        paginationContainer.appendChild(nextButton);

        // Show the initial page
        showPage(currentPage);
    }

    // Initial setup
    updatePagination();
});

// Search Pagination
document.addEventListener("DOMContentLoaded", function () {
    const table = document.getElementById("search-table");
    const rowsPerPage = 2; // Adjust this value based on the number of rows you want per page

    // Calculate the total number of pages
    const totalRows = table.tBodies[0].rows.length;
    const totalPages = Math.ceil(totalRows / rowsPerPage);

    // Initialize current page
    let currentPage = 1;

    function showPage(page) {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;

        // Hide all rows
        for (let i = 0; i < totalRows; i++) {
            table.tBodies[0].rows[i].style.display = "none";
        }

        // Show the rows for the current page
        for (let i = start; i < Math.min(end, totalRows); i++) {
            table.tBodies[0].rows[i].style.display = "";
        }
    }

    function updatePagination() {
        const paginationContainer = document.getElementById("Searchpagination");
        paginationContainer.innerHTML = ""; // Clear existing pagination links

        // Previous button
        const previousButton = document.createElement("li");
        previousButton.className = "page-item";
        const previousLink = document.createElement("a");
        previousLink.className = "page-link";
        previousLink.href = "#";
        previousLink.textContent = "Previous";
        previousLink.addEventListener("click", function () {
            if (currentPage > 1) {
                currentPage--;
                showPage(currentPage);
            }
        });
        previousButton.appendChild(previousLink);
        paginationContainer.appendChild(previousButton);

        // Page buttons
        for (let i = 1; i <= totalPages; i++) {
            const pageButton = document.createElement("li");
            pageButton.className = "page-item";
            const pageLink = document.createElement("a");
            pageLink.className = "page-link";
            pageLink.href = "#";
            pageLink.textContent = i;
            pageLink.addEventListener("click", function () {
                currentPage = i;
                showPage(currentPage);
            });
            pageButton.appendChild(pageLink);
            paginationContainer.appendChild(pageButton);
        }

        // Next button
        const nextButton = document.createElement("li");
        nextButton.className = "page-item";
        const nextLink = document.createElement("a");
        nextLink.className = "page-link";
        nextLink.href = "#";
        nextLink.textContent = "Next";
        nextLink.addEventListener("click", function () {
            if (currentPage < totalPages) {
                currentPage++;
                showPage(currentPage);
            }
        });
        nextButton.appendChild(nextLink);
        paginationContainer.appendChild(nextButton);

        // Show the initial page
        showPage(currentPage);
    }

    // Initial setup
    updatePagination();
});






