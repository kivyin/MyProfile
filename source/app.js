console.log("hello world");


Vue.component('nav-item', {
    props: ['nav'],
    template: '<li class="nav-item"><a class="nav-link" :class="{nav.id==0 ? brandClass}" :href="nav.link">{{nav.text}}</a></li>'
})

var app = new Vue({
    el: '#app',
    data: {
        message: '//Created by Kevin Twitty 6/10/2021 (function(){console.log("Hello World!");})();',
        brandClass: 'navbar-brand',
        name: "Kevin Twitty",
        birthDate: "6/29/1976",
        nav: [
            { id: 0, link: 'index.html', text: 'Kevin Twitty' },
            { id: 1, link: 'skills.html', text: 'Skills' },
            { id: 2, link: 'exp.html', text: 'Experience' },
            { id: 3, link: 'hobbies.html', text: 'Hobbies' },
            { id: 4, link: 'notebook.html', text: 'Notebook' },
            { id: 5, link: 'version.html', text: 'Version' }
        ],
        skills: [
            { name: "HTML", rating: .8, url: "#HTML", shortDescription: "Used on all Service Portal projects" },
            { name: "CSS", rating: .7 },
            { name: "JavaScript", rating: .75 },
            { name: "Angularjs", rating: .8 },
            { name: "Vuejs", rating: .6 },
            { name: "MSSQL", rating: .7 },
            { name: ".NET 3.5", rating: .6 },
            { name: "ServiceNow", rating: .8 },
            { name: "PowerShell", rating: .3 },
            { name: "Windows Server 2019", rating: .6 },
            { name: "Ubuntu", rating: .3 },
            { name: "NodeJS", rating: .5 },
        ],
        versionList: [
            { date: "", number: "1.0", notes: "Initial Build -- Just Layout and some data." },
            { date: "", number: "1.1", notes: "Adding Style -- Bootstrap and Hello World Javascript!" },
            { date: "", number: "1.2", notes: "Starting Logic -- Added vuejs for Nav!" }
        ]
    },
    methods: {
        //Method used to add the Active flag if the current page matches the Page in the nav array.
        isActivePage(page) {
            var path = window.location.pathname;
            var currentPage = path.split("/").pop();
            //console.log(currentPage);
            if (page == currentPage) {
                return true;
            }
            return false;

        }

    }
})