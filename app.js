angular.module('erpApp', [])
.controller('MainCtrl', function($scope) {
  var vm = this;
  vm.tab = 'dashboard';
  vm.user = { name: 'Admin User', role: 'Administrator' };

  // Load from localStorage (simulating Oracle DB)
  var stored = localStorage.getItem('erp_papers');
  vm.papers = stored ? JSON.parse(stored) : [
    {id:1, course:'Database Management Systems', code:'CS301', semester:'Sem 5', year:2024, description:'End-semester examination paper covering SQL, normalization, transactions.'},
    {id:2, course:'Operating Systems', code:'CS302', semester:'Sem 5', year:2024, description:'OS concepts: scheduling, memory management, file systems.'},
    {id:3, course:'Data Structures and Algorithms', code:'CS201', semester:'Sem 3', year:2023, description:'Trees, graphs, dynamic programming, sorting algorithms.'},
    {id:4, course:'Computer Networks', code:'CS401', semester:'Sem 7', year:2024, description:'TCP/IP, routing protocols, network security basics.'},
    {id:5, course:'Software Engineering', code:'CS402', semester:'Sem 7', year:2023, description:'SDLC, Agile, design patterns, testing strategies.'},
    {id:6, course:'Machine Learning', code:'CS501', semester:'Sem 8', year:2024, description:'Supervised, unsupervised learning, neural networks.'},
    {id:7, course:'Web Technologies', code:'CS303', semester:'Sem 5', year:2024, description:'HTML5, CSS3, JavaScript, REST APIs, frameworks.'},
    {id:8, course:'Compiler Design', code:'CS403', semester:'Sem 7', year:2023, description:'Lexical analysis, parsing, code generation.'}
  ];

  vm.semesters = ['Sem 1','Sem 2','Sem 3','Sem 4','Sem 5','Sem 6','Sem 7','Sem 8'];
  vm.form = {};

  function persist(){ localStorage.setItem('erp_papers', JSON.stringify(vm.papers)); }

  vm.uniqueCourses = function(){ return [...new Set(vm.papers.map(p=>p.course))].length; };
  vm.uniqueSemesters = function(){ return [...new Set(vm.papers.map(p=>p.semester))].length; };

  vm.view = function(p){ alert('📄 Downloading: '+p.course+' ('+p.year+')\n\n[In production, this fetches PDF from Oracle BLOB / cloud storage]'); };

  vm.saveForm = function(){
    if(vm.form.id){
      var idx = vm.papers.findIndex(x=>x.id===vm.form.id);
      vm.papers[idx] = angular.copy(vm.form);
    } else {
      vm.form.id = vm.papers.length ? Math.max.apply(null, vm.papers.map(p=>p.id))+1 : 1;
      vm.papers.push(angular.copy(vm.form));
    }
    persist();
    vm.resetForm();
  };

  vm.edit = function(p){ vm.form = angular.copy(p); };
  vm.delete = function(p){
    if(confirm('Delete "'+p.course+'"?')){
      vm.papers = vm.papers.filter(x=>x.id!==p.id);
      persist();
    }
  };
  vm.resetForm = function(){ vm.form = {}; };
});
