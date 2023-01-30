({
	helperMethod : function() {
		
	},
    setMessage : function(component,message,whichOne) {
        console.log('--inside helper--whichOne = '+whichOne);
        
        if(whichOne=="button1"){
            component.set("v.greeting",message);	
        }else{
            component.set("v.tittle",message);
        }
        	
	},
})