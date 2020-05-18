(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        "under-development":    {url:"$H/m/under-development.html",router:1},
        "panel-main":  	        {url:"$H/m/panel-main.html",router:1},
        "form-field":  	        {url:"$H/m/form-field.html",router:1},
        "form-logic":  	        {url:"$H/m/form-logic.html",router:1},
        "hans-scoring-data":    {url:"$H/m/hans-scoring-data.html",Table:"demo-2020042001",form_module:"hans-scoring-form",router:1},
        "hans-scoring-form":    {url:"$H/m/hans-scoring-form.html",Table:"demo-2020042001"},
        "phq-9-english-data":   {url:"$H/m/phq-9-english-data.html",Table:"demo-2020051801",form_module:"phq-9-english-form",router:1},
        "phq-9-english-form":   {url:"$H/m/phq-9-english-form.html",Table:"demo-2020051801"},

        
    }
    for(p in modules){
        $vm.module_list[p]=modules[p]; 
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //-------------------------------------------------------------------------------------
})();
