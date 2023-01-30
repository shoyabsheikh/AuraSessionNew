({
    // Your renderer method overrides go here
    // 
    // 1)  render
    render : function(component, helper){
        
        var ret = this.superRender();
        // do custom rendering here
        console.log(">> Inside render method");
        return ret;
    },
    
    // 2) rerender
    rerender :  function(component, helper){        
        this.superRerender();
        // do custom rerendering here
        console.log(">>> Inside re-render method");
    
	},
 
 // 3) afterRender
 
	 afterRender : function (component, helper) {
        this.superAfterRender();
        console.log(">>> Inside after-render method");
      // interact with the DOM here
     },
 
 // 4) unrender 

   unrender :  function(component, helper){        
        this.superUnrender();
        console.log(">>> Inside un-render method");         
    }
 })