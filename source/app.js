console.log("hello world");

Vue.component('nav-item', {
    props: ['nav'],
    template: '<li class="nav-item"><a class="nav-link" :class="{nav.id==0 ? brandClass}" :href="nav.link">{{nav.text}}</a></li>'
})

var app = new Vue({
    el: '#app',
    data: {
        message: '\n//Created by Kevin Twitty 6/10/2021 \n (function(){ \n console.log("Hello World!"); \n })();',
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
            { name: "ServiceNow", rating: .8 },
            { name: "HTML", rating: .8},
            { name: "XML", rating: .6},
            { name: "SOAP / REST", rating: .6},
            { name: "CSS", rating: .7 },
            { name: "Bootstrap", rating: .7},
            { name: "MS Office", rating: .8},
            { name: "MS Access", rating: .7},
            { name: "VBA", rating: .7},
            { name: "SQL", rating: .7},
            { name: "C#", rating: .2 },
            { name: ".NET 3.5", rating: .6 },
            { name: "JavaScript", rating: .75 },
            { name: "Angularjs", rating: .8 },
            { name: "Vuejs", rating: .6 },
            { name: "MS SQL", rating: .7 },
            { name: "PowerShell", rating: .3 },
            { name: "Windows Server 2019", rating: .6 },
            { name: "Ubuntu", rating: .3 },
            { name: "NodeJS", rating: .5 }
        ],
        versionList: [
            { date: "2/2022", number: "1.0", notes: ["Initial Build -- Just Layout and some data."] },
            { date: "2/2022", number: "1.1", notes: ["Adding Style -- Bootstrap and Hello World Javascript!"] },
            { date: "2/2022", number: "1.2", notes: ["Starting Logic -- Added vuejs for Nav!"] },
            { date: "3/2022", number: "1.3", notes: ["Added data stucture for Naviation, Experience, skills, and version details "] },
            { date: "3/2022", number: "1.4", notes: ["Additional Styling and Footers"] },
            { date: "4/2022", number: "1.5", notes: ["Added Vuejs logic for experiance filter", "Added Hobbies data", "Broke out Version Notes"] },
        ],
        expericenceFilters: [],
        experience: [
            {
                title: "Application Engineer", company: "DaVita", start: "2015", end: "Present", items: [
                    {
                        description: "Primary responsibilities include develop ServiceNow Import sets, transform maps, update sets, Workflows, Metrics, UI actions, Business Rules, script includes, etc… All using JavaScript code.",
                        skills: ["ServiceNow", "JavaScript"], images: []
                    },
                    {
                        description: "Created and Managed custom Service portal for ITSM Reporting and Analytics Team integration with PowerShell and Tableau.",
                        skills: ["ServiceNow", "JavaScript", "Bootstrap"], images: []
                    },
                    {
                        description: "Created and Managed custom Service portal for CWOW project",
                        skills: ["ServiceNow", "JavaScript", "Bootstrap"], images: []
                    },
                    {
                        description: "Integrated a wide variety of systems with ServiceNow, including CTI phone Integration, Perspectum, SkyHigh edge encryption, JIRA, vCenter, Active Directory",
                        skills: ["ServiceNow", "JavaScript"], images: []
                    },
                    {
                        description: "Implemented Single Sign on Configuration within ServiceNow",
                        skills: ["ServiceNow", "JavaScript"], images: []
                    },
                    {
                        description: "Configured Rest and scripted Rest APIs with Jenkins Morpheus for DevOps Deployments.",
                        skills: ["ServiceNow", "JavaScript"], images: []
                    },
                    {
                        description: "Managed Implementation of Virtual Agent Chat.",
                        skills: ["ServiceNow", "JavaScript"], images: []
                    },
                    {
                        description: "Managed all Service Now Instance upgrades",
                        skills: ["ServiceNow", "JavaScript"], images: []
                    },
                    {
                        description: "Helped Manage and Maintain CMDB using Manual file uploads and other Data sources.",
                        skills: ["ServiceNow", "JavaScript"], images: []
                    },
                    {
                        description: "Administrator of ServiceNow Users, User groups, roles, Configuration Items, and Business Services",
                        skills: ["ServiceNow", "JavaScript"], images: []
                    }
                ]
            },
            {
                title: "Lead Application Developer", company: "DaVita", start: "2009", end: "2015", items: [
                    {
                        description: "Primary responsibilities include design, development, and automation of reports for wide variety of different teams via SSIS, SQL, MS Access, Excel, and Crystal Reports",
                        skills: ["ServiceNow", "MSSQL"], images: []
                    },
                    {
                        description: "Developed and maintained reporting website for delivery via company intranet ASP.net VB.net.",
                        skills: ["ServiceNow", "MSSQL"], images: []
                    },
                    {
                        description: "Developed user account attestation website ASP.net C#.net",
                        skills: ["ServiceNow", "MSSQL"], images: []
                    },
                    {
                        description: "Developed and implemented software development life cycle for teams unique environment",
                        skills: ["ServiceNow", "MSSQL"], images: []
                    },
                    {
                        description: "Lead Team on QA process and standardization",
                        skills: ["ServiceNow", "MSSQL"], images: []
                    },
                    {
                        description: "Trouble shoot and improved query performance for production servers",
                        skills: ["ServiceNow", "MSSQL"], images: []
                    }
                ]
            },
            {
                title: "Helpdesk Analyst", company: "DaVita", start: "2007", end: "2009", items: [
                    {
                        description: "Primary responsibilities provide technical support on hardware and software issues via Phone and email.",
                        skills: [], images: []
                    },
                    {
                        description: "Developed automated reports via VBA and MS Access to identify call trends for call reduction.",
                        skills: [], images: []
                    },
                    {
                        description: "Developed Root Cause software for data review, classification, and entry via VBA Microsoft Access.",
                        skills: [], images: []
                    },
                    {
                        description: "Developed asset tracking database for IT Teams to monitor Hardware assigned to Teammates",
                        skills: [], images: []
                    },
                ]
            }
            /* Example of adding a new job
            {title: "Helpdesk Analyst", company: "DaVita", start: "2007", end: "2009", items: [
                {description: "", 
                skills: [], images: []}
            ]}*/
        ],
        hobbies: [
            { name: "Chess", description: "Highest rank 2300", images: [] },
            { name: "Martial Arts", description: "Karate, KickBoxing, Kungfu", images: [] },
            { name: "Computers / Programming", description: "Custome PC builds, Web Development, Database Development", images: [] },
            { name: "Electronics", description: "Home and Car Audio, Building and Repairing, Raspberry Pi Projects", images: []},
            { name: "Gaming", description: "PC and Console", images: [] },
            { name: "Excercising", description: "Nature and Architecture", images: [] },
            { name: "Reading", description: "Technical Books", images: []},
            { name: "Music", description: "Playing Piano", images: [] },
            { name: "Movies", description: "Comedies, SciFi, Some Horror", images: [] }
        ],
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

        },
        updateFilter(event) {
            console.log("updateFilter " + event.target.checked + ' ' + event.target.value);
            if (this.expericenceFilters.includes(event.target.value)) {
                this.expericenceFilters.splice(this.expericenceFilters.indexOf(event.target.value), 1);
            } else {
                this.expericenceFilters.push(event.target.value);
            }

            console.log(this.expericenceFilters);
        }
    },
    computed: {
        filteredExperience() {
            //console.log("updateFilter " + event.target.checked + ' ' + event.target.value);
            let expArry;
            if (this.expericenceFilters.length == 0) {
                expArry = this.experience;
            } else {
                let filteredExpList = this.experience.filter(job => {
                    return job.items.some(item => {
                        return item.skills.some(skill => this.expericenceFilters.includes(skill));
                    });
                });
                console.log(JSON.stringify(filteredExpList));
                expArry = filteredExpList;
            }
            return expArry;
        },
        sortedSkills() {
            return this.skills.sort((a, b) => {
              if (a.rating > b.rating) return -1;
              if (a.rating < b.rating) return 1;
              return 0;
            });
          }
    }
})